import { useState } from 'react';
import { EducationalContent } from '../types';
import { educationalContent as initialContent } from '../data/mockData';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { CheckCircle2 } from 'lucide-react';

interface BuildingScreenProps {
  onBack: () => void;
}

export function BuildingScreen({ onBack }: BuildingScreenProps) {
  const [content, setContent] = useState<EducationalContent[]>(initialContent);
  const [selectedContent, setSelectedContent] = useState<EducationalContent | null>(null);

  const registerProgress = (contentId: number) => {
    setContent(content.map(item => 
      item.id === contentId ? { ...item, progressRegistered: true } : item
    ));
    if (selectedContent?.id === contentId) {
      setSelectedContent({ ...selectedContent, progressRegistered: true });
    }
  };

  if (selectedContent) {
    return (
      <div className="space-y-4">
        <Card className="overflow-hidden border-gray-200">
          <div className="aspect-video relative bg-gray-100">
            <ImageWithFallback
              src={selectedContent.imageUrl}
              alt={selectedContent.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-5 space-y-4">
            <div className="flex items-start justify-between gap-3">
              <h2>{selectedContent.title}</h2>
              {selectedContent.progressRegistered && (
                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0" />
              )}
            </div>
            
            <p className="text-gray-600">
              {selectedContent.description}
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <p className="text-gray-700 leading-relaxed">
                {selectedContent.content}
              </p>
            </div>
            
            <div>
              <h3 className="mb-3">Ejemplos Prácticos</h3>
              <ul className="space-y-2">
                {selectedContent.examples.map((example, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-gray-700">{example}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Button 
              onClick={() => registerProgress(selectedContent.id)}
              disabled={selectedContent.progressRegistered}
              className="w-full"
            >
              {selectedContent.progressRegistered ? 'Progreso Registrado ✓' : 'Registrar Progreso'}
            </Button>
            
            <Button 
              onClick={() => setSelectedContent(null)}
              variant="outline"
              className="w-full"
            >
              Volver a Contenidos
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
        <p className="text-purple-900">
          Explora contenidos educativos ampliados para construir una cultura vial responsable.
        </p>
      </div>

      <div className="space-y-4">
        {content.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedContent(item)}
            className="w-full"
          >
            <Card className="overflow-hidden hover:shadow-md transition-shadow border-gray-200">
              <div className="aspect-video relative bg-gray-100">
                <ImageWithFallback
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-left">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3>{item.title}</h3>
                  {item.progressRegistered && (
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                  )}
                </div>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            </Card>
          </button>
        ))}
      </div>
    </div>
  );
}
