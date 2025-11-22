import { Button } from './ui/button';
import { Navigation, Shield, BookOpen } from 'lucide-react';
import { Logo } from './Logo';

interface WelcomeScreenProps {
  onStart: () => void;
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Logo Section */}
        <div className="space-y-6">
          <div className="flex justify-center">
            <Logo size="large" showText={false} textColor="text-white" />
          </div>
          
          <h1 className="text-white">TransVía</h1>
        </div>

        {/* Welcome Message */}
        <div className="space-y-4">
          <p className="text-white/90 text-lg leading-relaxed">
            ¡Bienvenido! Aprende y refuerza tu educación vial de forma sencilla
          </p>
          <p className="text-white/70">
            Tu camino hacia una conducción más segura y responsable
          </p>
        </div>

        {/* Features Icons */}
        <div className="flex justify-center gap-8 py-4">
          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 mx-auto mb-2 w-14 h-14 flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <p className="text-xs text-white/80">Aprende</p>
          </div>
          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 mx-auto mb-2 w-14 h-14 flex items-center justify-center">
              <Navigation className="h-6 w-6 text-white" />
            </div>
            <p className="text-xs text-white/80">Practica</p>
          </div>
          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 mx-auto mb-2 w-14 h-14 flex items-center justify-center">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <p className="text-xs text-white/80">Progresa</p>
          </div>
        </div>

        {/* Start Button */}
        <div className="pt-4">
          <Button
            onClick={onStart}
            size="lg"
            className="w-full bg-white text-blue-600 hover:bg-blue-50 shadow-xl"
          >
            Comenzar
          </Button>
        </div>

        {/* Version Info */}
        <p className="text-white/50 text-sm">Versión 1.0.0</p>
      </div>
    </div>
  );
}