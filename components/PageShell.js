import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { animate } from 'animejs';

const PageShell = ({ children }) => {
  const router = useRouter();
  const curtainRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const curtain = curtainRef.current;
    const content = contentRef.current;

    if (!curtain || !content) return undefined;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      curtain.style.opacity = '0';
      content.style.opacity = '1';
      content.style.transform = 'none';
      return undefined;
    }

    const loadCurtain = animate(curtain, {
      scaleY: [1, 0],
      transformOrigin: ['top center', 'top center'],
      duration: 1100,
      delay: 120,
      ease: 'inOutExpo',
    });

    const loadContent = animate(content, {
      opacity: [0, 1],
      y: [28, 0],
      duration: 900,
      delay: 280,
      ease: 'outExpo',
    });

    const handleRouteStart = () => {
      animate(curtain, {
        scaleY: [0, 1],
        transformOrigin: ['bottom center', 'bottom center'],
        duration: 450,
        ease: 'inOutExpo',
      });
    };

    const handleRouteDone = () => {
      animate(content, {
        opacity: [0, 1],
        y: [20, 0],
        duration: 700,
        delay: 120,
        ease: 'outExpo',
      });

      animate(curtain, {
        scaleY: [1, 0],
        transformOrigin: ['top center', 'top center'],
        duration: 650,
        ease: 'inOutExpo',
      });
    };

    router.events.on('routeChangeStart', handleRouteStart);
    router.events.on('routeChangeComplete', handleRouteDone);
    router.events.on('routeChangeError', handleRouteDone);

    return () => {
      loadCurtain.pause();
      loadContent.pause();
      router.events.off('routeChangeStart', handleRouteStart);
      router.events.off('routeChangeComplete', handleRouteDone);
      router.events.off('routeChangeError', handleRouteDone);
    };
  }, [router.events]);

  return (
    <div className="page-shell">
      <div ref={curtainRef} className="page-shell__curtain" aria-hidden="true" />
      <div ref={contentRef} className="page-shell__content">
        {children}
      </div>
    </div>
  );
};

export default PageShell;