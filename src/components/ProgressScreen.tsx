import { QuizResult } from '../types';
import { Card } from './ui/card';
import { CheckCircle2, TrendingUp, Award } from 'lucide-react';

interface ProgressScreenProps {
  completedGuides: number;
  totalGuides: number;
  registeredContent: number;
  totalContent: number;
  quizResults: QuizResult[];
}

export function ProgressScreen({ 
  completedGuides, 
  totalGuides, 
  registeredContent, 
  totalContent,
  quizResults 
}: ProgressScreenProps) {
  const guidesPercentage = Math.round((completedGuides / totalGuides) * 100);
  const contentPercentage = Math.round((registeredContent / totalContent) * 100);
  const overallPercentage = Math.round(
    ((completedGuides + registeredContent + quizResults.length) / 
    (totalGuides + totalContent + 3)) * 100
  );

  return (
    <div className="space-y-4">
      {/* Overall Progress */}
      <Card className="p-5 bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0">
        <div className="flex items-center gap-4">
          <div className="bg-white/20 p-3 rounded-full">
            <TrendingUp className="h-8 w-8" />
          </div>
          <div className="flex-1">
            <p className="text-blue-100 mb-1">Progreso General</p>
            <p>{overallPercentage}% Completado</p>
          </div>
        </div>
        <div className="mt-4 w-full bg-blue-400/30 rounded-full h-3">
          <div 
            className="bg-white h-3 rounded-full transition-all duration-300"
            style={{ width: `${overallPercentage}%` }}
          />
        </div>
      </Card>

      {/* Guides Progress */}
      <Card className="p-5 border-gray-200">
        <div className="flex items-center gap-3 mb-3">
          <CheckCircle2 className="h-6 w-6 text-green-600" />
          <h3>Guías Educativas</h3>
        </div>
        <p className="text-gray-600 mb-3">
          {completedGuides} de {totalGuides} guías completadas
        </p>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-green-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${guidesPercentage}%` }}
          />
        </div>
      </Card>

      {/* Content Progress */}
      <Card className="p-5 border-gray-200">
        <div className="flex items-center gap-3 mb-3">
          <CheckCircle2 className="h-6 w-6 text-purple-600" />
          <h3>Contenidos Educativos</h3>
        </div>
        <p className="text-gray-600 mb-3">
          {registeredContent} de {totalContent} contenidos completados
        </p>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-purple-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${contentPercentage}%` }}
          />
        </div>
      </Card>

      {/* Quiz Results */}
      <div>
        <h3 className="mb-3">Últimas Evaluaciones</h3>
        {quizResults.length === 0 ? (
          <Card className="p-5 border-gray-200 text-center">
            <p className="text-gray-500">Aún no has completado ninguna evaluación</p>
          </Card>
        ) : (
          <div className="space-y-3">
            {quizResults.map((result) => (
              <Card key={result.quizId} className="p-4 border-gray-200">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <h3 className="mb-1">{result.quizTitle}</h3>
                    <p className="text-sm text-gray-600">{result.date}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-yellow-500" />
                      <span className="text-blue-600">{result.score}/{result.total}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Motivational Message */}
      {overallPercentage > 0 && (
        <Card className="p-5 bg-green-50 border-green-200">
          <p className="text-green-900 text-center">
            {overallPercentage < 30 && '¡Buen comienzo! Sigue aprendiendo.'}
            {overallPercentage >= 30 && overallPercentage < 70 && '¡Vas por buen camino! Continúa así.'}
            {overallPercentage >= 70 && '¡Excelente progreso! Eres un ejemplo de educación vial.'}
          </p>
        </Card>
      )}
    </div>
  );
}
