import React from "react";
import DoneListContainer from '../../containers/DoneListContainer'
import LinkList from '../LinkList'

class DonePage extends React.Component{

    render(){
        return (
            <header className="App-header">
                <div>
                    <LinkList url='/' text='To Home Page'/>
                    <DoneListContainer/>
                </div>
            </header>
        )
    }

}

export default DonePage