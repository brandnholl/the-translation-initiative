import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, User, BookOpen, Calendar, ArrowRight } from 'lucide-react'
import { getAuthorById, getPostsByAuthor } from '@/lib/sanity-queries'
import { urlFor } from '@/lib/sanity'

interface AuthorPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { slug } = await params
  const author = await getAuthorById(slug)
  
  if (!author) {
    notFound()
  }

  const authorPosts = await getPostsByAuthor(author._id)

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
              <Link href="/posts" className="text-gray-700 hover:text-stone-700 transition-colors">
                Posts
              </Link>
              <Link href="/authors" className="text-stone-800 font-medium">
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Button asChild variant="ghost">
          <Link href="/authors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Authors
          </Link>
        </Button>
      </div>

      {/* Author Profile */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Author Info */}
            <div className="lg:col-span-1">
              <Card className="bg-white">
                <CardHeader className="text-center">
                  <div className="w-32 h-32 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                    {author.profilePhoto ? (
                      <Image
                        src={urlFor(author.profilePhoto).width(128).height(128).url()}
                        alt={author.name || 'Author'}
                        width={128}
                        height={128}
                        className="object-cover"
                      />
                    ) : (
                      <User className="h-16 w-16 text-stone-700" />
                    )}
                  </div>
                  <CardTitle className="text-3xl">{author.name || 'Unknown Author'}</CardTitle>
                  <CardDescription className="text-gray-600">
                    Contributing Author
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Language</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-stone-100 text-stone-800">
                        {author.contributionLanguage === 'en' ? 'English' : author.contributionLanguage === 'id' ? 'Indonesian' : 'Chinese'}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <BookOpen className="h-4 w-4" />
                      {authorPosts.length} posts
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Author Bio & Posts */}
            <div className="lg:col-span-2 space-y-8">
              {/* Bio */}
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle>About {author.name || 'Unknown Author'}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Cultural contributor specializing in {author.contributionLanguage === 'en' ? 'English' : author.contributionLanguage === 'id' ? 'Indonesian' : 'Chinese'} content.
                  </p>
                </CardContent>
              </Card>

              {/* Posts */}
              {authorPosts.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Posts by {author.name || 'Unknown Author'}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {authorPosts.map((post) => (
                      <Card key={post._id} className="bg-white hover:shadow-lg transition-shadow">
                        <div className="aspect-video relative">
                          <Image
                            src={post.coverPhoto ? urlFor(post.coverPhoto).width(300).height(200).url() : "/placeholder.svg?height=200&width=300"}
                            alt={post.title || 'Post'}
                            fill
                            className="object-cover rounded-t-lg"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle className="text-xl">
                            <Link href={`/posts/${post._id}`} className="hover:text-stone-700 transition-colors">
                              {post.title || 'Untitled'}
                            </Link>
                          </CardTitle>
                          <CardDescription className="text-gray-600">
                            {post.shortDescription || 'No description'}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1 text-sm text-gray-500">
                              <Calendar className="h-4 w-4" />
                              {new Date(post.publishedAt || post._createdAt).toLocaleDateString('en-US', { 
                                year: 'numeric', 
                                month: 'short', 
                                day: 'numeric' 
                              })}
                            </div>
                            <Button asChild variant="ghost" size="sm">
                              <Link href={`/posts/${post._id}`}>
                                Read More
                                <ArrowRight className="ml-1 h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
