const blockChain = require('sympcoin-blockchain/src/blockchain')
import EC from 'elliptic'

class BlockChainService {

    blockChainIntance = new blockChain.Blockchain();
    walletKeys = [];

    constructor() {
        this.blockChainIntance.difficulty  = 1;
        this.blockChainIntance.minePendingTransactions('my-wallet-address');

        this.generateWalletKeys();
    }

    getBlocks() {
        return this.blockChainIntance.chain;
    }

    generateWalletKeys() {
        const ec = new EC.ec('secp256k1');
        const key = ec.genKeyPair();

        this.walletKeys.push({
            keyObj: key,
            publicKey: key.getPublic('hex'),
            privateKey: key.getPrivate('hex')
        });
    }
}

export default BlockChainService