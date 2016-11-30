const express = require("express");
const app = express();
const port = process.env.PORT;
const parseTime = require("./parseTime.js");

app.get("/:time", function (req, res) {
    const output = parseTime(req.params.time);
    res.end(output);
});

app.listen(port, function () {
});