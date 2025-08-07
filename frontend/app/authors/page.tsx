import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { User, BookOpen, ArrowRight } from 'lucide-react'
import { getAuthors } from '@/lib/sanity-queries'
import { urlFor } from '@/lib/sanity'

export default async function AuthorsPage() {
  const authors = await getAuthors()
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

      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Authors
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet the cultural translators and researchers who bring these stories to life, 
            each contributing their unique perspective and expertise.
          </p>
        </div>
      </section>

      {/* Authors Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {authors.map((author) => (
              <Card key={author._id} className="bg-white hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                    {author.profilePhoto ? (
                      <Image
                        src={urlFor(author.profilePhoto).width(80).height(80).url()}
                        alt={author.name || 'Author'}
                        width={80}
                        height={80}
                        className="object-cover"
                      />
                    ) : (
                      <User className="h-10 w-10 text-stone-700" />
                    )}
                  </div>
                  <CardTitle className="text-2xl">{author.name || 'Unknown Author'}</CardTitle>
                  <CardDescription className="text-gray-600">
                    Contributing author
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Language</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-stone-100 text-stone-800 text-sm rounded-full">
                        {author.contributionLanguage === 'en' ? 'English' : author.contributionLanguage === 'id' ? 'Indonesian' : 'Chinese'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <BookOpen className="h-4 w-4" />
                      View posts
                    </div>
                    <Button asChild variant="ghost" size="sm">
                      <Link href={`/authors/${author._id}`}>
                        View Profile
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
