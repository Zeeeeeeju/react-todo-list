import React from "react";
import DoneListContainer from '../../containers/DoneListContainer'

class DonePage extends React.Component{

    render(){
        return (
            <header className="App-header">
                <div>
                    <DoneListContainer/>
                </div>
            </header>
        )
    }

}

export default DonePage