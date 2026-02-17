export function generateServiceMetadata(serviceTitle: string): {
  title: string
  openGraphTitle: string
} {
  const maxLength = 55

  let cleanTitle = serviceTitle
    .replace(/\s*[–-]\s*/g, ': ')
    .replace(/\s*\([^)]*\)/g, '')
    .trim()

  if (cleanTitle.length > maxLength) {
    const truncated = cleanTitle
      .substring(0, maxLength)
      .split(' ')
      .slice(0, -1)
      .join(' ')
    cleanTitle = truncated + '…'
  }

  // Garante que o título final não ultrapasse o limite (já com a marca)
  if (cleanTitle.length > maxLength + 5) {
    // margem pequena
    // Ajuste fino: remove palavras do meio se necessário
    // Por simplicidade, podemos truncar novamente
    cleanTitle = cleanTitle.substring(0, maxLength - 3) + '...'
  }

  return {
    title: cleanTitle,
    openGraphTitle: cleanTitle,
  }
}
