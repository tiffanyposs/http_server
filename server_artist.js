// put this on the Digital Ocean server. log two terminals onto the DO server,
// after pulling the files down, then node server_artist.js to run the server
// I wrote, then in the other terminal, run http-server -p2000 to run the http
// server on port 2000 as specified at the bottom of this server program

//password for DO is sleep-again-because-rain

var http = require("http");

var msg = "";

var Server = http.createServer(function(request, response){

  var path = request.url;
//  var word = request.url.split("/");

  //console.log(word);

  if(path === "/artist"){
    msg = "<html><body><ul>" +
    "<li><a href = '/artist/madonna'>Madonna</a></li>" +
    "<li><a href = '/artist/prince'>Prince</a></li>" +
    "<li><a href = '/artist/michael'>Michael</a></li></ul</body></html>";
  }

  else if(path ==="/artist/madonna"){
    msg = "<html><body><ul>" +
    "<li><a href = '/artist/madonna/likeavirgin'>Like a Virgin</a></li>" +
    "<li><a href = '/artist/madonna/likeaprayer'>Like a Prayer</a></li>" +
    "<li><a href = '/artist/madonna/bedtimestories'>Bedtime Stories</a></li></ul</body></html>";
  }

  else if(path ==="/artist/madonna/likeavirgin"){
    msg = "<html><body><ul>" +
    "<li>Material Girl</li>" +
    "<li>Like a Virgin</li>" +
    "<li>Love Don't Live Here Anymore</li></ul</body></html>";
  }
  else if(path ==="/artist/madonna/likeaprayer"){
    msg = "<html><body><ul>" +
    "<li>Like a Prayer</li>" +
    "<li>Express Yourself</li>" +
    "<li>Oh Father</li></ul</body></html>";
  }
  else if(path ==="/artist/madonna/bedtimestories"){
    msg = "<html><body><ul>" +
    "<li>Secret</li>" +
    "<li>Human Nature</li>" +
    "<li>Take a Bow</li></ul</body></html>";
  }



  else if(path ==="/artist/prince"){
    msg = "<html><body><ul>" +
    "<li><a href = '/artist/prince/dirtymind'>Dirty Mind</a></li>" +
    "<li><a href = '/artist/prince/1999'>1999</a></li>" +
    "<li><a href = '/artist/prince/purplerain'>Purple Rain</a></li></ul</body></html>";
  }
  else if(path ==="/artist/prince/dirtymind"){
    msg = "<html><body><ul>" +
    "<li>When You Were Mine</li>" +
    "<li>Do It All Night</li>" +
    "<li>Uptown</li></ul</body></html>";
  }
  else if(path ==="/artist/prince/1999"){
    msg = "<html><body><ul>" +
    "<li>Little Red Corvette</li>" +
    "<li>Automatic</li>" +
    "<li>1999</li></ul</body></html>";
  }
  else if(path ==="/artist/prince/purplerain"){
    msg = "<html><body><ul>" +
    "<li>When Doves Cry</li>" +
    "<li>Erotic City</li>" +
    "<li>Purple Rain</li></ul</body></html>";
  }



  else if(path ==="/artist/michael"){
    msg = "<html><body><ul>" +
    "<li><a href= '/artist/michael/offthewall'>Off the Wall</li>" +
    "<li><a href= '/artist/michael/thriller'>Thriller</li>" +
    "<li><a href= '/artist/michael/bad'>Bad</li></ul</body></html>";
  }
  else if(path ==="/artist/michael/offthewall"){
    msg = "<html><body><ul>" +
    "<li>Don't Stop 'Til You Get Enough</li>" +
    "<li>Rock with You</li>" +
    "<li>Off the Wall</li></ul</body></html>";
  }
  else if(path ==="/artist/michael/thriller"){
    msg = "<html><body><ul>" +
    "<li>Thriller</li>" +
    "<li>Beat It</li>" +
    "<li>Billie Jean</li></ul</body></html>";
  }
  else if(path ==="/artist/michael/bad"){
    msg = "<html><body><ul>" +
    "<li>The Way You Make Me Feel</li>" +
    "<li>Man in the Mirror</li>" +
    "<li>Smooth Criminal</li></ul</body></html>";
  }



  response.end(msg);
});

Server.listen(2000);
