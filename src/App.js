import React, { useContext, useReducer } from 'react';
import './App.css';
import TodoList from './componets/TodoList';
import TodoListContext from './context';
import todoListReducer from './reducer'

function App() {

  const initialState = useContext(TodoListContext);
  const [state, dispatch] = useReducer(todoListReducer, initialState);
  
  return (
    <div className="App">
     <TodoListContext.Provider value={{ state, dispatch }}>
        <TodoList />
     </TodoListContext.Provider>
    </div>
  );
}

export default App;
