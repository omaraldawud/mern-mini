const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Leaves route - coming soon!" });
});

module.exports = router;
