export interface LocalInsider {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviews: number;
  specialty: string;
  location: string;
  languages: string[];
  priceRange: string;
  experience: string;
  description: string;
  matchScore: number;
  tags: string[];
  bio?: string;
  achievements?: string[];
}

export type ExperienceType = 'in-person' | 'itinerary';

export interface BookingData {
  insider: LocalInsider;
  experienceType: ExperienceType;
  date: Date;
  startTime: string;
  duration: number; // in hours
}

export interface User {
  id: string;
  email: string;
  name: string;
}
