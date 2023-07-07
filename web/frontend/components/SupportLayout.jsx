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

import {sendEmail} from '../utils/emailService';

const Notification = ({notification, hideNotification}) => {
  return (
    notification.content && (
      <Layout.Section>
        (notification.isError ? (
        <Banner
          title="Message could not be sent, please send us an email instead."
          status="critical"
          onDismiss={hideNotification}
          action={{
            content: 'Send us an email',
            onAction: () => {
              window.open('mailto:artelomo.tech@gmail.com');
            },
          }}
        >
          <p>The server returned the following error:</p>
          <p>{notification.content}</p>
        </Banner>
        ) : (
        <Toast content={notification.content} onDismiss={hideNotification} />
        ))
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
          <LegacyCard title="We're here to help">
            <LegacyCard.Section>
              <p>
                Having Issues? We're happy to help, just shoot us a quick
                message through the contact form below :) <br />
                We respond within 24hrs
              </p>
            </LegacyCard.Section>
            <LegacyCard.Section>
              <Form onSubmit={handleSubmit}>
                <FormLayout>
                  <TextField
                    type="text"
                    value={name}
                    onChange={setName}
                    label="Your name"
                  />
                  <TextField
                    type="email"
                    value={email}
                    onChange={setEmail}
                    label="Your email"
                    helpText="We'll use this only to contact you about your request"
                  />
                  <TextField
                    type="text"
                    value={message}
                    onChange={setMessage}
                    label="Your message"
                    multiline={4}
                  />
                  <Button submit primary>
                    Send
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
