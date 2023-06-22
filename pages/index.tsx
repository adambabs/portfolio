import { Inter } from 'next/font/google'
import LoadingLine from './components/LoadingLine';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <LoadingLine />
    </main>
  )
}
