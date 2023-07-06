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
              src="//vorkasse-test.myshopify.com/cdn/shop/files/Copy_of_LumoPlant_900_x_300_px_1.png?crop=center&height=200&v=1688479863&width=200"
              width={35}
              height={35}
              className="value-image"
            />
            <div className="value-prop-text">100% Plant-based ingredients</div>
          </div>
          <div className="value-container value-padding-between">
            <img
              src="//vorkasse-test.myshopify.com/cdn/shop/files/2279638.png?crop=center&height=200&v=1688479768&width=200"
              width={35}
              height={35}
              className="value-image"
            />
            <div className="value-prop-text">Free 30-Day-Returns</div>
          </div>
          <div className="value-container value-padding-between">
            <img
              src="//vorkasse-test.myshopify.com/cdn/shop/files/102649.png?crop=center&height=200&v=1688389064&width=200"
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
              src="//vorkasse-test.myshopify.com/cdn/shop/files/Copy_of_LumoPlant_900_x_300_px_1.png?crop=center&height=200&v=1688479863&width=200"
              width={35}
              height={35}
              className="value-image"
            />
            <div className="value-prop-text">100% Plant-based</div>
          </div>
          <div className="value-container value-padding-between">
            <img
              src="//vorkasse-test.myshopify.com/cdn/shop/files/2279638.png?crop=center&height=200&v=1688479768&width=200"
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
              src="//vorkasse-test.myshopify.com/cdn/shop/files/warning-7-xxl.png?crop=center&height=200&v=1688484325&width=200"
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

  const {PreviewComponent, specialInfo, hasBg, settings} = props;

  const [background, setBackground] = useState(true);
  const [showInstructions, setShowInstructions] = useState(false);

  return (
    <>
      <LegacyCard.Section>
        <p style={{paddingBottom: '10px'}}>{specialInfo}</p>
        {hasBg && (
          <Checkbox
            label="Display Background"
            checked={background}
            onChange={setBackground}
          />
        )}
      </LegacyCard.Section>
      <LegacyCard.Section title="Preview:" subdued>
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
          {showInstructions ? 'Hide' : 'Show'} how to add this to your theme
        </Button>
        <Collapsible
          open={showInstructions}
          transition={{duration: '500ms', timingFunction: 'ease-in-out'}}
          id="instructions-collapsible"
        >
          <InstallationGuideSection />
          <LegacyCard.Section title="Then configure the following settings:">
            <List>
              {settings.map((setting, index) => (
                <List.Item key={index}>{setting}</List.Item>
              ))}
            </List>
           <Link url='/tutorial'>Visit our full setup guide</Link>
          </LegacyCard.Section>
        </Collapsible>
      </LegacyCard.Section>
    </>
  );
};

export default function AppDemoCard() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const handleTabChange = (selectedTabIndex) => {
    setSelectedTabIndex(selectedTabIndex);
  };

  const tabs = [
    {
      id: 'bullet',
      content: 'Icon bullets',
      accessibilityLabel: 'Bullet-Style',
    },
    {
      id: 'icon',
      content: 'Icons',
    },
    {
      id: 'notification',
      content: 'Notification',
    },
    {
      id: 'plain',
      content: 'No Icons',
    },
  ];

  const tabContent = {
    bullet: {
      title: 'Bullet-Style Value Propositions',
      specialInfo: `Supports up to 5 value propositions. Icons are optional`,
      hasBg: true,
      PreviewComponent: BulletDemo,
      settings: [
        'Display as bullets: checked',
        'Text color: Black',
        'Text size: 1em',
        'Background color: #97c691',
        'Background corner radius: 10px',
        'Background padding: 1em',
        'Icon size: 35px',
        'Space between: 0.8em',
      ],
    },
    icon: {
      title: 'Icon-Style Value Propositions',
      specialInfo: 'Supports up to 3 value propositions. Icons are optional',
      PreviewComponent: IconDemo,
      hasBg: true,
      settings: [
        'Display as bullets: unchecked',
        'Text color: Black',
        'Text size: 1em',
        'Background color: #a4baef',
        'Background corner radius: 10px',
        'Background padding: 1em',
        'Icon size: 35px',
        'Space between: 0.8em',
      ],
    },
    notification: {
      title: 'Notification-Style',
      specialInfo:
        'Bullet-style value prop but uses one bullet and a background',
      hasBg: false,
      PreviewComponent: NotificationDemo,
      settings: [
        'Add only one value proposition text',
        'Display as bullets: checked',
        'Text color: White',
        'Text size: 1em',
        'Background color: #d10000',
        'Background corner radius: 12px',
        'Background padding: 0.8em',
        'Icon size: 35px',
      ],
    },
    plain: {
      title: 'Value Propositions without Icons',
      specialInfo:
        'Bullet-style value propositions without icons or background styling',
      hasBg: true,
      PreviewComponent: PlainDemo,
      settings: [
        'Add only one value proposition text',
        "Don't add an icon for the inputted text",
        'Text color: Black',
        'Text size: 1em',
        'Background color: #a9e5f5',
        'Background corner radius: 25px',
        'Background padding: 1.4em',
      ],
    },
  };

  return (
    <LegacyCard title="Styling examples">
      <LegacyCard.Section>
        <p>
          Some examples of how the value props can be styled & modified in the
          theme editor.
        </p>
      </LegacyCard.Section>
      <Tabs tabs={tabs} onSelect={handleTabChange} selected={selectedTabIndex}>
        <TabInfo {...tabContent[tabs[selectedTabIndex].id]} />
      </Tabs>
    </LegacyCard>
  );
}
