import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID')
}

if (!process.env.NEXT_PUBLIC_SANITY_DATASET) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_DATASET')
}

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
  apiVersion: '2024-01-01',
})

const builder = imageUrlBuilder(client)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const urlFor = (source: SanityImage | string | null | undefined) => builder.image(source as any)

// Type definitions for our Sanity schema
export interface SanityImage {
  asset: {
    _ref: string
    _type: 'reference'
  }
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
}

export interface Author {
  _id: string
  name: string
  profilePhoto?: SanityImage
  contributionLanguage: 'en' | 'id' | 'zh'
}

export interface Post {
  _id: string
  title: string
  shortDescription?: string
  coverPhoto?: SanityImage
  author: {
    _ref: string
    _type: 'reference'
  } | Author
  language: 'en' | 'id' | 'zh'
  content: Array<{
    _type: string
    _key?: string
    [key: string]: unknown
  }>
  publishedAt?: string
  _createdAt: string
  _updatedAt: string
}