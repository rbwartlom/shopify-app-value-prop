import {useState} from 'react';
import {
  Form,
  LegacyCard,
  TextField,
  FormLayout,
  Layout,
} from '@shopify/polaris';

export function SupportCard() {
  const [message, setMessage] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const handleSubmit = (e) => {
    console.log(e);
  };

  return (
    <LegacyCard title="We're here to help">
      <LegacyCard.Section>
        <p>
          Having Issues? We're happy to help, just shoot us a quick message
          through the contact form below :) <br />
          We respond within 24hrs
        </p>
      </LegacyCard.Section>
      <LegacyCard.Section>
        <Form onSubmit={handleSubmit}>
          <FormLayout>
            <TextField
              type="email"
              value={userEmail}
              onChange={setUserEmail}
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
          </FormLayout>
        </Form>
      </LegacyCard.Section>
    </LegacyCard>
  );
}

export default function SupportLayout() {
  return (
    <SupportCard />
  );
}
