import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchUserData, changeData, selectUser } from '../redux/action';

class UsersList extends Component{
    constructor(props){
        super(props);

        this.state = {

        };
    }

    componentDidMount(){
        this.props.fetchUserData();
    }

    // changeData(){
    //     this.props.changeData();
    // }

    UserDetails(index){
        console.log(this.props.usersList[index]);
        this.props.selectUser(index);
    }

    render(){
        const usersList = this.props.usersList;
        return(
            <React.Fragment>
            {
                usersList.length ? 
                usersList.map((user, index) => {
                    return(
                        <div className="user_list_item" key={user._id}>
                                <p>{`Name: ${user.name}`}</p>
                                <p>{`Email: ${user.email}`}</p>
                                <p>{`Phone No: ${user.phone}`}</p>
                                <p onClick={() => this.UserDetails(index)}><Link className="user_item_link" to='/user_details' >More Details</Link></p>
                        </div>
                        
                    )
                })
                : 
                <p>List is empty</p>
            }
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.data,
        usersList: state.usersList,
    };
}

export default connect(mapStateToProps, { fetchUserData, changeData, selectUser })(UsersList);
