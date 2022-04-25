const router = require("express").Router();
const noteData = require("../db/db.json");
const fs = require("fs");
const { title } = require("process");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);

// '/api/notes/
router.get("/notes", async (req, res) => {
  const notesData = await readFileAsync("db/db.json", "utf8");
  console.log(typeof notesData);
  res.json(JSON.parse(noteData));
});

router.post("/notes", async (req, res) => {
  const reqBody = ({ title, text } = req.body);
});

router.delete("/notes/:id", (req, res) => {
  Product.destroy({
    where: {
      id: req.params.id,
    },
  });
});
module.exports = router;
