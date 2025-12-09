import { getTranslations } from 'next-intl/server';

export default async function HomePage() {
  const t = await getTranslations('home');

  return (
    <div className="min-h-screen">
      <h1 className="text-4xl font-bold  mt-8">
        {t('title')}
      </h1>
      <p className="text-center text-gray-600 mt-4">
        {t('subtitle')}
      </p>
    </div>
  );
}
