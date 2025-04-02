import React from 'react';

type TeamAvatarProps = {
  name: string;
  colorIndex: number;
};

// Color palette that matches the site's aesthetic
const bgColors = [
  'bg-primary/80',
  'bg-accent/80',
  'bg-emerald-600/80',
  'bg-rose-600/80',
];

const TeamAvatar: React.FC<TeamAvatarProps> = ({ name, colorIndex }) => {
  // Get initials from the name
  const initials = name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase();
  
  // Use modulo to wrap around the array
  const bgColor = bgColors[colorIndex % bgColors.length];

  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <div className={`absolute inset-0 ${bgColor}`}></div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[length:10px_10px] opacity-30 z-[5]"></div>
      
      <span className="font-sans font-bold text-white text-4xl z-10 relative">{initials}</span>
    </div>
  );
};

export default TeamAvatar; 