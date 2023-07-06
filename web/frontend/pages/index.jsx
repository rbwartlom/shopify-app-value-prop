import {Page, FooterHelp, Spinner} from '@shopify/polaris';

import HomeLayout from '../components/HomeLayout';

import { useEffect, useState } from 'react';

export default function HomePage() {
  
  return (
    <>
      <Page
        title="Home"
        subtitle="Easily Communicate Value Propositions to Customers"
        divider
      >
        <HomeLayout />
      </Page>
      <FooterHelp>Made with 🖤, renders first</FooterHelp>
    </>
  );
}
