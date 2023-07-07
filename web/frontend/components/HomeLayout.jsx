import {CalloutCard, Layout} from '@shopify/polaris';
import AppDemoCard from './cards/AppDemoCard';
import { useTranslation } from 'react-i18next';

export function SupportCalloutCard() {
  const { t } = useTranslation();

  return (
    <CalloutCard
      title={t('HomeLayout.SupportCalloutCard.title')}
      primaryAction={{
        content: t('HomeLayout.SupportCalloutCard.buttonContent'),
        url: '/support',
      }}
    >
      <p>
        {t('HomeLayout.SupportCalloutCard.description')}
      </p>
    </CalloutCard>
  );
}

export function TutorialCalloutCard() {
  const { t } = useTranslation();

  return (
    <CalloutCard
      title={t('HomeLayout.TutorialCalloutCard.title')}
      primaryAction={{
        content: t('HomeLayout.TutorialCalloutCard.buttonContent'),
        url: '/tutorial',
      }}
    >
      <p>{t('HomeLayout.TutorialCalloutCard.description')}</p>
    </CalloutCard>
  );
}

export default function HomeLayout() {
  return (
    <>
      <Layout>
        <Layout.Section>
          <AppDemoCard />
        </Layout.Section>
          <Layout.Section oneHalf>
            <SupportCalloutCard />
          </Layout.Section>
          <Layout.Section oneHalf>
            <TutorialCalloutCard />
          </Layout.Section>
      </Layout>
    </>
  );
}
