---
id: zerogravity
title: Zero Gravity Launchpad
sidebar_label: Zero Gravity Launchpad
hide_title: true
hide_table_of_contents: true
description: Zero Gravity Launchpad
keywords:
 - "ZERO Exchange"
 - "$ZERO"
 - "@OfficialZeroDEX"
 - "Zero Gravity"
image:  /static/avax-logo.svg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## ZeroGravity Launchpad

The Zero Exchange has its own launchpad [ZeroGravity](https://medium.com/@OfficialZeroDex/introducing-the-zerogravity-launchpad-61fd8f751918):
	  
* Allows great flexibility for the projects to choose the chain(s) they want to launch their token on (+ feature of cross chaining if on several chains)
* Sometimes, an IDO will require a KYC ("Know Your Customer"):
	* Either to make it to the whitelist to be able to participate in an IDO (=> being allowed or not to participate in the lottery system)
	* Either for an allocation winner to be able to claim the allocation
* The Zero exchange has found a way for citizens from barred countries to still benefit these IDOs ((typically, US or Canadian citizens for example). An [automated market maker](https://medium.com/@OfficialZeroDex/0-exchange-finds-its-preferred-market-maker-fac7b6a9d1be) sells during a period of the time the allocation of the winners who didn't pass the KYC, after which, they receive their share of the benefits in a stable coin without ever having received the IDO tokens.
	* Note: A project may decide to not allow this mecanism and force the Zero team to not apply it, so check for each IDO
 
  
## IDOs on ZeroGravity

* Date TBC, 2021: [NFTrade](ido/ido005.md) (not started)
* Date TBC, 2021: [SENT](ido/ido004.md) (not started)
* June 1st, 2021: [GROW](ido/ido003.md) (done)
* May 10th, 2021: [WISB](ido/ido002.md) (done)
* May 07th, 2021: [Wasder](ido/ido001.md) (done)


## IDO participation and allocations

### How to qualify for an IDO?

* By holding Zero in your wallet
* Being in liquidity pools, some LP provide multipliers for the lottery tickets calculation. 

:::tip
It doesn't matter on which chain you are holding Zero or being in liquidity pools, the Zero exchange will compound per wallet all your assets across the chains to determine your tier level and the number of lottery tickets you earn.
:::

### How to win an IDO allocation
      
Based on your tier level (but please check for each IDO what are tier requirements):  
* You may receive at least a guaranteed allocation if you have reached the Red Giant or Supernova levels  
* You enter a lottery with a number of tickets calculated by the system (check the information further down)  
	* Entering the lottery is combined with the guaranteed allocation: You can still make a chance to win more allocations if you already secured guaranteed one(s).  
	* ZERO implements a fair and unbiased chance of winning an allocation thanks to the integration of a decentralized service available through the Chainlink Network, [Chainlink Verifiable Randomness Function (VRF)](https://medium.com/@OfficialZeroDex/integrating-chainlink-vrf-to-secure-fair-distribution-of-zerogravity-ido-allocations-b839e6a0c594)


#### Snapshots
Prior to each IDO, an additional rule is that you must hold enough ZERO or provide enough liquidity during a certain amount of time: That time period is communicated for each IDO. 

Check this [FAQ for more explanations](faq/faq007.md).

### Overview tier levels and lottery tickets system
      
#### Tier levels:
      
1. "Nebula"  
	** Holding minimum 5000 ZERO or equivalent in liquidity pools **  
      * Each 5k zero gives one ticket for the lottery  
      * Each 25k zero gives one xtra bonus ticket  
      * Number of tickets calculated capped to 500k zero  	
      
1. "Red Giant": Guaranteed allocation  
	** Holding mininum 500.000 ZERO or equivalent in liquidity pools **

1. "Super Nova": Several guaranteed allocations  
	** Holding 1 million ZERO or equivalent in liquidity pools **

:::note The ZERO tokens rewards from the liquidity pools that are not claimed, don't count towards the tier level/number of tickets calculation 
:::

#### Online calculator for number of tickets
      
To check your tier level and number of tickets you will earn for the lottery, there is an [online calculator](http://csb-z8u0x.netlify.app) developped by a community member.  
You have to input manually the number of Zero you hold, there is not a calculation yet based on the LP tokens. 

:::note
The online calcuator doesn't yet allow a calculation based on the LP tokens, you will have to estimate yourself the equivalent of holding ZERO.
:::

#### Participation in liquidity pools for ticket calculation
      
Some liquidity pools benefit from a 2x multiplier

:::note      
Check this [Medium article](https://medium.com/@OfficialZeroDex/introducing-the-zerogravity-launchpad-61fd8f751918) for the eligible liquidity pools and LP token values for the calculation
:::

### Reference 

Check the official description of the tier system in this [Medium article](https://medium.com/@OfficialZeroDex/introducing-the-zerogravity-launchpad-61fd8f751918)

