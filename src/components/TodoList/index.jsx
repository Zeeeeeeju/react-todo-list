import Todo from '../Todo'
import React from 'react'

class TodoList extends React.Component{

    render() {
        return (
            
            <div>
                {this.props.todoList.map((item,index)=>{
                    return <Todo text={item} key={index} index={index} deleteTodo={this.props.deleteTodo} updateTodo={this.props.updateTodo}/>
                })}
            </div>
        )
    }

}

export default TodoList