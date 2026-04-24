import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import ReactGA from 'react-ga';
import { Analytics } from '@vercel/analytics/react';

const Header = dynamic(() => import('../components/Header'), { ssr: false });
const Footer = dynamic(() => import('../components/Footer'), { ssr: false });
const About = dynamic(() => import('../components/About'), { ssr: false });
const Resume = dynamic(() => import('../components/Resume'), { ssr: false });
const Contact = dynamic(() => import('../components/Contact'), { ssr: false });
const Portfolio = dynamic(() => import('../components/Portfolio'), { ssr: false });

export default function Home({ resumeData }) {
  useEffect(() => {
    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <div className="App">
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Resume data={resumeData.resume} />
      <Portfolio data={resumeData.portfolio} />
      <Contact data={resumeData.main} />
      <Footer data={resumeData.main} />
      <Analytics />
    </div>
  );
}

export async function getStaticProps() {
  try {
    const fs = require('fs');
    const path = require('path');
    const filePath = path.join(process.cwd(), 'public', 'resumeData.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const resumeData = JSON.parse(fileContents);

    return {
      props: {
        resumeData: resumeData || {},
      },
      revalidate: 60, // ISR - revalidate every 60 seconds
    };
  } catch (error) {
    console.error('Error loading resume data:', error);
    return {
      props: {
        resumeData: {
          main: {},
          resume: {},
          portfolio: {},
        },
      },
      revalidate: 60,
    };
  }
}
