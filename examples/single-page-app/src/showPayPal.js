// this was taken from PayPal showing a standard express payment processing
function showPayPal(payPalContainer) {

	var environment = 'sandbox';
	// TODO TODO
	if ( isProduction(dialog) ) {
		environment = 'production';
	}
	
	paypal.Button
			.render(
					{
						env : environment, // Or 'sandbox', or production

						// Otemba specific, changes cause fails in the
						// processing due to payment checks on Otemba.io
						client : {
							sandbox : 'AXJKY7Db4ASc-W0nLwUfAvw7U_h-zxGjyNM87aepLD2ZFHjjLC1FYCmUoN7MYZ3uuxL254cOSoj-aW6O',
							production : 'AXNf3Yeho9wtSf32RdJ6oIiEBucBRF7GyLO-ZMMXpQUKTd2LnkaB6AIRWBxMpoNFwqDu9KDEyk9y8G9A'
						},

						// Show the buyer a 'Pay Now' button in the checkout
						// flow
						commit : true,

						// payment() is called when the button is clicked
						payment : function(data, actions) {
							// Otemba specific, do not change
							var payment = {
								"payment" : dialog.payment
							};
							return actions.payment.create(payment);
						},

						// onAuthorize() is called when the buyer approves the
						// payment
						onAuthorize : function(data, actions) {

							// Otemba specific do not change
							dialog.onAuthorize = data;

							// You are free to change this
							prettyPrintJson(dialog);

							// Otemba specific do not change
							return actions.payment
									.execute()
									.then(triggerButtonFunction());
						},

						onCancel : function(data, actions) {
							console.log('Buyer cancelled the payment');
							/*
							 * Buyer cancelled the payment
							 */
						},

						onError : function(err) {
							console.log('Something wrongs: ' + err);
							/*
							 * An error occurred during the transaction
							 */
						}
					}, payPalContainer);

} // showPayPal()
