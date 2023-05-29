import React from 'react';
import filerSvg from '../Util/filter_alt_FILL1_wght400_GRAD0_opsz48.svg';
import Search from './Search';
import Results from './Results';


const Records = () => {
    return (
        <div class="container text-center">
            <div className='row align-items-center'>
                <div className='col'>
                    <h1>Records</h1>
                    <button className="btn btn-success">
                        <img src={filerSvg}/>
                        Filter
                    </button>
                </div> 
                <div className='col-6'></div>
                <div className='col'>
                    <Search/>
                </div>
            </div>
            <br/>
            <div className='row align-items-center'>
                <div className='col'>
                    <Results/>
                </div>
            </div>
        </div>
    );
};

export default Records;