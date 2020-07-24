// ----- DEPENDENCIES -----
const fs = require("fs");
const express = require("express");
const path = require("path");


// ----- EXPRESS/PORT -----
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// ----- DATA VARIABLES -----


const notes = [];

// ----- ROUTES -----

// html routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "notes.html"));
});

// api routes
app.get("/api/notes", (req, res) => {
    fs.readFile(__dirname + "/db/db.json", (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data) || []);
    })
});


// when the user hits save.. 
// push newNote to note then write to db.json then read db.json
app.post("/api/notes", (req, res) => {
    newNote = req.body;
    newNote.id = newNote.title.replace(/\s+/g, "").toLowerCase();
    console.log(newNote);
    notes.push(newNote);

    fs.writeFile(__dirname + "/db/db.json", JSON.stringify(notes), (err) => {
        if (err) throw err;
        console.log("Wrote new note to db.json");
        return res.json(notes);
    })

    // fs.readFile(__dirname + "/db/db.json", (err, data) => {
    //     if (err) throw err;
    //     res.json(JSON.parse(data) || []);
    // })

   
});

// app.delete("/api/notes/:id", (req, res) => {
//     let id = req.param.note
//     for(let i = 0; i < notes.length; i++) {
//         if (id === notes[i].id) {

//         }
//     }
// })


// ----- START SERVER -----
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
