import './Note.css';
import DeleteIcon from '@material-ui/icons/Delete';


function Note(props) {

    const handleClick = (e) => {
        props.onDelete(props.id)
        console.log(props.id);
    }

    return (
        <div className="note">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <button onClick={handleClick} className="delete">
                <DeleteIcon />
            </button>
        </div>
    );
};

export default Note;