import Layout from '../Layout';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
function Registers() {
    const [isBoos, setIsBoos] = useState(false);
    useEffect(async () => {
        // IP test
        // try {
        //    const user_ip = await axios.post('http://127.0.0.1:5000/ip_test','sadsdfsdf');
        //    alert(user_ip);
        //    console.log(user_ip)
        //    if(user_ip=='192.168.115.160'){
        //        setIsBoos(true);
        //    }
        // } catch (error) {
        //   console.log(error)  
        // }
    }, [])
    return (
        <Layout>
            <div style={{ width: '100%', textAlign: 'center' }}>
                {/* <div className='row'>
                    <div className=' jcc'>
                        <textarea className='textarea'>
                        </textarea>
                        <button className='content3Btn'></button>
                    </div>
                </div> */}
                <h1 style={{ fontSize: '100px', color: 'green' }}>registers!</h1>
            </div>
        </Layout>
    );
}

export default Registers;
