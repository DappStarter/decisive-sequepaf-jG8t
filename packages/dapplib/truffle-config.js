require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remind hole imitate private foster sell'; 
let testAccounts = [
"0xab875270e8535d96f696a8916cc99b068c00545f37cee759bff1ca5ec3de1a35",
"0xc7b1c57f29c3d5877d7a73cdcb52dde07f0e44585f2b60379a745ad9c415fc2f",
"0x2b5ee7ddef30fc3d07f95d3caf325c3ab4c5d462a74b17a4873aba82de49df4d",
"0x0bdbca7346f002afea7b603f9ce2aa69b2cf3a7bb7d6ca1016a95686adf409f3",
"0x94cd5f85c2df589df4162389e6de1c85756850b7a74f25292cb99f57149049d6",
"0x00b49e16a775bd8de28cd762a6364a29159b6bab34293db23ab80e71d07c8661",
"0x60b265da2a1cd7f2fe6b1512e5f6f2f825fbf4c8336c6342a2544c4c9cb84038",
"0x9ff78baac86d49a87922f80ebea23f6d1903e3b364a1f83212610b7cc7c01fcb",
"0xdf317d7dc272f00d70ae7d934315c5f8e0bf443b604c93fe07c8ba1024590ee1",
"0xb2fecdaa6639878860923372aa7f5fd2bb6b1bdee38c9ed090469635dd348535"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

