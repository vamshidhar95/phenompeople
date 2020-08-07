import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchUserData, changeData, selectUser } from '../redux/action';

class UsersList extends Component{
    constructor(props){
        super(props);

        this.state = {
            search: ""
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

    SearchUser(e){
        console.log(e.target.value);
        this.setState({search: e.target.value})
    }

    getUserList(){

        let usersList = this.props.usersList;
        let filteredList;
        if(this.state.search !== ""){
            filteredList = usersList.filter(user => {return user.name.toLowerCase().includes(this.state.search.toLocaleLowerCase())} )
            
            if(filteredList){
                usersList = filteredList;
                console.log(filteredList);
            }
        }
        

        const list = usersList.map((user, index) => {
            return(
                <React.Fragment  key={user._id}>
                <div className="user_list_item">
                        <p>
                            <span>{user.name}</span> <span style={{fontSize: "12px"}}>{`(${user.email})`}</span>
                        </p>
                        <div>{user.phone}</div>
                        <p onClick={() => this.UserDetails(index)} ><Link className="user_item_link" to='/user_details' >More Details ></Link></p>
                </div>
                <hr id="divider" />
                </React.Fragment>
            )
        })
        return list.length ? list : <p>Cannot find the match</p>;
    }

    render(){
        const usersList = this.props.usersList;
        return(
            <React.Fragment>
                <div className="input-div">
                    <input type="text" className="my-input" placeholder="Search for names.." title="Type in a name" value={this.state.search} onChange={(e) => this.SearchUser(e)} />
                </div>
                <div className="list-box">
                {
                    usersList.length ? 
                    this.getUserList()
                    : 
                    <p>List is empty</p>
                }
                </div>
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
