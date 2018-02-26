var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

var user= [];




app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "welcome.html"));
// });

// app.get("/reserve", function(req, res) {
//   res.sendFile(path.join(__dirname, "tables.html"));
// });

// app.get("/tables", function(req, res) {
//   res.json(characters);
// });


// app.get("/api/:characters?", function(req, res) {
//   var chosen = req.params.characters;

//   if (chosen) {
//     console.log(chosen);

//     for (var i = 0; i < characters.length; i++) {
//       if (chosen === characters[i].routeName) {
//         return res.json(characters[i]);
//       }
//     }
//     return res.json(false);
//   }
//   return res.json(characters);
// });




app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newreservation = req.body;
  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newreservation.routeName = newreservation.name.replace(/\s+/g, "").toLowerCase();

  console.log(newreservation);

  user.push(newreservation);

  res.json(newreservation);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
