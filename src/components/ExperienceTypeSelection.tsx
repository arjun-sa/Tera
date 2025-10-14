import { Button } from './ui/button';
import { Card } from './ui/card';
import { MapPin, FileText, Users, Calendar } from 'lucide-react';
import { ExperienceType } from '../types';

interface ExperienceTypeSelectionProps {
  onSelect: (type: ExperienceType) => void;
}

export function ExperienceTypeSelection({ onSelect }: ExperienceTypeSelectionProps) {
  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="mb-4">Choose Your Experience Type</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Select how you'd like to explore with a Local Insider
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-8 hover:shadow-lg transition-shadow cursor-pointer group" onClick={() => onSelect('in-person')}>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h2 className="mb-4">In-Person Experience</h2>
            <p className="text-muted-foreground mb-6">
              Join a Local Insider for a hands-on, guided experience. Perfect for immersive exploration and personal connection.
            </p>
            
            <div className="space-y-3 mb-8 text-left">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">
                    Face-to-face guided tours with your insider
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">
                    Book directly on their available schedule
                  </p>
                </div>
              </div>
            </div>

            <Button className="w-full" size="lg">
              Select In-Person
            </Button>
          </div>
        </Card>

        <Card className="p-8 hover:shadow-lg transition-shadow cursor-pointer group" onClick={() => onSelect('itinerary')}>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <h2 className="mb-4">Custom Itinerary</h2>
            <p className="text-muted-foreground mb-6">
              Receive a personalized itinerary crafted by a Local Insider. Explore at your own pace with expert recommendations.
            </p>
            
            <div className="space-y-3 mb-8 text-left">
              <div className="flex items-start gap-3">
                <FileText className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">
                    Detailed day-by-day plans tailored to you
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">
                    Share your dates and preferences
                  </p>
                </div>
              </div>
            </div>

            <Button className="w-full" size="lg">
              Select Itinerary
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
