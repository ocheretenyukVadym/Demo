import { inject, observer } from 'mobx-react';
import React from 'react';
import NewUserPage from './NewUserPage/NewUserPage';
import Users from './Users/Users';

class UserPageContainer extends React.Component{
    constructor(){
        super();
        this.state = { isAddNewUser: false}
    }

    componentDidMount(){
        this.props.store.getUsers();
        this.props.store.restoreUserFromRecycleBin(9);
    }

    render(){
        return(
            <div>
                {this.state.isAddNewUser?
                <NewUserPage 
                    createNewUser={this.props.store.createNewUser} />
                :
                 <Users users={this.props.store.users} 
                        deleteUser={this.props.store.deleteUser} 
                        moveToTrash={this.props.store.moveToTrash} 
                        isUserPage={true}
                        updateUser={this.props.store.updateUser}/>}
            </div>
        )
    }
}

export default inject('store')(observer(UserPageContainer));