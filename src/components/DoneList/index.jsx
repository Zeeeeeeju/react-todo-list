import Todo from '../Todo'
import React from 'react'

class DoneList extends React.Component{

    render() {
    
        return (
            <div>
                {this.props.todoList.map((item,index)=>{
                    if(item.isDone)
                        return <Todo text={item} key={index} index={index} deleteTodo={this.props.deleteTodo} updateTodo={this.props.updateTodo}/>
                })}
            </div>
        )
    }

}

export default DoneList