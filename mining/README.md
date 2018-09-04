# paypal-to-eth
Mining in Ethereum without the need for an account by offering a PayPal transaction in a web dialog.
## Basic concept
Any webpage may start a dialog by sending and receiving a json file. TODO example
The dialog is a ping-pong between the browser of your user and the CORS-enabled server of Otemba.

![States of a happy flow](![https://raw.githubusercontent.com/Otemba/paypal-to-eth/master/images/](https://raw.githubusercontent.com/Otemba/paypal-to-eth/master/images/testModes.png)statesWithText.png)

Image: A non-blocking happy flow dialog needs three REST calls
## What does the dialog.json tell?
Please note the sample start page for an initial dialog. The dialog is a json object that grows during the session. The following are some indicators that may support you whilst controlling and tracking the state.
![Test Modes](https://raw.githubusercontent.com/Otemba/paypal-to-eth/master/images/testModes.png)
Image: Test-modes that support a quick start

 

<!--stackedit_data:
eyJoaXN0b3J5IjpbMjIzMjk1NTIsLTE0ODYzMjAzMjAsLTQxMD
AwMDcyMywtNjM2NzQwNjgyLDE1MzgzNjQ0NTYsMTM3OTY5MzQ5
OSw3NTU1Mjk1NThdfQ==
-->