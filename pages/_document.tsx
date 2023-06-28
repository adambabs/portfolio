import { useEffect } from 'react';
import { Html, Head, NextScript } from 'next/document'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Index from './index';

export default function Document() {
  return (
    <Html lang="en" className='scroll-smooth'>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
      <Head />
      <body className='text-black'>
        <NextScript />
        {/* <Header />
        <Hero />
        <About />
        <Projects />
        <Timeline />
        <Contact />
        <Footer /> */}
      </body>
    </Html>

  )
}

