import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface TypewriterEffectProps {
  words: string[];
  className?: string;
}

export function TypewriterEffect({ words, className }: TypewriterEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    const typeSpeed = isDeleting ? 50 : 100; // Faster when deleting

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === word) {
        // Wait a bit before starting to delete
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        setCurrentText(prev => {
          if (isDeleting) {
            return prev.substring(0, prev.length - 1);
          } else {
            return word.substring(0, prev.length + 1);
          }
        });
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentText, currentWordIndex, isDeleting, words]);

  return (
    <div className={cn("flex items-center", className)}>
      <span className="mr-2">I'm a</span>
      <span className="text-purple-500 font-semibold relative">
        {currentText}
        <span className="absolute right-[-8px] top-0 h-full w-[2px] bg-purple-500 animate-blink"></span>
      </span>
    </div>
  );
}