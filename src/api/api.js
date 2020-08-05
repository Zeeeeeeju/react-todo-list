import axios from "axios";
const Axios = axios.create({
    baseURL: 'https://5e9ec500fb467500166c4658.mockapi.io',
});


export const getTodos = () => {
    return Axios.get('/todos');
}

export const updateTodo = (id, status) => {
    return Axios.put(`/todos/${id}`, {
        status: status
    })
}
export const addTodo = (content) => {
    return Axios.post('/todos', {
        content: content
    })
}
export const deleteTodo = (id) => {
    return Axios.delete(`/todos/${id}`)
}