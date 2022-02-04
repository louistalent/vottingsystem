
import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import bg from '../assets/logo.png';

function Home() {
    useEffect(() => {
        // alert(props.dis);
    }, [])

    return (
        <Layout>
            <div style={{ marginTop: '20px', marginBottom: '20px', height: "500px", width: '100%', textAlign: 'center', background: `url(${bg}) no-repeat` }}>
                <div className='row'>
                    <div className='col-md-7'></div>
                    <div className='col-md-5'>
                        <h1 className='grt_blue' style={{ fontSize: '100px', color: 'green' }}>Welcome to our site!</h1>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Home;
