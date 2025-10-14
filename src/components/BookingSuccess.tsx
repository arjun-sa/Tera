import { Button } from './ui/button';
import { CheckCircle } from 'lucide-react';

interface BookingSuccessProps {
  onGoHome: () => void;
  onManageBookings: () => void;
}

export function BookingSuccess({ onGoHome, onManageBookings }: BookingSuccessProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
          <CheckCircle className="h-10 w-10 text-primary" />
        </div>
        
        <h1 className="mb-4">Booking Requested!</h1>
        
        <p className="text-muted-foreground mb-8">
          Your booking request has been sent successfully. The Local Insider will review your request 
          and get back to you within 24 hours via email.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button size="lg" onClick={onGoHome}>
            Go Home
          </Button>
          <Button size="lg" variant="outline" onClick={onManageBookings}>
            Manage Bookings
          </Button>
        </div>
      </div>
    </div>
  );
}
