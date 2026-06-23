import React, { useEffect, Suspense } from 'react';
import Lenis from 'lenis';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Preloader } from './components/Preloader';
import { Footer } from './components/Footer';
import { ThemeProvider } from './ThemeContext';
import { MobileDesktopWarning } from './components/MobileDesktopWarning';

const Bento = React.lazy(() => import('./components/About/Bento'));
const Experience = React.lazy(() => import('./components/Experience').then(m => ({ default: m.Experience })));
const Work = React.lazy(() => import('./components/Work').then(m => ({ default: m.Work })));
const PrivacyPolicy = React.lazy(() => import('./components/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })));
const TermsAndConditions = React.lazy(() => import('./components/TermsAndConditions').then(m => ({ default: m.TermsAndConditions })));

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

export default function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Preloader />
        <main className="relative min-h-screen font-sans">
          <MobileDesktopWarning />
          <CustomCursor />
          <Navbar />
          <Suspense fallback={<div className="h-screen w-full bg-[#EBEAE9] dark:bg-[#141517]"></div>}>
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <Bento />
                  <Experience />
                  <Work />
                </>
              } />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsAndConditions />} />
            </Routes>
          </Suspense>
          <Footer />
        </main>
      </Router>
    </ThemeProvider>
  );
}
