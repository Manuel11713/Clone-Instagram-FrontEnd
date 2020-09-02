import React from 'react';
import {Link } from 'react-router-dom';
import {Avatar,Row,Col} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';

const SideInfo = ({userData}) =>{
    return(
        <div style={{marginTop:20,paddingLeft:20,paddingTop:20}}>
            <Row>
                <Col xs={6}>
                    <Link to="/profile">
                        <Avatar size={64} icon={<UserOutlined />} />
                    </Link>
                </Col>
                <Col xs={18} >
                    {userData.name===userData.username?null:<p style={{width:'100%', margin:0}}>{userData.username}</p>}
                    <p style={{width:'100%',margin:0}}>{userData.name}</p>
                </Col>
            </Row>
        </div>
    );
};

const stateToProps=state=>{
    return({
        userData:state.userData
    });
}

export default connect(stateToProps)(SideInfo);
