import React from 'react';
import {Avatar,Card} from 'antd';

import { UserOutlined, PlusOutlined } from '@ant-design/icons';

const Histories = () =>{
    const histories = ['uno','dos','tres','cuatro','cinco'];
    return(
        <Card style={{marginTop:20,border:'1px solid #b0bec5'}}>
            <Avatar style={{marginRight:10,border:'1px dashed blue'}} size={64} icon={<PlusOutlined/>} />
            
            {histories.map(history=>{
                return(
                    <Avatar style={{marginRight:10,}} size={64} icon={<UserOutlined />} />
                );
            })}
        </Card>
    );
};

export default Histories;