import './globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import RouteTransition from '../components/animations/RouteTransition';
import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['700'], variable: '--font-playfair' });
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata = {
  title: 'Studio Vértice — Portfólio',
  description: 'Portfólio editorial brutalista - Studio Vértice',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="snap-y snap-proximity">
      <body className={`${playfair.variable} ${inter.variable} font-sans bg-white text-zinc-900`}>
        <Navbar />
        <main>
          <RouteTransition>{children}</RouteTransition>
        </main>
      </body>
    </html>
  );
}
