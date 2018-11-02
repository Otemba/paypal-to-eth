pragma solidity ^0.4.25;

contract Eternal {
    
    string text;
    int integer;
    uint unsigned = 234;
    bool boolean = true;
    bytes byteS = "hello byteS";
    bytes32 byteS32 = "hello byteS32";
    byte[] byteArray = new byte[](10);
    
    constructor(string t, 
                int i,
                uint u,
                bool b,
                bytes bS,
                bytes32 bS32,
                byte[] bA
                ) public payable {
        text = t;
        integer = i;
        unsigned = u;
        boolean = b;
        byteS = bS;
        byteS32 = bS32;
        byteArray = bA;
    }

    function getByteArray() public constant returns (byte[]) {
        return byteArray;
    }

    function getByteS32() public constant returns (bytes32) {
        return byteS32;
    }

    function getByteS() public constant returns (bytes) {
        return byteS;
    }

    function getBoolean() public constant returns (bool) {
        return boolean;
    }

    function getUnsigned() public constant returns (uint) {
        return unsigned;
    }

    function getInteger() public constant returns (int) {
        return integer;
    }

    function getText() public constant returns (string) {
    	return text;
    }
    
}

bytecode: {
	"object": "0x608060405260405161039238038061039283398101806040528101908080518201929190505050806000908051906020019061003c929190610043565b50506100e8565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061008457805160ff19168380011785556100b2565b828001600101855582156100b2579182015b828111156100b1578251825591602001919060010190610096565b5b5090506100bf91906100c3565b5090565b6100e591905b808211156100e15760008160009055506001016100c9565b5090565b90565b61029b806100f76000396000f30060806040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806314fe84a71461005157806365680b8d146100e1575b600080fd5b34801561005d57600080fd5b506100666101c3565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100a657808201518184015260208101905061008b565b50505050905090810190601f1680156100d35780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156100ed57600080fd5b50610148600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610265565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561018857808201518184015260208101905061016d565b50505050905090810190601f1680156101b55780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b606060008054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561025b5780601f106102305761010080835404028352916020019161025b565b820191906000526020600020905b81548152906001019060200180831161023e57829003601f168201915b5050505050905090565b60608190509190505600a165627a7a723058202dc9316a6668af81c7b2586a0d98174469a825937f567983d8331d9e44273f3a0029",
}
ABI: [
	{
		"constant": true,
		"inputs": [],
		"name": "getEngravedText",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "stringToReturn",
				"type": "string"
			}
		],
		"name": "getSame",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "eT",
				"type": "string"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "constructor"
	}
]