var http = require("http");

var msg = "";

//var stored_hits = []
var stored_hits = []

var Server = http.createServer(function(request, response){

  var path = request.url;
  stored_hits.push(path)

  var hit_counter = 0
  for(var x = 0; x < stored_hits.length; x++){
    if(stored_hits[x] === path){
      hit_counter++;
    }
  }

  var msg = hit_counter.toString();
  response.end(msg);
});

Server.listen(2000);

//counts how many times each url is gone to
// node this file
// then:
// localhost:2000/tuesday in the browser 1, if you refresh it will print 2
//then if yougo to localhost:2000/wednesday it will print 1 again
