const express = require("express");
const router = express.router();

router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

module.exports = router;
