import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, User } from 'lucide-react'
import { getPostById } from '@/lib/sanity-queries'
import { urlFor, Author } from '@/lib/sanity'
import { PortableText, PortableTextComponents, PortableTextBlock } from '@portabletext/react'

interface PostPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = await getPostById(slug)
  
  if (!post) {
    notFound()
  }

  const components: PortableTextComponents = {
    block: {
      h1: ({children}) => <h1 className="text-3xl font-bold mb-4 text-gray-900">{children}</h1>,
      h2: ({children}) => <h2 className="text-2xl font-bold mb-3 text-gray-900">{children}</h2>,
      h3: ({children}) => <h3 className="text-xl font-bold mb-2 text-gray-900">{children}</h3>,
      normal: ({children}) => <p className="mb-4 leading-relaxed text-gray-700">{children}</p>,
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-amber-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-stone-800">
              The Translation Initiative
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-stone-700 transition-colors">
                Home
              </Link>
              <Link href="/posts" className="text-stone-800 font-medium">
                Posts
              </Link>
              <Link href="/authors" className="text-gray-700 hover:text-stone-700 transition-colors">
                Authors
              </Link>
              <Link href="/mission" className="text-gray-700 hover:text-stone-700 transition-colors">
                Mission
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Button asChild variant="ghost">
          <Link href="/posts">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Posts
          </Link>
        </Button>
      </div>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Cover Image */}
        {post.coverPhoto && (
          <div className="aspect-video relative mb-8 rounded-lg overflow-hidden">
            <Image
              src={urlFor(post.coverPhoto).width(800).height(450).url()}
              alt={post.title || 'Post'}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Post Header */}
        <header className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Badge variant="secondary" className="bg-stone-100 text-stone-800">
              {post.language === 'en' ? 'English' : post.language === 'id' ? 'Indonesian' : 'Chinese'}
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {post.title || 'Untitled'}
          </h1>
          
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            {post.shortDescription || 'No description'}
          </p>
          
          <div className="flex items-center gap-6 text-sm text-gray-500 border-t pt-4">
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <Link href={`/authors/${(post.author as Author)?._id || 'unknown'}`} className="hover:text-stone-700">
                {(post.author as Author)?.name || 'Unknown Author'}
              </Link>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(post.publishedAt || post._createdAt).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          </div>
        </header>

        {/* Post Content */}
        <div className="prose prose-lg max-w-none">
          <PortableText 
            value={post.content as unknown as PortableTextBlock[] || []} 
            components={components}
          />
        </div>
      </article>
    </div>
  )
}
