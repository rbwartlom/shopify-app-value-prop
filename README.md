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