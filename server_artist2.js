// put this on the Digital Ocean server. log two terminals onto the DO server,
//ssh root@tiffany.princesspeach.nyc
// after pulling the files down, then node server_artist.js to run the server
// I wrote, then in the other terminal, run http-server -p2000 to run the http
// server on port 2000 as specified at the bottom of this server program

//password for DO is sleep-again-because-rain

var http = require("http");

var msg = "";

var Server = http.createServer(function(request, response){

  var path = request.url;

  var artists = ["Madonna", "Prince", "Michael"];
  var madonna_albums = ["Like a Virgin", "Like a Prayer", "Bedtime Stories"];
  var songs_virgin = ["Material Girl", "Like a Virgin", "Love Don't Live Here Anymore"];
  var songs_prayer = ["Like a Prayer", "Express Yourself", "Oh Father"];
  var songs_bedtime = ["Secret", "Human Nature", "Take a Bow"];
  var prince_albums = ["Dirty Mind", "1999", "Purple Rain"];
  var songs_dirty = ["When You Were Mine", "Do It All Night", "Uptown"];
  var songs_1999 = ["Little Red Corvette", "Automatic", "1999"];
  var songs_purple = ["When Doves Cry", "Erotic City", "Purple Rain"];
  var michael_albums = ["Off the Wall", "Thriller", "Bad"];
  var songs_wall = ["Don't Stop Til You Get Enough", "Rock with You", "Off the Wall"];
  var songs_thriller = ["Thriller", "Beat It", "Billie Jean"];
  var songs_bad = ["The Way You Make Me Fell", "Man in the Mirror", "Smooth Criminal"];

  if(path === "/artist"){
    msg = arrayToUl(artists);
  }

  else if(path ==="/artist/madonna"){
    msg = arrayToUl(madonna_albums);
  }

  else if(path ==="/artist/madonna/likeavirgin"){
    msg = arrayToUl(songs_virgin);
  }

  else if(path ==="/artist/madonna/likeaprayer"){
    msg = arrayToUl(songs_prayer);
  }

  else if(path ==="/artist/madonna/bedtimestories"){
    msg = arrayToUl(songs_bedtime);
  }

  else if(path ==="/artist/prince"){
    msg = arrayToUl(prince_albums);
  }

  else if(path ==="/artist/prince/dirtymind"){
    msg = arrayToUl(songs_dirty);
  }

  else if(path ==="/artist/prince/1999"){
    msg = arrayToUl(songs_1999);
  }

  else if(path ==="/artist/prince/purplerain"){
    msg = arrayToUl(songs_purple);
  }

  else if(path ==="/artist/michael"){
    msg = arrayToUl(michael_albums);
  }

  else if(path ==="/artist/michael/offthewall"){
    msg = arrayToUl(songs_wall);
  }

  else if(path ==="/artist/michael/thriller"){
    msg = arrayToUl(songs_thriller);
  }

  else if(path ==="/artist/michael/bad"){
    msg = arrayToUl(songs_bad);
  }

  response.end(msg);
});

Server.listen(2000);


//////
//FUNCTIONS
//////
var arrayToUl = function(array){
  var new_array = [];
  new_array.push("<html><body><ul>");
  array.forEach(function(each){
    var li = "<li>" + each + "</li>";
    new_array.push(li);
  });
  new_array.push("</ul></body></html>");
  var string = new_array.join("")
  return string;
}
