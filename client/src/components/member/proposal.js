import Layout from '../Layout';

import axios from 'axios';
import React, { BrowserRouter, useEffect, useState } from 'react';
function Voting() {
    const [isBoos, setIsBoos] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [shareDate, setShareDate] = useState('');
    const [businessContent, setBusinessContent] = useState('');
    useEffect(async () => {
        try {
            const res = await axios.post('http://127.0.0.1:5000/getBusiness');
            console.log(res.data);
            var date = res.data[0].d_date.replace('T', ' - ');
            date = date.replace('.000Z', '');
            setShareDate(date);
            setBusinessContent(res.data[0].t_content);
        } catch (error) {
            console.log(error)
        }
    }, [])
    const SubmitProposal = async () => {
        const data = { title, content };
        console.log(data)
        if (title === '' || content === '') {
            alert('please enter all value'); return;
        }
        try {
            const res = await axios.post('http://127.0.0.1:5000/submit', data);
            if (res.data == 'success') {
                alert('submit success');
                window.location.href = '/mvoting';
            } if (res.data == 'accessDenied') {
                alert('please access check');
            } if (res.data == 'noreg') {
                alert('please registe');
            }

            //    if(user_ip=='192.168.115.160'){
            //        setIsBoos(true);
            //    }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Layout>
            <div style={{ width: '100%', textAlign: 'center' }}>
                <div className='row' style={{ padding: '50px' }}>
                    <div className='col-md-12 jcc'>
                        Date: &nbsp;&nbsp;{shareDate}
                        <div className='row'>
                            <div className='col-md-12'>
                                <textarea value={businessContent} onChange={(e) => { setContent(e.target.value) }} disabled placeholder='command of boss' className='textareaC'></textarea>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12'>
                                <textarea onChange={(e) => { setTitle(e.target.value) }} placeholder='Title' className='textareaT'></textarea>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12'>
                                <textarea onChange={(e) => { setContent(e.target.value) }} placeholder='Proposal' className='textareaC'></textarea>
                            </div>
                        </div>
                        <div>
                            <button onClick={SubmitProposal} className='content3Btn'>Submit</button>
                        </div>
                    </div>
                </div>
                {/* <h1 style={{fontSize:'100px',color:'green'}}>Welcome Boss!</h1> */}
            </div>
        </Layout>
    );
}

export default Voting;
