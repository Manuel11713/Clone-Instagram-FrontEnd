import React from 'react';
import {Form,Input} from 'antd';
import './FormSignUp.css';

const FormSignUp = ()=>{
    return(
        <Form>
            <Form.Item >
                <Input placeholder="Correo electrónico"/>
            </Form.Item>
            <Form.Item >
                <Input placeholder="Nombre completo"/>
            </Form.Item>
            <Form.Item >
                <Input placeholder="Nombre de usuario"/>
            </Form.Item>
            <Form.Item >
                <Input.Password placeholder="contraseña"/>
            </Form.Item>
        </Form>
    );
}

export default FormSignUp;