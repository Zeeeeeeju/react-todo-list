import Todo from '../Todo';
import React from 'react';
import PubSub from 'pubsub-js';  
import {getTodos} from '../../api/api'

class TodoList extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            isLoaded: false
        }
    }

	componentWillMount() {
		getTodos().then((res) => {
			this.setState({
                list: res.data,
                isLoaded:true
			});
		});
	}

	componentDidMount(){
		this.updateEvent = PubSub.subscribe('update', function (topic,message) {  
			getTodos().then((res) => {
			this.setState({
                list: res.data,
                isLoaded:true
			});
		});
		  }.bind(this)); 
	}

	componentWillUnmount(){
		PubSub.unsubscribe(this.updateEvent);
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
