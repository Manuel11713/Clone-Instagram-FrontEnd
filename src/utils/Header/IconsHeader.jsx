import React, { useState } from 'react';
import {
    MessageOutlined,
    CompassOutlined,
    HeartOutlined,

    UserOutlined
} from '@ant-design/icons';
import IconHome from './Icons/IconHome.jsx';
import {Avatar,Popover} from 'antd';
import { Redirect } from 'react-router-dom';

const IconsHeader = () =>{
    const [redirect,setRedirect] = useState(false);

    const content = (
        <div>
            <p style={{cursor:'pointer'}} onClick={()=>{
                localStorage.removeItem('token_access');
                if(window.location.pathname==='/')window.location.reload();
                setRedirect(true);
            }}>Salir</p>
        </div>
    );
    if(redirect)return<Redirect to="/"/>

    return(
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',height:'100%'}} >
            <IconHome />
            
            <MessageOutlined style={{fontSize:25}}/>
            <CompassOutlined style={{fontSize:25}}/>
            <HeartOutlined style={{fontSize:25}}/>
            <Popover content={content}>
                <Avatar size={25} icon={<UserOutlined />} />
            </Popover>
        </div>
    );
};

export default IconsHeader;

