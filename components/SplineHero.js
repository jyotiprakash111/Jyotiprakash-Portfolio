import React, { useEffect, useRef, useState } from 'react';
import { animate } from 'animejs';

const ambientQuotes = [
  'Build what matters.',
  'Ideas into reliable products.',
  'Simple experiences, strong systems.',
  'Thoughtful code, better outcomes.',
];

const SplineHero = () => {
  const fallbackRef = useRef(null);
  const [activeQuoteIndex, setActiveQuoteIndex] = useState(0);
  const scene = process.env.NEXT_PUBLIC_SPLINE_SCENE_URL;

  useEffect(() => {
    if (scene || !fallbackRef.current) return undefined;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return undefined;

    const orbs = fallbackRef.current.querySelectorAll('.hero-ambient-orb');
    const animations = Array.from(orbs).map((orb, index) =>
      animate(orb, {
        y: index % 2 === 0 ? [-14, 14] : [12, -12],
        x: index % 2 === 0 ? [-8, 10] : [10, -6],
        scale: [1, 1.08, 0.96, 1],
        rotate: index % 2 === 0 ? [0, 8, -6, 0] : [0, -10, 5, 0],
        duration: 4200 + index * 700,
        loop: true,
        ease: 'inOutSine',
      })
    );

    return () => {
      animations.forEach((instance) => instance.pause());
    };
  }, [scene]);

  useEffect(() => {
    if (scene) return undefined;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return undefined;

    const intervalId = window.setInterval(() => {
      setActiveQuoteIndex((currentIndex) => (currentIndex + 1) % ambientQuotes.length);
    }, 2600);

    return () => window.clearInterval(intervalId);
  }, [scene]);

  return (
    <div className="hero-visual" data-hero-item>
      <div className="hero-visual-shell">
        {scene ? (
          <iframe
            className="hero-spline-canvas"
            src={scene}
            title="Interactive Spline scene"
            frameBorder="0"
            allow="fullscreen; xr-spatial-tracking"
          />
        ) : (
          <div ref={fallbackRef} className="hero-ambient" aria-hidden="true">
            <div className="hero-ambient-grid" />
            <div className="hero-ambient-orb hero-ambient-orb--primary" />
            <div className="hero-ambient-orb hero-ambient-orb--secondary" />
            <div className="hero-ambient-orb hero-ambient-orb--tertiary" />
            <div className="hero-ambient-copy">
              <span key={activeQuoteIndex} className="hero-ambient-quote">{ambientQuotes[activeQuoteIndex]}</span>
              <span className="hero-ambient-kicker">"Code with purpose, design for people."</span>
              {/* <strong>Lenis + Anime.js</strong>
              <p>Add a `NEXT_PUBLIC_SPLINE_SCENE_URL` to enable a live Spline scene here.</p> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SplineHero;