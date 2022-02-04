
import babyRabbit from '../assets/svg/babyRabbit-footer.svg';
import i1 from '../assets/svg/footer/1.svg';
import i2 from '../assets/svg/footer/2.svg';
import i3 from '../assets/svg/footer/3.svg';
import i4 from '../assets/svg/footer/4.svg';
import i5 from '../assets/svg/footer/5.svg';
import i6 from '../assets/svg/footer/6.svg';
import logo from '../assets/logo.png';

import pancake from '../assets/svg/pancake.svg';
import earth from '../assets/svg/earth.svg';

function Footer() {
    return (
        <div style={{ "background": "#0c162c", padding: "60px 200px 50px 200px", }}>
            <div>
                <div className='row'>
                    <div className='col-md-3' style={{ gridAutoRows: '30px', }}>
                        <h6 style={{ color: 'rgb(154, 106, 255)' }}>TUNGKOL DITO</h6>
                        <h6 className='white'>How are you</h6>
                        <h6 className='white'>Hello!</h6>
                        <h6 className='white'>Who are you</h6>
                        <h6 className='white'>thank you</h6>
                        <h6 className='white'>What do you mean?</h6>
                        <h6 className='white'>I will help you</h6>
                        <h6 style={{ color: 'yellow' }}>I am Developer React</h6>
                        <br /><div className='row'>
                            <div className='col-md-2'><img style={{ fill: 'rgb(184, 173, 210)' }} src={i1}></img></div>
                            <div className='col-md-2'><img style={{ fill: 'rgb(184, 173, 210)' }} src={i2}></img></div>
                            <div className='col-md-2'><img style={{ fill: 'rgb(184, 173, 210)' }} src={i3}></img></div>
                            <div className='col-md-2'><img style={{ fill: 'rgb(184, 173, 210)' }} src={i4}></img></div>
                            <div className='col-md-2'><img style={{ fill: 'rgb(184, 173, 210)' }} src={i5}></img></div>
                            <div className='col-md-2'><img style={{ fill: 'rgb(184, 173, 210)' }} src={i6}></img></div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <h6 style={{ color: 'rgb(154, 106, 255)' }}>TULONG</h6>
                        <h6 className='white'>Blockchain</h6>
                        <h6 className='white'>MERN stack</h6>
                        <h6 className='white'>Vue vs React</h6>

                    </div>
                    <div className='col-md-3'>
                        <h6 style={{ color: 'rgb(154, 106, 255)' }}>MGA DEVELOPER</h6>
                        <h6 className='white'>Okay</h6>
                        <h6 className='white'>Blockchain-ethereum</h6>
                        <h6 className='white'>Bitcoin</h6>
                        <h6 className='white'>ethereum hardhat RemixIDE</h6>
                        <h6 className='white'>Good luck!</h6>

                    </div>
                    <div className='col-md-3'>
                        <img style={{ color: 'white', width: '100px' }} src={logo}></img>
                    </div>
                </div>
            </div>
            <br /><br /><hr style={{ color: 'rgb(184, 173, 210)' }} />
            <div className='row'>
                <div className='col-md-12'>
                    <div style={{ float: 'left' }}>
                        <div>
                            <img src={earth}></img>
                            <font style={{ color: 'rgb(184, 173, 210' }}>EN</font>
                        </div>
                    </div>
                    <div style={{ float: 'right' }}>
                        <img src={pancake}></img>
                        <font color='white'>PASSION</font>
                        <button style={{ marginLeft: '10px' }} className='footerBtn'> Happy New Year </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
