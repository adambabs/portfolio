import { Inter } from 'next/font/google'
import LoadingLine from './components/LoadingLine';
import ScrollToTopButton from "./components/ScrollToTopButton";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <LoadingLine />
      <ScrollToTopButton />

    </main>
  )
}
