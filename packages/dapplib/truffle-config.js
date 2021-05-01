require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'inflict duck ensure strategy wait cost spike plastic coral light army gesture'; 
let testAccounts = [
"0x215009eb450f5fc66dc996faff99ce2db5d62e32b7d2b83ff31fd80a05a21c24",
"0xa3e90011ad557d1aa825ad52448417f2a1fd7c04f14a595164b53f51ae9286d7",
"0x0cf33df24ab7b1912d6a6ef04ee304be5dbc74ec621c934753164dda0e8d389d",
"0x8cc4915c69c3a2749c54b42a62d3f6490d15e5eb79301dac3bd801e16827d504",
"0xb97b497bd532756414ada3a805ffedc28867041950afb71595f3302012378e7c",
"0xa4f26cb3a0e38d2658cce52cd7546f851604646174ad217851a6415b9473a4f8",
"0x02cf0b74fe7138995e4e0b128d9667cd98448829163a0501210e2d087e9bbb9e",
"0x4ada5b252df96f2349dd59039bdf1b132786a97b7941c85b62bf534ca91d8522",
"0x348b6f809c19457f2a43d71fc6c28acd7f1081887465b1bca9f8f6733044e320",
"0x25a376722a10d1b2dc6b8a4a8d87d55f14b295c34b0ee1fe35b66dab3b542973"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


