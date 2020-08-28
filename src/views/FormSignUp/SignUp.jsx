import React from 'react';
import {Card,Divider,Col,Row} from 'antd';
import LogginGoogleHandler from '../../utils/LogginGoogleHandler.jsx';

import FormSignUp from './FormSignUp.jsx';

const SignUp = ({setDataUser}) =>{
    return(
        <>
            <Row justify='center'>
                <Col xs={12} lg={6}>
                    <Card style={{marginTop:20}}>
                        <div style={{display:'flex',justifyContent:'center'}}>
                            <img style={{width:'60%'}} src='/images/clonogram.png' alt="clonogram_img"/>
                        </div>
                        <h2 style={{textAlign:'center',color:'rgb(142,142,142)',fontSize:17}}>
                            Regístrate para ver fotos y videos de tus amigos.
                        </h2>
                        <LogginGoogleHandler setDataUser={setDataUser}/>
                        <Divider>O</Divider>
                        <FormSignUp setDataUser={setDataUser}/>
                    </Card>
                </Col>
            </Row>

        </>
    );
}
export default SignUp;