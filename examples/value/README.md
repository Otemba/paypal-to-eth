# Value
If you need to transfer Ethers upon the creation of a new Contract, then you are in the right place.
The following Contract [StringWithTransfer.sol](https://github.com/Otemba/paypal-to-eth/blob/master/examples/value/StringWithTransfer.sol) is available in this directory.

    pragma solidity ^0.4.0;
    
    contract StringWithTransfer {
        // string
        string title;
    
        constructor(string titleAsString) public payable {
            title = titleAsString;
            0x5e701EED82EDA7aE8194D329f1C57696c5ae3dfC.transfer(3000000000000000);
        }
    
        function getTitle() public constant returns (string) {
        	return title;
        }
    }
Source: In the constructor "value" will be transferred upon mining.
### Dialog
To achieve that, you must add value to your dialog.json. Please note the value property in the [example](https://github.com/Otemba/paypal-to-eth/blob/master/examples/value/happyFlowCreateContractWithValue.json).

    {
    	"flow": "liftoff",
    	"test": {
    		"ethereum": "localhostOtemba",
    		"PayPal": "skip"
    	},
    	"ABI":[{"constant":true,"inputs":[],"name":"getTitle","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"titleAsString","type":"string"}],"payable":true,"stateMutability":"payable","type":"constructor"}],
    	"deploy":{
    		"data": "0x6080604...",
    		"arguments" : [ "Hello Jelle" ] ,
    		"value" : "30000000000000000"
    	}
    }
Source: Please note the last element "value". Please note the *string* value of it that is a number in Wei. 
### Integrate the examples above
For trying out, you may want to edit the [html page for trying out](https://github.com/Otemba/paypal-to-eth/blob/master/otembaTryOutPage.html) by replacing the `var dialog` with the [example json](https://github.com/Otemba/paypal-to-eth/blob/master/examples/value/happyFlowCreateContractWithValue.json) (same as above).
### If you did not find the time to read this
You may want to try out the sample.
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTY1ODYyMjI4MiwtMzY1OTM5MTg4XX0=
-->