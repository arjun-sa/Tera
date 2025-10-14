import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { Progress } from './ui/progress';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';

type SelectionMode = 'single' | 'multiple' | 'exact';

interface Question {
  id: string;
  question: string;
  description?: string;
  selectionMode: SelectionMode;
  exactCount?: number; // For 'exact' mode
  options: { value: string; label: string; description?: string }[];
}

const questions: Question[] = [
  {
    id: 'travelStyle',
    question: 'What is your preferred travel style?',
    description: 'Select all that apply',
    selectionMode: 'multiple',
    options: [
      { value: 'adventure', label: 'Adventure Seeker', description: 'Thrilling activities and exploration' },
      { value: 'cultural', label: 'Cultural Explorer', description: 'Museums, history, and local traditions' },
      { value: 'relaxation', label: 'Relaxation Focused', description: 'Leisurely pace and comfort' },
      { value: 'foodie', label: 'Food & Culinary', description: 'Local cuisine and food experiences' }
    ]
  },
  {
    id: 'interests',
    question: 'Which interests you most?',
    description: 'Select exactly 5 options',
    selectionMode: 'exact',
    exactCount: 5,
    options: [
      { value: 'history', label: 'Local History & Landmarks' },
      { value: 'streetArt', label: 'Street Art & Murals' },
      { value: 'civilRights', label: 'Civil Rights & Heritage Tours' },
      { value: 'architecture', label: 'Architecture & Urban Design' },
      { value: 'festivals', label: 'Cultural Festivals' },
      { value: 'volunteering', label: 'Community Volunteering' },
      { value: 'coffee', label: 'Coffee & Cafés' },
      { value: 'southern', label: 'Southern Cuisine' },
      { value: 'streetFood', label: 'Street Food & Food Halls' },
      { value: 'vegan', label: 'Vegan / Vegetarian Spots' },
      { value: 'wine', label: 'Wine & Brewery Tours' },
      { value: 'international', label: 'International Cuisine' },
      { value: 'liveMusic', label: 'Live Music & Jazz' },
      { value: 'nightlife', label: 'Nightlife & Lounges' },
      { value: 'theater', label: 'Theater & Performing Arts' },
      { value: 'film', label: 'Film & Creative Media' },
      { value: 'wellness', label: 'Wellness & Fitness' },
      { value: 'farmers', label: 'Farmers Markets' },
      { value: 'photography', label: 'Photography Walks' },
      { value: 'thrift', label: 'Thrift & Vintage Shopping' },
      { value: 'artisans', label: 'Local Artisans & Maker Markets' },
      { value: 'fashion', label: 'Boutique & Streetwear Fashion' },
      { value: 'language', label: 'Language Exchange' },
      { value: 'family', label: 'Family-Friendly Activities' },
      { value: 'lgbtq', label: 'LGBTQ+ Friendly Events' },
      { value: 'petFriendly', label: 'Pet-Friendly Adventures' },
      { value: 'hiddenGems', label: 'Hidden Gems & Secret Spots' },
      { value: 'tech', label: 'Tech & Innovation' },
      { value: 'sports', label: 'Sports & Game Day Experiences' },
      { value: 'education', label: 'Education & Learning Tours' },
      { value: 'sustainability', label: 'Sustainability & Eco-Travel' }
    ]
  },
  {
    id: 'budget',
    question: 'What\'s your budget range?',
    selectionMode: 'single',
    options: [
      { value: 'budget', label: 'Budget Friendly', description: 'Under $50 per person' },
      { value: 'moderate', label: 'Moderate', description: '$50-$150 per person' },
      { value: 'premium', label: 'Premium', description: '$150-$300 per person' },
      { value: 'luxury', label: 'Luxury', description: 'Above $300 per person' }
    ]
  },
  {
    id: 'groupSize',
    question: 'How many people in your group?',
    selectionMode: 'single',
    options: [
      { value: 'solo', label: 'Solo Traveler', description: 'Just me' },
      { value: 'couple', label: 'Couple', description: '2 people' },
      { value: 'small', label: 'Small Group', description: '3-5 people' },
      { value: 'large', label: 'Large Group', description: '6+ people' }
    ]
  },
  {
    id: 'children',
    question: 'Are any children coming?',
    selectionMode: 'single',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' }
    ]
  },
  {
    id: 'mobility',
    question: 'What\'s your preferred way to get around?',
    description: 'Select all that apply',
    selectionMode: 'multiple',
    options: [
      { value: 'walking', label: 'Walking', description: 'Exploring on foot at a comfortable pace' },
      { value: 'micromobility', label: 'Bikes & Scooters', description: 'E-bikes, scooters, or similar options' },
      { value: 'shortDrive', label: 'Short Drives', description: 'Quick 5-15 minute car rides between spots' },
      { value: 'longDrive', label: 'Scenic Drives', description: 'Longer drives to reach destinations' }
    ]
  },
  {
    id: 'languages',
    question: 'What languages do you speak?',
    description: 'Select all that apply',
    selectionMode: 'multiple',
    options: [
      { value: 'english', label: 'English' },
      { value: 'spanish', label: 'Spanish' },
      { value: 'french', label: 'French' },
      { value: 'german', label: 'German' },
      { value: 'italian', label: 'Italian' },
      { value: 'portuguese', label: 'Portuguese' },
      { value: 'mandarin', label: 'Mandarin Chinese' },
      { value: 'japanese', label: 'Japanese' },
      { value: 'korean', label: 'Korean' },
      { value: 'arabic', label: 'Arabic' },
      { value: 'hindi', label: 'Hindi' },
      { value: 'russian', label: 'Russian' }
    ]
  }
];

