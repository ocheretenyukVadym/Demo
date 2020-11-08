import React from 'react'
import Users from "../../UserPage/Users/Users";
import {inject, observer} from "mobx-react";

class RecycledUsers extends React.Component{
    componentDidMount() {
        this.props.store.getDeletedUsers();
    }

    render() {
        return(
            <div className="recycled-users">
                <Users users={this.props.store.deletedUsers}
                       deleteUser={this.props.store.deleteUser}
                       moveToTrash={this.props.store.moveToTrash}
                       isUserPage={false}
                       updateUser={this.props.store.updateUser}/>
            </div>
        )
    }
}

export default inject('store')(observer(RecycledUsers));