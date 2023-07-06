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

//supports props.children
export function InstallationGuideSection(props) {
  return (
    <LegacyCard.Section>
      <List type="number">
        <List.Item>
          From your Shopify Admin, go to{' '}
          <strong>Online Store {`>`} Themes</strong>.
        </List.Item>
        <List.Item>Click the "Customize" button of your active Theme</List.Item>
        <List.Item>
          Click on <strong>Add Section</strong> anywhere in the sidebar or on{' '}
          <strong>Add Block</strong> in the "Product information" Section.
        </List.Item>
        <List.Item>
          Select <strong>Value Propositions</strong> from the list of
          sections/blocks.
        </List.Item>
        <List.Item>
          Click on the created section/block to open the settings panel.
        </List.Item>
      </List>
      {props.children}
    </LegacyCard.Section>
  );
}

export function SettingsGuideCard() {
  const generalSettingsItems = [
    {
      term: 'Display as bullets',
      description:
        'When checked, displays the value propositions beneath each other as bullets. Otherwise, displays them in one row beneath their icons.',
    },
    {
      term: 'Text color',
      description: 'Changes the color of the text of the value propositions',
    },
    {
      term: 'Text size',
      description: 'Changes the size of the text of the value propositions',
    },
    {
      term: 'Background color',
      description:
        'When set, shows a container with the given background color around the value propositions',
    },
    {
      term: 'Background corner radius',
      description:
        'Rounds the corners of the background container. For square corners, set to 0px.',
    },
    {
      term: 'Background padding',
      description:
        'When set, adds padding around the value propositions inside the background container',
    },
    {
      term: 'Icon size',
      description: 'Changes the size of the icons',
    },
    {
      term: 'Space between',
      description:
        'Is only applied when there are multiple value propositions. When "Display as bullets" is checked, this will be the space added between bullets. Otherwise, this will add space between the value propositions in the row.',
    },
    {
      term: 'Icon for x (optional)',
      description:
        'Only displayed if corresponding text is set. For best results, upload transparent PNG files.',
    },
    {
      term: 'Text for x',
      description:
        'To not display a value proposition, leave the text field empty.',
    },
  ];

  return (
    <LegacyCard title="Settings in the theme editor">
      <LegacyCard.Section>
        <Divider />
        <HorizontalGrid columns={['oneThird', 'twoThirds']} gap="3">
          <img
            alt=""
            width="100%"
            height="100%"
            src="https://cdn.shopify.com/s/files/1/0714/9666/3337/files/Settings_1.png"
            style={{
              borderRight: '1px solid #000',
            }}
          />
          <DescriptionList items={generalSettingsItems} />
        </HorizontalGrid>
      </LegacyCard.Section>
    </LegacyCard>
  );
}

export function VideoModalCard() {
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

  return (
    <>
      <MediaCard
        title="Watch the video guide"
        description="This video will walk you through how to install and configure this app"
        primaryAction={{
          content: 'Watch video',
          onAction: () => setShowVideo(true),
        }}
      />
      <Modal
        title="How to install and configure this app"
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
  return (
    <>
      <VideoModalCard />
      <LegacyCard title="How to access the app from your Theme Editor">
        <InstallationGuideSection />
      </LegacyCard>
      <SettingsGuideCard />
    </>
  );
}
