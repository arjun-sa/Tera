import { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Calendar } from './ui/calendar';
import { Badge } from './ui/badge';
import { ArrowLeft, Calendar as CalendarIcon, Clock } from 'lucide-react';
import { LocalInsider, ExperienceType } from '../types';

interface BookingScheduleProps {
  insider: LocalInsider;
  experienceType: ExperienceType;
  onBack: () => void;
  onSubmit: (date: Date, startTime: string, duration: number) => void;
}

const timeSlots = [
  '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', 
  '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
];

export function BookingSchedule({ insider, experienceType, onBack, onSubmit }: BookingScheduleProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [startTime, setStartTime] = useState<string>('');
  const [duration, setDuration] = useState<number>(2); // Default 2 hours
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartIndex, setDragStartIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleTimeSlotClick = (time: string, index: number) => {
    if (!startTime) {
      setStartTime(time);
      setDragStartIndex(index);
      setDuration(2);
    } else {
      setStartTime('');
      setDragStartIndex(null);
      setDuration(2);
    }
  };

  const handleMouseDown = (time: string, index: number) => {
    setStartTime(time);
    setDragStartIndex(index);
    setIsDragging(true);
    setDuration(2);
  };

  const handleMouseEnter = (index: number) => {
    if (isDragging && dragStartIndex !== null) {
      const newDuration = Math.abs(index - dragStartIndex) + 1;
      if (newDuration >= 2 && newDuration <= 8) {
        setDuration(newDuration);
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };
    
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  const isSlotSelected = (index: number) => {
    if (dragStartIndex === null) return false;
    return index >= dragStartIndex && index < dragStartIndex + duration;
  };

  const canSubmit = selectedDate && startTime && duration >= 2 && duration <= 8;

  const handleSubmit = () => {
    if (canSubmit && selectedDate) {
      onSubmit(selectedDate, startTime, duration);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <Button variant="ghost" onClick={onBack} className="mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>

      <div className="mb-8">
        <h1 className="mb-2">Book with {insider.name}</h1>
        <p className="text-muted-foreground">
          {experienceType === 'in-person' 
            ? 'Select a time from their available schedule' 
            : 'Choose your preferred dates for the custom itinerary'}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-6">
          <h3 className="mb-4 flex items-center gap-2">
            <CalendarIcon className="h-5 w-5 text-primary" />
            Select Date
          </h3>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            disabled={(date) => date < new Date()}
            className="rounded-md border"
          />
        </Card>

        <Card className="p-6">
          <h3 className="mb-4 flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            Select Time & Duration
          </h3>
          <p className="text-muted-foreground mb-4">
            Click a time to start, then drag down to extend (2-8 hours)
          </p>
          
          <div 
            ref={containerRef}
            className="space-y-2 max-h-96 overflow-y-auto pr-2"
          >
            {timeSlots.map((time, index) => (
              <button
                key={time}
                className={`w-full p-3 rounded-lg border-2 transition-all text-left ${
                  isSlotSelected(index)
                    ? 'border-primary bg-primary/10'
                    : 'border-border hover:border-primary/50 bg-background'
                }`}
                onMouseDown={() => handleMouseDown(time, index)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseUp={handleMouseUp}
                onClick={() => handleTimeSlotClick(time, index)}
              >
                <div className="flex items-center justify-between">
                  <span>{time}</span>
                  {isSlotSelected(index) && index === dragStartIndex && (
                    <Badge variant="secondary">{duration}h</Badge>
                  )}
                </div>
              </button>
            ))}
          </div>

          {startTime && (
            <div className="mt-4 p-4 bg-accent/50 rounded-lg">
              <p className="text-muted-foreground">Selected slot:</p>
              <p>{startTime} - {duration} hours</p>
            </div>
          )}
        </Card>
      </div>

      <div className="mt-8 flex justify-end">
        <Button 
          size="lg" 
          disabled={!canSubmit}
          onClick={handleSubmit}
        >
          Continue to Login
        </Button>
      </div>
    </div>
  );
}
