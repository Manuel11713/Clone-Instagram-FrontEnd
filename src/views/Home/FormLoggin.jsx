import React, { useState } from 'react';
import {Link,Redirect} from 'react-router-dom';
import {Alert, Form,Input,Card,Divider,Button} from 'antd';
import axios from 'axios';
import LogginGoogleHandler from '../../utils/LogginGoogleHandler.jsx';
const FormLoggin = ({setUserData}) =>{

    const [reditect,setRedirect] = useState(false);
    const [alertError,setAlertError] = useState(false);
    const [messageError,setMessageError] = useState('');
    const finishHandler = async (response) =>{    
        const res = await axios.post(`${process.env.REACT_APP_HOST}/loggin`,response);
        const {user,token,message} = res.data;
        if(!user){
            setMessageError(message);
            setAlertError(true);
        }else{
            localStorage.setItem('token_access',token);
            setUserData(user);
            setRedirect(true);
        }
    }
    if(reditect)return <Redirect to='/'/>;
    return(
        <Card>
            <div style={{display:'flex',justifyContent:'center'}}>
                <img src="images/clonogram.png"  style={{width:'50%'}} alt="logo clonogram"/>
            </div>
            <Form onFinish={finishHandler}>
                <Form.Item name="email" rules={[{required:true,message:'Debe instroducir el correo electronico'}]} >
                    <Input placeholder="Usuario o correo electronico" />
                </Form.Item>
                <Form.Item name="password" rules={[{required:true,message:'Debe instroducir la contraseña'}]} >
                    <Input.Password placeholder="Contraseña" />
                </Form.Item>
                <Button type="primary" htmlType="submit" block>
                    Iniciar Sesión
                </Button>
            </Form>
            {alertError?<Alert style={{marginTop:10}} message={messageError} type="error" showIcon />:null}
            
            <Divider>o</Divider>
            <LogginGoogleHandler setUserData={setUserData}/>
            <Link style={{display:'flex',justifyContent:'center',marginTop:20}} to='accounts/reset-password'>¿Olvidaste tu contraseña?</Link>
        </Card>
    );
}

export default FormLoggin;

