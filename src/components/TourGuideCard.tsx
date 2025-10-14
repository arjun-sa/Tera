import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Star, MapPin, Clock, Users, DollarSign, Eye } from 'lucide-react';
import { LocalInsider } from '../types';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LocalInsiderCardProps {
  insider: LocalInsider;
  onViewProfile: (insider: LocalInsider) => void;
  onBookNow: (insider: LocalInsider) => void;
}

export function LocalInsiderCard({ insider, onViewProfile, onBookNow }: LocalInsiderCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <ImageWithFallback
          src={insider.image}
          alt={insider.name}
          className="w-full h-48 object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute top-3 right-3">
          <Badge className="bg-primary text-primary-foreground">
            {insider.matchScore}% Match
          </Badge>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="mb-1">{insider.name}</h3>
            <p className="text-muted-foreground">{insider.specialty}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-primary text-primary mr-1" />
            <span>{insider.rating}</span>
          </div>
          <span className="text-muted-foreground">({insider.reviews} reviews)</span>
        </div>

        <p className="text-muted-foreground mb-4 line-clamp-2">
          {insider.description}
        </p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{insider.location}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{insider.experience} experience</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <DollarSign className="h-4 w-4" />
            <span>{insider.priceRange}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{insider.languages.join(', ')}</span>
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" className="flex-1" onClick={() => onViewProfile(insider)}>
            <Eye className="h-4 w-4 mr-2" />
            View Profile
          </Button>
          <Button className="flex-1" onClick={() => onBookNow(insider)}>
            Book Now
          </Button>
        </div>
      </div>
    </Card>
  );
}
