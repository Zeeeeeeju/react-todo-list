import React from 'react'
import { Link } from 'react-router-dom';

class LinkList extends React.Component{

    render(){
        return (
            <div className='link-list'>
                <Link to={this.props.url} className='link'>{this.props.text}</Link>
            </div>
        )
    }

}

export default LinkList
