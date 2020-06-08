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
                    <li 
                        key={todoItem.id}
                        onClick={() => dispatch({ type: 'toggle_strikethrough', payload: todoItem })}
                        style={{ 
                            textDecoration: `${todoItem.complete && "line-through"}`
                            
                        }}
                    >
                       {todoItem.text}

                    <button 
                        onClick={() => dispatch({ type: "delete_todo", payload: todoItem})}                   
                    >
                        delete
                    </button>
                    </li>
               ))}
           </ul>
       </div>
   )
    

}

export default TodoList;