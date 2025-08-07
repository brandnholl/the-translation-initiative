import { client } from './sanity'
import type { Author, Post } from './sanity'

// GROQ queries for fetching data
export const postsQuery = `
  *[_type == "post"] | order(_createdAt desc) {
    _id,
    title,
    shortDescription,
    coverPhoto,
    author->{
      _id,
      name,
      profilePhoto
    },
    language,
    publishedAt,
    _createdAt
  }
`

export const postByIdQuery = `
  *[_type == "post" && _id == $id][0] {
    _id,
    title,
    shortDescription,
    coverPhoto,
    author->{
      _id,
      name,
      profilePhoto
    },
    language,
    content,
    publishedAt,
    _createdAt
  }
`

export const authorsQuery = `
  *[_type == "author"] | order(name asc) {
    _id,
    name,
    profilePhoto,
    contributionLanguage
  }
`

export const authorByIdQuery = `
  *[_type == "author" && _id == $id][0] {
    _id,
    name,
    profilePhoto,
    contributionLanguage
  }
`

export const postsByAuthorQuery = `
  *[_type == "post" && author._ref == $authorId] | order(_createdAt desc) {
    _id,
    title,
    shortDescription,
    coverPhoto,
    language,
    publishedAt,
    _createdAt
  }
`

// API functions
export async function getPosts(): Promise<Post[]> {
  return await client.fetch(postsQuery)
}

export async function getPostById(id: string): Promise<Post | null> {
  return await client.fetch(postByIdQuery, { id })
}

export async function getAuthors(): Promise<Author[]> {
  return await client.fetch(authorsQuery)
}

export async function getAuthorById(id: string): Promise<Author | null> {
  return await client.fetch(authorByIdQuery, { id })
}

export async function getPostsByAuthor(authorId: string): Promise<Post[]> {
  return await client.fetch(postsByAuthorQuery, { authorId })
}