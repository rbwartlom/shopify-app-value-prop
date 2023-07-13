import {
  Checkbox,
  LegacyCard,
  List,
  Tabs,
  Button,
  Collapsible,
  Link,
} from '@shopify/polaris';
import {useState} from 'react';
import {InstallationGuideSection} from '../TutorialLayout';

import { secureDemoIcon, returnsDemoIcon, plantDemoIcon, warningDemoIcon } from '../../assets';

import {useTranslation} from 'react-i18next';

const BulletDemo = ({background}) => {
  const backGroundStyle = background
    ? {
        backgroundColor: '#97c691',
        borderRadius: '10px',
        padding: '1em',
      }
    : {};

  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n        #cd05631e-0a63-4a95-933e-282a097efeb3 .value-container {\n            display: flex;\n            align-items: center;\n        }\n\n        #cd05631e-0a63-4a95-933e-282a097efeb3 .value-padding-between {\n            padding-top: 0.8em;\n        }\n\n        #cd05631e-0a63-4a95-933e-282a097efeb3 .value-prop-text {\n            min-width: 0;\n            overflow-wrap: break-word;\n        }\n\n        #cd05631e-0a63-4a95-933e-282a097efeb3 .value-image {\n            margin-right: 0.8em;\n        }\n\n        #cd05631e-0a63-4a95-933e-282a097efeb3 .value-prop-text {\n            color: #000000;\n            font-size: 1em;\n        }\n    ',
        }}
      />
      <div id="cd05631e-0a63-4a95-933e-282a097efeb3">
        <div className="value-bg-flex-wrapper" style={backGroundStyle}>
          <div className="value-container">
            <img
              src={plantDemoIcon}
              width={35}
              height={35}
              className="value-image"
            />
            <div className="value-prop-text">100% Plant-based ingredients</div>
          </div>
          <div className="value-container value-padding-between">
            <img
              src={returnsDemoIcon}
              width={35}
              height={35}
              className="value-image"
            />
            <div className="value-prop-text">Free 30-Day-Returns</div>
          </div>
          <div className="value-container value-padding-between">
            <img
              src={secureDemoIcon}
              width={35}
              height={35}
              className="value-image"
            />
            <div className="value-prop-text">Secure Checkout</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const IconDemo = ({background}) => {
  const backGroundStyle = background
    ? {
        backgroundColor: '#A4BAEF',
        borderRadius: '10px',
        padding: '1em',
      }
    : {};

  return (
    <div style={backGroundStyle}>
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n      #cd05631e-0a63-4a95-933e-282a097efeb3 .value-bg-flex-wrapper {\n        display: flex;\n        align-items: flex-start;\n        gap: 0.8em\n      }\n      #cd05631e-0a63-4a95-933e-282a097efeb3 .value-container {\n        display: flex;\n        align-items: center;\n        flex-direction: column;\n        /* related to value-bg-flex-wrapper */\n        flex: 1;\n        min-width: 0;\n      }\n      #cd05631e-0a63-4a95-933e-282a097efeb3 .value-prop-text {\n        overflow-wrap: anywhere; \n        min-width: 0;\n      }\n      #cd05631e-0a63-4a95-933e-282a097efeb3 .value-image {\n        margin-bottom: 0.2em;\n      }\n      #cd05631e-0a63-4a95-933e-282a097efeb3 .fourfive {\n        display: none;\n      }\n  #cd05631e-0a63-4a95-933e-282a097efeb3 .value-prop-text {\n      color: #000000;    \n      font-size: 1em;\n  }\n  ',
        }}
      />
      <div id="cd05631e-0a63-4a95-933e-282a097efeb3">
        <div className="background value-bg-flex-wrapper">
          <div className="value-container">
            <img
              src={plantDemoIcon}
              width={35}
              height={35}
              className="value-image"
            />
            <div className="value-prop-text">100% Plant-based</div>
          </div>
          <div className="value-container value-padding-between">
            <img
              src={returnsDemoIcon}
              width={35}
              height={35}
              className="value-image"
            />
            <div className="value-prop-text">30-Day-Returns</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NotificationDemo = () => {
  const backgroundStyle = {
    backgroundColor: '#d10000',
    borderRadius: '12px',
    padding: '0.8em',
  };

  return (
    <div style={backgroundStyle}>
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n    #cd05631e-0a63-4a95-933e-282a097efeb3 .value-container {\n      display: flex;\n      align-items: center;\n    }\n    #cd05631e-0a63-4a95-933e-282a097efeb3 .value-padding-between {\n      padding-top: 0.8em;\n    }\n    #cd05631e-0a63-4a95-933e-282a097efeb3 .value-prop-text {\n      min-width: 0;\n      overflow-wrap: break-word; \n    }\n    #cd05631e-0a63-4a95-933e-282a097efeb3 .value-image {\n      margin-right: 0.8em;\n    }\n  #cd05631e-0a63-4a95-933e-282a097efeb3 .value-prop-text {\n      color: #ffffff;    \n      font-size: 1em;\n  }\n',
        }}
      />
      <div id="cd05631e-0a63-4a95-933e-282a097efeb3">
        <div className="background value-bg-flex-wrapper">
          <div className="value-container">
            <img
              src={warningDemoIcon}
              width={35}
              height={35}
              className="value-image"
            />
            <div className="value-prop-text">
              30% Off + Free Shipping ends Friday
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PlainDemo = ({background}) => {
  const backgroundStyle = background
    ? {
        backgroundColor: '#a9e4f5',
        borderRadius: '25px',
        padding: '1.4em',
      }
    : {};

  return (
    <div style={backgroundStyle}>
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n      #cd05631e-0a63-4a95-933e-282a097efeb3 .value-bg-flex-wrapper {\n        display: flex;\n        align-items: flex-start;\n        gap: 0.8em\n      }\n      #cd05631e-0a63-4a95-933e-282a097efeb3 .value-container {\n        display: flex;\n        align-items: center;\n        flex-direction: column;\n        /* related to value-bg-flex-wrapper */\n        flex: 1;\n        min-width: 0;\n      }\n      #cd05631e-0a63-4a95-933e-282a097efeb3 .value-prop-text {\n        overflow-wrap: anywhere; \n        min-width: 0;\n      }\n      #cd05631e-0a63-4a95-933e-282a097efeb3 .value-image {\n        margin-bottom: 0.2em;\n      }\n      #cd05631e-0a63-4a95-933e-282a097efeb3 .fourfive {\n        display: none;\n      }\n  #cd05631e-0a63-4a95-933e-282a097efeb3 .value-prop-text {\n      color: #000000;    \n      font-size: 1em;\n  }',
        }}
      />
      <div id="cd05631e-0a63-4a95-933e-282a097efeb3">
        <div className="background value-bg-flex-wrapper">
          <div className="value-container">
            <div className="value-prop-text">
              All Products are 100% Plant-Based and can be returned within 30
              days for a full refund :)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TabInfo = (props) => {
  const previewStyle = {
    maxWidth: '450px',
    margin: 'auto',
  };

  const {t} = useTranslation();

  const {PreviewComponent, specialInfo, hasBg, settings} = props;

  const [background, setBackground] = useState(true);
  const [showInstructions, setShowInstructions] = useState(false);

  return (
    <>
      <LegacyCard.Section>
        <p style={{paddingBottom: '10px'}}>{specialInfo}</p>
        {hasBg && (
          <Checkbox
            label={t('AppDemoCard.TabInfo.backgroundToggle')}
            checked={background}
            onChange={setBackground}
          />
        )}
      </LegacyCard.Section>
      <LegacyCard.Section title={t('AppDemoCard.TabInfo.previewTitle')} subdued>
        <div style={previewStyle}>
          <PreviewComponent background={background} />
        </div>
      </LegacyCard.Section>
      <LegacyCard.Section>
        <Button
          primary={!showInstructions}
          fullWidth
          ariaControls="instructions-collapsible"
          onClick={() => setShowInstructions((prev) => !prev)}
        >
          {showInstructions
            ? t('AppDemoCard.TabInfo.themeGuideButton.hide')
            : t('AppDemoCard.TabInfo.themeGuideButton.show')} {' '}
          {t('AppDemoCard.TabInfo.themeGuideButton.text')}
        </Button>
        <Collapsible
          open={showInstructions}
          transition={{duration: '500ms', timingFunction: 'ease-in-out'}}
          id="instructions-collapsible"
        >
          <InstallationGuideSection />
          <LegacyCard.Section title={t('AppDemoCard.TabInfo.editorConfigTitle')}>
            <List>
              {settings.map((setting, index) => (
                <List.Item key={index}>{setting}</List.Item>
              ))}
            </List>
            <Link url="/tutorial">{t('AppDemoCard.TabInfo.setupGuideLinkText')}</Link>
          </LegacyCard.Section>
        </Collapsible>
      </LegacyCard.Section>
    </>
  );
};

