const router = require("express").Router();

app.get("/api/notes", (req, res) => {
  // Log our request to the terminal

  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) {
      throw err;
    }
    console.log(data);
    data = JSON.parse(data);
    res.json(data);
  });
});

app.post("/api/notes", (req, res) => {
  // Inform the client that their POST request was received
  res.json(`${req.method} request received to add a note`);
  // Log our request to the terminal
  console.info(`${req.method} request received to add a note`);

  // Destructuring assignment for the items in req.body
  const { title, text } = req.body;

  // If all the required properties are present
  if (title && text) {
    // Variable for the object we will save
    const newNote = {
      title,
      text,
      noteID: uuid(),
    };
  }
});
module.exports = router;
