import Layout from '../Layout';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
function Registry() {
    // const [isBoos, setIsBoos] = useState(false);
    const [name, setName] = useState('');
    useEffect(async () => {
        // IP test

    }, [])
    const reg = async () => {
        const data = { name };
        if (name == '') {
            alert('please enter name');
            return;
        }
        try {
            const res = await axios.post('http://127.0.0.1:5000/memReg', data);
            if (res.data == 'regsuccess') {
                alert('success Membership registry. please wait until the boss accepts');
            } if (res.data == 'exist') {
                alert('you have already registed');
            } if (res.data == 'existname') {
                alert('this name exist already');
            }

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Layout>
            <div style={{ width: '100%', textAlign: 'center' }}>
                <div className='row' style={{ padding: '50px' }}>
                    <div className='col-md-12 jcc'>
                        <textarea onChange={(e) => { setName(e.target.value) }} placeholder='please enter your name.' className='textareaT'></textarea>
                        <div>
                            <button onClick={reg} className='content3Btn'>Membership registry</button>
                        </div>
                    </div>
                </div>
                <h1 style={{ fontSize: '60px', color: 'green' }}>Welcome Membership registry!</h1>
            </div>
        </Layout>
    );
}

export default Registry;
