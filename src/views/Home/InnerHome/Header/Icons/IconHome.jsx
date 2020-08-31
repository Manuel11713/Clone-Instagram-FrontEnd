import React from 'react';
import {useLocation} from 'react-router-dom';

import {
    HomeOutlined,
    HomeFilled,
} from '@ant-design/icons';

const IconHome = () =>{
    const location = useLocation();
    console.log(location)
    const clickHandle = ()=>{
        console.log('click');
    }

    if(location.pathname==='/')return<HomeFilled style={{fontSize:25}} onClick={clickHandle} />
    else return <HomeOutlined style={{fontSize:25}} onClick={clickHandle}/>;
}

export default IconHome;