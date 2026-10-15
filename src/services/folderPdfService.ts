// Serviço para carregamento e renderização das páginas do PDF Institucional Engeluz
import folderPdfUrl from '@/assets/folder-inst.02-02.08-compactado-12bd7.pdf'

declare global {
  interface Window {
    pdfjsLib?: {
      GlobalWorkerOptions: {
        workerSrc: string
      }
      getDocument: (source: string | { url: string; data?: Uint8Array }) => {
        promise: Promise<{
          numPages: number
          getPage: (pageNumber: number) => Promise<{
            getViewport: (options: { scale: number }) => { width: number; height: number }
            render: (renderContext: {
              canvasContext: CanvasRenderingContext2D
              viewport: { width: number; height: number }
            }) => { promise: Promise<void> }
          }>
        }>
      }
    }
  }
}

// In-memory cache de imagens já rasterizadas (data URLs)
const renderedPageImagesCache: Map<number, string> = new Map()
let pdfDocPromise: Promise<unknown> | null = null

function ensurePdfJsLoaded(): Promise<typeof window.pdfjsLib> {
  return new Promise((resolve, reject) => {
    if (window.pdfjsLib) {
      if (!window.pdfjsLib.GlobalWorkerOptions.workerSrc) {
        window.pdfjsLib.GlobalWorkerOptions.workerSrc =
          'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/legacy/build/pdf.worker.min.js'
      }
      return resolve(window.pdfjsLib)
    }

    // Se ainda não estiver carregado via script tag, tentar injetar dinamicamente
    const existingScript = document.querySelector('script[src*="pdfjs-dist"]')
    if (existingScript) {
      existingScript.addEventListener('load', () => {
        if (window.pdfjsLib) {
          window.pdfjsLib.GlobalWorkerOptions.workerSrc =
            'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/legacy/build/pdf.worker.min.js'
          resolve(window.pdfjsLib)
        } else {
          reject(new Error('PDF.js failed to initialize'))
        }
      })
      existingScript.addEventListener('error', () => {
        reject(new Error('Failed to load PDF.js script'))
      })
      return
    }

    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/legacy/build/pdf.min.js'
    script.async = true
    script.onload = () => {
      if (window.pdfjsLib) {
        window.pdfjsLib.GlobalWorkerOptions.workerSrc =
          'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/legacy/build/pdf.worker.min.js'
        resolve(window.pdfjsLib)
      } else {
        reject(new Error('PDF.js global not found after load'))
      }
    }
    script.onerror = () => reject(new Error('Error loading PDF.js script'))
    document.head.appendChild(script)
  })
}

// Obtém ou inicializa o documento PDF com lazy loading
export async function getFolderPdfDoc() {
  if (pdfDocPromise) return pdfDocPromise

  pdfDocPromise = (async () => {
    const pdfjs = await ensurePdfJsLoaded()
    if (!pdfjs) throw new Error('PDF.js not available')

    const loadingTask = pdfjs.getDocument(folderPdfUrl)
    return await loadingTask.promise
  })()

  return pdfDocPromise
}

/**
 * Renderiza uma página específica do PDF em uma imagem WebP/JPEG otimizada para web (data URL)
 * com resolução nítida (escala 1.5 a 2.0x) e tamanho de arquivo reduzido.
 */
