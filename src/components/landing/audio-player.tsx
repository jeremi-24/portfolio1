
"use client";

import { useState, useRef, useEffect } from 'react';
import { Music, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Autoplay is often blocked, so we let the user initiate it.
  }, []);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.error("Audio playback failed:", error);
          // Handle cases where autoplay is blocked programmatically
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="https://www.chosic.com/wp-content/uploads/2021/07/The-Jazz-Piano.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className="fixed top-1/2 -translate-y-1/2 left-5 z-50">
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={togglePlayPause}
                        className="bg-background/50 backdrop-blur-sm"
                        aria-label={isPlaying ? "Pause music" : "Play music"}
                    >
                        {isPlaying ? <Music className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
                    </Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                    <p>{isPlaying ? "Couper la musique" : "Lancer la musique"}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
      </div>
    </>
  );
}
