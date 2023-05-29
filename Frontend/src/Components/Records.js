import React , {useState} from 'react';
import filterIcon from '../Util/filter.png';
import Modal from 'react-modal';
import Results from './Results';
import Header from './Header';
import Search from './Search';
import FilterModal from './FilterModal';

const Records = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };
    return (
        <>
            <Header/>
            <div class="container">
                <div className='row align-items-center'>
                    <div className='col'>
                        <br/>
                        <button className="btn btn-success btn-sm" onClick={openModal}>
                            <img src={filterIcon} alt='Filter Icon'></img>
                            FILTER
                        </button>
                        <p>Filters</p>
                        <p>showing {props.data.length} entries</p>
                        <Modal 
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            contentLabel="Filter"
                            style={{
                                content: {
                                  width: "400px", // Set the width of the modal
                                  height: "300px", // Set the height of the modal
                                  margin: "auto", // Center vertically and horizontally
                                  textAlign: "center", // Center text horizontally
                                  paddingTop: "20px", // Add padding to the top
                                  backgroundColor: "gold"
                                },
                              }}
                        > 
                            <FilterModal closeModal = {closeModal}/>
                        </Modal>
                    </div> 
                    <div className='col-6'>
                        <div class="btn-group">
                            <p className='numRow' style={{margin: 0}}>Show number of rows: </p>
                            <select value={props.nowShow} onChange={(e) => props.show(e.target.value)}>
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