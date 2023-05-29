import React from 'react';
import filterIcon from '../Util/filter.png';
import Results from './Results';
import Header from './Header';
import Search from './Search';

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
                        <p>showing {props.data.length} entries</p>
                    </div> 
                    <div className='col-6'>
                        <div class="btn-group">
                            <p className='numRow' style={{margin: 0}}>Show number of rows: </p>
                            <select value={props.nowShow} onChange={(e) => handleShow(e.target.value)}>
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                                <option value="20">20</option>
                            </select>
                        </div>
                        <p>Total Row: {props.ctr}</p>
                    </div>
                    <div className='col'>
                        <Search onClick = {props.search} rows = {props.total}/>
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