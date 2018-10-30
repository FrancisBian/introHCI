// Call this function when the page loads (the jQuery "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h2').text("Javascript is connected");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}
