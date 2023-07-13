import {
  LegacyCard,
  List,
  MediaCard,
  Modal,
  DescriptionList,
  HorizontalGrid,
  Divider,
  Text,
  Box,
  Link,
  VideoThumbnail,
} from '@shopify/polaris';
import {useState} from 'react';

import { settingsOne } from '../assets';

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
        <List.Item>{t('Tutorial.InstallationGuideSection.step5')}</List.Item>
      </List>
    </LegacyCard.Section>
  );
}

export function FindIconsCard() {
  const {t} = useTranslation();

  return (
    <LegacyCard title={t('Tutorial.FindIconsCard.title')}>
      <LegacyCard.Section>
        <p>
          <Trans i18nKey="Tutorial.FindIconsCard.description">
            {t('Tutorial.FindIconsCard.description')}
          </Trans>
        </p>
      </LegacyCard.Section>
      <Divider />
      <HorizontalGrid columns={['oneThird', 'twoThirds']} gap="3">
        <Box padding="6">
          <Box paddingBlockEnd="1">
            <Text variant="headingSm" as="h3">
              {t('Tutorial.FindIconsCard.svgIconsTitle')}
            </Text>
          </Box>
          <List>
            <List.Item>
              <Link url="https://www.reshot.com/" target="_blank">
                Reshot
              </Link>
            </List.Item>
            <List.Item>
              <Link url="https://www.svgrepo.com/" target="_blank">
                SVG Repo
              </Link>
            </List.Item>
            <List.Item>
              <Link url="https://icomoon.io/" target="_blank">
                Icomoon
              </Link>
            </List.Item>
          </List>
        </Box>
        <Box padding="6">
          <Box paddingBlockEnd="1">
            <Text variant="headingSm" as="h3">
              {t('Tutorial.FindIconsCard.pngIconsTitle')}
            </Text>
          </Box>
          <List>
            <List.Item>
              <Link url="https://iconmonstr.com/" target="_blank">
                Iconmonstr
              </Link>
            </List.Item>
            <List.Item>
              <Link url="https://www.iconpacks.net/" target="_blank">
                Iconpacks
              </Link>
            </List.Item>
            <List.Item>
              <Link url="https://uxwing.com/" target="_blank">
                Uxwing
              </Link>
            </List.Item>
            <List.Item>Or create your own icons (e.g. in Canva)</List.Item>
          </List>
        </Box>
      </HorizontalGrid>
    </LegacyCard>
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
              src={settingsOne}
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
          src="https://www.loom.com/embed/a63d58fb77194a6994f1b3345739a33c?sid=905de505-26b9-49e3-8b1b-e096c1973fcb"
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

  return (
    <>
      <MediaCard
        title={t('Tutorial.VideoCard.title')}
        description={t('Tutorial.VideoCard.description')}
        primaryAction={{
          content: t('Tutorial.VideoCard.buttonText'),
          onAction: () => setShowVideo(true),
        }}
      >
        <VideoThumbnail
          thumbnailUrl="https://cdn.loom.com/sessions/thumbnails/a63d58fb77194a6994f1b3345739a33c-1689001865883-with-play.gif"
          videoLength={644}
          onClick={() => setShowVideo(true)}
        />
      </MediaCard>

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
      <FindIconsCard />
      <LegacyCard title={t('Tutorial.InstallationGuideSection.title')}>
        <InstallationGuideSection />
      </LegacyCard>
      <SettingsGuideCard />
    </>
  );
}
