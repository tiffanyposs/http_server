var http = require("http");



var msg = "";


var Server = http.createServer(function(request, response){

  var favcolors = {sean: "purple", sarah: "white", lisa: "black", john: "green", david: "turquoise"}

  var path = request.url;
  var array = request.url.split("/");
  //this is an array of the keys
  var array_keys = Object.keys(favcolors);

  array_keys.forEach(function(each){
	if(each === array[1]){
		msg = favcolors[each];
	}
})

  response.end(msg);
});

Server.listen(2000);


// This program will print in the browser the value of whatever key is typed in the url
// example localhost:2000/sean prints purple node this program and go to the site