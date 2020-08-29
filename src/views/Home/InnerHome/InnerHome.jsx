import React from 'react';
import Header from './Header/Header.jsx';
import './InnerHome.css';
import Main from './Main/Main.jsx';
const InnerHome = ()=>{
    return(
        <>
            <Header/>
            <Main/>
            <div style={{padding:'0 300px'}}>
            </div>
        </>
    );
};

export default InnerHome;