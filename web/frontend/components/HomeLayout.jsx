import {
  CalloutCard,
  Layout,
  Banner,
  Form,
  HorizontalStack,
  TextField,
  LegacyCard,
  Button,
  Toast,
} from '@shopify/polaris';
import AppDemoCard from './cards/AppDemoCard';
import {Trans, useTranslation} from 'react-i18next';
import {useAuthenticatedFetch} from '../hooks';
import {useEffect, useState} from 'react';
import {CircleTickMajor} from '@shopify/polaris-icons';
import {sendEmail} from '../utils/emailService';

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
          action={{
            content: t(
              'Tutorial.ConditionalSetupBannerSection.primaryButtonText',
            ),
            url: '/tutorial',
          }}
          secondaryAction={{
            content: t(
              'Tutorial.ConditionalSetupBannerSection.secondaryButtonText',
            ),
            onAction: handleDontShowAgain,
          }}
          onDismiss={() => setShowNotification(false)}
          icon={CircleTickMajor}
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

export function MissingFeatureFormCard() {
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const {t} = useTranslation();

  const handleSubmit = async () => {
    const emailObject = {
      email: 'features@artelomo.com',
      name: 'none',
      message,
    };
    if (message !== '') {
      sendEmail(emailObject);
      setMessage('');
      setSubmitted(true);
    }
  };

  return (
    <>
      {submitted && (
        <Toast
          content={t('HomeLayout.MissingFeatureFormCard.submittedToast')}
          onDismiss={() => setSubmitted(false)}
        />
      )}
      <LegacyCard
        title={t('HomeLayout.MissingFeatureFormCard.title')}
        sectioned
      >
        <Form onSubmit={handleSubmit}>
          <HorizontalStack blockAlign="end" wrap={false} gap="1">
            <div style={{flex: '8.5 0px'}}>
              <TextField
                type="text"
                value={message}
                onChange={setMessage}
                label={t('HomeLayout.MissingFeatureFormCard.label')}
                placeholder={t('HomeLayout.MissingFeatureFormCard.placeholder')}
              />
            </div>
            <div style={{flex: '1.5 0px', maxWidth: '6rem'}}>
              <Button submit primary fullWidth>
                {t('HomeLayout.MissingFeatureFormCard.buttonContent')}
              </Button>
            </div>
          </HorizontalStack>
        </Form>
      </LegacyCard>
    </>
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
        <Layout.Section>
          <MissingFeatureFormCard />
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
