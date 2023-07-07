import {Page, Frame} from '@shopify/polaris';
import SupportLayout from '../components/SupportLayout';
import {useTranslation} from 'react-i18next';

export default function SupportPage() {
  const {t} = useTranslation();

  return (
    <Frame>
      <Page
        title={t('SupportPage.title')}
        subtitle={t('SupportPage.subtitle')}
        divider
      >
        <SupportLayout />
      </Page>
    </Frame>
  );
}
