---
id: avax
title: AVAX Reference Guide
sidebar_label: Avalanche
hide_title: false
hide_table_of_contents: false
description: AVAX DeFi instructions for Degens
keywords: 
 - avax
 - docs
image:  /static/avax-logo.svg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

:::caution
These docs are provided by the community please use at your own risk
:::

# Getting started

First of all if this is your first APE into the world of crypto welcome! Before you YETH all your coins at the 
market we are going to take you through a few steps so that your attempt to make your wife's boyfriend jealous 
is successful and you can enjoy copious amounts of coins of your own.

To get started on AVAX you are going to need a few tools and links to get you started. 

1. Configure your RPC settings for MetaMask so you can connect to the AVAX network
1. Setup a seed with the [AVAX Web Wallet](https://wallet.avax.network/)
1. Add the tokens you want to hold so MetaMask is ready and you're able to see the coins' balances.

## MetaMask RPC Settings for Avalanche 

* Network Name: Avalanche Mainnet C-Chain
* New RPC URL: https://api.avax.network/ext/bc/C/rpc
* ChainID: 0xa86a
* Symbol: AVAX
* Explorer: https://cchain.explorer.avax.network/

## Addresses 

Often when you end up on a new chain you are missing the addresses for the additional tokens that you hold in 
your wallet. This can lead to confusion and thinking that you are missing coins. After you do your RPC 
additions to get the chain interacting with your meta mask you also need to add your asset by its address on the new chain. 
The reason for this is DeFI is so new that MetaMask has yet to release a version that contains chains other then Ethereum.
You can add any of the addresses below as custom tokens inside your MetaMask on the Avalanche Network. Since Ethereum was 
the original DeFI chain it is already built into MetaMask and doesn't require an addition to work. One thing you might be 
missing though inside your MM is the ZERO token so why don't we try and add it. Go to assests -> Add token -> Custom Token
and input the Zero address listed below. It should find the Symbol after you paste it in there and compare it against the 
table below. Keep in mind here that each smart contract that is deployed has a contract address and each ARC20 token that 
you are adding to your wallet needs to be identified by it's original smart contract address to be genuine. 

:::important
Scammers are out there minting tokens that have the same names and same supply but only one will have the valid contract address.  
:::

# ARC20
| Symbol	|	Address					|	Decimals	|
| ------------- | 	:-----------: 				| 	-----: 		|
| ZERO		| `0x008E26068B3EB40B443d3Ea88c1fF99B789c10F7`	|	 ** 18  **	| 
| zETH		| `0xf6F3EEa905ac1da6F6DD37d06810C6Fcb0EF5183`	|	 ** 18 **	|	
| zUSDT		| `0x650CECaFE61f3f65Edd21eFacCa18Cc905EeF0B7`	|	 ** 6  **	| 
| zUSDC		| `0x474Bb79C3e8E65DcC6dF30F9dE68592ed48BBFDb`	|	 ** 6  **	| 
| zBTC		| `0xc4f4Ff34A2e2cF5e4c892476BB2D056871125452`	|	 ** 8  **	| 
| zDAI		| `0x12f108E6138d4A9c58511e042399cF8f90D5673f`	|	 ** 18  **	| 
| WAVAX		| `0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7`	|	 ** 18  **	| 
| GDL		| `0xd606199557c8ab6f4cc70bd03facc96ca576f142`	|	 ** 18  **	| 


## Screen Shots
Before you start
<img alt="Before Adding Tokens" src={useBaseUrl('/img/mm-avax-add-token-before.png')} />

After you finish
<img alt="Before Adding Tokens" src={useBaseUrl('/img/mm-avax-add-token-after.png')} />

<Tabs
  className="unique-tabs"
  defaultValue="ADD"
  values={[
    {label: 'ADD', value: 'ADD'},
    {label: 'ZERO', value: 'ZERO'},
    {label: 'zETH', value: 'zETH'},
    {label: 'zUSDC', value: 'zUSDC'},
	{label: 'zBTC', value: 'zBTC'},
	{label: 'zDAI', value: 'zDAI'},
	{label: 'WAVAX', value: 'WAVAX'},
  ]}>
  <TabItem value="ADD">
	To see screen shots for adding a token click on the tab above for the desired token.
	In each of these screen shots it's assumed you understand to click next and then add token
	to complete the addition of the token to your wallet.
  </TabItem>
  <TabItem value="ZERO">
	Adding ZERO Step1
	
	<img alt="Add Token ZERO1" src={useBaseUrl('/img/mm-avax-add-token-ZERO1.png')} />
	
	Adding ZERO Step2
	
	<img alt="Add Token ZERO2" src={useBaseUrl('/img/mm-avax-add-token-ZERO2.png')} />
  </TabItem>
  <TabItem value="zETH">
	Adding zETH Step1
	
	<img alt="Add Token zETH1" src={useBaseUrl('/img/mm-avax-add-token-zETH1.png')} />
	
	Adding zETH Step2
	
	<img alt="Add Token zETH2" src={useBaseUrl('/img/mm-avax-add-token-zETH2.png')} />
  </TabItem>
  <TabItem value="zUSDC">
	Adding zUSDC Step1
	
	<img alt="Add Token zUSDC1" src={useBaseUrl('/img/mm-avax-add-token-zUSDC1.png')} />
	
	Adding zETH Step2
	
	<img alt="Add Token zUSDC2" src={useBaseUrl('/img/mm-avax-add-token-zUSDC2.png')} />
  </TabItem>
  <TabItem value="zBTC">
	Adding zBTC Step1
	
	<img alt="Add Token zBTC1" src={useBaseUrl('/img/mm-avax-add-token-zBTC1.png')} />
	
	Adding zBTC Step2
	
	<img alt="Add Token zBTC2" src={useBaseUrl('/img/mm-avax-add-token-zBTC2.png')} />
  </TabItem>
   <TabItem value="zDAI">
	Adding zDAI Step1
	
	<img alt="Add Token zDAI1" src={useBaseUrl('/img/mm-avax-add-token-zDAI1.png')} />
	
	Adding zDAI Step2
	
	<img alt="Add Token zBTC2" src={useBaseUrl('/img/mm-avax-add-token-zDAI2.png')} />
  </TabItem>
  <TabItem value="WAVAX">
	Adding WAVAX Step1
	
	<img alt="Add Token WAVAX1" src={useBaseUrl('/img/mm-avax-add-token-WAVAX1.png')} />
	
	Adding WAVAX Step2
	
	<img alt="Add Token WAVAX2" src={useBaseUrl('/img/mm-avax-add-token-WAVAX2.png')} />
  </TabItem>
  
</Tabs>

## Video Tutorials

[How to configure MetaMask for Zero Exchange](https://www.youtube.com/watch?v=qlFmpn7_Ng8)

[How to get AVAX to MetaMask](https://www.youtube.com/watch?v=qs1O_5aX-L0)

[How to get AVAX / ETH Cross-chain Transfer](https://www.youtube.com/watch?v=6W3OEFCI6TE)

## Links 

[MetaMask RPC Settings for Avalanche](https://docs.avax.network/build/tutorials/smart-contracts/deploy-a-smart-contract-on-avalanche-using-remix-and-metamask)

[MetaMask RPC Settings Zero Documentation](https://zero-exchange.gitbook.io/zero-exchange-docs/guides/avalanche-guides/part-a-how-to-add-avalanche-mainnet-to-metamask)

[Avax Web Wallet](https://wallet.avax.networks/)

[Avax X-Chain Block Explorer](https://explorer.avax.network/)

[Avax C-Chain Block Explorer](https://cchain.explorer.avax.network/)


## Cross-chain Transfers

:::tip
Reset your MetaMask wallet EACH TIME you switch between the ETH, Avalanche, or BSC network
:::

:::warning
GAS SETTINGS for ARC-20 cross-chain transfers: 470 gas price, gwei 275000
:::


[Official Zero Documentation on Cross-chain Transfers](https://zero-exchange.gitbook.io/zero-exchange-docs/guides/avalanche-guides/part-b-how-to-enter-avalanche-mainnet-via-zero-exchange)

## Earn

[Official Zero Documentation on Liquidity Pool Additions](https://zero-exchange.gitbook.io/zero-exchange-docs/guides/avalanche-guides/part-c-how-to-buy-swap-tokens-for-the-lp-pair-of-your-choosing)

[Official Zero Documentation on Depositing LP tokens](https://zero-exchange.gitbook.io/zero-exchange-docs/guides/avalanche-guides/part-d-how-to-add-liquidity-to-lp-pair-and-deposit-lp-tokens)

:::tip
**If you appreciate what we are doing feel free to send some ETH AVAX or BSC to the address below**

**0xF144b278Eb4A8aDB18578dB3f5ead8dDCCCf8c5A**
:::