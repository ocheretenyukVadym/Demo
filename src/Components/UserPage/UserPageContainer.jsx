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
    }

    render(){
        return(
            <div>
                {this.props.isAddNewUser && <NewUserPage 
                    createNewUser={this.props.store.createNewUser} />}
                <Users users={this.props.store.users} />
            </div>
        )
    }
}


export default inject('store')(observer(UserPageContainer));