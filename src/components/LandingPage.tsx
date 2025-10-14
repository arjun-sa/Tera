import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Star, ChevronLeft, ChevronRight, MapPin, Bike, Car, Footprints, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { NavigationBar } from './NavigationBar';

interface LandingPageProps {
  onGetStarted: () => void;
  onBecomeInsider: () => void;
}

const heroImages = [
  'https://plus.unsplash.com/premium_photo-1697729751156-68f01255334c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=95&w=2400',
  'https://images.unsplash.com/photo-1541655446662-baff34d3288a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1288',
  'https://images.unsplash.com/photo-1620826699089-ef31a32989d3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2670',
  'https://images.unsplash.com/photo-1549333580-4cb2c5c8e421?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1364'
];

const mobilityExperiences = [
  {
    icon: Footprints,
    title: 'Walking Tours',
    description: 'Explore at your own pace on foot, discovering hidden gems and local favorites along the way.',
    image: 'https://images.unsplash.com/photo-1733102814204-499e3f844787?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3VyaXN0JTIwd2Fsa2luZyUyMGNpdHl8ZW58MXx8fHwxNzYwNDA3MzEyfDA&ixlib=rb-4.1.0&q=95&w=2400&utm_source=figma&utm_medium=referral'
  },
  {
    icon: Bike,
    title: 'Bikes & Scooters',
    description: 'Cover more ground with e-bikes and scooters, perfect for active explorers who want efficiency.',
    image: 'https://images.unsplash.com/photo-1759503610629-f9d9facbb5a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWtpbmclMjBzY2VuaWMlMjByb3V0ZXxlbnwxfHx8fDE3NjA0MDczMTN8MA&ixlib=rb-4.1.0&q=95&w=2400&utm_source=figma&utm_medium=referral'
  },
  {
    icon: Car,
    title: 'Scenic Drives',
    description: 'Experience breathtaking routes and distant destinations with comfortable, guided scenic drives.',
    image: 'https://images.unsplash.com/photo-1724217556692-5388bf475634?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBzY2VuaWMlMjBkcml2ZXxlbnwxfHx8fDE3NjA0MDczMTN8MA&ixlib=rb-4.1.0&q=95&w=2400&utm_source=figma&utm_medium=referral'
  }
];

const reviews = [
  {
    host: 'Maria Rodriguez',
    type: 'In Person',
    stars: 5,
    text: 'Maria made our Barcelona experience unforgettable! Her knowledge of the Gothic Quarter was impressive, and she tailored the tour perfectly to our interests. We discovered places we never would have found on our own.',
    date: 'September 2024'
  },
  {
    host: 'James Chen',
    type: 'In Person',
    stars: 5,
    text: 'The food tour with James was the highlight of our Tokyo trip. Every stop was carefully curated, and his insights into Japanese culinary culture were fascinating. Already planning our return visit!',
    date: 'October 2024'
  },
  {
    host: 'Sophie Laurent',
    type: 'Itinerary',
    stars: 5,
    text: 'Sophie\'s custom Paris itinerary was absolutely perfect. She anticipated our needs and included skip-the-line access to museums. The art tour was educational yet entertaining. Worth every penny!',
    date: 'August 2024'
  },
  {
    host: 'Alex Thompson',
    type: 'In Person',
    stars: 5,
    text: 'Alex is an incredible adventure guide! The hiking and outdoor activities were thrilling yet safe. His knowledge of New Zealand\'s landscapes and wildlife made every moment special.',
    date: 'November 2024'
  },
  {
    host: 'Isabella Romano',
    type: 'Itinerary',
    stars: 5,
    text: 'Isabella\'s Tuscany wine and food itinerary exceeded all expectations. The vineyard visits and cooking class were authentic experiences. She truly understands what travelers are looking for.',
    date: 'July 2024'
  },
  {
    host: 'David O\'Brien',
    type: 'In Person',
    stars: 5,
    text: 'David showed us the real Ireland - not just tourist spots but genuine local experiences. His passion for nature and conservation was inspiring. The photography opportunities were incredible!',
    date: 'September 2024'
  }
];

