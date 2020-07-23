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
    - [ ] noteTitle: ""
    - [ ] noteText: ""
    - [ ] id: ""
      - [ ] unique id for notes when created
  - [ ]
- [ ] routes
  - [x] GET /notes (returns notes.html)
  - [x] GET / (returns index.html)
  - [ ] GET /api/notes
  - [ ] POST /api/notes
  - [ ] /api/notes/:id
  
- [x] start the server