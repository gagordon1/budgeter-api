const plaidController = require("./controllers/plaid-controller")

const run = async() =>{
    const token = await plaidController.createLinkToken();
    console.log(token)
}
run()

