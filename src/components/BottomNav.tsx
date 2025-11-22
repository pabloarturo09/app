import { Home, TrendingUp, Lightbulb } from 'lucide-react';

interface BottomNavProps {
  activeTab: 'home' | 'progress' | 'tips';
  onTabChange: (tab: 'home' | 'progress' | 'tips') => void;
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 safe-area-bottom">
      <div className="max-w-md mx-auto flex justify-around items-center h-16">
        <button
          onClick={() => onTabChange('home')}
          className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
            activeTab === 'home' ? 'text-blue-600' : 'text-gray-500'
          }`}
        >
          <Home className={`h-6 w-6 ${activeTab === 'home' ? 'fill-blue-600' : ''}`} />
          <span className="text-xs mt-1">Inicio</span>
        </button>
        
        <button
          onClick={() => onTabChange('progress')}
          className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
            activeTab === 'progress' ? 'text-blue-600' : 'text-gray-500'
          }`}
        >
          <TrendingUp className="h-6 w-6" />
          <span className="text-xs mt-1">Progreso</span>
        </button>
        
        <button
          onClick={() => onTabChange('tips')}
          className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
            activeTab === 'tips' ? 'text-blue-600' : 'text-gray-500'
          }`}
        >
          <Lightbulb className={`h-6 w-6 ${activeTab === 'tips' ? 'fill-yellow-400' : ''}`} />
          <span className="text-xs mt-1">Tips</span>
        </button>
      </div>
    </nav>
  );
}