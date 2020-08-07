const InitialState = {
    data: {
        message: "Redux is Created"
    },
    usersList: [],
    selectedindex: null
};

function Reducer( state = InitialState, action ) {
    switch (action.type) {
        case "SET_DATA":
            return { ...state, data: action.payload };
    
        case "USERS_LIST":
            return { ...state, usersList: action.payload };

        case "SELECT_USER":
            return { ...state, selectedindex: action.payload }
    
        default:
            return { ...state };
    }
}

export default Reducer;