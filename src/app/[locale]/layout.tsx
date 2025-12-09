import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { Geist, Geist_Mono } from "next/font/google";


import "../globals.css";
import ReactQueryProvider from '../../lib/providers/ReactQueryProvider';
import { Directions, Languages } from '@/src/shared/constans/enums';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === Languages.ARABIC ? Directions.RTL : Directions.LTR}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
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
