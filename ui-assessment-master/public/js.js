import React, { useState } from 'react';

export default function NoteApp() {
    const [inputText, setInputText] = useState('');
    const [notes, setNotes] = useState([]);

    const handleSaveNote = () => {
        if (inputText.trim() !== '') {
            setNotes([...notes, inputText]);
            setInputText('');
        }
    };

    const handleDeleteNote = (index) => {
        const updatedNotes = [...notes];
        updatedNotes.splice(index, 1);
        setNotes(updatedNotes);
    };

    return (
        <div>
            <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Write your note here"
            />
            <button onClick={handleSaveNote}>Save Note</button>
            <div>
                {notes.map((note, index) => (
                    <div key={index}>
                        <p>{note}</p>
                        <button onClick={() => handleDeleteNote(index)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}