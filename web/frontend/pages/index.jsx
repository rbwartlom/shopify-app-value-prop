import {Page, FooterHelp, Spinner} from '@shopify/polaris';

import HomeLayout from '../components/HomeLayout';

export default function HomePage() {
  
  return (
    <>
      <Page
        title="Home"
        subtitle="Iconex - Easily communicate value propositions using fast & fully custom icons"
        divider
      >
        <HomeLayout />
      </Page>
      <FooterHelp>Made with 🖤</FooterHelp>
    </>
  );
}
