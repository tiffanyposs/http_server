var http = require("http");

var msg = "";


var Server = http.createServer(function(request, response){
  var path = request.url;
  var num_array = request.url.split("/");
  console.log(num_array);
  if(num_array[1] === "add"){
    var msg = (parseInt(num_array[2]) + parseInt(num_array[3])).toString();
  }
  else if(num_array[1] === "sub"){
    var msg = (parseInt(num_array[2]) - parseInt(num_array[3])).toString();
  }
  response.end(msg);
});

Server.listen(2000);


// this server will add the two pathway numbers if the root is add/num1/num2
// and print it in the window
// it will subtract the two numbers from the pathway if its sub//num1/num2
// node this file
// then:
// localhost:2000/add/25/50 in the browser will print 75 on the browser page

// this server will add the two pathway numbers and print it in the window
// node this file
// then:
// localhost:2000/sub/50/25 in the browser will print 25 on the browser page
