import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';

const geistMono = GeistMono;
const geistSans = GeistSans;

export const metadata: Metadata = {
  title: 'Tranzen',
  description:
    'Tranzen is a financial management tool to securely connect and manage bank accounts',
  icons: {
    icon: '/icons/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.className} ${geistSans.className}`}>{children}</body>
    </html>
  );
}
