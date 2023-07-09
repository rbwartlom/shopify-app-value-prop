import {
  LegacyCard,
  List,
  MediaCard,
  Modal,
  DescriptionList,
  HorizontalGrid,
  Divider,
} from '@shopify/polaris';
import {useState} from 'react';

import {useTranslation, Trans} from 'react-i18next';

export function InstallationGuideSection() {
  const {t} = useTranslation();

  return (
    <LegacyCard.Section>
      <List type="number">
        <List.Item>
          <Trans i18nKey="Tutorial.InstallationGuideSection.step1">
            {t('Tutorial.InstallationGuideSection.step1')}
          </Trans>
        </List.Item>
        <List.Item>
          <Trans i18nKey="Tutorial.InstallationGuideSection.step2">
            {t('Tutorial.InstallationGuideSection.step2')}
          </Trans>
        </List.Item>
        <List.Item>
          <Trans i18nKey="Tutorial.InstallationGuideSection.step3">
            {t('Tutorial.InstallationGuideSection.step3')}
          </Trans>
        </List.Item>
        <List.Item>
          <Trans i18nKey="Tutorial.InstallationGuideSection.step4">
            {t('Tutorial.InstallationGuideSection.step4')}
          </Trans>
        </List.Item>
        <List.Item>
          {t('Tutorial.InstallationGuideSection.step5')}
        </List.Item>
      </List>
    </LegacyCard.Section>
  );
}

export function SettingsGuideCard() {
  const {t} = useTranslation();

  const generalSettingsItems = [
    {
      term: t('EditorSettings.displayAsBullets'),
      description: t('SettingsGuideCard.displayAsBullets'),
    },
    {
      term: t('EditorSettings.textColor'),
      description: t('SettingsGuideCard.textColor'),
    },
    {
      term: t('EditorSettings.textSize'),
      description: t('SettingsGuideCard.textSize'),
    },
    {
      term: t('EditorSettings.backgroundColor'),
      description: t('SettingsGuideCard.backgroundColor'),
    },
    {
      term: t('EditorSettings.backgroundCornerRadius'),
      description: t('SettingsGuideCard.backgroundCornerRadius'),
    },
    {
      term: t('EditorSettings.backgroundPadding'),
      description: t('SettingsGuideCard.backgroundPadding'),
    },
    {
      term: t('EditorSettings.iconSize'),
      description: t('SettingsGuideCard.iconSize'),
    },
    {
      term: t('EditorSettings.spaceBetween'),
      description: t('SettingsGuideCard.spaceBetween'),
    },
    {
      term: t('EditorSettings.iconFor'),
      description: t('SettingsGuideCard.iconFor'),
    },
    {
      term: t('EditorSettings.textFor'),
      description: t('SettingsGuideCard.textFor'),
    },
  ];

  return (
    <LegacyCard title={t('SettingsGuideCard.title')}>
      <LegacyCard.Section>
        <Divider />
        {window.innerWidth > 1000 ? (
          <HorizontalGrid columns={['oneThird', 'twoThirds']} gap="3">
            <img
              alt=""
              width="100%"
              height="100%"
              src="../../assets/Settings_1.webp"
              style={{
                borderRight: '1px solid #000',
              }}
            />
            <DescriptionList items={generalSettingsItems} />
          </HorizontalGrid>
        ) : (
          <DescriptionList items={generalSettingsItems} />
        )}
      </LegacyCard.Section>
    </LegacyCard>
  );
}

export function VideoModalCard() {
  const {t} = useTranslation();
  const [showVideo, setShowVideo] = useState(false);

  const LoomEmbed = () => {
    return (
      <div
        style={{
          position: 'relative',
          paddingBottom: '65.0994575045208%',
          height: 0,
        }}
      >
        <iframe
          src="https://www.loom.com/embed"
          frameBorder={0}
          webkitallowfullscreen=""
          mozallowfullscreen=""
          allowFullScreen=""
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        />
      </div>
    );
  };

  /*
    static content should be replaces from i18next react:
    "VideoCard": {
      "title": "Watch the video guide",
      "description": "This video will walk you through how to install and configure this app",
      "buttonText": "Watch video",
      "modalTitle": "How to install and configure this app"
    }
    
    */

  return (
    <>
      <MediaCard
        title={t('Tutorial.VideoCard.title')}
        description={t('Tutorial.VideoCard.description')}
        primaryAction={{
          content: t('Tutorial.VideoCard.buttonText'),
          onAction: () => setShowVideo(true),
        }}
      />
      <Modal
        title={t('Tutorial.VideoCard.modalTitle')}
        open={showVideo}
        onClose={() => setShowVideo(false)}
      >
        <Modal.Section>
          <LoomEmbed />
        </Modal.Section>
      </Modal>
    </>
  );
}

export default function TutorialLayout() {
  const {t} = useTranslation();

  return (
    <>
      <VideoModalCard />
      <LegacyCard title={t('Tutorial.InstallationGuideSection.title')}>
        <InstallationGuideSection />
      </LegacyCard>
      <SettingsGuideCard />
    </>
  );
}
