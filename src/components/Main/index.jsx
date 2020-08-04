import React from 'react';
import TodoListContainer from '../../containers/TodoListContainer'
import TodoFormContainer from '../../containers/TodoFormContainer'
import LinkList from '../LinkList'

class Main extends React.Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<LinkList />
					<TodoListContainer />
					<TodoFormContainer />
				</header>
			</div>
		);
	}
}

export default Main
