import React from 'react';
import {
    MessageOutlined,
    CompassOutlined,
    HeartOutlined,

    UserOutlined
} from '@ant-design/icons';
import IconHome from './Icons/IconHome.jsx';
import {Avatar} from 'antd';

const IconsHeader = () =>{

    return(
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',height:'100%'}} >
            <IconHome />
            
            <MessageOutlined style={{fontSize:25}}/>
            <CompassOutlined style={{fontSize:25}}/>
            <HeartOutlined style={{fontSize:25}}/>
            <Avatar size={25} icon={<UserOutlined />} />
        </div>
    );
};

export default IconsHeader;

