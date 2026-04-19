import type {Metadata} from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Untuk Kamu 💖',
  description: 'Ruang kecil di internet khusus untuk kisah kita.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="id" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased text-rose-950 bg-rose-50 overflow-x-hidden" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
