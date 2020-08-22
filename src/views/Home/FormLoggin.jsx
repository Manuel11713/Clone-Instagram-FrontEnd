import React from 'react';
import {Link} from 'react-router-dom';
import { Form,Input,Card,Divider,Button} from 'antd';

const FormLoggin = () =>{
    return(
        <Card>
            <div style={{display:'flex',justifyContent:'center'}}>
                <img src="images/clonogram.png"  style={{width:'50%'}} alt="logo clonogram"/>
            </div>
            <Form>
                <Form.Item name="name" p >
                    <Input placeholder="Usuario o correo electronico" />
                </Form.Item>
                <Form.Item name="password" p >
                    <Input.Password placeholder="Contraseña" />
                </Form.Item>
                <Button type="primary" htmlType="submit" block>
                    Iniciar Sesión
                </Button>
            </Form>
            <Divider>o</Divider>
            <div style={{display:'flex',justifyContent:'center'}}>
                boton google loggin
            </div>
            <Link style={{display:'flex',justifyContent:'center'}} to='accounts/reset-password'>¿Olvidaste tu contraseña?</Link>
        </Card>
    );
}

export default FormLoggin;

//rules={[{ required: true }]}