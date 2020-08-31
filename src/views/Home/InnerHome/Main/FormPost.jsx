import React from 'react';
import {PaperClipOutlined} from '@ant-design/icons';
import { Input,Form, Button,Upload} from 'antd';
import axios from 'axios';
import { useState } from 'react';
const FormPost = ({setVisible})=>{
    const [description,setDescription]=useState('');
    const [selectedFile,setFile] = useState(null);
    const beforeUpload= (file,filelist)=>{
        setFile(file);
    }
    const handleSend = ()=>{
        const data = new FormData();

        data.append('newPost',selectedFile);
        data.append('description',description);
        
        axios.put(`${process.env.REACT_APP_HOST}/upload-post`,data)
        .then(res=>setVisible(false))
        .catch(err=>console.log(err));
    }
    return(
        <Form>
            <Form.Item name="description" >
                <Input.TextArea autoSize={{ minRows: 4, maxRows: 4 }} placeholder="Cuantanos de que trata tu foto" onChange={tag=>{setDescription(tag.target.value)}}/>
            </Form.Item>
                <Upload 
                    style={{cursor:'pointer'}}
                    beforeUpload={beforeUpload}
                    >
                    <Button>
                        <PaperClipOutlined />Upload
                    </Button>
                </Upload> 
            <Form.Item>
                <Button type="primary" onClick={handleSend}>
                    Enviar
                </Button>
            </Form.Item>
        </Form>
    );
}
export default FormPost;