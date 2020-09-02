import React,{useEffect} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';//Nos conectamos al store
import {BrowserRouter,Route,Switch} from 'react-router-dom';


//-----------Views-------------
import Home from './views/Home/Home.jsx';
import SignUp from './views/FormSignUp/SignUp.jsx';
import Profile from './views/Profile/Profile.jsx';


let token_access = localStorage.getItem('token_access');

const Router = ({userData,setUserData}) =>{
    useEffect(()=>{
        const fetchData = async()=>{
            const data = await axios.get(`${process.env.REACT_APP_HOST}/verify-token`,{headers:{authorization:token_access}});
            const {user} = data.data
            if(user){
                setUserData(user);
            }else{
                localStorage.removeItem('token_access');
            }
            //setUserData({});
        }
        if(token_access){
            fetchData();
        }
    },[setUserData]);
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' render={()=>{
                    return(<Home userData={userData} setUserData={setUserData}/>);
                    }} />
                <Route exact path='/accounts/emailsignup' render={()=>{
                    return(<SignUp setUserData={setUserData}/>);
                    }}/>
                <Route exact path='/profile' component={Profile} />
            </Switch>
        </BrowserRouter>
    );
}

const dipatchToProps = dispatch =>{
    return({
        setUserData(userData){
            dispatch({
                type:'UPDATE_USER',
                userData
            });
        }
    });
};

const stateToProps = state=>{
    return({
        userData:state.userData
    });
}

export default connect(stateToProps,dipatchToProps)(Router);