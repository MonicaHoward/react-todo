import React from 'react';

const TodoListContext = React.createContext({
    todos: [
        {
            id: 1,
            text: "Do some thing",
            complete:false
        }
    ]
})

export default TodoListContext;