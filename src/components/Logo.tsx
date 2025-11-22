interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
  textColor?: string;
}

export function Logo({ size = 'medium', showText = true, textColor = 'text-white' }: LogoProps) {
  const sizes = {
    small: {
      container: 'w-8 h-12',
      circle: 'w-2 h-2',
      gap: 'space-y-1',
      padding: 'p-1',
      text: 'text-sm'
    },
    medium: {
      container: 'w-12 h-16',
      circle: 'w-3 h-3',
      gap: 'space-y-1.5',
      padding: 'p-1.5',
      text: 'text-base'
    },
    large: {
      container: 'w-16 h-24',
      circle: 'w-4 h-4',
      gap: 'space-y-2',
      padding: 'p-2',
      text: 'text-lg'
    }
  };

  const currentSize = sizes[size];

  return (
    <div className="flex items-center gap-2">
      {/* Traffic Light Icon */}
      <div className={`bg-white/20 backdrop-blur-sm rounded-lg ${currentSize.padding} border border-white/20 ${currentSize.container}`}>
        <div className={currentSize.gap}>
          <div className={`${currentSize.circle} rounded-full bg-red-400/80 mx-auto`} />
          <div className={`${currentSize.circle} rounded-full bg-yellow-400/80 mx-auto`} />
          <div className={`${currentSize.circle} rounded-full bg-green-400 mx-auto`} />
        </div>
      </div>
      
      {/* App Name */}
      {showText && (
        <span className={`${textColor} ${currentSize.text}`}>TransVía</span>
      )}
    </div>
  );
}
