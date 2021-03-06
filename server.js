// ----- DEPENDENCIES -----
const fs = require("fs");
const express = require("express");
const path = require("path");

// ----- SET UP EXPRESS/PORT -----
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

// ----- DATA VARIABLES -----

let notes = [];
let id;

const readNotes = () => {
    fs.readFile(__dirname + "/db/db.json", (err, data) => {
        if (err) throw err;
        notes = JSON.parse(data);
    });
};

const writeNotes = () => {
    fs.writeFile(__dirname + "/db/db.json", JSON.stringify(notes), (err) => {
        if (err) throw err;
    });
};


// ----- ROUTES -----

// html routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

// api routes

app.get("/api/notes", (req, res) => {
    readNotes();
    res.json(notes);
});


app.post("/api/notes", (req, res) => {

    newNote = req.body;
    id = notes.length + 1;
    newNote.id = id++;
   
    notes.push(newNote);

    writeNotes();
    console.log("Wrote new note to db.json");

    res.json(notes);

});

app.delete("/api/notes/:id", (req, res) => {
    var chosenId = parseInt(req.params.id);
    let foundNote = notes.find(note => note.id === chosenId);
       
    notes.splice(notes.indexOf(foundNote), 1);

    writeNotes();
    console.log("Deleted note from db.json");

    readNotes();

    res.json(foundNote);
})

// ----- START SERVER -----
app.listen(PORT, () => {
    readNotes();
    console.log(`App listening on PORT ${PORT}`);
});