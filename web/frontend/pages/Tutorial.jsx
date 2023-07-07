import {Page, Frame} from '@shopify/polaris';
import TutorialLayout from '../components/TutorialLayout';
import {useTranslation} from 'react-i18next';

export default function Tutorial() {
  const {t} = useTranslation();

  return (
    <Frame>
      <Page title={t('TutorialPage.title')} divider>
        <TutorialLayout />
      </Page>
    </Frame>
  );
}
