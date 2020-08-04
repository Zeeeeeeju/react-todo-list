export const todoList = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, {text:action.text,isDone:false}];
        case 'DELETE_TODO':
            return [...state].filter((item,index)=>(index!==action.index));
        case 'UPDATE_TODO':
            state[action.index] = {text:state[action.index].text,isDone:!state[action.index].isDone}
            return state
        default:
            return state
    }
}