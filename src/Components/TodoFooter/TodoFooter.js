import "./TodoFooter.css";

function TodoFooter({todos, onClearCompleted}) {
    let completedSize = todos.filter((todo) => todo.isCompleted).length;
    return (
        <div className="footer">
            <span>{completedSize}/{todos.length} Completed</span>
            <button onClick={onClearCompleted} className="clear">Clear Completed</button> 
        </div>
    )
}

export default TodoFooter