import React from 'react';
import {Card,Divider,Col,Row} from 'antd';
import { GoogleLogin } from 'react-google-login';

import FormSignUp from './FormSignUp.jsx';

const SignUp = ({setDataUser}) =>{
    const responseGoogle = (response) => {
        console.log(response);
    }
    return(
        <Row justify='center'>
            <Col xs={6}>
                <Card style={{marginTop:20}}>
                    <div style={{display:'flex',justifyContent:'center'}}>
                        <img style={{width:'60%'}} src='/images/clonogram.png' alt="clonogram_img"/>
                    </div>
                    <h2 style={{textAlign:'center',color:'rgb(142,142,142)',fontSize:17}}>
                        Regístrate para ver fotos y videos de tus amigos.
                    </h2>
                    <div style={{display:'flex',justifyContent:'center'}}>
                        <GoogleLogin
                            clientId="519455576665-tsag8jth2r67l6fvd114nmut5fhi0btn.apps.googleusercontent.com"
                            buttonText="Ingresar con google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                    </div>
                    <Divider>O</Divider>
                    <FormSignUp setDataUser={setDataUser}/>
                </Card>
            </Col>
        </Row>
    );
}
export default SignUp;