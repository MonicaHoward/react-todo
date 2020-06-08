import React, { useContext } from 'react';
import TodoListContext from '../context'

const TodoList = () => {

    const {state, dispatch} = useContext(TodoListContext);
    const subHeader = state.todos.length > 0 
        ? `You have ${state.todos.length} unfinished tasks` :
        "There are no items on your todo list"
    

   return(
       <div>
            <h1>Best Damn Todo List App.</h1>
            <h3>{subHeader}</h3>
            <ul>
               {state.todos.map(todoItem => (
                   <li key={todoItem.id}>
                       {todoItem.text}
                       <button>delete</button>

                   </li>
               ))}
           </ul>
       </div>
   )
    

}

export default TodoList;