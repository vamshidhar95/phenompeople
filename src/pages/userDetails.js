import React from 'react';
import { useStore } from 'react-redux';
import { Redirect } from 'react-router-dom';

const UserDetails = () => {
    const store = useStore();
    const usersList = store.getState().usersList;
    const selectedindex = store.getState().selectedindex;
    if(selectedindex == null || !usersList.length)
        return <Redirect to= "/" />;

    const selectedUser = usersList[selectedindex];
    return(
        
        <React.Fragment>
            <img src={selectedUser.picture} />
            <p>{selectedUser.name}</p>
        </React.Fragment>
    )
}

export default UserDetails;