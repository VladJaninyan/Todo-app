import {useState} from 'react';
import './TodoForm.css';


function TodoForm({onAdd}) {

    const [text, setText] = useState("");
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            onAdd(text);
            setText('');
        }}>
            <input className='todoInput' type="text" value={text} onChange={(e) => {
                setText(e.target.value);
            }} />
            <button className='todoAdd'>Add</button>
        </form>
    )
}

export default TodoForm