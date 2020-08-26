import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';


//-----------Views-------------
import Home from './views/Home/Home.jsx';
import SignUp from './views/FormSignUp/SignUp.jsx';

const Router = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/accounts/emailsignup' component={SignUp}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;