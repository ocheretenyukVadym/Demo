import { inject, observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import NewUserPage from './NewUserPage/NewUserPage';
import Users from './Users/Users';

const UserPageContainer = (props) =>{
    const[isAddNewUser] = useState(true);
    useEffect(() => {
        props.store.getUsers();
    },[]);


        return(
            <div>
                {isAddNewUser && <NewUserPage 
                    createNewUser={props.store.createNewUser} />}

                <Users users={props.store.users} 
                        deleteUser={props.store.deleteUser} 
                        moveToTrash={props.store.moveToTrash} 
                        isUserPage={true} 
                        updateUser={props.store.updateUser}/>
            </div>
        )
    }


export default inject('store')(observer(UserPageContainer));