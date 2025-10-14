import { Button } from './ui/button';
import { Card } from './ui/card';
import { ArrowLeft, FileText, ShieldCheck, UserCircle, Rocket } from 'lucide-react';

interface BecomeInsiderProps {
  onBack: () => void;
}

const steps = [
  {
    number: 1,
    title: 'Apply Online',
    icon: FileText,
    description: 'Fill out a simple application form telling us about your expertise, local knowledge, and what makes you the perfect guide. Share your passion for your city and what unique experiences you can offer.',
  },
  {
    number: 2,
    title: 'Verify Identity',
    icon: ShieldCheck,
    description: 'Complete our secure verification process to ensure the safety and trust of our community. We\'ll verify your identity, credentials, and any relevant certifications or qualifications.',
  },
  {
    number: 3,
    title: 'Create Profile',
    icon: UserCircle,
    description: 'Build your compelling insider profile with photos, your story, specialties, and the experiences you offer. Showcase what makes you unique and connect with travelers who share your interests.',
  },
  {
    number: 4,
    title: 'Start Hosting',
    icon: Rocket,
    description: 'Once approved, you\'re ready to start hosting! Set your availability, pricing, and begin welcoming travelers. Share your local expertise and create unforgettable experiences.',
  },
];

export function BecomeInsider({ onBack }: BecomeInsiderProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex w-full items-center justify-between h-16">
            {/* Logo/Brand */}
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={onBack}
                className="flex items-center gap-2 hover:bg-primary/10"
              >
                <ArrowLeft className="h-5 w-5" />
                <span className="hidden sm:inline">Back to Home</span>
              </Button>
            </div>

            <div className="flex-shrink-0">
              <span
                className="text-2xl font-normal text-foreground tracking-tight"
                style={{ fontFamily: '"Lexend Tera", sans-serif' }}
              >
                TERA
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-medium mb-6 text-foreground">
            Become a Local Insider
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Share your passion, expertise, and local knowledge with travelers from around the world. Turn your love for your city into a rewarding experience.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <Card
                  key={step.number}
                  className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50"
                >
                  <div className="flex items-start gap-6">
                    {/* Step Number & Icon */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                          {step.number}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-medium mb-3 text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-primary text-primary-foreground mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-medium mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join our community of passionate local insiders and start sharing your unique perspective with travelers today.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="text-lg px-12 py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
            onClick={() => {
              // TODO: Implement application flow
              alert('Application form coming soon!');
            }}
          >
            Start Your Application
          </Button>
        </div>
      </section>
    </div>
  );
}
