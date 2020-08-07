import axios from 'axios';

export function changeData(){
    const object = {
        message: "Redux is Created, and now Actions are also working.."
    };
    return function(dispatch){
        console.log("Change Dummy Data");

        dispatch({
            type: "SET_DATA",
            payload: object
        })
    }
}


export function fetchUserData(){
    const url = "https://gist.githubusercontent.com/swazza/619e53db7be4498b689cba176cab2fbf/raw/03929aa6f594818284604592353c6dd776487b0d/users.json";
    return function( dispatch ){

        axios.get(url).then(response => {
            console.log(response.data);
            dispatch({
                type: "USERS_LIST",
                payload: response.data
            })
        }).catch(err => {
            console.log(err);
        })
    }
}

export function selectUser(index){
    return function(dispatch){
        dispatch({
            type: "SELECT_USER",
            payload: index
        })
    }
}