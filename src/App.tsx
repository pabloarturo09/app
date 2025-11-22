import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { WelcomeScreen } from './components/WelcomeScreen';
import { HomeScreen } from './components/HomeScreen';
import { RegulationsScreen } from './components/RegulationsScreen';
import { GuidesScreen } from './components/GuidesScreen';
import { BuildingScreen } from './components/BuildingScreen';
import { QuizzesScreen } from './components/QuizzesScreen';
import { ProgressScreen } from './components/ProgressScreen';
import { TipsScreen } from './components/TipsScreen';
import { QuizResult } from './types';
import { guides as initialGuides, educationalContent as initialContent } from './data/mockData';

type Screen = 'home' | 'regulations' | 'guides' | 'building' | 'quizzes' | 'progress' | 'tips';

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [quizResults, setQuizResults] = useState<QuizResult[]>([]);
  const [completedGuidesCount, setCompletedGuidesCount] = useState(0);
  const [registeredContentCount, setRegisteredContentCount] = useState(0);

  // Update progress counts
  useEffect(() => {
    const updateCounts = () => {
      const guides = initialGuides.filter(g => g.completed).length;
      const content = initialContent.filter(c => c.progressRegistered).length;
      setCompletedGuidesCount(guides);
      setRegisteredContentCount(content);
    };
    updateCounts();
  }, [currentScreen]);

  const handleNavigate = (screen: string) => {
    setCurrentScreen(screen as Screen);
  };

  const handleBack = () => {
    setCurrentScreen('home');
  };

  const handleTabChange = (tab: 'home' | 'progress' | 'tips') => {
    setCurrentScreen(tab);
  };

  const handleQuizComplete = (result: QuizResult) => {
    setQuizResults(prev => [result, ...prev].slice(0, 5)); // Keep last 5 results
  };

  const handleStartApp = () => {
    setShowWelcome(false);
  };

  const handleShowWelcome = () => {
    setShowWelcome(true);
    setCurrentScreen('home');
  };

  const getHeaderTitle = () => {
    switch (currentScreen) {
      case 'home':
        return 'TransVía';
      case 'regulations':
        return 'Reglamento de Tránsito';
      case 'guides':
        return 'Guías Educativas';
      case 'building':
        return 'Construyendo mi Educación Vial';
      case 'quizzes':
        return 'Autoevaluación';
      case 'progress':
        return 'Mi Progreso';
      case 'tips':
        return 'Consejos';
      default:
        return 'TransVía';
    }
  };

  const showBackButton = !['home', 'progress', 'tips'].includes(currentScreen);

  // Show welcome screen first
  if (showWelcome) {
    return <WelcomeScreen onStart={handleStartApp} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        title={getHeaderTitle()} 
        onBack={currentScreen !== 'home' && currentScreen !== 'progress' && currentScreen !== 'tips' ? handleBack : undefined}
        onExit={currentScreen === 'home' ? handleShowWelcome : undefined}
      />
      
      <main className="max-w-md mx-auto px-4 py-6 pb-24">
        {currentScreen === 'home' && (
          <HomeScreen onNavigate={handleNavigate} />
        )}
        
        {currentScreen === 'regulations' && (
          <RegulationsScreen onBack={handleBack} />
        )}
        
        {currentScreen === 'guides' && (
          <GuidesScreen onBack={handleBack} />
        )}
        
        {currentScreen === 'building' && (
          <BuildingScreen onBack={handleBack} />
        )}
        
        {currentScreen === 'quizzes' && (
          <QuizzesScreen 
            onBack={handleBack}
            onQuizComplete={handleQuizComplete}
          />
        )}
        
        {currentScreen === 'progress' && (
          <ProgressScreen 
            completedGuides={completedGuidesCount}
            totalGuides={initialGuides.length}
            registeredContent={registeredContentCount}
            totalContent={initialContent.length}
            quizResults={quizResults}
          />
        )}
        
        {currentScreen === 'tips' && (
          <TipsScreen onShowWelcome={handleShowWelcome} />
        )}
      </main>
      
      <BottomNav 
        activeTab={['home', 'progress', 'tips'].includes(currentScreen) ? currentScreen as 'home' | 'progress' | 'tips' : 'home'}
        onTabChange={handleTabChange}
      />
    </div>
  );
}