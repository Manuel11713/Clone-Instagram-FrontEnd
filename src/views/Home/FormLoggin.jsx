import React from 'react';
import {Link} from 'react-router-dom';
import { Form,Input,Card,Divider,Button} from 'antd';
import { GoogleLogin } from 'react-google-login';

const FormLoggin = ({setDataUser}) =>{
    const responseGoogle = (response) => {
        console.log(response);
    }
    return(
        <Card>
            <div style={{display:'flex',justifyContent:'center'}}>
                <img src="images/clonogram.png"  style={{width:'50%'}} alt="logo clonogram"/>
            </div>
            <Form>
                <Form.Item name="name" >
                    <Input placeholder="Usuario o correo electronico" />
                </Form.Item>
                <Form.Item name="password" >
                    <Input.Password placeholder="Contraseña" />
                </Form.Item>
                <Button type="primary" htmlType="submit" block>
                    Iniciar Sesión
                </Button>
            </Form>
            <Divider>o</Divider>
            <div style={{display:'flex',justifyContent:'center'}}>
            <GoogleLogin
                
                clientId="519455576665-tsag8jth2r67l6fvd114nmut5fhi0btn.apps.googleusercontent.com"
                buttonText="Ingresar con google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
            </div>
            <Link style={{display:'flex',justifyContent:'center',marginTop:20}} to='accounts/reset-password'>¿Olvidaste tu contraseña?</Link>
        </Card>
    );
}

export default FormLoggin;

//rules={[{ required: true }]}