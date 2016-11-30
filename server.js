const express = require("express");
const app = express();
const parseTime = require("./parseTime.js");

app.get("/:time", function (req, res) {
    const output = parseTime(req.params.time);
    res.send(output);
});

app.listen(process.env.PORT || 8080);