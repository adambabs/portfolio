import { Inter } from 'next/font/google'
import LoadingLine from './components/LoadingLine';
import ScrollToTopButton from "./components/ScrollToTopButton";
import { Html, Head, NextScript } from 'next/document'

import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'


const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <main>
        <Header />
        <Hero />
        <About />
        <Projects />
        <Timeline />
        <Contact />
        <Footer />
      <LoadingLine />
      <ScrollToTopButton />
    </main>
  )
}

