import { inject, observer } from 'mobx-react';
import React from 'react';
import NewUserPage from './NewUserPage/NewUserPage';

class UserPageContainer extends React.Component{

    componentDidMount(){
        this.props.store.getUsers();
    }

    render(){
        //DEBUG:
        return(
            <div>
                <NewUserPage 
                    createNewUser={this.props.store.createNewUser} />
            </div>
        )
    }
}


export default inject('store')(observer(UserPageContainer));