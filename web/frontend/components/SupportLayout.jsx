import {useState} from 'react';
import {
  Form,
  LegacyCard,
  TextField,
  FormLayout,
  Button,
  Toast,
  Banner,
  Layout,
} from '@shopify/polaris';

import {useTranslation, Trans} from 'react-i18next';

import {sendEmail} from '../utils/emailService';

const Notification = ({notification, hideNotification}) => {

  const {t} = useTranslation();

  return (
    notification.content && (
      <Layout.Section>
        {notification.isError ? (
        <Banner
          title={t('SupportLayout.formErrorBanner.title')}
          status="critical"
          onDismiss={hideNotification}
          action={{
            content: t('SupportLayout.formErrorBanner.emailButtonText'),
            onAction: () => {
              window.open('mailto:artelomo.tech@gmail.com');
            },
          }}
        >
          <p>{t('SupportLayout.formErrorBanner.errorMessage')}</p>
          <p>{notification.content}</p>
        </Banner>
        ) : (
        <Toast content={notification.content} onDismiss={hideNotification} />
        )}
      </Layout.Section>
    )
  );
};

export function SupportCard() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [notification, setNotification] = useState({
    isError: false,
    content: null,
  });

  const {t} = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //data has a content and a isError property
    const data = await sendEmail({name, message, email});
    setNotification(data);
  };

  const hideNotification = () => {
    setNotification({
      isError: false,
      content: null,
    });
  };


  return (
    <Layout>
      <Notification
        notification={notification}
        hideNotification={hideNotification}
      />
      <Layout.Section>
        <LegacyCard title={t('SupportLayout.title')}>
          <LegacyCard.Section>
            <Trans i18nKey="SupportLayout.subtitle">
              <p>{t('SupportLayout.subtitle')}</p>
            </Trans>
          </LegacyCard.Section>
          <LegacyCard.Section>
            <Form onSubmit={handleSubmit}>
              <FormLayout>
                <TextField
                  type="text"
                  value={name}
                  onChange={setName}
                  label={t('SupportLayout.contactForm.nameLabel')}
                />
                <TextField
                  type="email"
                  value={email}
                  onChange={setEmail}
                  label={t('SupportLayout.contactForm.emailLabel')}
                  helpText={t('SupportLayout.contactForm.emailHelpText')}
                />
                <TextField
                  type="text"
                  value={message}
                  onChange={setMessage}
                  label={t('SupportLayout.contactForm.messageLabel')}
                  multiline={4}
                />
                <Button submit primary>
                  {t('SupportLayout.contactForm.submitButtonText')}
                </Button>
              </FormLayout>
            </Form>
          </LegacyCard.Section>
        </LegacyCard>
      </Layout.Section>
    </Layout>
  );
}

export default function SupportLayout() {
  return <SupportCard />;
}
