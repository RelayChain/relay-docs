---
id: bsc
title: Smart Chain Reference Guide
sidebar_label: Binance Smart-Chain
hide_title: false
hide_table_of_contents: false
description: BSC DeFi instructions for Degens
keywords: 
 - bsc
 - docs
image:  /static/bsc-logo.svg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

:::caution
These docs are provided by the community please use at your own risk
:::

# Getting started

First of all if this is your first APE into the world of crypto welcome! Before you yeet
all your coins at the market we are going to take you through a few steps so that your 
attempt to make your wife's boyfriend jealous is successful and you can enjoy tendies of your own.

:::important
To get started on Binance Smart Chain you are going to need a few tools and links to get you started. 
:::

1. Configure your RPC settings for MetaMask so you can connect to the Smart Chain networks
1. Add the tokens you want to hold so MetaMask is ready and you're able to see the coins' balances

## MetaMask RPC Settings for Binance Smart Chain 

* Network Name: Binance Smart Chain
* New RPC URL: https://bsc-dataseed.binance.org/
* ChainID: 56
* Symbol: BNB
* Explorer: https://bscscan.com/


## Addresses 

Often when you end up on a new chain you are missing the addresses for the additional tokens that you hold in 
your wallet. This can lead to confusion and thinking that you are missing coins. After you do your RPC 
additions to get the chain interacting with your meta mask you also need to add your asset by its address on the new chain. 
The reason for this is DeFI is so new that MetaMask has yet to release a version that contains chains other then Ethereum.
You can add any of the addresses below as custom tokens inside your MetaMask on the Ethereum network. Since Ethereum was 
the original DeFI chain it is already built into MetaMask and doesn't require an addition to work. One thing you might be 
missing though inside your MM is the ZERO token so why don't we try and add it. Go to assests -> Add token -> Custom Token
and input the Zero address listed below. It should find the Symbol after you paste it in there and compare it against the 
table below. Keep in mind here that each smart contract that is deployed has a contract address and each BEP20 token that 
you are adding to your wallet needs to be identified by it's original smart contract address to be genuine. 

:::important
Scammers are out there minting tokens that have the same names and same supply but only one will have the valid contract address.  
:::

# BEP20 
| 	Name	|	Address					|	Decimals	|
| ------------- | 	:-----------: 				| 	-----: 		|
| Zero		| `0x1f534d2B1ee2933f1fdF8e4b63A44b2249d77EAf`	|	 ** 18 **	|	
| BUSD		| `0xe9e7cea3dedca5984780bafc599bd69add087d56`	|	 ** 18 **	|	
| zETH		| `0x7c815bbc21fed2b97ca163552991a5c30d6a2336`	|	 ** 18 **	|	
| BSCPAD	| `0x5A3010d4d8D3B5fB49f8B6E57FB9E48063f16700`	|	 ** 18 **	|	
| WISB		| `0x4f491d389A5bF7C56bd1e4d8aF2280fD217C8543`	|	 ** 18 **	|	
| MATIC		| `0xcc42724c6683b7e57334c4e856f4c9965ed682bd`	|	 ** 18 **	|	



## Adding Liquidity

**Add BNB-ZERO**

<img alt="Add Staking BNB-ZERO 1" src={useBaseUrl('/img/bcs-lp-add-bnb-zero1.png')} />

<img alt="Add Staking BNB-ZERO 2" src={useBaseUrl('/img/bcs-lp-add-bnb-zero2.png')} />

<img alt="Add Staking BNB-ZERO 3" src={useBaseUrl('/img/bcs-lp-add-bnb-zero3.png')} />

<img alt="Add Staking BNB-ZERO 4" src={useBaseUrl('/img/bcs-lp-add-bnb-zero4.png')} />

<img alt="Add Staking BNB-ZERO 5" src={useBaseUrl('/img/bcs-lp-add-bnb-zero5.png')} />

<img alt="Add Staking BNB-ZERO 6" src={useBaseUrl('/img/bcs-lp-add-bnb-zero6.png')} />

<img alt="Add Staking BNB-ZERO 7" src={useBaseUrl('/img/bcs-lp-add-bnb-zero7.png')} />

<img alt="Add Staking BNB-ZERO 8" src={useBaseUrl('/img/bcs-lp-add-bnb-zero8.png')} />

