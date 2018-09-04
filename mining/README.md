# paypal-to-eth
Mining in Ethereum without the need for an account by offering a PayPal transaction in a web dialog.
## Basic concept
Any webpage may start a dialog by sending and receiving a json file. TODO example
The dialog is a ping-pong between the browser of your user and the CORS-enabled server of Otemba.

![States of a happy flow](![https://raw.githubusercontent.com/Otemba/paypal-to-eth/master/images/](https://raw.githubusercontent.com/Otemba/paypal-to-eth/master/images/testModes.png)statesWithText.png)

Image: A non-blocking happy flow dialog needs three REST calls
## What do you need in your dialog.json?
Please note the sample start page for an initial dialog. The dialog is a json object that grows during the session. The following are some indicators that may support you whilst controlling and tracking the state.
### Exploratory testing and trying out
This is an optional entry that may save a lot of Eth.
![Test Modes](https://raw.githubusercontent.com/Otemba/paypal-to-eth/master/images/testModes.png)
Image: Test-modes that support a quick start
### The Ethereum contract that you want to mine
As a suggestion you may want to use Remix to compile your contract. Please note that you need to provide its arguments in deploy.arguments.
	![The contract](https://raw.githubusercontent.com/Otemba/paypal-to-eth/master/images/theContract.png)
Image: the most important element is the contract that you want to deploy
## What does the dialog.json tell you when it grows after each call?


 

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTkyMjMyNzc0LC0xMTYwNTM1NjMsMTc4MD
E2Njc1NCwyMjMyOTU1MiwtMTQ4NjMyMDMyMCwtNDEwMDAwNzIz
LC02MzY3NDA2ODIsMTUzODM2NDQ1NiwxMzc5NjkzNDk5LDc1NT
UyOTU1OF19
-->