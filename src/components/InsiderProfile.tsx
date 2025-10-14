import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Star, MapPin, Clock, Users, DollarSign, Award, ArrowLeft } from 'lucide-react';
import { LocalInsider } from '../types';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface InsiderProfileProps {
  insider: LocalInsider;
  onBack: () => void;
  onBookNow: () => void;
}

export function InsiderProfile({ insider, onBack, onBookNow }: InsiderProfileProps) {
  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <Button variant="ghost" onClick={onBack} className="mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Results
      </Button>

      <Card className="overflow-hidden">
        <div className="relative h-64 md:h-80">
          <ImageWithFallback
            src={insider.image}
            alt={insider.name}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute top-4 right-4">
            <Badge className="bg-primary text-primary-foreground">
              {insider.matchScore}% Match
            </Badge>
          </div>
        </div>

        <div className="p-8">
          <div className="mb-6">
            <h1 className="mb-2">{insider.name}</h1>
            <p className="text-muted-foreground">{insider.specialty}</p>
          </div>

          <div className="flex items-center gap-2 mb-6">
            <div className="flex items-center">
              <Star className="h-5 w-5 fill-primary text-primary mr-1" />
              <span>{insider.rating}</span>
            </div>
            <span className="text-muted-foreground">({insider.reviews} reviews)</span>
            <span className="text-muted-foreground">·</span>
            <span className="text-muted-foreground">{insider.experience} experience</span>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <div>
                <p className="text-muted-foreground">Location</p>
                <p>{insider.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <DollarSign className="h-5 w-5 text-primary" />
              <div>
                <p className="text-muted-foreground">Price Range</p>
                <p>{insider.priceRange}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-primary" />
              <div>
                <p className="text-muted-foreground">Languages</p>
                <p>{insider.languages.join(', ')}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-primary" />
              <div>
                <p className="text-muted-foreground">Experience</p>
                <p>{insider.experience}</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="mb-3">About {insider.name.split(' ')[0]}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {insider.bio || insider.description}
            </p>
          </div>

          {insider.achievements && insider.achievements.length > 0 && (
            <div className="mb-8">
              <h3 className="mb-3">Achievements & Highlights</h3>
              <div className="space-y-2">
                {insider.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <Button size="lg" className="w-full" onClick={onBookNow}>
            Book Now
          </Button>
        </div>
      </Card>
    </div>
  );
}