interface QuestionnaireFormProps {
  onComplete: (answers: Record<string, string | string[]>) => void;
}

export function QuestionnaireForm({ onComplete }: QuestionnaireFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  const handleSingleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion.id]: value });
  };

  const handleMultipleAnswer = (value: string, checked: boolean) => {
    const currentAnswers = (answers[currentQuestion.id] as string[] | undefined) || [];
    
    if (checked) {
      // Add the value
      const newAnswers = [...currentAnswers, value];
      
      // If exact mode and we're at the limit, prevent adding more
      if (currentQuestion.selectionMode === 'exact' && currentQuestion.exactCount) {
        if (newAnswers.length <= currentQuestion.exactCount) {
          setAnswers({ ...answers, [currentQuestion.id]: newAnswers });
        }
      } else {
        setAnswers({ ...answers, [currentQuestion.id]: newAnswers });
      }
    } else {
      // Remove the value
      setAnswers({ 
        ...answers, 
        [currentQuestion.id]: currentAnswers.filter(v => v !== value) 
      });
    }
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(answers);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    const answer = answers[currentQuestion.id];
    
    if (!answer) return false;
    
    if (currentQuestion.selectionMode === 'single') {
      return typeof answer === 'string' && answer.length > 0;
    }
    
    if (currentQuestion.selectionMode === 'multiple') {
      return Array.isArray(answer) && answer.length > 0;
    }
    
    if (currentQuestion.selectionMode === 'exact') {
      return Array.isArray(answer) && answer.length === currentQuestion.exactCount;
    }
    
    return false;
  };

  const getSelectedCount = () => {
    const answer = answers[currentQuestion.id];
    if (Array.isArray(answer)) {
      return answer.length;
    }
    return 0;
  };

  const isOptionChecked = (value: string) => {
    const answer = answers[currentQuestion.id];
    if (Array.isArray(answer)) {
      return answer.includes(value);
    }
    return false;
  };

  const isOptionDisabled = (value: string) => {
    if (currentQuestion.selectionMode === 'exact' && currentQuestion.exactCount) {
      const selectedCount = getSelectedCount();
      return selectedCount >= currentQuestion.exactCount && !isOptionChecked(value);
    }
    return false;
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-muted-foreground">
            Question {currentStep + 1} of {questions.length}
          </span>
          <span className="text-muted-foreground">{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <Card className="p-8 mb-6">
        <div className="mb-6">
          <h2 className="mb-2">{currentQuestion.question}</h2>
          {currentQuestion.description && (
            <p className="text-muted-foreground">{currentQuestion.description}</p>
          )}
          {currentQuestion.selectionMode === 'exact' && currentQuestion.exactCount && (
            <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 bg-accent rounded-full">
              <span className="text-accent-foreground">
                {getSelectedCount()} / {currentQuestion.exactCount} selected
              </span>
              {getSelectedCount() === currentQuestion.exactCount && (
                <Check className="h-4 w-4 text-primary" />
              )}
            </div>
          )}
        </div>
        
        {currentQuestion.selectionMode === 'single' ? (
          <RadioGroup
            value={answers[currentQuestion.id] as string}
            onValueChange={handleSingleAnswer}
            className="space-y-3"
          >
            {currentQuestion.options.map((option) => (
              <div
                key={option.value}
                className="flex items-start space-x-3 rounded-lg border-2 border-border p-4 hover:border-primary/50 transition-colors cursor-pointer"
                onClick={() => handleSingleAnswer(option.value)}
              >
                <RadioGroupItem value={option.value} id={option.value} className="mt-0.5" />
                <div className="flex-1">
                  <Label htmlFor={option.value} className="cursor-pointer block">
                    {option.label}
                  </Label>
                  {option.description && (
                    <p className="text-muted-foreground mt-1">{option.description}</p>
                  )}
                </div>
              </div>
            ))}
          </RadioGroup>
        ) : (
          <div className={`grid gap-3 ${currentQuestion.options.length > 12 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
            {currentQuestion.options.map((option) => {
              const checked = isOptionChecked(option.value);
              const disabled = isOptionDisabled(option.value);
              
              return (
                <div
                  key={option.value}
                  className={`flex items-start space-x-3 rounded-lg border-2 p-4 transition-colors ${
                    checked 
                      ? 'border-primary bg-accent/50' 
                      : disabled 
                        ? 'border-border opacity-50 cursor-not-allowed'
                        : 'border-border hover:border-primary/50 cursor-pointer'
                  }`}
                  onClick={() => !disabled && handleMultipleAnswer(option.value, !checked)}
                >
                  <Checkbox
                    id={option.value}
                    checked={checked}
                    disabled={disabled}
                    onCheckedChange={(isChecked) => handleMultipleAnswer(option.value, isChecked as boolean)}
                    className="mt-0.5"
                  />
                  <div className="flex-1">
                    <Label 
                      htmlFor={option.value} 
                      className={`block ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      {option.label}
                    </Label>
                    {option.description && (
                      <p className="text-muted-foreground mt-1">{option.description}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </Card>

      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={handleBack}
          disabled={currentStep === 0}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        
        <Button
          onClick={handleNext}
          disabled={!canProceed()}
        >
          {currentStep === questions.length - 1 ? 'See Results' : 'Next'}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
