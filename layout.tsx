import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Profecías M&L',
  description: 'Red social para eventos proféticos',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-100 text-gray-900">
        <header className="p-4 bg-indigo-600 text-white font-bold">Profecías M&L</header>
        {children}
      </body>
    </html>
  );
}
