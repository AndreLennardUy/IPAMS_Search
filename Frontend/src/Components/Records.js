import React from 'react';
import filterIcon from '../Util/filter.png';
import Results from './Results';
import Header from './Header';
import Search from './Search';

const Records = () => {
    return (
        <>
            <Header/>
            <div class="container">
                <div className='row align-items-center'>
                    <div className='col'>
                        <br/>
                        <button className="btn btn-success btn-sm">
                            <img src={filterIcon} alt='Filter Icon'></img>
                            FILTER
                        </button>
                        <p>Filters</p>
                        <p>showing entries</p>
                    </div> 
                    <div className='col-6'></div>
                    <div className='col'>
                        <Search/>
                    </div>
                </div>
                <div className='row align-items-center'>
                    <div className='col text-center'>
                        <Results/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Records;