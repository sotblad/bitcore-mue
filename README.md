# Bitcore-MUE
![Circle CI](https://circleci.com/gh/bitpay/bitcore/tree/master.svg?style=shield)

**Infrastructure to build Bitcoin, MonetaryUnit and blockchain-based applications for the next generation of financial technology.**

## Getting Started

### Requirements

- Trusted P2P Peer
- MongoDB Server >= v3.4
- make g++ gcc 

### Checkout the repo


```sh
git clone git@github.com:muecoin/bitcore-mue.git
git checkout master
npm install
```

## Setup Guide

### 1. Setup MonetaryUnit config

<details>
<summary>Example bitcore.config.json</summary>
<br>

```json
{
  "bitcoreNode": {
    "modules": ["./bitcore"],
    "services": {
      "api": {
        "wallets": {
          "allowCreationBeforeCompleteSync": true
        }
      }
    },
    "chains": {
      "MUE": {
        "mainnet": {
          "chainSource": "p2p",
          "trustedPeers": [
            {
              "host": "127.0.0.1",
              "port": 40008
            }
          ],
          "rpc": {
            "host": "127.0.0.1",
            "port": 40009,
            "username": "mue",
            "password": "mue"
          }
        }
      }
    }
  }
}
```

</details>

### 2. Setup the MonetaryUnit Node

<details>
<summary>Example MonetaryUnit Mainnet Config</summary>

```sh
whitelist=127.0.0.1
txindex=0
listen=1
server=1
irc=1
upnp=1

# Make sure port & rpcport matches the
# bitcore.config.json ports for MUE mainnet

port=40008
rpcport=40009
rpcallowip=127.0.0.1

rpcuser=mue
rpcpassword=mue
```

</details>

### 3. Run the MonetaryUnit node

<details>
<summary>Example Starting a MonetaryUnit Node</summary>

```sh
monetaryunitd -daemon
```

</details>

### 4. Start Bitcore

```sh
npm run node
```

## Applications

- [Bitcore Node](packages/bitcore-node) - A full node with extended capabilities using Bitcoin Core
- [Bitcore Wallet](packages/bitcore-wallet) - A command-line based wallet client
- [Bitcore Wallet Client](packages/bitcore-wallet-client) - A client for the wallet service
- [Bitcore Wallet Service](packages/bitcore-wallet-service) - A multisig HD service for wallets
- [Bitpay Wallet](https://github.com/bitpay/copay) - An easy-to-use, multiplatform, multisignature, secure bitcoin wallet
- [Insight](packages/insight) - A blockchain explorer web user interface

## Libraries

- [Bitcore Channel](https://github.com/bitpay/bitcore-channel) - Micropayment channels for rapidly adjusting bitcoin transactions
- [Bitcore ECIES](https://github.com/bitpay/bitcore-ecies) - Uses ECIES symmetric key negotiation from public keys to encrypt arbitrarily long data streams
- [Bitcore Lib](packages/bitcore-lib) - A pure and powerful JavaScript Bitcoin library
- [Bitcore Lib Cash](packages/bitcore-lib-cash) - A pure and powerful JavaScript Bitcoin Cash library
- [Bitcore Message](https://github.com/bitpay/bitcore-message) - Bitcoin message verification and signing
- [Bitcore Mnemonic](packages/bitcore-mnemonic) - Implements mnemonic code for generating deterministic keys
- [Bitcore P2P](packages/bitcore-p2p) - The peer-to-peer networking protocol for BTC
- [Bitcore P2P Cash](packages/bitcore-p2p-cash) - The peer-to-peer networking protocol for BCH
- [Crypto Wallet Core](packages/crypto-wallet-core) - A coin-agnostic wallet library for creating transactions, signing, and address derivation

## Extras

- [Bitcore Build](packages/bitcore-build) - A helper to add tasks to gulp
- [Bitcore Client](packages/bitcore-client) - A helper to create a wallet using the bitcore-v8 infrastructure

## Contributing

See [CONTRIBUTING.md](https://github.com/bitpay/bitcore/blob/master/Contributing.md) on the main bitcore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/bitpay/bitcore/blob/master/LICENSE).

Copyright 2013-2019 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.
