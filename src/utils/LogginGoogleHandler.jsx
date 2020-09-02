import React,{useState} from 'react';
import { GoogleLogin } from 'react-google-login';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import {Modal} from 'antd';

const LogginGoogleHandler=({setUserData})=>{
    const [redirect,setRedirect] = useState(false);
    const [visible,setVisible] = useState(false);
    const [messageModal,setMessage] = useState('');

    const responseGoogle = async (response) => {
        const {tokenId} = response;
        const data = await axios.post(`${process.env.REACT_APP_HOST}/loggin-google`,null,{headers:{idtoken:tokenId}});
        console.log(data)
        const {user,message,token} = data.data;
        if(user){
            localStorage.setItem('token_access',token);
            setUserData(user);
            setRedirect(true);
        }else{
            setMessage(message);
            setVisible(true);
        }
    }
    const handleOk = ()=>{
        setVisible(false);
    }
    if(redirect)return <Redirect to="/"/>;
    return(
        <div  style={{display:'flex',justifyContent:'center'}}>
            <GoogleLogin
                    
                    clientId={process.env.REACT_APP_GOOGLE_ID}
                    buttonText="Ingresar con google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
            />
            <Modal
                    visible={visible}
                    onOk={handleOk}
                >
                    <p>{messageModal}</p>
            </Modal>
        </div>
    );
}
export default LogginGoogleHandler;