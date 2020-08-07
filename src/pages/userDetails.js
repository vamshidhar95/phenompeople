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
        
        <div className="user-card">
            <div className="user-card-header">
                <img src={selectedUser.picture} alt={usersList.name+" Picture"} />
                <p>
                    <span>{`${selectedUser.index}. `}</span>
                    <span style={{fontSize: "24px"}}><b>{selectedUser.name}</b></span>
                    <span>{` ${(selectedUser.gender === "male" ? "M" : "F" )}`}</span>
                    <span>{` / ${(selectedUser.age)} y/o`}</span>
                </p>
                <p>
                    <span>{`(${selectedUser.email})`}</span>
                    {/* <span>{` / ${selectedUser.phone}`}</span> */}
                </p>
                <div className="tags-container">
                    {
                        selectedUser.tags.map((tag, tid) => {
                            return(
                                <span className="tag" key={tag+"_"+tid}>{tag}</span>
                            )
                        })
                    }
                </div>
            </div>
            <hr />
            <div className="user-card-body">
                <table>
                    <tbody>
                        <tr>
                            <td className="td-left">Phone</td>
                            <td>{selectedUser.phone}</td>
                        </tr>
                        <tr>
                            <td className="td-left">Company</td>
                            <td className="td-right">{selectedUser.company}</td>
                        </tr>
                        <tr>
                            <td className="td-left">Balance</td>
                            <td className="td-right"><b>{selectedUser.balance}</b></td>
                        </tr>
                        <tr>
                            <td className="td-left">Eye Color</td>
                            <td className="td-right">{selectedUser.eyeColor}</td>
                        </tr>
                        <tr>
                            <td className="td-left">Favorite Fruit</td>
                            <td className="td-right">{selectedUser.favoriteFruit}</td>
                        </tr>
                        <tr>
                            <td className="td-left">Greeting</td>
                            <td className="td-right"><i>{`"${selectedUser.greeting}"`}</i></td>
                        </tr>
                        <tr>
                            <td className="td-left">Active</td>
                            <td className="td-right" style={{color:(selectedUser.isActive) ? "green" : "red" }}>{(selectedUser.isActive) ? "YES" : "NO"}</td>
                        </tr>
                        <tr>
                            <td className="td-left">Favorite Fruit</td>
                            <td className="td-right">{selectedUser.favoriteFruit}</td>
                        </tr>
                        <tr>
                            <td className="td-left">Registered on</td>
                            <td className="td-right">{selectedUser.registered}</td>
                        </tr>
                        <tr>
                            <td className="td-left">Latitude</td>
                            <td className="td-right">{selectedUser.latitude}</td>
                        </tr>
                        <tr>
                            <td className="td-left">Longitude</td>
                            <td className="td-right">{selectedUser.longitude}</td>
                        </tr>
                        <tr>
                            <td className="td-left">GUID</td>
                            <td className="td-right">{selectedUser.guid}</td>
                        </tr>
                        <tr>
                            <td className="td-left">Friends</td>
                            <td className="td-right">
                                {
                                    selectedUser.friends.map((friend, fid) => {
                                        return(<li key={friend+"_"+fid}>{friend.name}</li>)
                                    })
                                }
                            </td>
                        </tr>
                        <tr>
                            <td className="td-left">About</td>
                            <td className="td-right">{selectedUser.about}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
    )
}

export default UserDetails;