import babyRabbit from '../assets/svg/babyRabbit.svg';
import logo from '../assets/logo.png';
import earth from '../assets/svg/earth.svg';
import setting from '../assets/svg/setting.svg';
import axios from 'axios';

import React, { useEffect, useState } from 'react';
function Header(props) {
    const [isBoos, setIsBoos] = useState(false);
    useEffect(async () => {
        // // IP test
        try {
            const res = await axios.post('http://127.0.0.1:5000/ip_test', { data: 'eerer' });
            console.log(res)
            if (res.data == '192.168.115.160') {
                setIsBoos(true);
                localStorage.setItem('isb', true);
            }
        } catch (error) {
            console.log(error)
        }
    }, [])
    return (
        <div style={{ width: '100%', borderBottom: '2px solid black', backgroundColor: 'white', zIndex: '999' }}>
            <div style={{ padding: "18px" }}>
                <div className='row'>
                    <div className='col-md-2'><img width='50px' src={logo} /></div>
                    <div className='col-md-3'>
                    </div>
                    <div className='col-md-7' style={{ display: 'flex', justifyContent: 'right' }}>
                        {/* <img src={earth}></img>&nbsp;&nbsp;&nbsp;&nbsp; */}
                        {/* <img src={setting}></img>&nbsp;&nbsp;&nbsp; */}
                        <div style={{ display: `${!isBoos ? 'none ' : ''}` }}>
                            <a className='mr3 ha' href='/bossadd'>Business distribute</a>
                            <a className='mr3 ha' href='/bossaccess'>Access-Manage</a>
                            <a className='mr3 ha' href='/bosslazyboys'>Lazyboys</a>
                            <a className='mr3 ha' href='/mvoting'>Voting result</a>
                        </div>
                        <div style={{ display: `${isBoos ? 'none' : ''}` }}>
                            <a className='mr3 ha' href='/mregistry'>Registry</a>
                            <a className='mr3 ha' href='/mproposal'>Proposal</a>
                            <a className='mr3 ha' href='/mvoting'>Voting</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
