// Gets express router
const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res) => {
  const data = fs.readFileSync("blog.json");
  const json = JSON.parse(data);
  return res.status(200).json(json);
});

router.post("/", (req, res) => {
  const data = req.body;
  try {
    const json = JSON.stringify(data);
    fs.writeFileSync("blog.json", json);
    return res.sendStatus(200);
  } catch (err) {
    res.sendStatus(500);
  }
});

module.exports = router;
