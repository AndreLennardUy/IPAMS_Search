import React from 'react';
import '../Style/Search.css';
const Search = () => {
    return (
        <div class="container text-center">
            <div class="input-group input-group-lg ">
                <input type="text" class="form-control rounded-input" id='search' placeholder="How can IPAMS help you?" aria-label="Recipient's username" aria-describedby="button-addon2"/>   
            </div>
            <br/>
            <div class="input-group input-group-sm">
                <input type="number" class="form-control rounded-input" id='show-result' placeholder="How many results to show?" aria-label="Recipient's username" aria-describedby="button-addon2"/>
            </div>
        </div>
    );
};

export default Search;