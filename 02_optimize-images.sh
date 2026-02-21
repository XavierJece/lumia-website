#!/usr/bin/env bash

# -------------------------------------------------------------------
# optimize-images.sh – Recursively find and compress images in a folder
# Usage: ./optimize-images.sh [directory] [options]
# -------------------------------------------------------------------

set -euo pipefail  # strict mode: exit on error, undefined vars, pipefail

# Default values
TARGET_DIR="${1:-.}"               # directory to process (default: current)
QUALITY_JPEG=85                     # JPEG quality (1-100)
QUALITY_PNG=85                      # PNG quality (pngquant: 0-100, lower = smaller)
QUALITY_WEBP=80                      # WebP quality
BACKUP=false                         # create backups? (true/false)
DRY_RUN=false                        # show what would be done without doing it
VERBOSE=false                        # print extra info

# Color codes for pretty output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Help message
show_help() {
    cat << EOF
Usage: ${0##*/} [directory] [options]

Recursively find and compress image files (jpg, jpeg, png, gif, svg, webp)
to reduce website load time.

Options:
  -q, --quality JPEG:PNG:WEBP   Set quality for formats (default: 85:85:80)
  -b, --backup                   Create .bak copies before overwriting
  -d, --dry-run                  Only show what would be compressed
  -v, --verbose                  Show details for each file
  -h, --help                     Show this help message

Examples:
  ${0##*/} ./public/assets
  ${0##*/} -q 80:90:75 -b ./images
EOF
}

# Parse command line options
while [[ $# -gt 0 ]]; do
    case "$1" in
        -q|--quality)
            IFS=':' read -r JPEG_Q PNG_Q WEBP_Q <<< "$2"
            QUALITY_JPEG="${JPEG_Q:-$QUALITY_JPEG}"
            QUALITY_PNG="${PNG_Q:-$QUALITY_PNG}"
            QUALITY_WEBP="${WEBP_Q:-$QUALITY_WEBP}"
            shift 2
            ;;
        -b|--backup)
            BACKUP=true
            shift
            ;;
        -d|--dry-run)
            DRY_RUN=true
            shift
            ;;
        -v|--verbose)
            VERBOSE=true
            shift
            ;;
        -h|--help)
            show_help
            exit 0
            ;;
        -*)
            echo "Error: Unknown option $1"
            show_help
            exit 1
            ;;
        *)
            # First non-option argument is the target directory
            TARGET_DIR="$1"
            shift
            ;;
    esac
done

# Check if target directory exists
if [ ! -d "$TARGET_DIR" ]; then
    echo -e "${RED}Error: Directory '$TARGET_DIR' does not exist.${NC}"
    exit 1
fi

# Check for required compression tools
check_dependency() {
    if ! command -v "$1" &> /dev/null; then
        echo -e "${RED}Error: $1 is not installed.${NC}"
        echo "Please install it and try again."
        exit 1
    fi
}

check_dependency "jpegoptim"
check_dependency "pngquant"
check_dependency "gifsicle"
check_dependency "svgo"
check_dependency "cwebp"

# Statistics counters
total_original=0
total_compressed=0
file_count=0

# Function to print sizes in human‑readable format
human_size() {
    num="$1"
    if [ "$num" -lt 1024 ]; then
        echo "${num}B"
    elif [ "$num" -lt 1048576 ]; then
        echo "$((num / 1024))K"
    else
        echo "$((num / 1048576))M"
    fi
}

