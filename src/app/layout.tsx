import type { Metadata, Viewport } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import { SiteShell } from 'components/SiteShell';
import '../index.css';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'John — About',
  description:
    'John Benedickson — full stack developer in Doylestown, PA. React, Firebase, and Google Cloud.',
};

export const viewport: Viewport = {
  themeColor: '#06120e',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
