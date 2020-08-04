import React from 'react'

class Todo extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            isDone: false
        }
    }

    deleteTodo = () =>{
        this.props.deleteTodo(this.props.index);
    }

    done = (e)=>{
        this.setState({isDone: !this.state.isDone})
        this.props.updateTodo(this.props.index);
    }

    render(){
        return (
            <div className="todo-border"><span onClick={this.done} className={this.state.isDone?"delete-line":"none"}>{this.props.text.text}</span><img onClick={this.deleteTodo} src='/delete.png'/></div>
        )
    }

}

export default Todo