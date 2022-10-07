import { Configuration, PlaidApi, PlaidEnvironments, LinkTokenCreateRequest, CountryCode, Products } from 'plaid';
const config = require("../config.json")
require('dotenv').config()

const configuration = new Configuration({
  basePath: PlaidEnvironments.development,
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID,
      'PLAID-SECRET': process.env.PLAID_SECRET,
      'Plaid-Version': '2020-09-14',
    },
  },
});

const plaidClient = new PlaidApi(configuration);
module.exports = {

    createLinkToken : async () =>{
        const request : LinkTokenCreateRequest = {
            user: {
              client_user_id: '1',
            },
            client_name: config.appName,
            country_codes: ['US' as CountryCode],
            language: 'en',
            products : ['transactions' as Products]
          };
          try {
            const response = await plaidClient.linkTokenCreate(request);
            return response.data.link_token;
          } catch (error) {
            // handle error
            console.log(error)
          }

    }
}


