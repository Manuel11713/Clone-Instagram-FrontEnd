import React from 'react';
import {PaperClipOutlined} from '@ant-design/icons';
import {connect} from 'react-redux';
import { Input,Form, Button,Upload} from 'antd';
import axios from 'axios';
import './FormPost.css';
import { useState } from 'react';
const FormPost = ({setVisible,userData,updatePosts})=>{
    const [description,setDescription]=useState('');
    const [selectedFile,setFile] = useState(null);
    const [loading,setLoading] = useState(false);
    const beforeUpload= (file,filelist)=>{
        setFile(file);
    }
    const handleSend = ()=>{//send image and data to make a post
        if(!selectedFile||description.length===0)return console.log('no se puede enviar');
        setLoading(true);
        const data = new FormData();

        data.append('newPost',selectedFile);
        data.append('description',description);
        data.append('email',userData.email);


        axios.put(`${process.env.REACT_APP_HOST}/upload-post`,data)
        .then(res=>{
            updatePosts(res.data.posts);
            setVisible(false);
        })
        .catch(err=>{console.log(err);setLoading(false);});
    }
    const onRemove= () =>{
        setFile(null);
    }
    const onChange = tag=>{
        setDescription(tag.target.value);
    }
    return(
        <Form>
            <Form.Item name="description" >
                <Input.TextArea autoSize={{ minRows: 4, maxRows: 4 }} placeholder="Cuantanos de que trata tu foto" onChange={onChange}/>
            </Form.Item>
            <Upload 
                style={{cursor:'pointer'}}
                beforeUpload={beforeUpload}
                onRemove={onRemove}
                >
                <Button block>
                    <PaperClipOutlined />Upload
                </Button>
            </Upload> 
            <Form.Item style={{width:'100%',marginTop:10}}>
                <Button type="primary" onClick={handleSend} loading={loading} block>
                    Enviar
                </Button>
            </Form.Item>
        </Form>
    );
}

const stateToProps=state=>{
    return({
        userData:state.userData
    });
}
const dispatchToProps = dispatch =>{
    return({
        updatePosts(posts){
            dispatch({
                posts,
                type:'UPDATE_POSTS'
            });
        }
    });
}

export default connect(stateToProps,dispatchToProps)(FormPost);

