import React,{useEffect} from "react";
import axios from "axios";
import {connect} from 'react-redux';
import { useState } from "react";
import Header from '../../utils/Header/Header.jsx';
import {Row,Col,Modal} from 'antd';
import './Profile.css';

const Profile = ({userData}) =>{
    const postsID = userData?.posts;
    const [posts,setPosts] = useState([]);
    const [visible,setVisible] = useState(false);
    const [clickedImg,setClickedImg] = useState('');
    useEffect(()=>{
        const fetchData =async()=>{
            const res = await axios.post(`${process.env.REACT_APP_HOST}/posts`,{postsID});
            setPosts(res.data.posts);
            console.log(res.data.posts);
        }
        if(postsID)fetchData();
    },[postsID]);
    if(!postsID)return<div>no hay posts</div>
    const handleCancel=()=>{
        setVisible(false);
    }
    return(
        <>

            <Modal visible={visible} onCancel={handleCancel} footer={null} >
                <img src={clickedImg} alt='modalpost'  style={{width:'100%',height:'100%'}}/>
            </Modal>
            <Header/>
            <div style={{padding:'0 200px'}}>
                <Row>
                    {
                        posts.map(post=>{
                            return(
                                <Col xs={8} key={post.id}>
                                    <div className="img_container" style={{width:'90%',height:'70%'}} onClick={()=>{setVisible(true);setClickedImg(post.fileLink)}} >
                                        <img style={{width:'100%',height:'100%'}} src={post.fileLink} alt="posts"/>
                                        <div className="img_description">
                                            <span >{post.description}</span>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })
                    }
                    
                </Row>
            </div>
        </>
    );
}
const statetoProps=state=>{
    return({
        userData:state.userData
    });
}
export default connect(statetoProps)(Profile);