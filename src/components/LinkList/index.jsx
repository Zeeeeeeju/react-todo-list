import React from 'react'
import { Link } from 'react-router-dom';

class LinkList extends React.Component{

    render(){
        return (
            <div className='link-list'>
                <Link to="/done" className='link'>To Done Page</Link>
            </div>
        )
    }

}

export default LinkList
