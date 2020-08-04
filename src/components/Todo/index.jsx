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
    }

    render(){
        return (
            <div className="todo-border"><span onClick={this.done} className={this.state.isDone?"delete-line":"none"}>{this.props.text}</span><img onClick={this.deleteTodo} src='/delete.png'/></div>
        )
    }

}

export default Todo