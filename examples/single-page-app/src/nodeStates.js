/**
 * 0. postcondition: nop
 * 1. postcondition: PayPal challenge based on web3.eth.estimateGas
 * 2. postcondition: miningStatus.transactionHash
 * 3. postcondition: hasMiningStatusAddress (walk into 4 if available return unchanged if not)
 * 4. postcondition: values in all function calls (ignore update)
 */

// https://codepen.io/fnocke/pen/wXaMeL?editors=0011
if (typeof JSON.elementExists !== "function") {
	JSON.elementExists = function(obj, path) {
	    return !!path.split(".").reduce((obj, prop) => {
	        return obj && obj[prop] ? obj[prop] : undefined;
	    }, obj);
	}
}

var countUpdatesOrInspects = function(json, type) {
	var count = 0;
	if ( Array.isArray(json.flow) ) {
		json.flow.filter(function(element) {
			if ( element.type === type ) count++;
		});
	}
	return count;
}

var hasInspects = function(json) {
	return this.countUpdatesOrInspects(json, "inspect") > 0;
}

var hasUpdate = function(json) {
	return this.countUpdatesOrInspects(json, "update") > 0;
}

var hasAuthorization = function(json) {
	var result = false;
	result = result || JSON.elementExists(json, "onAuthorize");
	return result;
}

var hasQuote = function(json) {
	return JSON.elementExists(json, "quote");
}

var isTestMode = function(json) {
	return ( json.test !== undefined && json.test.PayPal !== undefined );
}

var isProduction = function(json) {
	return !JSON.elementExists(json, "test");
}

var hasQuoteOrIsTestMode = function(json) {
	var result = false;
	result = result || this.hasQuote(json);
	result = result || isTestMode(json);
	return result;
}

var hasMiningStatusTransactionHash = function(json) {
	return ( JSON.elementExists(json, "miningStatus.transactionHash") || JSON.elementExists(json, "mining.tx"));
}

var hasMiningStatusContractAddress = function(json) {
	return JSON.elementExists(json, "miningStatus.contractAddress");
}

var hasErrors = function(json) {
	return ( json.errorReport.length > 0 );
}

var stepBase = 0;

var setStepBase = function(value) {
	stepBase = value;
}

/**
 * after each interaction with Otemba.io ...
 * hasQuoteOrIsTestMode(json) hasMiningStatusTransactionHash(json) hasMiningStatusContractAddress(json) -> 3
 * hasQuoteOrIsTestMode(json) hasMiningStatusTransactionHash(json) -> 2
 * hasQuoteOrIsTestMode(json) -> 1 
 * -> 0
 * if errors -> -1
 */
var getStep = function(json) {
	// workarounds for legacy liftoff
	var result = 0; // nop
	// workarounds for legacy liftoff
	if ( hasErrors(json) ) { return -1; }
	
	var truthArray = [ 
		this.hasQuoteOrIsTestMode(json), 
		this.hasMiningStatusTransactionHash(json), 
		this.hasMiningStatusContractAddress(json) ];
	// assure proper sequence
	var previous = true;
	truthArray.filter(function(element) {
		// xor
		if ( previous != element ) { previous = element; }
	});
	return truthArray.filter(Boolean).length+stepBase;
}