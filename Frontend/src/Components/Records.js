import React from 'react';
import filterIcon from '../Util/filter.png';
import Results from './Results';
import Header from './Header';
import Search from './Search';
import '../Style/Records.css'

const Records = (props) => {

    function handleShow(showNum){
        props.show(showNum)
    }

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
                        <p>showing {props.nowShow} entries</p>
                    </div> 
                    <div className='col-6'>
                        <div class="btn-group">
                            <p className='numRow'>Show number of rows: </p>
                            <select value={props.nowShow} onChange={(e) => handleShow(e.target.value)}>
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                                <option value="20">20</option>
                            </select>
                        </div>
                        <div class="d-flex align-items-center p-2">
                            <p>Total Row: {props.ctr}</p>
                        </div>
                    </div>
                    <div className='col'>
                        <Search/>
                    </div>
                </div>
                <div className='row align-items-center'>
                    <div className='col text-center'>
                        <Results data = {props.data} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Records;