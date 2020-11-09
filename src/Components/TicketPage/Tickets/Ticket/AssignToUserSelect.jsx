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
        <div className="assign-user-container" style={{display: 'flex'}}>
            <Select isLoading={!store.isFetching} options={options} onChange={ user => 
                    assignToUser(user.value)} styles={customStyles} />
        </div>
    )
}

export default inject("store")(observer(AssignToUserSelect))

const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted pink',
      color: state.selectProps.menuColor,
      padding: 20,
    }),

    loadingIndicator: () => ({
        display:'flex',
        alignItems: 'center',
        width: '50%',
        height: '44%',
        span: {
            height: '50%',
        }
    }),
  
    control: (_, { selectProps: {  }}) => ({
      display: 'flex',
      border: '1px solid #dbdbdb',
    }),
  
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
      return { ...provided, opacity, transition };
    }
  }