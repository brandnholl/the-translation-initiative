import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, BracketsIcon as Bridge, BookOpen, Users, Globe, Lightbulb } from 'lucide-react'

export default function MissionPage() {
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
              <Link href="/authors" className="text-gray-700 hover:text-stone-700 transition-colors">
                Authors
              </Link>
              <Link href="/mission" className="text-stone-800 font-medium">
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
            Our Mission
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Creating a bridge between cultures through thoughtful translation and preservation 
            of the quieter elements of Chinese heritage.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white border-2 border-stone-200">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-stone-700" />
              </div>
              <CardTitle className="text-2xl">Why This Matters</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                For a long time, I&apos;ve felt the ardent need for a space that uplifts the quieter, 
                nearly &ldquo;secret&rdquo; elements of Chinese culture. These things are passed down through 
                grandmothers, craftsmen, and quiet appreciation.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                As someone who feels like they have a foot in both worlds, being able to understand 
                Chinese seems to be both a blessing and a curse. A blessing when we can enjoy all 
                the beauty and wisdom the culture provides, but a curse when we try to share that 
                admiration with others.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Finding translations, information, and even clear images is hard when researching 
                intangible cultural heritage. But this time around, we hope to be an invaluable 
                resource for those who don&apos;t speak the language but want to explore.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Work</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our approach combines careful research, expert consultation, and deep cultural understanding.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-stone-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-6 w-6 text-stone-700" />
                </div>
                <CardTitle>Slow & Intentional</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  We begin by taking things slow and small. Each post focuses on a single element—whether 
                  it&apos;s a ritual, a phrase, a craft, or a gesture—and we give it its own space and time.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-stone-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-stone-700" />
                </div>
                <CardTitle>Expert Consultation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Through original translations, consulting experts, and an eye for certain details 
                  often lost in broad overviews, we aim to preserve nuance and spark curiosity.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-stone-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Bridge className="h-6 w-6 text-stone-700" />
                </div>
                <CardTitle>Cultural Bridge</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  We&apos;re not just reposting culture—we&apos;re reinterpreting it in ways that honor its 
                  depth while making it reachable for a new audience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-stone-700" />
              </div>
              <CardTitle className="text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Over time, we hope this page will become an archive, a reflection, and a bridge 
                that connects not just East and West, but also past and present, language and 
                emotion, tradition and interpretation.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to create a space where the more uncommon facets of Chinese culture—those 
                often passed down quietly, informally, and sometimes at risk of fading—can be seen, 
                translated, and honored.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Core Beliefs */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Believe</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-stone-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-stone-700" />
                </div>
                <CardTitle>Culture Breathes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Culture isn&apos;t static. It breathes through language, gesture, memory, and care. 
                  That&apos;s why we&apos;re here: to bridge gaps by making the intangible feel visible 
                  and the obscure feel intimate.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-stone-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-stone-700" />
                </div>
                <CardTitle>Beauty in Translation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Through slow, intentional storytelling, we aim to highlight the beauty that 
                  often escapes translation and the wisdom woven into everyday heritage.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Join Our Journey
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore our growing collection of cultural stories and discover the quiet wisdom 
            that connects us across languages and generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-stone-700 hover:bg-stone-800">
              <Link href="/posts">
                Read Our Stories
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/authors">
                Meet Our Authors
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
