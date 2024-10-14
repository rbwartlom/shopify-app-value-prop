# Shopify Icons App (Iconaro)

## Config & deployment
This app is made to be configured on fly.io. The environment variable `SHOPIFY_API_KEY` (public key) is set through the fly.toml file (see the provided file). The `SHOPIFY_API_SECRET` (private key) is set through the fly.io secrets.
See details at the [Shopify deployment guide](https://shopify.dev/docs/apps/launch/deployment/deploy-web-app/deploy-to-hosting-service).

## Project structure
The app is based on the [Shopify Node Template](https://github.com/Shopify/shopify-app-template-node). The main code lives in the `web/frontend` folder and the `extensions` folder. The `web/frontend` folder contains the React frontend that is viewed in the admin dashboard, and the `extensions` folder contains shopify app extensions to embed and configure the icons inside the shopify store builder.


## Frontend Structure
### /pages
- Each file handles loading and app bridge.
- Only "wrapper" polaris components are created here.
- Imports all components and page layout from /components
### /components
- Each Page has a file in Components
- Each component file exports the functions used to render it's cards/sections
  - Exported functions can be used in other components as well
- Each component file has a main export (export default) for it's corresponding page
#### /components/cards
- Houses card components that are either:
  - too complex to fit in a page's component file 
  - or are not primarily made for one specific page
### Export info
- Exported components can end with:
  - "Layout" - used to build a page's layout, ready to insert in a <Page> component
  - "Card" - used to build a <LegacyCard>
  - "Section" - used to build a <LegacyCard.Section>, can only be used inside a <LegacyCard>
- Exported components do not support React children

This is a template for building a [Shopify app](https://shopify.dev/docs/apps/getting-started) using Node and React. It contains the basics for building a Shopify app.

Rather than cloning this repo, you can use your preferred package manager and the Shopify CLI with [these steps](#installing-the-template).

## Benefits

Shopify apps are built on a variety of Shopify tools to create a great merchant experience. The [create an app](https://shopify.dev/docs/apps/getting-started/create) tutorial in our developer documentation will guide you through creating a Shopify app using this template.

The Node app template comes with the following out-of-the-box functionality:

- OAuth: Installing the app and granting permissions
- GraphQL Admin API: Querying or mutating Shopify admin data
- REST Admin API: Resource classes to interact with the API
- Shopify-specific tooling:
  - AppBridge
  - Polaris
  - Webhooks

## Tech Stack

This template combines a number of third party open-source tools:

- [Express](https://expressjs.com/) builds the backend.
- [Vite](https://vitejs.dev/) builds the [React](https://reactjs.org/) frontend.
- [React Router](https://reactrouter.com/) is used for routing. We wrap this with file-based routing.
- [React Query](https://react-query.tanstack.com/) queries the Admin API.
- [`i18next`](https://www.i18next.com/) and related libraries are used to internationalize the frontend.
  - [`react-i18next`](https://react.i18next.com/) is used for React-specific i18n functionality.
  - [`i18next-resources-to-backend`](https://github.com/i18next/i18next-resources-to-backend) is used to dynamically load app translations.
  - [`@formatjs/intl-localematcher`](https://formatjs.io/docs/polyfills/intl-localematcher/) is used to match the user locale with supported app locales.
  - [`@formatjs/intl-locale`](https://formatjs.io/docs/polyfills/intl-locale) is used as a polyfill for [`Intl.Locale`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale) if necessary.
  - [`@formatjs/intl-pluralrules`](https://formatjs.io/docs/polyfills/intl-pluralrules) is used as a polyfill for [`Intl.PluralRules`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules) if necessary.

The following Shopify tools complement these third-party tools to ease app development:

- [Shopify API library](https://github.com/Shopify/shopify-node-api) adds OAuth to the Express backend. This lets users install the app and grant scope permissions.
- [App Bridge React](https://shopify.dev/docs/apps/tools/app-bridge/getting-started/using-react) adds authentication to API requests in the frontend and renders components outside of the App’s iFrame.
- [Polaris React](https://polaris.shopify.com/) is a powerful design system and component library that helps developers build high quality, consistent experiences for Shopify merchants.
- [Custom hooks](https://github.com/Shopify/shopify-frontend-template-react/tree/main/hooks) make authenticated requests to the Admin API.
- [File-based routing](https://github.com/Shopify/shopify-frontend-template-react/blob/main/Routes.jsx) makes creating new pages easier.
- [`@shopify/i18next-shopify`](https://github.com/Shopify/i18next-shopify) is a plugin for [`i18next`](https://www.i18next.com/) that allows translation files to follow the same JSON schema used by Shopify [app extensions](https://shopify.dev/docs/apps/checkout/best-practices/localizing-ui-extensions#how-it-works) and [themes](https://shopify.dev/docs/themes/architecture/locales/storefront-locale-files#usage).
