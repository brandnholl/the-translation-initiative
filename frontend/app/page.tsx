import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Heart, BookOpen, Users, Brush, Scroll, Mountain, Flower2, Star } from 'lucide-react'
import { getPosts } from '@/lib/sanity-queries'
import { urlFor } from '@/lib/sanity'

export default async function HomePage() {
  const allPosts = await getPosts()
  const featuredPosts = allPosts.slice(0, 3)
  return (
    <div className="min-h-screen bg-rice-paper-100 ink-wash-bg chinese-pattern-bg">
      {/* Traditional Chinese-Inspired Navigation */}
      <nav className="border-b-2 border-chinese-red-500/20 bg-rice-paper-50/95 backdrop-blur-sm sticky top-0 z-50 chinese-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 bg-chinese-red-600 rounded-full flex items-center justify-center chinese-seal lantern-glow">
                  <Brush className="h-7 w-7 text-rice-paper-50" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4">
                  <Star className="w-full h-full text-chinese-gold-500" />
                </div>
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-ink-black-800 chinese-spacing">
                  The Translation Initiative
                </div>
                <div className="text-sm text-ink-black-600 font-medium chinese-spacing">
                  Cultural Bridge Building
                </div>
              </div>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-ink-black-700 hover:text-chinese-red-600 transition-colors chinese-spacing font-medium">
                Home
              </Link>
              <Link href="/posts" className="text-ink-black-700 hover:text-chinese-red-600 transition-colors chinese-spacing font-medium">
                Posts
              </Link>
              <Link href="/authors" className="text-ink-black-700 hover:text-chinese-red-600 transition-colors chinese-spacing font-medium">
                Authors
              </Link>
              <Link href="/mission" className="text-ink-black-700 hover:text-chinese-red-600 transition-colors chinese-spacing font-medium">
                Mission
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Traditional Chinese Aesthetics */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Traditional decorative elements */}
        <div className="absolute top-10 right-10 w-40 h-40 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full text-chinese-red-500">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" className="brush-stroke" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" className="brush-stroke" />
            <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1" className="brush-stroke" />
            <path d="M30 50 L50 30 L70 50 L50 70 Z" fill="currentColor" opacity="0.2" />
          </svg>
        </div>
        <div className="absolute bottom-10 left-10 w-32 h-32 opacity-10">
          <Mountain className="w-full h-full text-chinese-gold-500" />
        </div>
        <div className="absolute top-1/2 left-1/4 w-6 h-6 opacity-20">
          <Flower2 className="w-full h-full text-jade-600" />
        </div>
        <div className="absolute top-1/3 right-1/3 w-8 h-8 opacity-20">
          <Flower2 className="w-full h-full text-chinese-gold-500" />
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative">
          {/* Main Title */}
          <div className="mb-12">
            <div className="relative inline-block">
              <h1 className="text-6xl md:text-8xl font-bold text-ink-black-800 mb-6 chinese-spacing relative">
                Cultural Bridge
              </h1>
              {/* Traditional seal stamp */}
              <div className="absolute -top-4 -right-8 w-8 h-8 bg-chinese-red-600 rounded-sm chinese-seal opacity-80 flex items-center justify-center">
                <Brush className="text-rice-paper-50 h-4 w-4" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-chinese-gold-600 chinese-spacing mb-4">
              Quiet Wisdom
            </h2>
          </div>
          
          {/* Traditional scroll-like content box */}
          <div className="bg-rice-paper-50/90 backdrop-blur-sm rounded-lg p-8 border-2 border-chinese-gold-300/30 chinese-border scroll-shadow mb-12 relative">
            {/* Corner decorations */}
            <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-chinese-red-500"></div>
            <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-chinese-red-500"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-chinese-red-500"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-chinese-red-500"></div>
            
            <p className="text-xl text-ink-black-700 max-w-4xl mx-auto leading-relaxed chinese-spacing mb-4">
              A space dedicated to translating and preserving the quieter, nearly &ldquo;secret&rdquo; elements 
              of Chinese culture—those passed down through grandmothers, craftsmen, and quiet appreciation.
            </p>
            <p className="text-lg text-ink-black-600 max-w-4xl mx-auto leading-relaxed chinese-spacing">
              We bridge cultures by making the intangible feel visible and the obscure feel intimate, 
              one story at a time.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-chinese-red-600 hover:bg-chinese-red-700 text-rice-paper-50 chinese-spacing lantern-glow border-2 border-chinese-red-700">
              <Link href="/posts">
                <Scroll className="mr-2 h-5 w-5" />
                Explore Stories
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-chinese-gold-500 text-chinese-gold-700 hover:bg-chinese-gold-50 chinese-spacing">
              <Link href="/mission">
                <Heart className="mr-2 h-4 w-4" />
                Our Mission
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section with Traditional Chinese Design */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-rice-paper-50/60">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ink-black-800 mb-4 chinese-spacing">
              Our Approach
            </h2>
            <p className="text-lg text-ink-black-600 chinese-spacing">
              Three pillars of cultural translation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 bg-chinese-red-100 rounded-full flex items-center justify-center chinese-seal group-hover:scale-110 transition-transform lantern-glow">
                  <BookOpen className="h-10 w-10 text-chinese-red-600" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-chinese-gold-500 rounded-full flex items-center justify-center">
                  <Brush className="text-rice-paper-50 h-3 w-3" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-ink-black-800 mb-3 chinese-spacing">
                Cultural Elements
              </h3>
              <p className="text-ink-black-600 chinese-spacing leading-relaxed">
                Each post focuses on a single ritual, phrase, craft, or gesture, 
                giving it the space and time it deserves.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 bg-chinese-gold-100 rounded-full flex items-center justify-center chinese-seal group-hover:scale-110 transition-transform">
                  <Brush className="h-10 w-10 text-chinese-gold-600" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-chinese-red-500 rounded-full flex items-center justify-center">
                  <Heart className="text-rice-paper-50 h-3 w-3" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-ink-black-800 mb-3 chinese-spacing">
                Thoughtful Translation
              </h3>
              <p className="text-ink-black-600 chinese-spacing leading-relaxed">
                Preserving nuance and cultural depth while making ancient wisdom 
                accessible to modern audiences.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 bg-jade-100 rounded-full flex items-center justify-center chinese-seal group-hover:scale-110 transition-transform">
                  <Users className="h-10 w-10 text-jade-600" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-chinese-gold-500 rounded-full flex items-center justify-center">
                  <Star className="text-rice-paper-50 h-3 w-3" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-ink-black-800 mb-3 chinese-spacing">
                Expert Consultation
              </h3>
              <p className="text-ink-black-600 chinese-spacing leading-relaxed">
                Working with cultural experts and practitioners to ensure 
                authenticity and respect in every translation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts with Traditional Card Design */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-ink-black-800 mb-4 chinese-spacing">
              Featured Stories
            </h2>
            <p className="text-lg text-ink-black-600 max-w-3xl mx-auto chinese-spacing leading-relaxed">
              Discover the beauty and wisdom woven into everyday heritage through our carefully translated stories.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post._id} className="overflow-hidden hover:shadow-2xl transition-all duration-500 bg-rice-paper-50 border-2 border-chinese-red-200/40 chinese-border group scroll-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={post.coverPhoto ? urlFor(post.coverPhoto).width(400).height(300).url() : "/placeholder.svg?height=300&width=400"}
                    alt={post.title || 'Post'}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-black-900/30 to-transparent" />
                  {/* Traditional corner decoration on image */}
                  <div className="absolute top-2 right-2 w-8 h-8 bg-chinese-red-600/80 rounded-sm chinese-seal flex items-center justify-center">
                    <Brush className="text-rice-paper-50 h-4 w-4" />
                  </div>
                </div>
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="bg-chinese-red-100 text-chinese-red-800 chinese-seal border border-chinese-red-300">
                      {post.language === 'en' ? 'English' : post.language === 'id' ? 'Indonesian' : 'Chinese'}
                    </Badge>
                    <div className="w-6 h-6">
                      <Flower2 className="w-full h-full text-chinese-gold-500 opacity-60" />
                    </div>
                  </div>
                  <CardTitle className="text-xl chinese-spacing text-ink-black-800 group-hover:text-chinese-red-600 transition-colors mb-3">
                    {post.title || 'Untitled'}
                  </CardTitle>
                  <CardDescription className="text-ink-black-600 chinese-spacing leading-relaxed">
                    {post.shortDescription || 'No description'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="ghost" className="w-full justify-between chinese-spacing hover:bg-chinese-red-50 group/btn">
                    <Link href={`/posts/${post._id}`}>
                      Read More
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button asChild variant="outline" size="lg" className="border-2 border-chinese-red-500 text-chinese-red-700 hover:bg-chinese-red-50 chinese-spacing">
              <Link href="/posts">
                View All Posts
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Traditional Chinese-Inspired Footer */}
      <footer className="bg-ink-black-800 text-rice-paper-100 py-20 px-4 sm:px-6 lg:px-8 chinese-border relative overflow-hidden">
        {/* Traditional pattern background */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23dc2626' fillOpacity='0.4'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-chinese-red-600 rounded-full flex items-center justify-center chinese-seal lantern-glow">
                  <Brush className="h-9 w-9 text-rice-paper-50" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold chinese-spacing">The Translation Initiative</h3>
                  <p className="text-rice-paper-200 chinese-spacing">Cultural Bridge Building</p>
                </div>
              </div>
              <p className="text-rice-paper-200 mb-6 chinese-spacing leading-relaxed text-lg">
                Creating a bridge between cultures through thoughtful translation and preservation 
                of Chinese cultural heritage.
              </p>
              <p className="text-rice-paper-300 chinese-spacing leading-relaxed">
                We make the intangible feel visible and the obscure feel intimate, 
                honoring the depth of tradition while making it accessible to new audiences.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 chinese-spacing text-chinese-gold-400 text-lg flex items-center">
                <BookOpen className="mr-2 h-5 w-5" />
                Explore
              </h4>
              <ul className="space-y-4 text-rice-paper-200">
                <li>
                  <Link href="/posts" className="hover:text-chinese-red-400 transition-colors chinese-spacing font-medium">
                    Posts
                  </Link>
                </li>
                <li>
                  <Link href="/authors" className="hover:text-chinese-red-400 transition-colors chinese-spacing font-medium">
                    Authors
                  </Link>
                </li>
                <li>
                  <Link href="/mission" className="hover:text-chinese-red-400 transition-colors chinese-spacing font-medium">
                    Mission
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 chinese-spacing text-chinese-gold-400 text-lg flex items-center">
                <Heart className="mr-2 h-5 w-5" />
                Connect
              </h4>
              <p className="text-rice-paper-200 chinese-spacing leading-relaxed mb-4">
                Join us in preserving and sharing cultural wisdom across languages and generations.
              </p>
              <p className="text-rice-paper-300 text-sm chinese-spacing leading-relaxed">
                Every story we share is a bridge between worlds, connecting past and present, 
                East and West, tradition and interpretation.
              </p>
            </div>
          </div>
          
          <div className="border-t border-chinese-red-800/40 mt-16 pt-8 text-center">
            <div className="flex justify-center items-center space-x-4 mb-4">
              <div className="w-8 h-8 bg-chinese-red-600 rounded-sm chinese-seal flex items-center justify-center">
                <Brush className="text-rice-paper-50 h-4 w-4" />
              </div>
              <div className="w-8 h-8 bg-chinese-gold-500 rounded-sm chinese-seal flex items-center justify-center">
                <Heart className="text-rice-paper-50 h-4 w-4" />
              </div>
            </div>
            <p className="text-rice-paper-400 chinese-spacing">
              &copy; 2024 The Translation Initiative. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
