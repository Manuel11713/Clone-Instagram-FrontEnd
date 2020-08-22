import React from 'react';
import {Link} from 'react-router-dom';
import {Row,Col,Card} from 'antd';
import "antd/dist/antd.css";
import "./Home.css";


import FormLoggin from './FormLoggin.jsx';
const Home = () =>{

    return(
        <Row justify="center" style={{marginTop:50}}>
            <Col sm={10}  >
                <Row>
                    <Col sm={10} style={{marginTop:50}}>
                        <img src="images/loggin.jpg" alt="loggin"/>
                    </Col>
                    <Col sm={14} style={{marginTop:50}} >
                        <FormLoggin/>
                        <Card style={{display:'flex',justifyContent:'center',marginTop:20}}>
                            ¿No tienes cuenta? <Link to="accounts/singup">Registrate</Link> 
                        </Card>
                        <div style={{display:'flex',justifyContent:'center',marginTop:10}}>Descargar App</div>
                        <div style={{marginTop:10,display:'flex',justifyContent:'space-around'}}>
                            <img style={{width:'45%'}} src='images/appstore.png' alt="appstore"/>
                            <img style={{width:'45%'}} src='images/playstore.png' alt="playstore"/>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
        
    );
}
export default Home;