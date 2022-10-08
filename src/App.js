import {useState} from 'react';
import './App.css';
import TodoList from './Components/TodoList/TodoList';
import TodoForm from './Components/TodoForm/TodoForm';
import TodoFooter from './Components/TodoFooter/TodoFooter';


function App() {
  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      text: 'Learn JavaScript',
      isCompleted: false
    },
    {
      id: Math.random(),
      text: 'Learn React.js',
      isCompleted: false
    },
    {
      id: Math.random(),
      text: 'Learn Node.js',
      isCompleted: false
    }
  ]);
  const styledTitle = {
    fontSize: '70px',
    color: '#3B4167',
    fontStyle : 'italic',
    margin: 0
  }

  return (
    <div className="App">
      <h1 style={styledTitle}>Todos</h1>
      <TodoForm onAdd={(text) => {
        setTodos([
          ...todos,
          {
            id: Math.random(),
            text: text,
            isCompleted: false
          }
        ])
      }}/>
      <TodoList
       todos={todos}
       onDelete={(todo) => {
        setTodos(todos.filter((t) => t.id !== todo.id));
      }}
       onChange={(newTodo) => {
        setTodos(todos.map((todo) => {
          if(todo.id === newTodo.id) {
            return newTodo;
          }
          return todo;
        }))
       }}   
       />
      <TodoFooter todos={todos} onClearCompleted={() => {
        setTodos(todos.filter((todo) => !todo.isCompleted))
      }}/>
    </div>
  );
}

export default App;
