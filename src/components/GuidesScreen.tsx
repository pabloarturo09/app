import { useState } from 'react';
import { Guide } from '../types';
import { guides as initialGuides } from '../data/mockData';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { CheckCircle2, Circle } from 'lucide-react';

interface GuidesScreenProps {
  onBack: () => void;
}

export function GuidesScreen({ onBack }: GuidesScreenProps) {
  const [guides, setGuides] = useState<Guide[]>(initialGuides);
  const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null);

  const toggleComplete = (guideId: number) => {
    setGuides(guides.map(guide => 
      guide.id === guideId ? { ...guide, completed: !guide.completed } : guide
    ));
    if (selectedGuide?.id === guideId) {
      setSelectedGuide({ ...selectedGuide, completed: !selectedGuide.completed });
    }
  };

  if (selectedGuide) {
    return (
      <div className="space-y-4">
        <Card className="overflow-hidden border-gray-200">
          <div className="aspect-video relative bg-gray-100">
            <ImageWithFallback
              src={selectedGuide.imageUrl}
              alt={selectedGuide.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-5 space-y-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="mb-1">{selectedGuide.title}</h2>
                <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  {selectedGuide.topic}
                </span>
              </div>
              {selectedGuide.completed && (
                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0" />
              )}
            </div>
            
            <p className="text-gray-700 leading-relaxed">
              {selectedGuide.content}
            </p>
            
            <div className="flex gap-3">
              <Button 
                onClick={() => toggleComplete(selectedGuide.id)}
                variant={selectedGuide.completed ? "outline" : "default"}
                className="flex-1"
              >
                {selectedGuide.completed ? 'Marcar como Pendiente' : 'Marcar como Completada'}
              </Button>
            </div>
            
            <Button 
              onClick={() => setSelectedGuide(null)}
              variant="outline"
              className="w-full"
            >
              Volver a la Lista
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  const completedCount = guides.filter(g => g.completed).length;

  return (
    <div className="space-y-4">
      <Card className="p-4 bg-green-50 border-green-200">
        <p className="text-green-900">
          <span>{completedCount} de {guides.length} guías completadas</span>
        </p>
      </Card>

      <div className="space-y-3">
        {guides.map((guide) => (
          <button
            key={guide.id}
            onClick={() => setSelectedGuide(guide)}
            className="w-full"
          >
            <Card className="p-4 hover:shadow-md transition-shadow border-gray-200">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  {guide.completed ? (
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                  ) : (
                    <Circle className="h-6 w-6 text-gray-300" />
                  )}
                </div>
                <div className="flex-1 text-left">
                  <h3 className="mb-1">{guide.title}</h3>
                  <span className="inline-block bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">
                    {guide.topic}
                  </span>
                </div>
              </div>
            </Card>
          </button>
        ))}
      </div>
    </div>
  );
}
