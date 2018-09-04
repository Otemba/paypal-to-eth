# paypal-to-eth
Mining in Ethereum without the need for an account by offering a PayPal transaction in a web dialog.
## Basic concept
Any webpage may start a dialog by sending and receiving a json file. TODO example
The dialog is a ping-pong between the browser of your user and the CORS-enabled server of Otemba.

![States of a happy flow](https://raw.githubusercontent.com/Otemba/paypal-to-eth/master/images/statesWithText.png)

Image: A non-blocking happy flow dialog needs three REST calls
## What does the dialog.json tell?
Please note the sample start page for an initial dialog. The dialog is a json object that grows during the session. The following are some indicators that may support you whilst controlling and tracking the state.

Image: Test modes

 

<!--stackedit_data:
eyJoaXN0b3J5IjpbMjA5MjA2OTM4MSwtMTQ4NjMyMDMyMCwtND
EwMDAwNzIzLC02MzY3NDA2ODIsMTUzODM2NDQ1NiwxMzc5Njkz
NDk5LDc1NTUyOTU1OF19
-->