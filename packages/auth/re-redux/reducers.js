// reducers.js
const initialState = {
    isSignedIn:false,
    userName:"",
    profileName:""
};

import produce from 'immer';
const authReducer = (state = initialState, action) =>  
produce(state,draft  => {
    switch(action.type){
        case 'SIGNIN':
            draft.isSignedIn=action.payload.isSignedIn
            draft.userName=action.payload.userName
            draft.profileName=action.payload.profileName
            console.log("action",action)
            break;
        case 'SIGNOUT':
            draft.isSignedIn=false
            draft.userName=""
            draft.profileName=""
            console.log("action",action)
            break;
        default:
            return state;
    }
});
export default authReducer;
