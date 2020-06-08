export default function reducer(state, action){
    switch(action.type){

        case "toggle_strikethrough" :
            const toggledStrikethrough = state.todos.map(todo => todo.id === action.payload.id 
                ? { ...action.payload, complete: !action.payload.complete }
                : todo 
            )
            return {
                ...state,
                todos: toggledStrikethrough
            }
        case "delete_todo" :
            const todosArr = state.todos.filter(todo => todo.id !== action.payload.id)  
            return{
                ...state,
                todos: todosArr
            }

        default: 
            return state;
    }
}