import Todo from '../Todo';
import React from 'react';
import axios from 'axios';

class TodoList extends React.Component {
	componentDidMount() {
		axios.get("https://5e9ec500fb467500166c4658.mockapi.io/todos").then((res) => {
			this.setState({
				list: res.data
			});
        });
	}

	render() {
        if(this.state == null)
            return <div></div>
		return (
			<div>
				{this.state.list.map((item, index) => {
                    console.log(item)
					return (
						<Todo
							text={item}
							key={item.id}
							index={item.id}
							deleteTodo={this.props.deleteTodo}
							updateTodo={this.props.updateTodo}
						/>
					);
				})}
			</div>
		);
	}
}

export default TodoList;
