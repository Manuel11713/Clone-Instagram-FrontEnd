import React from 'react';

import {Avatar,Row,Col} from 'antd';
import { UserOutlined } from '@ant-design/icons';

const SideInfo = () =>{
    return(
        <div style={{marginTop:20,paddingLeft:20,paddingTop:20}}>
            <Row>
                <Col xs={6}>
                    <Avatar size={64} icon={<UserOutlined />} />
                </Col>
                <Col xs={18} >
                    <p style={{width:'100%', margin:0}}>nombre de usuario</p>
                    <p style={{width:'100%',margin:0}}>Jose Manuel Escobedo Lopez</p>
                </Col>
            </Row>
        </div>
    );
};

export default SideInfo;
