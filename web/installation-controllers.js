import shopify from "./shopify.js";

//helper
const queryAppInstallationId = async (client) => {
  const ID_QUERY = `
    query {
        currentAppInstallation {
            id
        }
    }`;

  return await client.query({
    data: {
      query: ID_QUERY,
    },
  });
};

const NAMESPACE_KEY = "value_prop_app";
const METAFIELD_KEY = "app_installesd";

// has a value of true or false
// endpoint: /api/app-installed (POST)
export const setAppInstalled = async (req, res) => {
  const value =
    req.body.value === true
      ? "true"
      : req.body.value === false
      ? "false"
      : undefined;
  const session = res.locals.shopify.session;

  const client = new shopify.api.clients.Graphql({ session });

  let appId = null;
  try {
    const appIdresponse = await queryAppInstallationId(client);
    appId = appIdresponse.body.data.currentAppInstallation.id;
  } catch (error) {
    res.status(400).send({ message: "Current app ID could not be found" });
  }

  const metafields = [
    {
      key: METAFIELD_KEY,
      ownerId: appId,
      type: "boolean",
      namespace: NAMESPACE_KEY,
      value: value,
    },
  ];

  const SET_METAFIELD_QUERY = `
  mutation metafieldsSet($metafields: [MetafieldsSetInput!]!) {
    metafieldsSet(metafields: $metafields, ) {
      metafields {
        value
      }
      userErrors {
        field
        message
      }
    }
  }
  `;
  try {
    const response = await client.query({
      data: {
        query: SET_METAFIELD_QUERY,
        variables: {
          metafields,
        },
      },
    });
    const metafieldValue = response.body.data.metafieldsSet.metafields?.[0]?.value
    res.status(200).send({
      message: `App installation metafield set to ${metafieldValue}`,
    });
  } catch (error) {
    res
      .status(400)
      .send({ message: "App installation metafield could not be set" });
  }
};

// endpoint: /api/app-installed (GET)
export const getAppInstalled = async (_req, res) => {
  const session = res.locals.shopify.session;
  const client = new shopify.api.clients.Graphql({ session });

  const DATA_QUERY = `
    query getMetafield ($key: String!, $namespace: String!) {
        currentAppInstallation  {
          metafield (key: $key, namespace: $namespace) {
            value
          }
        }
      }
    `;

  try {
    const response = await client.query({
      data: {
        query: DATA_QUERY,
        variables: {
          key: METAFIELD_KEY,
          namespace: NAMESPACE_KEY,
        },
      },
    });

    //if setAppInstalled was not called, the metafield will not exist and have property "null"
    const metafield = response.body.data.currentAppInstallation.metafield;

    const appInstalled =
      metafield === null || metafield.value === "false"
        ? false
        : metafield.value === "true"
        ? true
        : undefined;

    res.status(200).send({ appInstalled });
  } catch (error) {
    //not thrown if metafield does not exist
    res
      .status(400)
      .send({ message: "App installation metafield could not be retrieved" });
  }
};
