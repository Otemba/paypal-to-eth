# paypal-to-eth
Mining in Ethereum without the need for an account by offering a PayPal transaction in a web dialog.
## Basic concept
Any webpage may start a dialog by sending and receiving a json file. TODO example
The dialog is a ping-pong between the browser of your user and the CORS-enabled server of Otemba.

![States of a happy flow](https://raw.githubusercontent.com/Otemba/paypal-to-eth/master/images/statesWithText.png)
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
The example shows a dialog.json that you may use to start with. Now you want to know what the server adds during the converstation.
![The errorReport](https://raw.githubusercontent.com/Otemba/paypal-to-eth/master/images/errorReport.png)
Image: you may want to check if this array is empty after each call

![The quote](https://raw.githubusercontent.com/Otemba/paypal-to-eth/master/images/theQuote.png)
Image: The quote element is the offer in both currencies € and $

![The calculation](https://raw.githubusercontent.com/Otemba/paypal-to-eth/master/images/theCalculation.png)
Image: calc and payment offer transparency over the offered prices and costs
### Calling the Otemba server
The server keeps track of the dialog and figures out what you need during the conversation. 


### If you did not have the time to read all that stuff



 

<!--stackedit_data:
eyJoaXN0b3J5IjpbMTU2MDUxMjg4NSwtMTg1NzY4NTQxMSw0NT
Y1Nzk0OTcsMTE5NTcxNDgzOSwtMTE2MDUzNTYzLDE3ODAxNjY3
NTQsMjIzMjk1NTIsLTE0ODYzMjAzMjAsLTQxMDAwMDcyMywtNj
M2NzQwNjgyLDE1MzgzNjQ0NTYsMTM3OTY5MzQ5OSw3NTU1Mjk1
NThdfQ==
-->