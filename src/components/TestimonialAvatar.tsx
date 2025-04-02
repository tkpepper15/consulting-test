import React from 'react';

type TestimonialAvatarProps = {
  name: string;
  colorIndex: number;
};

// Color palette that matches the site's aesthetic but with different hues for testimonials
const bgColors = [
  'bg-emerald-500/80',
  'bg-blue-500/80',
  'bg-amber-500/80',
  'bg-rose-500/80',
];

const TestimonialAvatar: React.FC<TestimonialAvatarProps> = ({ name, colorIndex }) => {
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
      <div className={`absolute inset-0 ${bgColor} rounded-full`}></div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[length:4px_4px] opacity-30 z-[5]"></div>
      
      <span className="font-sans font-bold text-white text-lg z-10 relative">{initials}</span>
    </div>
  );
};

export default TestimonialAvatar; 