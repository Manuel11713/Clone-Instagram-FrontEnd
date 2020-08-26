import React from 'react';
import {Link} from 'react-router-dom';
import {Row,Col,Card} from 'antd';
import "antd/dist/antd.css";
import "./Home.css";
import FormLoggin from './FormLoggin.jsx';

const linkAppstore = 'https://apps.apple.com/app/instagram/id389801252?vt=lo';
const linkPlaystore = 'https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D9E06A507-6240-4C66-8389-287323EA0DEA%26utm_content%3Dlo%26utm_medium%3Dbadge';

const Home = () =>{

    return(
        <Row justify="center" style={{marginTop:50}}>
            <Col xs={24} sm={20} lg={12}  >
                <Row>
                    <Col xs={0} lg={10} style={{marginTop:50}}>
                        <img style={{width:'100%'}} src="images/loggin.jpg" alt="loggin"/>
                    </Col>
                    <Col xs={24} lg={14} style={{marginTop:50,paddingLeft:30}} >
                        <FormLoggin/>
                        <Card style={{display:'flex',justifyContent:'center',marginTop:20}}>
                            ¿No tienes cuenta? <Link to="accounts/emailsignup">Registrate</Link> 
                        </Card>
                        <div style={{display:'flex',justifyContent:'center',marginTop:10}}>Descargar App</div>
                        <div style={{marginTop:10,display:'flex',justifyContent:'space-around'}}>
                            <a href={linkAppstore} style={{width:'45%'}} target="_blank" rel="noopener noreferrer">
                                <img style={{width:'100%'}} src='images/appstore.png' alt="appstore"/>
                            </a>
                            <a href={linkPlaystore} style={{width:'45%'}}  target="_blank" rel="noopener noreferrer">
                                <img style={{width:'100%'}} src='images/playstore.png' alt="playstore"/>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
        
    );
}
export default Home;