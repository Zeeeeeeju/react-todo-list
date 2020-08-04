import Todo from '../Todo';
import React from 'react';
import axios from 'axios';

class TodoList extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            isLoaded: false
        }
    }

	componentDidMount() {
		axios.get("https://5e9ec500fb467500166c4658.mockapi.io/todos").then((res) => {
			this.setState({
                list: res.data,
                isLoaded:true
			});
        });
	}

	render() {
        if(!this.state.isLoaded)
            return <div></div>
		return (
			<div>
				{this.state.list.map((item, index) => {
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
