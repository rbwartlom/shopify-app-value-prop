import {BrowserRouter} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {NavigationMenu} from '@shopify/app-bridge-react';
import Routes from './Routes';

import {AppBridgeProvider, QueryProvider, PolarisProvider} from './components';

export default function App() {
  // Any .tsx or .jsx files in /pages will become a route
  // See documentation for <Routes /> for more info
  const pages = import.meta.globEager('./pages/**/!(*.test.[jt]sx)*.([jt]sx)');
  const {t} = useTranslation();

  return (
    <PolarisProvider>
      <BrowserRouter>
        <AppBridgeProvider>
          <QueryProvider>
            <NavigationMenu
              navigationLinks={[
                {
                  label: t('IndexPage.title'),
                  destination: '/',
                },
                {
                  label: t('SupportPage.title'),
                  destination: '/support',
                },
                {
                  label: t('TutorialPage.title'),
                  destination: '/tutorial',
                },
              ]}
            />
            <Routes pages={pages} />
            <div style={{paddingBottom: "50px"}} />
          </QueryProvider>
        </AppBridgeProvider>
      </BrowserRouter>
    </PolarisProvider>
    
  );
}
