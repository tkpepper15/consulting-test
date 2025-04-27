import React from 'react';

type TestimonialAvatarProps = {
  name: string;
  colorIndex: number;
};

// Purple shades for avatar backgrounds
const bgColors = [
  'bg-purple-500/90',
  'bg-indigo-500/90',
  'bg-violet-500/90',
  'bg-fuchsia-500/90',
  'bg-purple-600/90',
  'bg-indigo-600/90',
];

const TestimonialAvatar: React.FC<TestimonialAvatarProps> = ({ name, colorIndex }) => {
  // Get initials from the name
  const initials = name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase();
  
  // Use a prime number multiplication for more variation
  const bgColor = bgColors[(colorIndex * 17) % bgColors.length];

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