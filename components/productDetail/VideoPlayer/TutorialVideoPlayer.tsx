"use client";

import React, { useState } from "react";

type FeatureProps = {
  text: string;
};

const Feature: React.FC<FeatureProps> = ({ text }) => {
  return (
    <div className="flex items-center gap-3 bg-white border border-neutral-200 px-5 py-3 rounded-2xl shadow-sm">
      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
      <span className="font-medium text-neutral-700">{text}</span>
    </div>
  );
};

const TutorialVideoPlayer: React.FC = () => {
  const [playing, setPlaying] = useState<boolean>(false);

  // CAMBIÁ ESTE ID
  const youtubeVideoId = "dQw4w9WgXcQ";

  return (
    <section className="w-full bg-[#f6f7f9] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative grid lg:grid-cols-2 gap-10 items-center bg-white rounded-[32px] p-6 lg:p-10 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
          {/* Glow */}
          <div className="absolute top-[-150px] right-[-150px] w-[400px] h-[400px] bg-primary/50 blur-3xl rounded-full" />

          {/* LEFT CONTENT */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold mb-6">
              ✨ Mirá cómo se arma
            </div>

            <h2 className="font-serif text-5xl lg:text-6xl font-extrabold leading-tight tracking-[-2px] text-neutral-900 mb-6">
              Descubrí el armado de la cuna paso a paso
            </h2>

            <p className="text-lg text-neutral-600 leading-relaxed mb-8 max-w-xl">
              Observá paso a paso el armado de tu cuna como instructivo para que
              no tengas que renegar buscando dónde van las piezas.
            </p>

            <div className="flex flex-wrap gap-4">
              <Feature text="Video HD" />
              <Feature text="Tutorial completo" />
            </div>
          </div>

          {/* VIDEO */}
          <div className="relative z-10 h-[500px]">
            <div className="relative h-full rounded-[28px] overflow-hidden group shadow-[0_25px_60px_rgba(0,0,0,0.2)] transition duration-500 hover:-translate-y-1 bg-black">
              {/* THUMBNAIL */}
              {!playing && (
                <>
                  <img
                    src={`https://img.youtube.com/vi/${youtubeVideoId}/maxresdefault.jpg`}
                    alt="Preview"
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10" />

                  <button
                    type="button"
                    onClick={() => setPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-2xl hover:scale-110 transition duration-300">
                      <svg
                        width="38"
                        height="38"
                        viewBox="0 0 24 24"
                        fill="white"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </button>

                  {/* INFO */}
                  <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md rounded-2xl px-5 py-4 flex items-center justify-between text-white">
                    <div>
                      <p className="font-semibold text-sm lg:text-base">
                        Armado de la cuna premium
                      </p>

                      <p className="text-xs lg:text-sm text-white/70">
                        Tutorial completo de instalación
                      </p>
                    </div>

                    <div className="bg-white/10 px-4 py-2 rounded-xl text-sm font-semibold">
                      YouTube
                    </div>
                  </div>
                </>
              )}

              {/* IFRAME */}
              {playing && (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0`}
                  title="Tutorial armado de cuna"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutorialVideoPlayer;
