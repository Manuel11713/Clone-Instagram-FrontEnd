import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {BrowserRouter,Route,Switch} from 'react-router-dom';


//-----------Views-------------
import Home from './views/Home/Home.jsx';
import SignUp from './views/FormSignUp/SignUp.jsx';
let token_access = localStorage.getItem('token_access');

const Router = () =>{
    const [dataUser,setDataUser] = useState(null);
    useEffect(()=>{
        const fetchData = async()=>{
            const {user} = await axios.get(`${process.env.REACT_APP_HOST}/verify-token`,{headers:{authorization:token_access}});
            return user;
        }
        console.log('token: ',token_access);
        if(token_access){
            const user = fetchData();
            console.log('user: ',user)
            setDataUser(user);
        }
    },[]);
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' render={()=>{
                    return(<Home dataUser={dataUser} setDataUser={setDataUser}/>);
                    }} />
                <Route exact path='/accounts/emailsignup' render={()=>{
                    return(<SignUp setDataUser={setDataUser}/>);
                    }}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;