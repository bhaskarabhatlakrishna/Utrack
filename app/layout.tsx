import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'UTrack - Smart Fleet, GPS & Logistics Control | RAMKI Technologies',
  description: 'Advanced UTrack Platform - End-to-end vehicle, trip, warehouse, and accounts control powered by real-time GPS and smart automation. Complete fleet management solution by RAMKI Technologies Pvt Ltd.',
  keywords: 'fleet management, GPS tracking, logistics, vehicle tracking, warehouse management, fleet monitoring, real-time tracking',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
