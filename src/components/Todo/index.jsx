import React from 'react'
import axios from 'axios';

class Todo extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            isDone: false,
            data:this.props.text
        }
    }

    deleteTodo = () =>{
        // this.props.deleteTodo(this.props.index);
        axios.delete("https://5e9ec500fb467500166c4658.mockapi.io/todos/"+this.state.data.id).then((res) => {
            this.setState({delete:true})
        });
    }

    done = (e)=>{
        this.setState({isDone: !this.state.isDone})
        // this.props.updateTodo(this.props.index);
        let params = {
            "id":this.state.data.id,
            "content":this.state.data.content,
            "status":!this.state.data.status,
        }
        axios.put("https://5e9ec500fb467500166c4658.mockapi.io/todos/"+this.state.data.id,params).then((res) => {
			this.setState({
                data:res.data
            })
        });
    }

    render(){
        if(this.state.delete)
            return <div></div>
        return (
            <div className="todo-border"><span onClick={this.done} className={this.state.data.status?"delete-line":"none"}>{this.state.data.content}</span><img onClick={this.deleteTodo} src='/delete.png'/></div>
        )
    }

}

export default Todo