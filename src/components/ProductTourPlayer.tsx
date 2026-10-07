"use client";

import React, { useRef, useState, useEffect } from "react";
import { Player, PlayerRef } from "@remotion/player";
import { OptiPayMasterTour } from "@/remotion/MasterTour/OptiPayMasterTour";
import { Play, Pause, RotateCcw, Sparkles, Film, ArrowRight, Eye, Receipt, Wrench, Printer } from "lucide-react";

export function ProductTourPlayer() {
  const playerRef = useRef<PlayerRef>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const chapters = [
    { title: "Overview", frame: 0, icon: Film },
    { title: "Clinical Rx", frame: 240, icon: Eye },
    { title: "Split GST POS", frame: 660, icon: Receipt },
    { title: "Lab Slips", frame: 1080, icon: Wrench },
    { title: "Thermal & WhatsApp", frame: 1440, icon: Printer },
  ];

  const handleJumpToChapter = (frame: number, idx: number) => {
    if (playerRef.current) {
      playerRef.current.seekTo(frame);
      if (!isPlaying) {
        playerRef.current.play();
        setIsPlaying(true);
      }
      setActiveChapter(idx);
    }
  };

  const togglePlay = () => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pause();
        setIsPlaying(false);
      } else {
        playerRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section id="tour-video" className="py-20 bg-slate-50/60 dark:bg-[#07080B] border-t border-slate-200/80 dark:border-white/5 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-sky-950/60 border border-blue-200/70 dark:border-sky-800/60 text-blue-700 dark:text-sky-300 text-xs font-bold mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive 60-Second Video Walkthrough</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Watch OptiPay in Action
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            See how prescriptions, split GST, and workshop slips operate live in 60 seconds.
            Click any chapter below to jump straight to that feature.
          </p>
        </div>

        {/* Chapter Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {chapters.map((chap, idx) => {
            const Icon = chap.icon;
            const isSelected = activeChapter === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => handleJumpToChapter(chap.frame, idx)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isSelected
                    ? "bg-blue-600 text-white shadow-sm ring-2 ring-blue-500/30 dark:bg-sky-500 dark:text-white"
                    : "bg-white dark:bg-[#11131B] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:border-slate-300"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{chap.title}</span>
              </button>
            );
          })}
        </div>

        {/* Video Theater Frame */}
        <div className="relative max-w-5xl mx-auto rounded-3xl bg-slate-900 p-2 sm:p-3 shadow-2xl border border-slate-800 overflow-hidden">
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#08090C] flex items-center justify-center">
            {mounted ? (
              <Player
                ref={playerRef}
                component={OptiPayMasterTour}
                durationInFrames={1800}
                compositionWidth={1920}
                compositionHeight={1080}
                fps={30}
                acknowledgeRemotionLicense
                style={{
                  width: "100%",
                  height: "100%",
                }}
                controls={false}
                autoPlay={false}
                loop
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-slate-500 bg-[#0A0D14]">
                <Film className="w-12 h-12 text-slate-600 mb-3 animate-pulse" />
                <span className="text-sm font-mono">Loading 60fps Remotion Theater...</span>
              </div>
            )}

            {/* Play Overlay Button if Paused */}
            {mounted && !isPlaying && (
              <div
                onClick={togglePlay}
                className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center cursor-pointer group"
              >
                <div className="w-20 h-20 rounded-full bg-blue-600/90 group-hover:bg-blue-600 text-white flex items-center justify-center shadow-xl group-hover:scale-105 transition-all">
                  <Play className="w-8 h-8 ml-1" />
                </div>
              </div>
            )}
          </div>

          {/* Player Bottom Control Bar */}
          <div className="p-3 sm:p-4 bg-slate-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={togglePlay}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer"
                title={isPlaying ? "Pause Video" : "Play Video"}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>

              <button
                type="button"
                onClick={() => handleJumpToChapter(0, 0)}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer"
                title="Restart from beginning"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                00:60 Full HD Product Walkthrough
              </span>
            </div>

            <a
              href="#demo-form"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-xs font-bold text-white transition-colors cursor-pointer"
            >
              <span>Book A 10-Min Live Demo</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
