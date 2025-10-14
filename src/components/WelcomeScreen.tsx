import { Button } from './ui/button';
import { Card } from './ui/card';
import { ArrowRight, MapPin, Users, Star } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
          <MapPin className="h-10 w-10 text-primary" />
        </div>
        <h1 className="mb-4">Find Your Perfect Local Insider</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Answer a few quick questions about your travel preferences, and we'll match you 
          with the best Local Insiders for an unforgettable experience.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Card className="p-6 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-accent rounded-full mb-4">
            <Users className="h-6 w-6 text-accent-foreground" />
          </div>
          <h3 className="mb-2">Expert Insiders</h3>
          <p className="text-muted-foreground">
            Experienced Local Insiders with deep knowledge and passion
          </p>
        </Card>

        <Card className="p-6 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-accent rounded-full mb-4">
            <Star className="h-6 w-6 text-accent-foreground" />
          </div>
          <h3 className="mb-2">Personalized Matches</h3>
          <p className="text-muted-foreground">
            Recommendations tailored to your unique preferences
          </p>
        </Card>

        <Card className="p-6 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-accent rounded-full mb-4">
            <MapPin className="h-6 w-6 text-accent-foreground" />
          </div>
          <h3 className="mb-2">Local Insights</h3>
          <p className="text-muted-foreground">
            Discover hidden gems and authentic experiences
          </p>
        </Card>
      </div>

      <div className="text-center">
        <Button size="lg" onClick={onStart}>
          Get Started
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <p className="text-muted-foreground mt-4">Takes less than 2 minutes</p>
      </div>
    </div>
  );
}
