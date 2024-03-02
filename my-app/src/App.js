import React, {useState} from 'react';
import './App.css';

import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';

function App() {
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: 'Walk2', rowAssigned: 'zyw' },
    { rowNumber: 2, rowDescription: 'Run', rowAssigned: 'zyw' }
  ])

  const deleteTodo = (deleteTodoRowNumber) => {
    let filtered = todos.filter(function(value) {
      return value.rowNumber !== deleteTodoRowNumber;
    })
    setTodos(filtered);
  }

  const addTodo = (description, assigned) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
    const newTodo = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssigned: assigned
    }
    setTodos(todos => [...todos, newTodo])
    console.log(todos);
    console.log("add clicked");
  }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your to dos
        </div>
        <div className='card-body'>

          <TodoTable todos={todos} deleteTodo={deleteTodo}/>
          <button className='btn btn-primary' onClick={() => setShowAddTodoForm(!showAddTodoForm)}>
            {showAddTodoForm ? 'Close New Todo' : 'New Todo'}
          </button>
          {/* open form */}
        {showAddTodoForm &&
          <NewTodoForm addTodo={addTodo}/>
        }
          


        </div>
      </div>

    </div>
  );
}

export default App;
