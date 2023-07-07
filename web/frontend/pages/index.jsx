import {Page, Frame} from '@shopify/polaris';
import {useTranslation} from 'react-i18next';

import HomeLayout from '../components/HomeLayout';

export default function HomePage() {
  const {t} = useTranslation();

  return (
    <Frame>
      <Page
        title={t('IndexPage.title')}
        subtitle={t('IndexPage.subtitle')}
        divider
      >
        <HomeLayout />
      </Page>
    </Frame>
  );
}
