import { useState } from 'react';
import { Card } from './ui/card';
import { tips } from '../data/tipsData';
import { ChevronLeft, ChevronRight, Lightbulb } from 'lucide-react';

interface TipsScreenProps {
  onShowWelcome: () => void;
}

export function TipsScreen({ onShowWelcome }: TipsScreenProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % tips.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + tips.length) % tips.length);
  };

  const currentTip = tips[currentIndex];

  return (
    <div className="space-y-6">
      {/* Header Info */}
      <Card className="p-4 bg-yellow-50 border-yellow-200">
        <div className="flex items-start gap-3">
          <Lightbulb className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="mb-1">Tips Rápidos de Seguridad Vial</h3>
            <p className="text-gray-700">
              Consejos prácticos para una conducción más segura
            </p>
          </div>
        </div>
      </Card>

      {/* Carousel Counter */}
      <div className="text-center">
        <p className="text-gray-600">
          Tip {currentIndex + 1} de {tips.length}
        </p>
      </div>

      {/* Tip Card - Main Carousel Content */}
      <div className="relative">
        <Card className={`overflow-hidden border-0 shadow-xl bg-gradient-to-br ${currentTip.color} text-white min-h-[400px] flex flex-col justify-between`}>
          <div className="p-8 flex-1 flex flex-col justify-center text-center">
            {/* Icon */}
            <div className="mb-6">
              <span className="text-7xl">{currentTip.icon}</span>
            </div>
            
            {/* Title */}
            <h2 className="mb-6 text-white">{currentTip.title}</h2>
            
            {/* Content */}
            <p className="text-white/95 text-lg leading-relaxed">
              {currentTip.content}
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between items-center p-6 bg-black/10">
            <button
              onClick={handlePrev}
              className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors backdrop-blur-sm"
              aria-label="Tip anterior"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {tips.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all ${
                    index === currentIndex
                      ? 'w-8 h-2 bg-white rounded-full'
                      : 'w-2 h-2 bg-white/50 rounded-full'
                  }`}
                  aria-label={`Ir al tip ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors backdrop-blur-sm"
              aria-label="Siguiente tip"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          </div>
        </Card>

        {/* Swipe hint */}
        <div className="mt-4 text-center text-sm text-gray-500">
          Usa las flechas para ver más tips
        </div>
      </div>

      {/* Quick Tips List */}
      <div className="space-y-3">
        <h3>Todos los Tips</h3>
        <div className="space-y-2">
          {tips.map((tip, index) => (
            <button
              key={tip.id}
              onClick={() => setCurrentIndex(index)}
              className="w-full"
            >
              <Card
                className={`p-4 text-left transition-all ${
                  index === currentIndex
                    ? 'border-2 border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl flex-shrink-0">{tip.icon}</span>
                  <div className="flex-1 min-w-0">
                    <h4 className="mb-1 text-sm">{tip.title}</h4>
                    <p className="text-sm text-gray-600 line-clamp-1">
                      {tip.content}
                    </p>
                  </div>
                  {index === currentIndex && (
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                  )}
                </div>
              </Card>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