export default function AppDemoCard() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const {t} = useTranslation();

  const handleTabChange = (selectedTabIndex) => {
    setSelectedTabIndex(selectedTabIndex);
  };

  const tabs = [
    {
      id: 'bullet',
      content: t('AppDemoCard.tabs.bullet.title'),
      accessibilityLabel: 'Bullet-Style',
    },
    {
      id: 'icon',
      content: t('AppDemoCard.tabs.icon.title'),
    },
    {
      id: 'notification',
      content: t('AppDemoCard.tabs.notification.title'),
    },
    {
      id: 'plain',
      content: t('AppDemoCard.tabs.plain.title'),
    },
  ];

  const tabContent = {
    bullet: {
      specialInfo: t('AppDemoCard.tabs.bullet.specialInfo'),
      hasBg: true,
      PreviewComponent: BulletDemo,
      settings: [
        `${t('EditorSettings.displayAsBullets')}: ${t(
          'AppDemoCard.tabs.bullet.editorConfig.displayAsBullets',
        )}`,
        `${t('EditorSettings.textColor')}: ${t(
          'AppDemoCard.tabs.bullet.editorConfig.textColor',
        )}`,
        `${t('EditorSettings.textSize')}: ${t(
          'AppDemoCard.tabs.bullet.editorConfig.textSize',
        )}`,
        `${t('EditorSettings.backgroundColor')}: ${t(
          'AppDemoCard.tabs.bullet.editorConfig.backgroundColor',
        )}`,
        `${t('EditorSettings.backgroundCornerRadius')}: ${t(
          'AppDemoCard.tabs.bullet.editorConfig.backgroundCornerRadius',
        )}`,
        `${t('EditorSettings.backgroundPadding')}: ${t(
          'AppDemoCard.tabs.bullet.editorConfig.backgroundPadding',
        )}`,
        `${t('EditorSettings.iconSize')}: ${t(
          'AppDemoCard.tabs.bullet.editorConfig.iconSize',
        )}`,
        `${t('EditorSettings.spaceBetween')}: ${t(
          'AppDemoCard.tabs.bullet.editorConfig.spaceBetween',
        )}`,
      ],
    },
    icon: {
      specialInfo: t('AppDemoCard.tabs.icon.specialInfo'),
      PreviewComponent: IconDemo,
      hasBg: true,
      settings: [
        `${t('EditorSettings.displayAsBullets')}: ${t(
          'AppDemoCard.tabs.icon.editorConfig.displayAsBullets',
        )}`,
        `${t('EditorSettings.textColor')}: ${t(
          'AppDemoCard.tabs.icon.editorConfig.textColor',
        )}`,
        `${t('EditorSettings.textSize')}: ${t(
          'AppDemoCard.tabs.icon.editorConfig.textSize',
        )}`,
        `${t('EditorSettings.backgroundColor')}: ${t(
          'AppDemoCard.tabs.icon.editorConfig.backgroundColor',
        )}`,
        `${t('EditorSettings.backgroundCornerRadius')}: ${t(
          'AppDemoCard.tabs.icon.editorConfig.backgroundCornerRadius',
        )}`,
        `${t('EditorSettings.backgroundPadding')}: ${t(
          'AppDemoCard.tabs.icon.editorConfig.backgroundPadding',
        )}`,
        `${t('EditorSettings.iconSize')}: ${t(
          'AppDemoCard.tabs.icon.editorConfig.iconSize',
        )}`,
        `${t('EditorSettings.spaceBetween')}: ${t(
          'AppDemoCard.tabs.icon.editorConfig.spaceBetween',
        )}`,
      ],
    },
    notification: {
      specialInfo: t('AppDemoCard.tabs.notification.specialInfo'),
      hasBg: false,
      PreviewComponent: NotificationDemo,
      settings: [
        `${t('AppDemoCard.tabs.notification.editorConfig.info')}`,
        `${t('EditorSettings.displayAsBullets')}: ${t(
          'AppDemoCard.tabs.notification.editorConfig.displayAsBullets',
        )}`,
        `${t('EditorSettings.textColor')}: ${t(
          'AppDemoCard.tabs.notification.editorConfig.textColor',
        )}`,
        `${t('EditorSettings.textSize')}: ${t(
          'AppDemoCard.tabs.notification.editorConfig.textSize',
        )}`,
        `${t('EditorSettings.backgroundColor')}: ${t(
          'AppDemoCard.tabs.notification.editorConfig.backgroundColor',
        )}`,
        `${t('EditorSettings.backgroundCornerRadius')}: ${t(
          'AppDemoCard.tabs.notification.editorConfig.backgroundCornerRadius',
        )}`,
        `${t('EditorSettings.backgroundPadding')}: ${t(
          'AppDemoCard.tabs.notification.editorConfig.backgroundPadding',
        )}`,
        `${t('EditorSettings.iconSize')}: ${t(
          'AppDemoCard.tabs.notification.editorConfig.iconSize',
        )}`,
      ],
    },
    plain: {
      specialInfo: t('AppDemoCard.tabs.plain.specialInfo'),
      hasBg: true,
      PreviewComponent: PlainDemo,
      settings: [
        `${t('AppDemoCard.tabs.plain.editorConfig.info')}`,
        `${t('EditorSettings.textColor')}: ${t(
          'AppDemoCard.tabs.plain.editorConfig.textColor',
        )}`,
        `${t('EditorSettings.textSize')}: ${t(
          'AppDemoCard.tabs.plain.editorConfig.textSize',
        )}`,
        `${t('EditorSettings.backgroundColor')}: ${t(
          'AppDemoCard.tabs.plain.editorConfig.backgroundColor',
        )}`,
        `${t('EditorSettings.backgroundCornerRadius')}: ${t(
          'AppDemoCard.tabs.plain.editorConfig.backgroundCornerRadius',
        )}`,
        `${t('EditorSettings.backgroundPadding')}: ${t(
          'AppDemoCard.tabs.plain.editorConfig.backgroundPadding',
        )}`,
      ],
    },
  };

  return (
    <LegacyCard title={t('AppDemoCard.title')}>
      <LegacyCard.Section>
        <p>{t('AppDemoCard.description')}</p>
      </LegacyCard.Section>
      <Tabs tabs={tabs} onSelect={handleTabChange} selected={selectedTabIndex}>
        <TabInfo {...tabContent[tabs[selectedTabIndex].id]} />
      </Tabs>
    </LegacyCard>
  );
}
