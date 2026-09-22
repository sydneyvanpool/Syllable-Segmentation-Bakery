import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-auto py-5 px-4 bg-amber-100/70 border-t-2 border-amber-200 text-center">
      <div className="max-w-md mx-auto flex flex-col items-center justify-center gap-0.5">
        <div className="text-[16px] font-semibold text-amber-950 flex items-center justify-center gap-1.5">
          <span>🧁</span>
          <span>Syllable Bakery</span>
        </div>
        <div className="text-xs text-amber-800/80 font-medium">
          Syllable Segmentation & Phonics Practice
        </div>
      </div>
    </footer>
  );
};
