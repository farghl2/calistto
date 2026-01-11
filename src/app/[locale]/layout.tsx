import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { Inter, Oswald } from "next/font/google"; // Changed fonts
import "../globals.css";
import ReactQueryProvider from '../../lib/providers/ReactQueryProvider';
import { Directions, Languages } from '@/src/shared/constans/enums'; // Fixed typo 'constans' -> 'constants' if needed, but keeping as per existing file

// Define Fonts
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: 'Calistto | Intelligent Business Infrastructure',
  description: 'AI-powered software for Real Estate, Yachting, and Financial sectors. Built by Islam Mohamed.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  // Validate locale (fallback to English if somehow needed, though middleware usually handles this)
  
  return (
    <html lang={locale} dir={locale === Languages.ARABIC ? Directions.RTL : Directions.LTR} className="dark"> 
      <body className={`${inter.variable} ${oswald.variable} antialiased bg-background text-foreground`}>
        <NextIntlClientProvider messages={messages}>
          <ReactQueryProvider>
            <NuqsAdapter>
              {children}
            </NuqsAdapter>
          </ReactQueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
