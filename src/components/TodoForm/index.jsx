import React from 'react';
import axios from 'axios'

class TodoForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		};
	}

	handlerChange = (e) => {
		this.setState({ text: e.target.value });
	};

	submitForm = (e) => {
		e.preventDefault();
		// this.props.addTodo(this.state.text);
		let params = {
			"content": this.state.text,
			"status": false
		}
		axios.post("https://5e9ec500fb467500166c4658.mockapi.io/todos/",params).then((res) => {
			window.location.reload()
        });
	};

	render() {
		return (
			<div>
				<form onSubmit={this.submitForm}>
					<div className="todo-form">
						<input
							placeholder="Input a new Todo here..."
							value={this.state.text}
							onChange={this.handlerChange}
						/>
						<button>add</button>
					</div>
				</form>
			</div>
		);
	}
}

export default TodoForm;
