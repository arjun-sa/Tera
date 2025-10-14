import { Button } from './ui/button';

interface NavigationBarProps {
  onBookWithTera?: () => void;
  onBecomeInsider?: () => void;
}

export function NavigationBar({ onBookWithTera, onBecomeInsider }: NavigationBarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex w-full items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <span
              className="text-2xl font-normal text-foreground tracking-tight"
              style={{ fontFamily: '"Lexend Tera", sans-serif' }}
            >
              TERA
            </span>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-3">
            <Button
              onClick={onBookWithTera}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all duration-300 font-medium px-6 py-2"
            >
              Book with Tera
            </Button>
            <Button
              onClick={onBecomeInsider}
              className="bg-white hover:bg-gray-50 text-primary border-2 border-primary shadow-md hover:shadow-lg transition-all duration-300 font-medium px-6 py-2"
            >
              Become an Insider
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
