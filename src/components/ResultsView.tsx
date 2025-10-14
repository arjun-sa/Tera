import { LocalInsiderCard } from './LocalInsiderCard';
import { LocalInsider, ExperienceType } from '../types';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { RotateCcw, Sparkles, Users, FileText } from 'lucide-react';

interface ResultsViewProps {
  insiders: LocalInsider[];
  experienceType: ExperienceType;
  onRestart: () => void;
  onViewProfile: (insider: LocalInsider) => void;
  onBookNow: (insider: LocalInsider) => void;
}

export function ResultsView({ insiders, experienceType, onRestart, onViewProfile, onBookNow }: ResultsViewProps) {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
          <Sparkles className="h-8 w-8 text-primary" />
        </div>
        <h1 className="mb-3">Your Perfect Local Insiders</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
          Based on your preferences, we've found {insiders.length} Local Insiders that match your style. 
          Each insider has been carefully selected to provide you with an unforgettable experience.
        </p>
        <Badge variant="secondary" className="inline-flex items-center gap-2">
          {experienceType === 'in-person' ? (
            <>
              <Users className="h-4 w-4" />
              In-Person Experience
            </>
          ) : (
            <>
              <FileText className="h-4 w-4" />
              Custom Itinerary
            </>
          )}
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {insiders.map((insider) => (
          <LocalInsiderCard 
            key={insider.id} 
            insider={insider}
            onViewProfile={onViewProfile}
            onBookNow={onBookNow}
          />
        ))}
      </div>

      <div className="text-center">
        <Button variant="outline" onClick={onRestart}>
          <RotateCcw className="mr-2 h-4 w-4" />
          Start Over
        </Button>
      </div>
    </div>
  );
}
