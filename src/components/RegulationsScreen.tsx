import { useState } from 'react';
import { Article } from '../types';
import { articles } from '../data/mockData';
import { Card } from './ui/card';
import { ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';

interface RegulationsScreenProps {
  onBack: () => void;
}

export function RegulationsScreen({ onBack }: RegulationsScreenProps) {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  if (selectedArticle) {
    return (
      <div className="space-y-4">
        <Card className="overflow-hidden border-gray-200">
          <div className="aspect-video relative bg-gray-100">
            <ImageWithFallback
              src={selectedArticle.imageUrl}
              alt={selectedArticle.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-5 space-y-4">
            <h2>{selectedArticle.title}</h2>
            <p className="text-gray-700 leading-relaxed">
              {selectedArticle.content}
            </p>
            <Button 
              onClick={() => setSelectedArticle(null)}
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

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <p className="text-blue-900">
          Selecciona un artículo para conocer más detalles sobre el reglamento de tránsito.
        </p>
      </div>

      <div className="space-y-3">
        {articles.map((article) => (
          <button
            key={article.id}
            onClick={() => setSelectedArticle(article)}
            className="w-full"
          >
            <Card className="p-4 hover:shadow-md transition-shadow border-gray-200">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 flex-1 text-left">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                    {article.id}
                  </div>
                  <span className="text-gray-900">{article.title}</span>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400 flex-shrink-0" />
              </div>
            </Card>
          </button>
        ))}
      </div>
    </div>
  );
}
