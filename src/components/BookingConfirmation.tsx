import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Calendar, Clock, MapPin, User as UserIcon, Users, FileText, DollarSign } from 'lucide-react';
import { BookingData, User } from '../types';

interface BookingConfirmationProps {
  booking: BookingData;
  user: User;
  onConfirm: () => void;
}

export function BookingConfirmation({ booking, user, onConfirm }: BookingConfirmationProps) {
  const { insider, experienceType, date, startTime, duration } = booking;

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const calculateEndTime = (start: string, hours: number) => {
    const [h, m] = start.split(':').map(Number);
    const endHour = (h + hours) % 24;
    return `${endHour.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      <div className="text-center mb-8">
        <h1 className="mb-3">Confirm Your Booking</h1>
        <p className="text-muted-foreground">
          Please review your booking details before submitting your request
        </p>
      </div>

      <Card className="p-8 mb-6">
        <div className="flex items-center gap-4 mb-6">
          <img
            src={insider.image}
            alt={insider.name}
            className="w-20 h-20 rounded-full object-cover"
          />
          <div className="flex-1">
            <h3 className="mb-1">{insider.name}</h3>
            <p className="text-muted-foreground">{insider.specialty}</p>
          </div>
          <Badge variant="secondary" className="flex items-center gap-1">
            {experienceType === 'in-person' ? (
              <>
                <Users className="h-3 w-3" />
                In-Person
              </>
            ) : (
              <>
                <FileText className="h-3 w-3" />
                Itinerary
              </>
            )}
          </Badge>
        </div>

        <Separator className="my-6" />

        <div className="space-y-4 mb-6">
          <h3>Booking Details</h3>
          
          <div className="grid gap-4">
            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="text-muted-foreground">Date</p>
                <p>{formatDate(date)}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="text-muted-foreground">Time</p>
                <p>{startTime} - {calculateEndTime(startTime, duration)} ({duration} hours)</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="text-muted-foreground">Location</p>
                <p>{insider.location}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <DollarSign className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="text-muted-foreground">Price Range</p>
                <p>{insider.priceRange}</p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="space-y-4">
          <h3>Your Information</h3>
          
          <div className="flex items-start gap-3">
            <UserIcon className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="text-muted-foreground">Name</p>
              <p>{user.name}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <UserIcon className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="text-muted-foreground">Email</p>
              <p>{user.email}</p>
            </div>
          </div>
        </div>
      </Card>

      <div className="bg-accent/50 rounded-lg p-4 mb-6">
        <p className="text-muted-foreground">
          Your booking request will be sent to {insider.name}. They will confirm availability 
          and reach out to you via email to finalize the details.
        </p>
      </div>

      <Button size="lg" className="w-full" onClick={onConfirm}>
        Request Booking
      </Button>
    </div>
  );
}
