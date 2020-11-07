import { inject, observer } from 'mobx-react';
import React from 'react';

class UserPage extends React.Component{
    render(){
        // console.log(this.props.users);
        return(
            <div>
                <h1>Users Page</h1>
            </div>
        )
    }
}

const UserPageContainer = inject(stores => ({
    users: stores.users,
}))(UserPage)

export default observer(UserPageContainer);