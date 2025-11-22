import { BookOpen, GraduationCap, ClipboardCheck, FileText } from 'lucide-react';
import { Card } from './ui/card';

interface HomeScreenProps {
  onNavigate: (screen: string) => void;
}

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  return (
    <div className="space-y-6">
      {/* Hero Card */}
      <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 border-0">
        <h2 className="mb-2">TransVía</h2>
        <p className="text-blue-50">
          Aprende las normas de tránsito y conviértete en un conductor responsable
        </p>
      </Card>

      {/* Main Feature Cards */}
      <div className="space-y-4">
        <button
          onClick={() => onNavigate('regulations')}
          className="w-full"
        >
          <Card className="p-5 hover:shadow-md transition-shadow border-gray-200 text-left">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="mb-1">Consultar Reglamento por Artículos</h3>
                <p className="text-gray-600">Accede al reglamento de tránsito completo</p>
              </div>
            </div>
          </Card>
        </button>

        <button
          onClick={() => onNavigate('guides')}
          className="w-full"
        >
          <Card className="p-5 hover:shadow-md transition-shadow border-gray-200 text-left">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <BookOpen className="h-6 w-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="mb-1">Guías Educativas Breves</h3>
                <p className="text-gray-600">Fichas rápidas sobre temas importantes</p>
              </div>
            </div>
          </Card>
        </button>

        <button
          onClick={() => onNavigate('building')}
          className="w-full"
        >
          <Card className="p-5 hover:shadow-md transition-shadow border-gray-200 text-left">
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <GraduationCap className="h-6 w-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="mb-1">Construyendo mi Educación Vial</h3>
                <p className="text-gray-600">Contenidos ampliados y casos prácticos</p>
              </div>
            </div>
          </Card>
        </button>

        <button
          onClick={() => onNavigate('quizzes')}
          className="w-full"
        >
          <Card className="p-5 hover:shadow-md transition-shadow border-gray-200 text-left">
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-lg">
                <ClipboardCheck className="h-6 w-6 text-orange-600" />
              </div>
              <div className="flex-1">
                <h3 className="mb-1">Autoevaluación</h3>
                <p className="text-gray-600">Pon a prueba tus conocimientos</p>
              </div>
            </div>
          </Card>
        </button>
      </div>
    </div>
  );
}