const CONTRACT_NAME = process.env.CONTRACT_NAME;

function getConfig(env) {
    let config;
    switch (env) {

    case 'production':
    case 'mainnet':
        config = {
            networkId: 'mainnet',
            nodeUrl: process.env.BUSTER_CLI_MAINNET_RPC_SERVER_URL || 'http://14.63.24.92:34591', // 1컴
            contractName: CONTRACT_NAME,
            walletUrl: 'https://wallet.buster.org',
            helperUrl: 'https://helper.mainnet.buster.org',
            helperAccount: 'node',
            explorerUrl: 'https://explorer.mainnet.buster.org',
        };
        break;
        // config = {
        //     networkId: 'mainnet',
        //     nodeUrl: process.env.BUSTER_CLI_MAINNET_RPC_SERVER_URL || 'https://rpc.mainnet.buster.org',
        //     contractName: CONTRACT_NAME,
        //     walletUrl: 'https://wallet.buster.org',
        //     helperUrl: 'https://helper.mainnet.buster.org',
        //     helperAccount: 'buster',
        //     explorerUrl: 'https://explorer.mainnet.buster.org',
        // };
        // break;

    case 'development':
    case 'testnet':
        config = {
            networkId: 'testnet',
            nodeUrl: process.env.BUSTER_CLI_TESTNET_RPC_SERVER_URL || 'http://14.63.24.92:3030',
            contractName: CONTRACT_NAME,
            walletUrl: 'https://wallet.testnet.buster.org',
            helperUrl: 'https://helper.testnet.buster.org',
            helperAccount: 'testnet',
            explorerUrl: 'https://explorer.testnet.buster.org',
        };
        break;
    case 'local':
    case 'localnet':
        config = {
            networkId: process.env.BUSTER_CLI_LOCALNET_NETWORK_ID || 'localnet',
            nodeUrl: process.env.BUSTER_CLI_LOCALNET_RPC_SERVER_URL || process.env.BUSTER_NODE_URL || 'http://127.0.0.1:3030',
            keyPath: process.env.BUSTER_CLI_LOCALNET_KEY_PATH || `${process.env.HOME}/.buster/validator_key.json`,
            walletUrl: process.env.BUSTER_WALLET_URL || 'https://localhost:1234',
            contractName: CONTRACT_NAME,
            helperUrl: process.env.BUSTER_HELPER_URL || 'http://localhost:3000',
            helperAccount: process.env.BUSTER_HELPER_ACCOUNT || 'node',
            explorerUrl: process.env.BUSTER_EXPLORER_URL || 'http://localhost:9001',
        };
        break;
                //     case 'localnet':
        // config = {
        //     networkId: process.env.BUSTER_CLI_LOCALNET_NETWORK_ID || 'localnet',
        //     nodeUrl: process.env.BUSTER_CLI_LOCALNET_RPC_SERVER_URL || process.env.BUSTER_NODE_URL || 'http://127.0.0.1:49504',
        //     // keyPath: process.env.BUSTER_CLI_LOCALNET_KEY_PATH || `${process.env.HOME}/.buster/validator_key.json`,
        //     keyPath: process.env.BUSTER_CLI_LOCALNET_KEY_PATH || `${process.env.HOME}/.buster_2/localnet_multi/node2/validator_key.json`,
        //     walletUrl: process.env.BUSTER_WALLET_URL || 'https://localhost:1234',
        //     contractName: CONTRACT_NAME,
        //     helperUrl: process.env.BUSTER_HELPER_URL || 'http://localhost:3000',
        //     helperAccount: process.env.BUSTER_HELPER_ACCOUNT || 'node0',
        //     explorerUrl: process.env.BUSTER_EXPLORER_URL || 'http://localhost:9001',
        // };
        // break;
// case 'localnet':
    //     config = {
    //         networkId: process.env.BUSTER_CLI_LOCALNET_NETWORK_ID || 'localnet',
    //         nodeUrl: process.env.BUSTER_CLI_LOCALNET_RPC_SERVER_URL || process.env.BUSTER_NODE_URL || 'http://221.148.25.26:3030', // 여기만 2컴의 ip주소로 변경하시면 됩니다. 특이사항으로는 5컴을 메인컴으로 잡고 하면 안됨. 아마 3학원 네트워크 관리자 열어서 작업해야할듯?
    //         keyPath: process.env.BUSTER_CLI_LOCALNET_KEY_PATH || `${process.env.HOME}/.buster/validator_key.json`,
    //         walletUrl: process.env.BUSTER_WALLET_URL || 'https://localhost:1234',
    //         contractName: CONTRACT_NAME,
    //         helperUrl: process.env.BUSTER_HELPER_URL || 'http://localhost:3000',
    //         helperAccount: process.env.BUSTER_HELPER_ACCOUNT || 'node0',
    //         explorerUrl: process.env.BUSTER_EXPLORER_URL || 'http://localhost:9001',
    //     };
    //     break;

    default:
        throw Error(`Unconfigured environment '${env}'. Can be configured in src/config.js.`);
    }
    return config;
}

module.exports = getConfig;
