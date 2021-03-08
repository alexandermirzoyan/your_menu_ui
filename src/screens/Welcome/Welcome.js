import React from 'react';
import burgerImage from '../../assets/images/burger.svg';
import QRCodeImage from '../../assets/images/qr_code_prototype.svg';
import './_style.scss';

const Welcome = () => (
  <div className='welcome-screen-wrapper'>
    <div className='container-fluid'>
      <div className='row justify-content-center'>
        <div className='welcome-image-wrapper' >
          <img src={burgerImage} alt='burger' />
        </div>
      </div>
      <div className='row justify-content-center'>
        <h1 className='text-white title-text'>your menu</h1>
      </div>
      <div className='row justify-content-center'>
        <div className='qr-code-scan-info'>
          <div className='info-text-wrapper'>
            <p className='text-center text-white'>Սկանավորիր QR կոդը մենյու մուտք գործելու համար </p>
          </div>
          <div className='d-flex justify-content-center qr-code-image-wrapper'>
            <img src={QRCodeImage} alt='qr-code' />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Welcome;
