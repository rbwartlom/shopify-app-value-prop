import {CalloutCard, Layout, Banner, Link} from '@shopify/polaris';
import AppDemoCard from './cards/AppDemoCard';
import {Trans, useTranslation} from 'react-i18next';
import {useAuthenticatedFetch} from '../hooks';
import {useEffect, useState} from 'react';

export function SupportCalloutCard() {
  const {t} = useTranslation();

  return (
    <CalloutCard
      title={t('HomeLayout.SupportCalloutCard.title')}
      primaryAction={{
        content: t('HomeLayout.SupportCalloutCard.buttonContent'),
        url: '/support',
      }}
    >
      <p>{t('HomeLayout.SupportCalloutCard.description')}</p>
    </CalloutCard>
  );
}

export function TutorialCalloutCard() {
  const {t} = useTranslation();

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

export function ConditionalSetupBannerSection() {
  const {t} = useTranslation();
  const fetch = useAuthenticatedFetch();

  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    fetch('/api/installation-data', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.appInstalled === false) {
          setShowNotification(true);
        }
      });
  }, []);

  const handleDontShowAgain = () => {
    fetch('/api/installation-data', {
      method: 'POST',
      body: JSON.stringify({value: true}),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    //does not handle errors since it would introduce mroe complexity
    setShowNotification(false);
  };

  return (
    showNotification && (
      <Layout.Section>
        <Banner
          status="info"
          title={t('Tutorial.ConditionalSetupBannerSection.title')}
          action={{content: t('Tutorial.ConditionalSetupBannerSection.primaryButtonText'), url: '/tutorial'}}
          secondaryAction={{
            content: t('Tutorial.ConditionalSetupBannerSection.secondaryButtonText'),
            onAction: handleDontShowAgain,
          }}
          onDismiss={() => setShowNotification(false)}
        >
          <p>
            <Trans i18nKey="Tutorial.ConditionalSetupBannerSection.description">
            {t('Tutorial.ConditionalSetupBannerSection.description')}
            </Trans>
          </p>
        </Banner>
      </Layout.Section>
    )
  );
}

export default function HomeLayout() {
  return (
    <>
      <Layout>
        <ConditionalSetupBannerSection />
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