# Process a single file
process_file() {
    local file="$1"
    local ext="${file##*.}"
    ext=$(echo "$ext" | tr '[:upper:]' '[:lower:]')

    # Skip if extension not in our list (case-insensitive handled)
    case "$ext" in
        jpg|jpeg|png|gif|svg|webp) ;;
        *) return ;;
    esac

    # Get original size (bytes)
    if [ ! -r "$file" ]; then
        echo -e "${YELLOW}Warning: Cannot read $file, skipping.${NC}"
        return
    fi
    orig_size=$(stat -c %s "$file" 2>/dev/null || stat -f %z "$file" 2>/dev/null)
    if [ -z "$orig_size" ]; then
        echo -e "${YELLOW}Warning: Could not get size of $file, skipping.${NC}"
        return
    fi

    if [ "$DRY_RUN" = true ]; then
        echo -e "${GREEN}[DRY RUN]${NC} Would compress: $file ($(human_size $orig_size))"
        return
    fi

    # Backup if requested
    if [ "$BACKUP" = true ]; then
        cp "$file" "$file.bak"
    fi

    # Determine compression command
    local cmd=""
    case "$ext" in
        jpg|jpeg)
            cmd="jpegoptim --max=$QUALITY_JPEG --strip-all --all-progressive --stdout"
            ;;
        png)
            cmd="pngquant --quality=$QUALITY_PNG --speed=1 --force --output -"
            ;;
        gif)
            cmd="gifsicle --optimize=3 --batch"
            ;;
        svg)
            cmd="svgo --multipass -q -o -"
            ;;
        webp)
            cmd="cwebp -q $QUALITY_WEBP -o -"
            ;;
    esac

    # For commands that write to stdout, we need to capture and replace the file.
    # Some tools (gifsicle) support in‑place modification; we handle differently.
    if [ "$ext" = "gif" ]; then
        # gifsicle --batch works in‑place
        if $cmd "$file" 2>/dev/null; then
            new_size=$(stat -c %s "$file" 2>/dev/null || stat -f %z "$file" 2>/dev/null)
        else
            echo -e "${RED}Error compressing $file${NC}"
            return
        fi
    else
        # Other tools: read file, compress to temp, then replace if smaller
        tmpfile=$(mktemp)
        if $cmd "$file" > "$tmpfile" 2>/dev/null; then
            new_size=$(stat -c %s "$tmpfile" 2>/dev/null || stat -f %z "$tmpfile" 2>/dev/null)
            # Only replace if the compressed version is actually smaller
            if [ "$new_size" -lt "$orig_size" ]; then
                mv "$tmpfile" "$file"
            else
                # Keep original, discard compressed
                rm "$tmpfile"
                new_size=$orig_size
                if [ "$VERBOSE" = true ]; then
                    echo -e "${YELLOW}No gain: $file${NC}"
                fi
            fi
        else
            rm -f "$tmpfile"
            echo -e "${RED}Error compressing $file${NC}"
            return
        fi
    fi

    # Calculate savings
    saved=$((orig_size - new_size))
    total_original=$((total_original + orig_size))
    total_compressed=$((total_compressed + new_size))
    file_count=$((file_count + 1))

    if [ "$VERBOSE" = true ]; then
        orig_hr=$(human_size $orig_size)
        new_hr=$(human_size $new_size)
        pct=$(( 100 - (new_size * 100 / orig_size) ))
        echo -e "${GREEN}Compressed:${NC} $file"
        echo "  Original: $orig_hr, New: $new_hr, Saved: $pct%"
    fi
}

# Export function so find can use it in a subshell (if we used -exec bash -c)
export -f process_file
export QUALITY_JPEG QUALITY_PNG QUALITY_WEBP BACKUP DRY_RUN VERBOSE
export GREEN YELLOW RED NC

# Find all image files and process them
echo -e "${GREEN}Scanning $TARGET_DIR for images...${NC}"
find "$TARGET_DIR" -type f \( \
    -iname "*.jpg" -o \
    -iname "*.jpeg" -o \
    -iname "*.png" -o \
    -iname "*.gif" -o \
    -iname "*.svg" -o \
    -iname "*.webp" \) -print0 | while IFS= read -r -d '' file; do
    process_file "$file"
done

# Final summary
if [ "$DRY_RUN" = false ] && [ "$file_count" -gt 0 ]; then
    echo "----------------------------------------"
    echo -e "${GREEN}Summary:${NC}"
    echo "Files processed: $file_count"
    echo "Total original size: $(human_size $total_original)"
    echo "Total compressed size: $(human_size $total_compressed)"
    total_saved=$((total_original - total_compressed))
    total_pct=$(( 100 - (total_compressed * 100 / total_original) ))
    echo "Total saved: $(human_size $total_saved) ($total_pct%)"
elif [ "$DRY_RUN" = true ]; then
    echo "----------------------------------------"
    echo -e "${YELLOW}Dry run completed, no files were modified.${NC}"
else
    echo -e "${YELLOW}No image files found.${NC}"
fi