// Here is where we import modules
// We begin by loading Express
const express = require("express");

const app = express();

app.listen(3001, () => {
  console.log("Listening on port 3001");
});



// // server.js

// // GET /
// app.get("/", async (req, res) => {
//     res.send("hello, friend!");
//   });



// server.js

// GET /
app.get("/", async (req, res) => {
    res.render("index.ejs");
  });


  
