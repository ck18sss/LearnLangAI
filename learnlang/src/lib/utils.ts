import { clsx, type ClassValue } from 'clsx'
import { Metadata } from 'next'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// export function absoluteUrl(path: string) {
//   let url
//   path = path.startsWith('/') ? path.slice(1) : path
//   if (typeof window !== 'undefined') url = path
//   else if (process.env.VERCEL_URL)
//     url = `https://${process.env.VERCEL_URL}/${path}`
//   else url = `http://localhost:${process.env.PORT ?? 3000}/${path}`

//   console.log('absoluteUrl url', url)
//   return url
// }

export function absoluteUrl(path: string) {
  if (typeof window !== 'undefined') return path
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}${path}`
  return `http://localhost:${process.env.PORT ?? 3000}${path}`
}

export function constructMetadata({
  title = 'LearnLang AI - Translate foreign language books',
  description = 'Translate foreign language books to help you learn any language.',
  image = '/thumbnail.png',
  icons = '/favicon.ico',
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@ck18sss',
    },
    icons,
    metadataBase: new URL('https://learn-lang-ai.vercel.app/'),
    // themeColor: '#FFF',
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
}