import React from "react";
import Modal from 'react-modal';

const FilterModal = (props) => {  
  return (
    <div>
      <button onClick={props.closeModal}>X</button>
      <h2>Filter</h2>

      <input type="checkbox" id="filter1" name="COMMERCIALIZATION" value="COMMERCIALIZATION" />
      <label htmlFor="filter1">COMMERCIALIZATION</label><br/>

      <input type="checkbox" id="filter2" name="PSCED" value="PSCED" />
      <label htmlFor="filter2">PSCED</label><br/>

      <button type="button" onClick={props.closeModal}>Filter</button>
    </div>
  );
};

export default FilterModal;
