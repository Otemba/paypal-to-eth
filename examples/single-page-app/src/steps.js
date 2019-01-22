/**
 * logic to show the steps of the dialog
 */

function setButtonAndDoneImage(cell, image, text) {
	return function() { 
		$("#img"+cell).attr("src", image);
		if ( text !== undefined ) { $("#triggerButton").text(text); }
	};
}

function setHint(cell, text, parameter) {
	return function(dialog) {
		if ( parameter !== undefined ) {
			text = text.replace("${0}", simpleJsonPath(dialog, parameter));
		}
		$("#hint"+cell).html(text);
		$("#hint"+cell).show();
	}
}

function simpleJsonPath(dialog, path) {
	var array = path.split(".");
	var element = dialog; 
	array.forEach( function(s) {
		if ( element !== undefined ) { element = element[s]; }
	});
	return element;
}

var hints = {
		"Step-1": setHint(1, "Otemba.io calculated a quote with a price of ${0} $-cents", "quote.UsdCents"),
		"Step-2": setHint(2, "Otemba.io started the transaction with the id ${0}", "mining.tx"),
		"Step-3": setHint(3, "A miner deployed the Contract with the id ${0}", "miningStatus.contractAddress"),
		"Step-4": setHint(4, "Otemba.io calculated a quote with a price of ${0} $-cents", "quote.UsdCents"),
		"Step-5": setHint(5, "Otemba.io started the transaction with the id ${0}", "mining.tx"),
		"Step-6": setHint(6, "A miner deployed the Contract with the id ${0}", "miningStatus.contractAddress"),
};

var steps = {
	"Step-1": setButtonAndDoneImage(1, "./img/done.png", "Start mining of the Contract"),
	"Step-2": setButtonAndDoneImage(2, "./img/done.png", "Get the address of the Contract"),
	"Step-3": setButtonAndDoneImage(3, "./img/done.png", "Repeat reading the mining status"),
	"Step-4": setButtonAndDoneImage(4, "./img/done.png", "UPDATE the Contract"),
	"Step-5": setButtonAndDoneImage(5, "./img/done.png", "Get the address of the UPDATED Contract"),
	"Step-6": setButtonAndDoneImage(6, "./img/done.png", "Repeat reading the UPDATE status")
}
