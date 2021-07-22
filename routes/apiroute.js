const path = require('path');
const fs = require('fs');
var notes = JSON.parse(data);

app.get('/api/notes', function(req, res){
    res.JSON(notes);
});

app.post('/api/notes', function(req, res){
    let createNote = req.body;
    notes.push(createNote);

})