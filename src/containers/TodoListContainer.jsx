import { connect } from 'react-redux';
import TodoList from '../components/TodoList';

const mapStateToProps = (state) => ({
	todoList: state.todoList
});

const mapDispatchToProps = (dispatch) => ({
	deleteTodo: (index) => {
		dispatch({ type: 'DELETE_TODO', index: index });
	},
	updateTodo: (index) => {
		dispatch({ type: 'UPDATE_TODO', index: index });
	}
});

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoListContainer;
