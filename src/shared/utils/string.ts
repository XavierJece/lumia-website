interface SlugFyOptions {
  separator?: string
  lower?: boolean
  trim?: boolean
}

export function slugFy(text: string, options?: SlugFyOptions): string {
  const { separator = '-', lower = true, trim = true } = options || {}

  let result = text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9\s_-]/g, '')

  if (lower) result = result.toLowerCase()
  if (trim) result = result.trim()

  return result
    .replace(/[\s_-]+/g, separator)
    .replace(new RegExp(`^${separator}+|${separator}+$`, 'g'), '')
}
