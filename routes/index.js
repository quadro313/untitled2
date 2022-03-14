var express = require('express');
var router = express.Router();
var promises = require("fs").promises

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/send/:username-:msg", async (req, res) => {
  var fileContents = await  promises.readFile(__dirname + "/../public/chat.txt", "utf-8");
  fileContents += `[${req.params.username}]: ${req.params.msg}\n`
  promises.writeFile(__dirname + "/../public/chat.txt", fileContents, "utf-8");
  res.send(fileContents)
});

router.get("/get", async (req, res) => {
  var fileContents = await  promises.readFile(__dirname + "/../public/chat.txt", "utf-8");
  res.send(fileContents)
});

module.exports = router;

// send|username;text
// get|

// string.split("|") => 2 elementa
// element[0] == TYPE OF MSG
// element[1] == MSG BODY
