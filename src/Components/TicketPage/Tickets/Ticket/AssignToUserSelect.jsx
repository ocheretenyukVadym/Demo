import { inject, observer } from 'mobx-react';
import React from 'react';
import Select from 'react-select'

const AssignToUserSelect = ({ store, ticketId }) => {
    const options = [];

    const assignToUser = (id) => !!id && store.assignToUser(id, ticketId);

    (function setOptions() {
        store.users.map(user => {
            options.push({
                value: user.id,
                label: user.name
            })
        })
    })()

    return (
        <div className="assign-user-container">
            <Select isLoading={!store.isFetching} options={options} onChange={ user => 
                    assignToUser(user.value)} className="assign-user"/>
        </div>
    )
}

export default inject("store")(observer(AssignToUserSelect))