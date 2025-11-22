import { ArrowLeft, LogOut } from 'lucide-react';
import { Logo } from './Logo';

interface HeaderProps {
  title: string;
  onBack?: () => void;
  onExit?: () => void;
}

export function Header({ title, onBack, onExit }: HeaderProps) {
  const isHome = title === 'TransVía';

  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200 safe-area-top">
      <div className="max-w-md mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center">
          {onBack && (
            <button
              onClick={onBack}
              className="mr-3 p-2 hover:bg-gray-100 rounded-full transition-colors -ml-2"
              aria-label="Volver"
            >
              <ArrowLeft className="h-5 w-5 text-gray-700" />
            </button>
          )}
          
          {isHome ? (
            <div className="flex items-center gap-2">
              <Logo size="small" showText={true} textColor="text-gray-900" />
            </div>
          ) : (
            <h1 className="text-gray-900">{title}</h1>
          )}
        </div>

        {/* Exit button on home screen */}
        {isHome && onExit && (
          <button
            onClick={onExit}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Salir"
          >
            <LogOut className="h-5 w-5 text-gray-700" />
          </button>
        )}
      </div>
    </header>
  );
}