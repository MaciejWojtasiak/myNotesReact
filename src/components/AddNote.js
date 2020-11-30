import React, { useState } from 'react';
import './AddNote.css';
import AddIcon from "@material-ui/icons/Add"
import { Fab, Zoom } from '@material-ui/core';

function AddNote(props) {
    const [note, setNote] = useState({
        title: '',
        content: '',
    });

    const [isExpanded, setExpanded] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setNote((prevNalue) => {
            return {
                ...prevNalue,
                [name]: value,
            };
        });
    }

    const submitNote = (e) => {
        const title = note.title.trim();
        const content = note.content.trim();
        if (title === "" && content === "") {
            alert("You need to fill title and textarea!")
        } else if (title === "") {
            alert("You need to fill title!")
        } else if (content === "") {
            alert("You need to fill textarea!")
        } else {
            props.onAdd(note);
            setNote({
                title: '',
                content: '',
            });
        }

        e.preventDefault();
    }

    const expand = () => {
        setExpanded(true);
    }



    return (
        <div className="addNote">
            <form>
                {isExpanded && <input name="title" onChange={handleChange} id="titleArea" value={note.title} type="text" placeholder="Title" />}
                <textarea name="content" onChange={handleChange} onClick={expand} id="textArea" value={note.content} rows={isExpanded ? '4' : '1'} placeholder="Take a note..."></textarea>
                <Zoom in={true}>
                    <Fab size="small" onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
};

export default AddNote;