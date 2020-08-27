import React,{useState} from 'react';
import {Form,Input,Button,Modal} from 'antd';
import axios from 'axios';
import './FormSignUp.css';

const FormSignUp = ({setDataUser})=>{
    const [visible,setVisible] = useState(false);
    const [messageModal,setMessage] = useState('');
    const onFinish = async (data) => {
        const {user,token,message} = await axios.post('/signup-users',data);
        if(!user){
            setMessage(message);
            setVisible(true);
        }else{
            localStorage.setItem('token_access',token);
            setDataUser(user);
        }
    };
    return(
        <>
            <Form onFinish={onFinish}>
                <Form.Item name='email' rules={[{ required: true,message:'Correo electronico necesario' }]} >
                    <Input placeholder="Correo electrónico"/>
                </Form.Item >
                <Form.Item name='name' rules={[{ required: true,message:'Nombre necesario' }]}>
                    <Input placeholder="Nombre completo"/>
                </Form.Item>
                <Form.Item name='username' rules={[{ required: true,message:'Usuario necesario' }]}>
                    <Input placeholder="Nombre de usuario"/>
                </Form.Item>
                <Form.Item name='password' rules={[{ required: true,message:'Contraseña necesaria' }]}>
                    <Input.Password placeholder="contraseña"/>
                </Form.Item>
                <Form.Item >
                    <Button style={{width:'100%'}} type="primary" htmlType="submit">
                        Registrarse
                    </Button>
                </Form.Item>
            </Form>
            <Modal
                visible={visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                >
                <p>{messageModal}</p>
            </Modal>
        </>
    );
}

export default FormSignUp;