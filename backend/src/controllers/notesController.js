import Note from "../models/Note.js"

export async function getAllNotes(req, res){
    try {
        const notes = await Note.find()
        res.status(200).json(notes)
    } catch (error) {
        console.log("Error finding Notes: ", error)
        res.status(500).json({message: "Internal Server Error"})
    }
}

export async function createNote(req, res){    
    try {
        const {title, content} = req.body
        const newNote = new Note({title,content});

        const savedNote = await newNote.save()
        res.status(201).json(savedNote)    
    } catch (error) {
        console.log("Error creating Note: ", error)
        res.status(500).json({Message:"Internal Server Error"})
    }
}

export function updateNote(req, res){
    res.status(200).json({message:"Note updated successfully"});
}

export function deleteNote(req, res){
    res.status(200).json({message:"Note deleted successfully"});
}
