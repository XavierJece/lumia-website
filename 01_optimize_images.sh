#!/bin/bash

# Target directory (defaults to current directory if no argument is passed)
PROJECT_DIR="${1:-.}"

# Verify dependencies are installed
if ! command -v jpegoptim &> /dev/null || ! command -v optipng &> /dev/null; then
    echo "Error: Required tools are missing."
    echo "Please install them first (e.g., 'brew install jpegoptim optipng' or 'sudo apt install jpegoptim optipng')."
    exit 1
fi

echo "Starting image optimization in: $PROJECT_DIR"
echo "------------------------------------------------"

# Helper function to reliably get file size in bytes across Mac/Linux
get_size() {
    wc -c < "$1" | tr -d ' '
}

# 1. Optimize JPEG images
echo "Scanning and optimizing JPEGs..."
find "$PROJECT_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" \) -print0 | while IFS= read -r -d '' img; do
    old_size=$(get_size "$img")
    
    # Compress: max 80% quality, strip all EXIF metadata for extra savings
    jpegoptim --max=80 --strip-all --quiet "$img"
    
    new_size=$(get_size "$img")
    saved=$(( old_size - new_size ))
    
    if [ "$saved" -gt 0 ]; then
        echo "[JPEG] $img | Saved: $(( saved / 1024 )) KB"
    fi
done

# 2. Optimize PNG images
echo "Scanning and optimizing PNGs..."
find "$PROJECT_DIR" -type f -iname "*.png" -print0 | while IFS= read -r -d '' img; do
    old_size=$(get_size "$img")
    
    # Compress: optimization level 2 (good balance of speed/size), strip metadata
    optipng -o2 -strip all -quiet "$img"
    
    new_size=$(get_size "$img")
    saved=$(( old_size - new_size ))
    
    if [ "$saved" -gt 0 ]; then
        echo "[PNG] $img | Saved: $(( saved / 1024 )) KB"
    fi
done

echo "------------------------------------------------"
echo "Optimization complete!"