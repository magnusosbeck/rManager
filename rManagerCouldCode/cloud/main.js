Parse.Cloud.define("getDodos", function(request, response) {

    var Dodos = Parse.Object.extend("Dodo");
    var query = new Parse.Query(Dodos);

    query.equalTo("initiative", 5);

    query.find({
        success: function(results) {

            for (var i in results) {
                var object = results[i];
                alert(object.objectId);
            }

            response.success(results);

        },
        error: function(error) {
        }
    });
});
