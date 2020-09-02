import React from 'react';
import {Col,Row,Affix,Input} from 'antd';
import {Link} from 'react-router-dom';
import IconsHeader from './IconsHeader.jsx';

const Header = () =>{
    const searchHandler = (value)=>{
        console.log(value);
    }
    return(
        <header style={{background:'#fff',padding:'0 300px',borderBottom:'1px solid #b0bec5'}}>
            <Affix offsetTop={0}>
                <Row>
                    <Col xs={6}>
                        <div style={{justifyContent:'center'}}>
                            <Link to="/">
                                <img style={{width:'60%'}} src="images/clonogram.png" alt="logo"/>
                            </Link>
                        </div>
                    </Col>
                    <Col xs={12} style={{height:50}}>
                        <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100%'}}>
                            <Input.Search
                                    placeholder="Buscar"
                                    onSearch={searchHandler}
                                    style={{ width: 200,height:'50%' }}
                            />
                        </div>
                    </Col>
                    <Col xs={6}>
                        <IconsHeader/>
                    </Col>
                </Row>
            </Affix>
        </header>
    );
}

export default Header;