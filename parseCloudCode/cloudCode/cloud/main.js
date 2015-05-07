

// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("getDodos", function(request, response) {

	var Dodos = Parse.Object.extend("Dodo");
	var query = new Parse.Query(Dodos);

 	query.equalTo("initiative", 5);

	query.find({
	  success: function(results) {
	  	response.success(results);
	  },
	  error: function(error) {
	  }
	});
});
