import React from 'react';
import citLogo from '../Util/CIT-Logo.png'

const Header = () => {
    return (
        <div className='row align-items-center' style={{backgroundColor: 'gold'}}>
            <div class="col">
                <div class="d-flex align-items-center p-2">
                    <img src={citLogo} height="100px"></img>
                    <h1 style={{ margin: 0}}>IPAMS</h1>
                </div>
            </div>
            <div className='col-6 text-center'>
                    <h1>Records</h1>
                </div>
                <div className='col'>
                </div>
        </div>
    );
};

export default Header;