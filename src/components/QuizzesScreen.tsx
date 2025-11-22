import { useState } from 'react';
import { Quiz, Question, QuizResult } from '../types';
import { quizzes } from '../data/mockData';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ChevronRight } from 'lucide-react';

interface QuizzesScreenProps {
  onBack: () => void;
  onQuizComplete: (result: QuizResult) => void;
}

export function QuizzesScreen({ onBack, onQuizComplete }: QuizzesScreenProps) {
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleStartQuiz = (quiz: Quiz) => {
    setSelectedQuiz(quiz);
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setShowResults(false);
  };

  const handleSelectAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < (selectedQuiz?.questions.length || 0) - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleFinishQuiz = () => {
    if (selectedQuiz) {
      const result: QuizResult = {
        quizId: selectedQuiz.id,
        quizTitle: selectedQuiz.title,
        score: 8,
        total: 10,
        date: new Date().toLocaleDateString('es-MX')
      };
      onQuizComplete(result);
      setShowResults(true);
    }
  };

  const handleBackToList = () => {
    setSelectedQuiz(null);
    setShowResults(false);
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
  };

  // Results Screen
  if (showResults && selectedQuiz) {
    return (
      <div className="space-y-4">
        <Card className="p-6 text-center border-gray-200">
          <div className="space-y-4">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <span className="text-green-600">✓</span>
            </div>
            
            <h2>¡Evaluación Completada!</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-2">Tu calificación</p>
              <p className="text-blue-600">8/10</p>
            </div>
            
            <p className="text-green-600">
              ¡Buen trabajo! Continúa aprendiendo.
            </p>
            
            <Button 
              onClick={handleBackToList}
              className="w-full"
            >
              Volver a Evaluaciones
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  // Quiz Screen
  if (selectedQuiz) {
    const currentQuestion = selectedQuiz.questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / selectedQuiz.questions.length) * 100;

    return (
      <div className="space-y-4">
        <Card className="p-4 border-gray-200">
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm text-gray-600">
              <span>Pregunta {currentQuestionIndex + 1} de {selectedQuiz.questions.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </Card>

        <Card className="p-5 border-gray-200">
          <h3 className="mb-6">{currentQuestion.question}</h3>
          
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelectAnswer(index)}
                className={`w-full p-4 rounded-lg border-2 text-left transition-colors ${
                  selectedAnswers[currentQuestionIndex] === index
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                    selectedAnswers[currentQuestionIndex] === index
                      ? 'border-blue-600 bg-blue-600'
                      : 'border-gray-300'
                  }`}>
                    {selectedAnswers[currentQuestionIndex] === index && (
                      <div className="w-2 h-2 bg-white rounded-full" />
                    )}
                  </div>
                  <span>{option}</span>
                </div>
              </button>
            ))}
          </div>
        </Card>

        <div className="flex gap-3">
          <Button
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
            variant="outline"
            className="flex-1"
          >
            Anterior
          </Button>
          
          {currentQuestionIndex < selectedQuiz.questions.length - 1 ? (
            <Button
              onClick={handleNextQuestion}
              disabled={selectedAnswers[currentQuestionIndex] === undefined}
              className="flex-1"
            >
              Siguiente
            </Button>
          ) : (
            <Button
              onClick={handleFinishQuiz}
              disabled={selectedAnswers.length !== selectedQuiz.questions.length}
              className="flex-1"
            >
              Finalizar Evaluación
            </Button>
          )}
        </div>

        <Button 
          onClick={handleBackToList}
          variant="outline"
          className="w-full"
        >
          Cancelar
        </Button>
      </div>
    );
  }

  // Quiz List
  return (
    <div className="space-y-4">
      <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
        <p className="text-orange-900">
          Pon a prueba tus conocimientos sobre educación vial con estas evaluaciones.
        </p>
      </div>

      <div className="space-y-3">
        {quizzes.map((quiz) => (
          <button
            key={quiz.id}
            onClick={() => handleStartQuiz(quiz)}
            className="w-full"
          >
            <Card className="p-4 hover:shadow-md transition-shadow border-gray-200">
              <div className="flex items-center justify-between gap-3">
                <div className="text-left flex-1">
                  <h3 className="mb-1">{quiz.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="bg-gray-100 px-2 py-1 rounded">{quiz.topic}</span>
                    <span>•</span>
                    <span>{quiz.questions.length} preguntas</span>
                  </div>
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
