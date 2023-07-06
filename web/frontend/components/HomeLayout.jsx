import {CalloutCard, Layout} from '@shopify/polaris';
import AppDemoCard from './cards/AppDemoCard';

export function SupportCalloutCard() {
  return (
    <CalloutCard
      title="Having issues?"
      primaryAction={{
        content: 'Contact us',
        url: '/support',
      }}
    >
      <p>
        We're happy to help, shoot us a message and we'll respond within 24hrs
        :)
      </p>
    </CalloutCard>
  );
}

export function TutorialCalloutCard() {
  return (
    <CalloutCard
      title="Confused where to start?"
      primaryAction={{
        content: 'Setup guide',
        url: '/tutorial',
      }}
    >
      <p>Check out our guide and video on how to get started.</p>
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
