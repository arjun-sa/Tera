import { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { BecomeInsider } from './components/BecomeInsider';
import { WelcomeScreen } from './components/WelcomeScreen';
import { QuestionnaireForm } from './components/QuestionnaireForm';
import { ExperienceTypeSelection } from './components/ExperienceTypeSelection';
import { ResultsView } from './components/ResultsView';
import { InsiderProfile } from './components/InsiderProfile';
import { BookingSchedule } from './components/BookingSchedule';
import { AuthPrompt } from './components/AuthPrompt';
import { BookingConfirmation } from './components/BookingConfirmation';
import { BookingSuccess } from './components/BookingSuccess';
import { LocalInsider, ExperienceType, BookingData, User } from './types';

// Mock Local Insider data
const allInsiders: LocalInsider[] = [
  {
    id: '1',
    name: 'Maria Rodriguez',
    image: 'https://images.unsplash.com/photo-1659100945967-f28a8d25705e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0b3VyJTIwZ3VpZGV8ZW58MXx8fHwxNzYwMzgxODQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
    reviews: 127,
    specialty: 'Cultural & Historical Experiences',
    location: 'Barcelona, Spain',
    languages: ['English', 'Spanish', 'French'],
    priceRange: '$80-$150/person',
    experience: '8 years',
    description: 'Passionate about sharing Barcelona\'s rich history and vibrant culture. Specializing in Gothic Quarter tours and Gaudí architecture.',
    bio: 'As a Barcelona native with a degree in Art History, I\'ve spent the last 8 years helping travelers discover the hidden stories of this incredible city. My experiences range from intimate walking tours to comprehensive multi-day itineraries that showcase the best of Catalan culture.',
    achievements: [
      'Certified Tour Guide by Barcelona Tourism Board',
      'Featured in National Geographic Traveler',
      'Fluent in 3 languages with cultural expertise',
      'Over 1000+ successful tours conducted'
    ],
    matchScore: 95,
    tags: ['cultural', 'architecture', 'moderate', 'premium']
  },
  {
    id: '2',
    name: 'James Chen',
    image: 'https://images.unsplash.com/photo-1572062417488-eacf5dda8250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRseSUyMGd1aWRlJTIwc21pbGluZ3xlbnwxfHx8fDE3NjAzODE4NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.8,
    reviews: 89,
    specialty: 'Food & Culinary Adventures',
    location: 'Tokyo, Japan',
    languages: ['English', 'Japanese', 'Mandarin'],
    priceRange: '$100-$200/person',
    experience: '6 years',
    description: 'Food enthusiast offering authentic culinary experiences. From street food to high-end dining, discover Tokyo\'s incredible food scene.',
    bio: 'Born and raised in Tokyo, I\'m a certified sommelier and food critic who has turned my passion into helping others experience the extraordinary culinary landscape of Japan. I take pride in connecting travelers with authentic local flavors.',
    achievements: [
      'Certified Sake Sommelier',
      'Published food writer for Tokyo Foodie Magazine',
      'Partnerships with 50+ local restaurants',
      'Specialized in dietary accommodations'
    ],
    matchScore: 92,
    tags: ['foodie', 'cultural', 'premium']
  },
  {
    id: '3',
    name: 'Sophie Laurent',
    image: 'https://images.unsplash.com/photo-1715405155652-3147e1db15e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMGd1aWRlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYwMzgxODQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 5.0,
    reviews: 156,
    specialty: 'Art & Museum Experiences',
    location: 'Paris, France',
    languages: ['English', 'French', 'Italian'],
    priceRange: '$120-$250/person',
    experience: '12 years',
    description: 'Art historian specializing in Louvre and Impressionist art. Skip the lines and experience art like never before.',
    bio: 'With a PhD in Art History from the Sorbonne, I\'ve dedicated my career to making art accessible and engaging for everyone. My tours are designed to bring paintings and sculptures to life through compelling storytelling.',
    achievements: [
      'PhD in Art History from the Sorbonne',
      'Former Louvre Museum Curator',
      'Published author of "Paris Through Art"',
      'VIP access to private collections'
    ],
    matchScore: 90,
    tags: ['cultural', 'art', 'premium', 'luxury']
  },
  {
    id: '4',
    name: 'Alex Thompson',
    image: 'https://images.unsplash.com/photo-1588167906159-299db7b6ee81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjBndWlkZSUyMG91dGRvb3J8ZW58MXx8fHwxNzYwMjkwOTEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
    reviews: 94,
    specialty: 'Adventure & Outdoor Expeditions',
    location: 'Queenstown, New Zealand',
    languages: ['English'],
    priceRange: '$150-$300/person',
    experience: '10 years',
    description: 'Adventure specialist offering thrilling experiences. Hiking, bungee jumping, and exploring New Zealand\'s stunning landscapes.',
    bio: 'As a certified wilderness guide and adventure sports instructor, I\'ve been helping thrill-seekers explore New Zealand\'s breathtaking landscapes for a decade. Safety is my top priority, but unforgettable memories are guaranteed.',
    achievements: [
      'Certified Wilderness First Responder',
      'Licensed Adventure Tourism Operator',
      'Mountain Safety Council Qualified',
      '2000+ successful adventure experiences'
    ],
    matchScore: 88,
    tags: ['adventure', 'nature', 'premium', 'luxury']
  },
  {
    id: '5',
    name: 'Isabella Romano',
    image: 'https://images.unsplash.com/photo-1758275682464-ddd906bf34fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZ3VpZGUlMjBjaGVmfGVufDF8fHx8MTc2MDM4MTg0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.8,
    reviews: 112,
    specialty: 'Food & Wine Experiences',
    location: 'Tuscany, Italy',
    languages: ['English', 'Italian'],
    priceRange: '$90-$180/person',
    experience: '7 years',
    description: 'Wine sommelier and food guide. Experience authentic Tuscan cuisine, vineyard tours, and cooking classes.',
    bio: 'Growing up in a family of winemakers and chefs, I learned the art of Italian cuisine from an early age. Today, I share this heritage through immersive culinary experiences that celebrate Tuscan traditions.',
    achievements: [
      'WSET Level 3 Wine Certification',
      'Professional Chef Training',
      'Family vineyard with 200-year history',
      'Featured in Food & Wine Magazine'
    ],
    matchScore: 87,
    tags: ['foodie', 'cultural', 'relaxation', 'moderate', 'premium']
  },
  {
    id: '6',
    name: 'David O\'Brien',
    image: 'https://images.unsplash.com/photo-1548095779-26dbc38010ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBndWlkZSUyMGhpa2luZ3xlbnwxfHx8fDE3NjAzODE4NDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
    reviews: 78,
    specialty: 'Nature & Wildlife Experiences',
    location: 'Irish Countryside',
    languages: ['English', 'Irish'],
    priceRange: '$60-$120/person',
    experience: '5 years',
    description: 'Nature lover offering scenic tours of Ireland\'s stunning landscapes. From Cliffs of Moher to hidden coastal gems.',
    bio: 'As an environmental scientist and photographer, I\'ve explored every corner of Ireland\'s wild beauty. My tours combine ecological knowledge with stunning photography opportunities, perfect for nature enthusiasts.',
    achievements: [
      'Environmental Science Degree',
      'Professional Wildlife Photographer',
      'Conservation Ireland Certified Guide',
      'Published in National Geographic'
    ],
    matchScore: 85,
    tags: ['nature', 'adventure', 'relaxation', 'budget', 'moderate']
  }
];

type AppScreen =
  | 'landing'
  | 'becomeInsider'
  | 'welcome'
  | 'questionnaire'
  | 'experienceType'
  | 'results'
  | 'profile'
  | 'booking'
  | 'auth'
  | 'confirmation'
  | 'success';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>('landing');
  const [userAnswers, setUserAnswers] = useState<Record<string, string | string[]>>({});
  const [experienceType, setExperienceType] = useState<ExperienceType | null>(null);
  const [recommendedInsiders, setRecommendedInsiders] = useState<LocalInsider[]>([]);
  const [selectedInsider, setSelectedInsider] = useState<LocalInsider | null>(null);
  const [bookingData, setBookingData] = useState<BookingData | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const handleGetStarted = () => {
    setCurrentScreen('welcome');
  };

  const handleBecomeInsider = () => {
    setCurrentScreen('becomeInsider');
  };

  const handleStart = () => {
    setCurrentScreen('questionnaire');
  };

  const handleQuestionnaireComplete = (answers: Record<string, string | string[]>) => {
    setUserAnswers(answers);
    setCurrentScreen('experienceType');
  };

  const handleExperienceTypeSelect = (type: ExperienceType) => {
    setExperienceType(type);
    
    // Simple matching algorithm
    const scoredInsiders = allInsiders.map(insider => {
      let score = 70; // Base score
      
      // Match travel style (now can be multiple)
      const travelStyles = Array.isArray(userAnswers.travelStyle) 
        ? userAnswers.travelStyle 
        : [userAnswers.travelStyle];
      if (travelStyles.some(style => insider.tags.includes(style))) {
        score += 10;
      }
      
      // Match interests (now can be multiple)
      const interests = Array.isArray(userAnswers.interests) 
        ? userAnswers.interests 
        : [userAnswers.interests];
      if (interests.some(interest => insider.tags.includes(interest))) {
        score += 10;
      }
      
      // Match budget (single selection)
      if (insider.tags.includes(userAnswers.budget as string)) {
        score += 10;
      }
      
      return {
        ...insider,
        matchScore: Math.min(score, 95)
      };
    });
    
    // Sort by match score and take top 6
    const topInsiders = scoredInsiders
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, 6);
    
    setRecommendedInsiders(topInsiders);
    setCurrentScreen('results');
  };

  const handleViewProfile = (insider: LocalInsider) => {
    setSelectedInsider(insider);
    setCurrentScreen('profile');
  };

  const handleBookNow = (insider: LocalInsider) => {
    setSelectedInsider(insider);
    setCurrentScreen('booking');
  };

  const handleBackToResults = () => {
    setCurrentScreen('results');
    setSelectedInsider(null);
  };

  const handleBookingSubmit = (date: Date, startTime: string, duration: number) => {
    if (selectedInsider && experienceType) {
      setBookingData({
        insider: selectedInsider,
        experienceType,
        date,
        startTime,
        duration
      });
      setCurrentScreen('auth');
    }
  };

  const handleAuth = (authUser: User) => {
    setUser(authUser);
    setCurrentScreen('confirmation');
  };

  const handleConfirmBooking = () => {
    setCurrentScreen('success');
  };

  const handleGoHome = () => {
    // Reset all state
    setCurrentScreen('landing');
    setUserAnswers({});
    setExperienceType(null);
    setRecommendedInsiders([]);
    setSelectedInsider(null);
    setBookingData(null);
    setUser(null);
  };

  const handleManageBookings = () => {
    // In a real app, this would navigate to a bookings management page
    alert('Manage Bookings - Coming Soon!');
  };

  return (
    <div className="min-h-screen bg-background">
      {currentScreen === 'landing' && (
        <LandingPage
          onGetStarted={handleGetStarted}
          onBecomeInsider={handleBecomeInsider}
        />
      )}

      {currentScreen === 'becomeInsider' && (
        <BecomeInsider onBack={handleGoHome} />
      )}

      {currentScreen === 'welcome' && (
        <div className="py-12">
          <WelcomeScreen onStart={handleStart} />
        </div>
      )}
      
      {currentScreen === 'questionnaire' && (
        <div className="py-12">
          <QuestionnaireForm onComplete={handleQuestionnaireComplete} />
        </div>
      )}
      
      {currentScreen === 'experienceType' && (
        <div className="py-12">
          <ExperienceTypeSelection onSelect={handleExperienceTypeSelect} />
        </div>
      )}
      
      {currentScreen === 'results' && experienceType && (
        <div className="py-12">
          <ResultsView 
            insiders={recommendedInsiders}
            experienceType={experienceType}
            onRestart={handleGoHome}
            onViewProfile={handleViewProfile}
            onBookNow={handleBookNow}
          />
        </div>
      )}
      
      {currentScreen === 'profile' && selectedInsider && (
        <div className="py-12">
          <InsiderProfile
            insider={selectedInsider}
            onBack={handleBackToResults}
            onBookNow={() => handleBookNow(selectedInsider)}
          />
        </div>
      )}
      
      {currentScreen === 'booking' && selectedInsider && experienceType && (
        <div className="py-12">
          <BookingSchedule
            insider={selectedInsider}
            experienceType={experienceType}
            onBack={handleBackToResults}
            onSubmit={handleBookingSubmit}
          />
        </div>
      )}
      
      {currentScreen === 'auth' && (
        <div className="py-12">
          <AuthPrompt onAuth={handleAuth} />
        </div>
      )}
      
      {currentScreen === 'confirmation' && bookingData && user && (
        <div className="py-12">
          <BookingConfirmation
            booking={bookingData}
            user={user}
            onConfirm={handleConfirmBooking}
          />
        </div>
      )}
      
      {currentScreen === 'success' && (
        <div className="py-12">
          <BookingSuccess
            onGoHome={handleGoHome}
            onManageBookings={handleManageBookings}
          />
        </div>
      )}
    </div>
  );
}