// ----- DEPENDENCIES -----
const fs = require("fs");
const express = require("express");
const path = require("path");

// ----- EXPRESS/PORT -----
const app = express();
const PORT = process.env.PORT || 3000;

// ----- DATA VARIABLES -----
const notes = [];

// ----- ROUTES -----

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "notes.html"));
});

// ----- START SERVER -----
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
