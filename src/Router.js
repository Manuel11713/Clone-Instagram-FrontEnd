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
            // const data = await axios.get(`${process.env.REACT_APP_HOST}/verify-token`,{headers:{authorization:token_access}});
            // const {user} = data.data
            // if(user){
            //     setDataUser(user);
            // }else{
            //     localStorage.removeItem('token_access');
            // }
            setDataUser({});
        }
        if(token_access){
            fetchData();
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