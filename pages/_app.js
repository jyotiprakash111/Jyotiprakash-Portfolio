import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Lenis from 'lenis';
import { animate, stagger } from 'animejs';
import PageShell from '../components/PageShell';
import '../styles/index.css';
import '../styles/App.css';
import '../styles/Chatbot.css';
import '../styles/Contact.css';
import '../styles/Footer.css';
import '../styles/Resume.css';
import '../styles/Particles.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      smoothWheel: true,
      syncTouch: false,
      lerp: 0.085,
      duration: 1.15,
      anchors: { offset: -72 },
    });

    document.documentElement.classList.add('lenis-ready');

    return () => {
      document.documentElement.classList.remove('lenis-ready');
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const heroTargets = Array.from(document.querySelectorAll('[data-hero-item]'));
    const revealTargets = Array.from(document.querySelectorAll('[data-reveal]'));

    if (prefersReducedMotion) {
      [...heroTargets, ...revealTargets].forEach((element) => {
        element.style.opacity = '1';
        element.style.transform = 'none';
      });
      return undefined;
    }

    heroTargets.forEach((element) => {
      element.style.opacity = '0';
      element.style.transform = 'translate3d(0, 24px, 0)';
      element.style.willChange = 'transform, opacity';
    });

    revealTargets.forEach((element) => {
      element.style.opacity = '0';
      element.style.transform = 'translate3d(0, 30px, 0) scale(0.985)';
      element.style.willChange = 'transform, opacity';
    });

    const heroAnimation = heroTargets.length
      ? animate(heroTargets, {
          opacity: [0, 1],
          y: [24, 0],
          delay: stagger(120, { start: 180 }),
          duration: 900,
          ease: 'outExpo',
        })
      : null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          observer.unobserve(entry.target);

          animate(entry.target, {
            opacity: [0, 1],
            y: [30, 0],
            scale: [0.985, 1],
            duration: 820,
            ease: 'outExpo',
          });
        });
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -8% 0px',
      }
    );

    revealTargets.forEach((element) => observer.observe(element));

    return () => {
      heroAnimation?.pause();
      observer.disconnect();
      [...heroTargets, ...revealTargets].forEach((element) => {
        element.style.willChange = 'auto';
      });
    };
  }, [router.asPath]);

  return (
    <PageShell>
      <Component {...pageProps} />
    </PageShell>
  );
}

export default MyApp;
