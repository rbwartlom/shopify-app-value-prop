import {Page, FooterHelp } from '@shopify/polaris';
import SupportLayout from '../components/SupportLayout';

export default function SupportPage() {
  return (
    <Page title="Contact us" subtitle="We respond within 24hrs" divider>
      <SupportLayout />
      <FooterHelp>
           Made with 🖤
      </FooterHelp>
    </Page>
  );
}
