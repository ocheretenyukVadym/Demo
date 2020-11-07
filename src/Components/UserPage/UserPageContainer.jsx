import { inject, observer } from 'mobx-react';
import React from 'react';
import NewUserPage from "./NewUserPage/NewUserPage";

class UserPage extends React.Component{
    render(){
        //DEBUG:
        return(
            <div>
                <NewUserPage username={""} setUsername={null}/>
                <h1>Users Page</h1>
            </div>
        )
    }
}

const UserPageContainer = inject(stores => ({
    users: stores.users,
}))(UserPage)

export default observer(UserPageContainer);