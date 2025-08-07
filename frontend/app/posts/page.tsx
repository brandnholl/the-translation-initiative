import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, User } from 'lucide-react'
import { getPosts } from '@/lib/sanity-queries'
import { urlFor, Author } from '@/lib/sanity'

export default async function PostsPage() {
  const posts = await getPosts()
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

      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Cultural Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Each story focuses on a single element of Chinese culture, translated with care 
            to preserve its nuance and spark curiosity.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post._id} className="overflow-hidden hover:shadow-lg transition-shadow bg-white">
                <div className="aspect-video relative">
                  <Image
                    src={post.coverPhoto ? urlFor(post.coverPhoto).width(400).height(300).url() : "/placeholder.svg?height=300&width=400"}
                    alt={post.title || 'Post'}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-stone-100 text-stone-800">
                      {post.language === 'en' ? 'English' : post.language === 'id' ? 'Indonesian' : 'Chinese'}
                    </Badge>
                    <span className="text-sm text-gray-500">5 min read</span>
                  </div>
                  <CardTitle className="text-xl hover:text-stone-700 transition-colors">
                    <Link href={`/posts/${post._id}`}>
                      {post.title || 'Untitled'}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {post.shortDescription || 'No description'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
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
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                  </div>
                  <Button asChild variant="ghost" className="w-full justify-between">
                    <Link href={`/posts/${post._id}`}>
                      Read Story
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
