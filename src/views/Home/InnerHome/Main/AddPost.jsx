import React from 'react';

import {Card,Modal} from 'antd';
import {PlusOutlined } from '@ant-design/icons';
import FormPost from './FormPost.jsx';
import './AddFile.css';
import { useState } from 'react';

const AddFile = () =>{
    const [visible,setVisible] = useState(false);

    const handleCancel = ()=>{
        setVisible(false);
    }
    const handlerMakePost = ()=>{
        setVisible(true);
    }

    return(
        <>
            
            <Modal
                title="Publica algo"
                onCancel={handleCancel}
                visible={visible}
                footer={null}
            >
            
                <FormPost setVisible={setVisible}/>

            </Modal>
            <Card 
                style={{marginTop:10,border:'1px solid #b0bec5',display:'flex',justifyContent:'center',cursor:'pointer'}}
                onClick={handlerMakePost}
                >
                <PlusOutlined/>Add Post
            </Card>
        </>
    );
};

export default AddFile;
/* <Upload 
    style={{cursor:'pointer'}}
    name='newPost'
    action={`${process.env.REACT_APP_HOST}/upload-post`}
    headers={{
        authorization:localStorage.getItem('token_access')
    }}
    onChange={changeHandler}
    >
        
</Upload> */