export async function renderPdfPageToDataUrl(
  pageNumber: number,
  scale: number = 1.6,
): Promise<string> {
  if (renderedPageImagesCache.has(pageNumber)) {
    return renderedPageImagesCache.get(pageNumber)!
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const doc = (await getFolderPdfDoc()) as any
  const page = await doc.getPage(pageNumber)
  const viewport = page.getViewport({ scale })

  const canvas = document.createElement('canvas')
  canvas.width = viewport.width
  canvas.height = viewport.height

  const ctx = canvas.getContext('2d', { alpha: false })
  if (!ctx) throw new Error('Failed to get 2d context')

  // Fundo branco base
  ctx.fillStyle = '#FFFFFF'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  await page.render({
    canvasContext: ctx,
    viewport,
  }).promise

  // Tentar WebP com qualidade 0.82 (altamente comprimida e rápida), fallback para JPEG
  let dataUrl = ''
  try {
    dataUrl = canvas.toDataURL('image/webp', 0.82)
    if (!dataUrl.startsWith('data:image/webp')) {
      dataUrl = canvas.toDataURL('image/jpeg', 0.85)
    }
  } catch {
    dataUrl = canvas.toDataURL('image/jpeg', 0.85)
  }

  renderedPageImagesCache.set(pageNumber, dataUrl)
  return dataUrl
}

/**
 * Pré-carrega progressivamente um lote de páginas para navegação instantânea no carrossel
 */
export async function preloadFolderPages(startPage: number = 1, count: number = 6): Promise<void> {
  const end = Math.min(30, startPage + count - 1)
  for (let i = startPage; i <= end; i++) {
    try {
      await renderPdfPageToDataUrl(i)
    } catch (e) {
      console.warn(`Falha ao pré-carregar página ${i} do folder:`, e)
    }
  }
}

/**
 * Cache para recortes de projetos em destaque
 */
const croppedProjectImagesCache: Map<string, string> = new Map()

export interface CropRegion {
  topPercent: number // 0 a 100
  leftPercent: number // 0 a 100
  widthPercent: number // 0 a 100
  heightPercent: number // 0 a 100
}

/**
 * Renderiza uma região específica de uma página do PDF (por exemplo, a fotografia da obra)
 * em uma imagem nítida com alta fidelidade ao PDF original.
 */
export async function renderPdfProjectImage(
  key: string,
  pageNumber: number,
  crop: CropRegion,
  scale: number = 2.0,
): Promise<string> {
  if (croppedProjectImagesCache.has(key)) {
    return croppedProjectImagesCache.get(key)!
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const doc = (await getFolderPdfDoc()) as any
  const page = await doc.getPage(pageNumber)
  const viewport = page.getViewport({ scale })

  // Renderiza a página completa em um canvas temporário
  const pageCanvas = document.createElement('canvas')
  pageCanvas.width = viewport.width
  pageCanvas.height = viewport.height

  const pageCtx = pageCanvas.getContext('2d', { alpha: false })
  if (!pageCtx) throw new Error('Failed to get 2d context')

  pageCtx.fillStyle = '#FFFFFF'
  pageCtx.fillRect(0, 0, pageCanvas.width, pageCanvas.height)

  await page.render({
    canvasContext: pageCtx,
    viewport,
  }).promise

  // Cria o canvas recortado apenas da foto da obra
  const cropX = Math.round((crop.leftPercent / 100) * pageCanvas.width)
  const cropY = Math.round((crop.topPercent / 100) * pageCanvas.height)
  const cropW = Math.round((crop.widthPercent / 100) * pageCanvas.width)
  const cropH = Math.round((crop.heightPercent / 100) * pageCanvas.height)

  const croppedCanvas = document.createElement('canvas')
  croppedCanvas.width = cropW
  croppedCanvas.height = cropH

  const croppedCtx = croppedCanvas.getContext('2d', { alpha: false })
  if (!croppedCtx) throw new Error('Failed to get cropped 2d context')

  croppedCtx.drawImage(pageCanvas, cropX, cropY, cropW, cropH, 0, 0, cropW, cropH)

  let dataUrl = ''
  try {
    dataUrl = croppedCanvas.toDataURL('image/webp', 0.88)
    if (!dataUrl.startsWith('data:image/webp')) {
      dataUrl = croppedCanvas.toDataURL('image/jpeg', 0.88)
    }
  } catch {
    dataUrl = croppedCanvas.toDataURL('image/jpeg', 0.88)
  }

  croppedProjectImagesCache.set(key, dataUrl)
  return dataUrl
}
