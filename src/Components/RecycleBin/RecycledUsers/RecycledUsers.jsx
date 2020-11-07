import React from 'react'
import Users from "../../UserPage/Users/Users";

class RecycledUsers extends React.Component{
    render(){
        return(
            <div className="recycled-users">
                <Users users={[]}/>
            </div>
        )
    }
}

export default RecycledUsers;