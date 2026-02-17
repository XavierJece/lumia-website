import fs from 'fs'
import path from 'path'

// Extensões de imagem suportadas (adicione mais se necessário)
const SUPPORTED_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.webp', '.gif']

/**
 * Retorna um array de URLs das imagens da solução encontradas em /public/solutions
 * seguindo o padrão: slug.ext, slug_01.ext, slug_02.ext, ...
 * @param slug - slug da solução
 * @returns Array de URLs relativas (ex: ['/solutions/meu-slug.png', '/solutions/meu-slug_01.png'])
 */
export function getSolutionImages(slug: string): string[] {
  const solutionsDir = path.join(process.cwd(), 'public', 'solutions')

  try {
    // Verifica se o diretório existe
    if (!fs.existsSync(solutionsDir)) {
      console.warn(`Diretório não encontrado: ${solutionsDir}`)
      return []
    }

    // Lê todos os arquivos do diretório
    const files = fs.readdirSync(solutionsDir)

    // Filtra arquivos que começam com o slug e têm extensão suportada
    const solutionFiles = files.filter((file) => {
      const ext = path.extname(file).toLowerCase()
      const baseName = path.basename(file, ext)
      return baseName.startsWith(slug) && SUPPORTED_EXTENSIONS.includes(ext)
    })

    // Ordena: primeiro a imagem sem número, depois as numeradas em ordem crescente
    solutionFiles.sort((a, b) => {
      const aBase = path.basename(a, path.extname(a))
      const bBase = path.basename(b, path.extname(b))

      // Extrai o número do sufixo (se houver)
      const aMatch = aBase.match(/_(\d+)$/)
      const bMatch = bBase.match(/_(\d+)$/)

      const aNum = aMatch ? parseInt(aMatch[1], 10) : -1
      const bNum = bMatch ? parseInt(bMatch[1], 10) : -1

      // A imagem sem número (sufixo -1) vem primeiro
      return aNum - bNum
    })

    // Retorna as URLs completas (caminho público)
    return solutionFiles.map((file) => `/solutions/${file}`)
  } catch (error) {
    console.error('Erro ao ler diretório de soluções:', error)
    return []
  }
}
