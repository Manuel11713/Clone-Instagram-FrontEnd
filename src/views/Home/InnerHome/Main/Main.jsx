import React from 'react';
import {Col,Row} from 'antd';
import Histories from './Histories.jsx';
import SideInfo from './SideInfo.jsx';
import AddPost from './AddPost.jsx';
const Main = () =>{
    return(
        <main style={{padding:'0 300px'}}>
            <Row>
                <Col xs={16}>
                    <Histories/>
                    <AddPost/>
                </Col>
                <Col xs={8}>
                    <SideInfo/>
                </Col>
            </Row>
        </main>
    );
};

export default Main;