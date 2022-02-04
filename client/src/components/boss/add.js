import Layout from '../Layout';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
function Add() {
    const [businessContent, setBusinessContent] = useState('');
    const [shareDate, setShareDate] = useState('');
    const [changeMonitor, setChangeMonitor] = useState('');

    useEffect(async () => {
        // IP test
        if (localStorage.getItem('isb') == false) {
            window.location.href = '/you_are_not_boss';
            return;
        }
        const res = await axios.post('http://127.0.0.1:5000/getBusiness');
        console.log(res.data);
        if (res.data.length > 0) {
            var date = res.data[0].d_date.replace('T', ' - ');
            date = date.replace('.000Z', '');
            setShareDate(date);
            setBusinessContent(res.data[0].t_content);
        }
    }, [changeMonitor])
    const buss_share = async () => {
        if (businessContent == '') {
            alert('please enter business content'); return;
        }
        const result = await axios.post('http://127.0.0.1:5000/busi_share', { businessContent: businessContent });
        if (result.data == 'success') {
            alert('success');
            var m = new Date()
            setChangeMonitor(m.getTime());
        } else {
            alert('server error');
        }
    }
    const proposal_delete = async () => {
        if (window.confirm("Really?")) {
            const result = await axios.post('http://127.0.0.1:5000/proposal_delete');
            if (result.data == 'PDsuccess') {
                alert('all proposal deleted');
            } else {
                alert('server error');
            }
            console.log(result.data)
        } else {
            return false;
        }
    }

    return (
        <Layout>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'right' }} className='mt1'>
                <button onClick={proposal_delete} className='my2'><span style={{ color: "blue" }}>All Proposal&nbsp;&nbsp;</span> Delete</button>
            </div>
            <div style={{ width: '100%', textAlign: 'center' }}>
                <div className='row' style={{ padding: '50px' }}>
                    <div className='col-md-12 jcc'>
                        <div>Share Date:&nbsp;&nbsp; {shareDate}</div>
                        <textarea value={businessContent} onChange={(e) => { setBusinessContent(e.target.value) }} className='textareaA'>
                        </textarea>
                        <div>
                            <button onClick={buss_share} className='content3Btn'>Distribute</button>
                        </div>
                    </div>
                </div>
                <h1 style={{ fontSize: '100px', color: 'green' }}>Welcome Boss!</h1>
            </div>
        </Layout>
    );
}

export default Add;
