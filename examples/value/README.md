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
To achieve that, you must add value to your dialog.json. 


<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE0MjU5MTMwNzgsLTM2NTkzOTE4OF19
-->