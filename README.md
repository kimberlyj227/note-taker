# note-taker

pseudo code :

server.js
- [x] dependencies
  - [x] fs
  - [x] express
  - [x] path?
- [x] set up express & port
  - [x] app = express
  - [x] port = process.env.PORT || 3000
- [ ] data variables
  - [x] notes =  []    
    - [x] noteTitle: ""
    - [x] noteText: ""
    - [ ] id: ""... write logic for this
      - [ ] unique id for notes when created
- [ ] routes
  - [x] GET /notes (returns notes.html)
  - [x] GET / (returns index.html)
  - [x] GET /api/notes
  - [x] POST /api/notes
  - [ ] DELETE /api/notes/:id
  
- [x] start the server