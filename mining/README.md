# paypal-to-eth
Mining in Ethereum without the need for an account by offering a PayPal transaction in a web dialog.
## Basic concept
Any webpage may start a dialog by sending and receiving a json file. TODO example
The dialog is a ping-pong between the browser of your user and the CORS-enabled server of Otemba.

![States of a happy flow](![https://raw.githubusercontent.com/Otemba/paypal-to-eth/master/images/](https://raw.githubusercontent.com/Otemba/paypal-to-eth/master/images/testModes.png)statesWithText.png)

Image: A non-blocking happy flow dialog needs three REST calls
## What do  dialog.json tell?
Please note the sample start page for an initial dialog. The dialog is a json object that grows during the session. The following are some indicators that may support you whilst controlling and tracking the state.
### Exploratory testing and trying out
This is an optional entry that may save a lot of Eth.
![Test Modes](https://raw.githubusercontent.com/Otemba/paypal-to-eth/master/images/testModes.png)
Image: Test-modes that support a quick start
### The Ethereum contract that you want to mine
As a suggestion you may want to use Remix to compile your contract. Please note that you need to provide its arguments in deploy.arguments.
	![The contract](https://raw.githubusercontent.com/Otemba/paypal-to-eth/master/images/theContract.png)
Image: 


 

<!--stackedit_data:
eyJoaXN0b3J5IjpbMTQwMjk2Mzc2NCwtMTE2MDUzNTYzLDE3OD
AxNjY3NTQsMjIzMjk1NTIsLTE0ODYzMjAzMjAsLTQxMDAwMDcy
MywtNjM2NzQwNjgyLDE1MzgzNjQ0NTYsMTM3OTY5MzQ5OSw3NT
U1Mjk1NThdfQ==
-->