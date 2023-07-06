import {Page, FooterHelp} from '@shopify/polaris';
import TutorialLayout from '../components/TutorialLayout';

export default function Tutorial() {
  return (
    //shopify polaris page with a tutorial heading and a tutorial LegacyCard
    <Page title="Setup Guide" divider>
      <TutorialLayout />
      <FooterHelp>Made with 🖤</FooterHelp>
    </Page>
  );
}