<img alt="Add Staking BNB-ZERO 9" src={useBaseUrl('/img/bcs-lp-add-bnb-zero9.png')} />

<img alt="Add Staking BNB-ZERO 10" src={useBaseUrl('/img/bcs-lp-add-bnb-zero10.png')} />

<img alt="Add Staking BNB-ZERO 11" src={useBaseUrl('/img/bcs-lp-add-bnb-zero11.png')} />

<img alt="Add Staking BNB-ZERO 12" src={useBaseUrl('/img/bcs-lp-add-bnb-zero12.png')} />

<img alt="Add Staking BNB-ZERO 13" src={useBaseUrl('/img/bcs-lp-add-bnb-zero13.png')} />

<img alt="Add Staking BNB-ZERO 14" src={useBaseUrl('/img/bcs-lp-add-bnb-zero14.png')} />

<img alt="Add Staking BNB-ZERO 15" src={useBaseUrl('/img/bcs-lp-add-bnb-zero15.png')} />

<img alt="Add Staking BNB-ZERO 16" src={useBaseUrl('/img/bcs-lp-add-bnb-zero16.png')} />

**Claim BUSD-ZERO**

<img alt="Claim BUSD-ZERO 1" src={useBaseUrl('/img/bcs-lp-claim-busd-zero1.png')} />

<img alt="Claim BUSD-ZERO 2" src={useBaseUrl('/img/bcs-lp-claim-busd-zero2.png')} />

<img alt="Claim BUSD-ZERO 3" src={useBaseUrl('/img/bcs-lp-claim-busd-zero3.png')} />

<img alt="Claim BUSD-ZERO 4" src={useBaseUrl('/img/bcs-lp-claim-busd-zero4.png')} />

<img alt="Claim BUSD-ZERO 5" src={useBaseUrl('/img/bcs-lp-claim-busd-zero5.png')} />



## Screen Shots
Before you start
<img alt="Before Adding Tokens" src={useBaseUrl('/img/mm-bsc-add-token-before.png')} />

After you finish
<img alt="Before Adding Tokens" src={useBaseUrl('/img/mm-bsc-add-token-after.png')} />

<Tabs
  className="unique-tabs"
  defaultValue="ADD"
  values={[
    {label: 'ADD', value: 'ADD'},
    {label: 'ZERO', value: 'ZERO'},
    {label: 'BUSD', value: 'BUSD'},
  ]}>
  <TabItem value="ADD">
	To see screen shots for adding a token click on the tab above for the desired token.
	In each of these screen shots it's assumed you understand to click next and then add token
	to complete the addition of the token to your wallet.
  </TabItem>
  <TabItem value="ZERO">
	Adding ZERO Step1
	
	<img alt="Add Token ZERO1" src={useBaseUrl('/img/mm-bsc-add-token-ZERO1.png')} />
	
	Adding ZERO Step2
	
	<img alt="Add Token ZERO2" src={useBaseUrl('/img/mm-bsc-add-token-ZERO2.png')} />
  </TabItem>
  <TabItem value="BUSD">
	Adding BUSD Step1
	
	<img alt="Add Token BUSD1" src={useBaseUrl('/img/mm-bsc-add-token-BUSD1.png')} />
	
	Adding BUSD Step2
	
	<img alt="Add Token BUSD2" src={useBaseUrl('/img/mm-bsc-add-token-BUSD2.png')} />
  </TabItem>
</Tabs>

## Links 

[Binance Smart Chain RPC Settings](https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain)

[Binance Smart Chain Block Explorer](https://bscscan.com/)

[Binance Smart Chain Launch Pad](https://bscpad.com/)

[Binance Smart Chain View](https://bscview.com/)

[0 Dex](https://0.exchange)


## Cross-chain Transfers

[Official Zero Documentation for Cross-chain Transfers](https://zero-exchange.gitbook.io/zero-exchange-docs/guides/bsc-guides/part-b-cross-chain-to-bsc-mainnet)

## Earn

[Official Zero Documentation for Liquidity Pools](https://zero-exchange.gitbook.io/zero-exchange-docs/guides/bsc-guides/bsc-part-c-add-liquidity-to-lp)

:::tip
**If you appreciate what we are doing feel free to send some ETH AVAX or BSC to the address below**

**0xF144b278Eb4A8aDB18578dB3f5ead8dDCCCf8c5A**
:::