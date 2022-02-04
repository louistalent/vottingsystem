import bigRabbit from '../assets/img/bunny.png';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
function Signup() {
    const [log, logSet] = useState('');
    const [reg, regSet] = useState('');
    const [pass, passSet] = useState('');
    const [passCon, passConSet] = useState('');
    const [logPass, logPassSet] = useState('');

    const [name, nameSet] = useState('Sign up');
    const [display1, displaySet1] = useState('');
    const [display2, displaySet2] = useState('none');
    const [flag, flagSet] = useState('1');
    useEffect(() => {
        // alert(props.dis);
    }, [])
    const signup = () => {
        if (flag == '1') {
            nameSet('sign in');
            displaySet1('none');
            displaySet2('');
            flagSet('0');
        }
        else {
            nameSet('sign up');
            displaySet1('');
            displaySet2('none');
            flagSet('1');
        }
    }

    const login = () => {
        const data = { log: log, logPass: logPass };
        alert(data);
        console.log(data);
        axios.post('http://127.0.0.1:5000/login', data).then((res) => {
            alert(res)
            if (res == 'loginSucess') {
                alert('Welcome login');
            }
        })
    }
    const register = () => {
        const data = { reg, pass, passCon };
        axios.post('http://127.0.0.1:5000/register', data).then((res) => {
            alert(res);
        })
    }

    return (
        <div className='gradient' style={{ width: "100%", borderRadius: '50%' }}>
            <div style={{ marginLeft: '30%', marginTop: '100px', textAlign: 'center' }}>
                <div className='signup' style={{ marginTop: '50px' }} >
                    <div style={{ float: 'right' }}>
                        <button onClick={() => signup()} style={{ color: 'white' }} className='btn btn-danger'>{name}</button>
                    </div>
                    <img style={{ width: '300px' }} src={bigRabbit}></img><br /><br /><br /><br />
                    <div className='row' style={{ display: `${display1}` }}>
                        <div className='col-md-3'></div>
                        <div className='col-md-5'>
                            <input onChange={(e) => { logSet(e.target.value) }} type='email' style={{ padding: '2px 10px 2px 10px', fontSize: '20px', color: 'black' }}></input>
                        </div>
                        <div className='col-md-4' style={{ textAlign: 'left' }}></div>
                    </div>
                    <div className='row' style={{ display: `${display1}` }}>
                        <div className='col-md-3'></div>
                        <div className='col-md-5'>
                            <input onChange={(e) => { logPassSet(e.target.value) }} type='password' style={{ padding: '2px 10px 2px 10px', fontSize: '20px', color: 'black' }}></input>
                        </div>
                        <div className='col-md-4' style={{ textAlign: 'left' }}>
                            <button onClick={() => login()} className='btn btn-primary'>Sign in</button>
                        </div>
                    </div>
                    <div style={{ display: `${display2}` }}>
                        <div className='row'>
                            <div className='col-md-3'></div>
                            <div className='col-md-5'>
                                <input onChange={(e) => { regSet(e.target.value) }} type='email' style={{ padding: '2px 10px 2px 10px', fontSize: '20px', color: 'black' }}></input>
                            </div>
                            <div className='col-md-4' style={{ textAlign: 'left' }}>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3'></div>
                            <div className='col-md-5'>
                                <input onChange={(e) => { passSet(e.target.value) }} type='password' style={{ padding: '2px 10px 2px 10px', fontSize: '20px', color: 'black' }}></input>
                            </div>
                            <div className='col-md-4' style={{ textAlign: 'left' }}>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3'></div>
                            <div className='col-md-5'>
                                <input onChange={(e) => { passConSet(e.target.value) }} type='password' style={{ padding: '2px 10px 2px 10px', fontSize: '20px', color: 'black' }}></input>
                            </div>
                            <div className='col-md-4' style={{ textAlign: 'left' }}>
                                <button onClick={() => register()} className='btn btn-primary'>Sign up</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        </div>
    );
}

export default Signup;
