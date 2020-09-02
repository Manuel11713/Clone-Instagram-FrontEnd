import {createStore} from 'redux';

let initialState = {
    userData:null
}

const reducerUser = (state=initialState,action)=>{
    if(action.type === 'UPDATE_USER'){
        return{
            ...state,
            userData:action.userData
        }
    }
    if(action.type === 'UPDATE_POSTS'){
        let {userData} = {...state};
        userData.posts = action.posts;
        return{
            ...state,
            userData
        }
    }
    return state;
}

export default createStore(reducerUser);
