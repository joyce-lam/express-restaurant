var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

var users= [];




app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "welcome.html"));
});

app.get("/api/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

// app.get("/api/tables", function(req, res) {
//   res.sendFile(path.join(__dirname, "reservations.html"));
// });



app.get("/api/:users?", function(req, res) {
  var chosen = req.params.users;

  if (chosen) {
    console.log(chosen);

    for (var i = 0; i < users.length; i++) {
      if (chosen === uesrs[i].routeName) {
        return res.json(users[i]);
      }
    }
    return res.json(false);
  }
  return res.json(users);
});




app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newReservation = req.body;
  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

  console.log(newReservation);

  user.push(newReservation);

  res.json(newReservation);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
