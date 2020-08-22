import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';


//-----------Views-------------
import Home from './views/Home/Home.jsx';


const Router = () =>{
    return(
        <BrowserRouter>
        
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;