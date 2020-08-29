import React from 'react';

import {Card, Upload} from 'antd';
import {PlusOutlined } from '@ant-design/icons';
import './AddFile.css';
const AddFile = () =>{
    const changeHandler = (info) =>{
        if(info.fileList[0].response){
            console.log('terminado');
        }
    }
    return(
        <Card style={{marginTop:10,border:'1px solid #b0bec5',display:'flex',justifyContent:'center'}}>
            <Upload 
            name='newPost'
            action={`${process.env.REACT_APP_HOST}/upload-post`}
            headers={{
                authorization:localStorage.getItem('token_access')
            }}
            onChange={changeHandler}
            >
                <PlusOutlined/>Add File
            </Upload>
        </Card>
    );
};

export default AddFile;