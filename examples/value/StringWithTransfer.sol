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