export function LandingPage({ onGetStarted, onBecomeInsider }: LandingPageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [reviewIndex, setReviewIndex] = useState(0);

  // Auto-rotate hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextReview = () => {
    setReviewIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <NavigationBar
        onBookWithTera={onGetStarted}
        onBecomeInsider={onBecomeInsider}
      />

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Slideshow */}
        {heroImages.map((image, index) => (
          <div
            key={image}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{
              opacity: index === currentImageIndex ? 1 : 0,
              zIndex: index === currentImageIndex ? 1 : 0
            }}
          >
            <ImageWithFallback
              src={image}
              alt="Travel destination"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
          </div>
        ))}

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-5xl md:text-7xl text-white mb-6 max-w-5xl">
            Discover the World with Local Insiders
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl">
            Experience authentic travel through the eyes of passionate locals. From guided adventures to custom itineraries, Tera connects you with expert insiders who transform ordinary trips into extraordinary journeys.
          </p>
          <Button
            onClick={onGetStarted}
            size="lg"
            className="text-lg px-12 py-6 h-auto bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
          >
            Book with Tera
          </Button>
        </div>

        {/* Slideshow Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImageIndex 
                  ? 'bg-white w-8' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* About Tera Section */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-8">Welcome to Tera</h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              At Tera, we believe that the best travel experiences come from connecting with those who truly know a destination. Our platform brings together passionate local insiders—expert guides, food enthusiasts, cultural ambassadors, and adventure specialists—who are eager to share their knowledge and love for their home.
            </p>
            <p>
              Whether you're seeking an immersive in-person experience or a meticulously crafted custom itinerary, Tera makes it effortless to find the perfect match for your travel style. We go beyond generic tours, offering personalized journeys that reflect your interests, pace, and preferences.
            </p>
            <p>
              From hidden gems to iconic landmarks, culinary adventures to outdoor expeditions, our insiders curate experiences that create lasting memories. Join thousands of travelers who have discovered the Tera difference—where every journey is guided by local expertise and genuine passion.
            </p>
          </div>
        </div>
      </section>

      {/* Mobility Experiences Section */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Explore Your Way</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose how you want to discover your destination. We offer experiences tailored to every mobility preference.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mobilityExperiences.map((experience, index) => {
              const Icon = experience.icon;
              return (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/3] overflow-hidden">
                    <ImageWithFallback
                      src={experience.image}
                      alt={experience.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-2xl">{experience.title}</h3>
                    </div>
                    <p className="text-muted-foreground">
                      {experience.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Tera Section */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Why Book with Tera?</h2>
            <p className="text-lg text-muted-foreground">
              We're not just another booking platform—we're your gateway to authentic local experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle2 className="h-6 w-6 text-primary mt-1" />
              </div>
              <div>
                <h3 className="text-xl mb-2">Vetted Local Insiders</h3>
                <p className="text-muted-foreground">
                  Every guide and host is carefully verified with proven expertise, certifications, and outstanding reviews from real travelers.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle2 className="h-6 w-6 text-primary mt-1" />
              </div>
              <div>
                <h3 className="text-xl mb-2">Personalized Matching</h3>
                <p className="text-muted-foreground">
                  Our smart questionnaire ensures you're matched with insiders who align perfectly with your interests, budget, and travel style.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle2 className="h-6 w-6 text-primary mt-1" />
              </div>
              <div>
                <h3 className="text-xl mb-2">Flexible Booking</h3>
                <p className="text-muted-foreground">
                  Choose between in-person guided experiences or custom itineraries. Book by the hour with easy scheduling that fits your plans.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle2 className="h-6 w-6 text-primary mt-1" />
              </div>
              <div>
                <h3 className="text-xl mb-2">Authentic Experiences</h3>
                <p className="text-muted-foreground">
                  Skip the tourist traps. Our insiders share hidden gems, local favorites, and insider knowledge you won't find in guidebooks.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle2 className="h-6 w-6 text-primary mt-1" />
              </div>
              <div>
                <h3 className="text-xl mb-2">Secure & Transparent</h3>
                <p className="text-muted-foreground">
                  Clear pricing, secure payments, and comprehensive booking management. No hidden fees or surprises.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle2 className="h-6 w-6 text-primary mt-1" />
              </div>
              <div>
                <h3 className="text-xl mb-2">24/7 Support</h3>
                <p className="text-muted-foreground">
                  Our dedicated team is always ready to help, from booking questions to on-the-ground support during your experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Traveler Reviews</h2>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it—hear from travelers who've experienced the Tera difference.
            </p>
          </div>

          <div className="relative">
            <Card className="p-8 md:p-12">
              <div className="flex gap-1 mb-4 justify-center">
                {[...Array(reviews[reviewIndex].stars)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              <blockquote className="text-lg md:text-xl text-center mb-6 max-w-3xl mx-auto">
                "{reviews[reviewIndex].text}"
              </blockquote>

              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <MapPin className="h-4 w-4 text-primary" />
                  <p className="text-muted-foreground">
                    {reviews[reviewIndex].host} • {reviews[reviewIndex].type}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  {reviews[reviewIndex].date}
                </p>
              </div>
            </Card>

            {/* Navigation Buttons */}
            <button
              onClick={prevReview}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 p-3 rounded-full bg-card border-2 border-border hover:bg-accent transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={nextReview}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 p-3 rounded-full bg-card border-2 border-border hover:bg-accent transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Review Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setReviewIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === reviewIndex 
                      ? 'bg-primary w-8' 
                      : 'bg-border hover:bg-primary/50'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of travelers discovering authentic experiences with local insiders.
          </p>
          <Button
            onClick={onGetStarted}
            size="lg"
            variant="secondary"
            className="text-lg px-12 py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
          >
            Get Started Now
          </Button>
        </div>
      </section>
    </div>
  );
}
