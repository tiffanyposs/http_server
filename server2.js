var http = require("http");

var msg = "";


var Server = http.createServer(function(request, response){

  var path = request.url;
  var array = request.url.split("/");
  var string = array.join();


  var s_counter = 0;

  for(var x = 0; x < string.length; x++){
    if(string.charAt(x) === "s"){
      s_counter++
    }
  }

  var msg = s_counter.toString();
  response.end(msg);
});

Server.listen(2000);

//count then number of s's in the url
// node this file
// then:
// localhost:2000/sub/stirg/miss in the browser will print 4 on the browser page
//counting the number of s's in the url
