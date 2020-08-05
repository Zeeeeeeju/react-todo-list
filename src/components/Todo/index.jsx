import React from 'react';
import {deleteTodo,updateTodo} from '../../api/api'

class Todo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isDone: false,
			data: this.props.text
		};
	}

	deleteTodo = () => {
		deleteTodo(this.state.data.id).then((res) => {
			this.setState({ delete: true });
		});
	};

	done = (e) => {
		this.setState({ isDone: !this.state.isDone });
		updateTodo(this.state.data.id, !this.state.data.status).then((res) => {
			this.setState({
				data: res.data
			});
		});
	};

	render() {
		if (this.state.delete) return <div />;
		return (
			<div className="todo-border">
				<span onClick={this.done} className={this.state.data.status ? 'delete-line' : 'none'}>
					{this.state.data.content}
				</span>
				<img onClick={this.deleteTodo} src="/delete.png" alt="none"/>
			</div>
		);
	}
}

export default Todo;
