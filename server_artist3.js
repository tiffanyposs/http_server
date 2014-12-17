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

var Artist = {
  artists: ["Madonna", "Prince", "Michael Jackson"]
}

var Albums = {
  madonna: ["Like a Virgin", "Like a Prayer", "Bedtime Stories"],
  prince: ["Dirty Mind", "1999", "Purple Rain"],
  michael: ["Off the Wall", "Thriller", "Bad"]
}

var Songs = {
  virgin_songs: ["Material Girl", "Like a Virgin", "Love Don't Live Here Anymore"],
  prayer_songs: ["Like a Prayer", "Express Yourself", "Oh Father"],
  bedtime_songs: ["Secret", "Human Nature", "Take a Bow"],

  dirty_songs: ["When You Were Mine", "Do It All Night", "Uptown"],
  nine_songs: ["Little Red Corvette", "Automatic", "1999"],
  purple_songs: ["When Doves Cry", "Erotic City", "Purple Rain"],

  wall_songs: ["Don't Stop Til You Get Enough", "Rock with You", "Off the Wall"],
  thriller_songs: ["Thriller", "Beat It", "Billie Jean"],
  bad_songs: ["The Way You Make Me Fell", "Man in the Mirror", "Smooth Criminal"]
}


  if(path === "/artist"){
    msg = arrayToUl(Artist.artists);
  }

  else if(path ==="/artist/madonna"){
    msg = arrayToUl(Albums.madonna);
  }

  else if(path ==="/artist/madonna/likeavirgin"){
    msg = arrayToUl(Songs.virgin_songs);
  }

  else if(path ==="/artist/madonna/likeaprayer"){
    msg = arrayToUl(Songs.prayer_songs);
  }

  else if(path ==="/artist/madonna/bedtimestories"){
    msg = arrayToUl(Songs.bedtime_songs);
  }

  else if(path ==="/artist/prince"){
    msg = arrayToUl(Albums.prince);
  }

  else if(path ==="/artist/prince/dirtymind"){
    msg = arrayToUl(Songs.dirty_songs);
  }

  else if(path ==="/artist/prince/1999"){
    msg = arrayToUl(Songs.nine_songs);
  }

  else if(path ==="/artist/prince/purplerain"){
    msg = arrayToUl(Songs.purple_songs);
  }

  else if(path ==="/artist/michael"){
    msg = arrayToUl(Albums.michael);
  }

  else if(path ==="/artist/michael/offthewall"){
    msg = arrayToUl(Songs.wall_songs);
  }

  else if(path ==="/artist/michael/thriller"){
    msg = arrayToUl(Songs.thriller_songs);
  }

  else if(path ==="/artist/michael/bad"){
    msg = arrayToUl(Songs.bad_songs);
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
