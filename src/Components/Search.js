import React from 'react';

const Search = () => {
    return (
        <div class="container text-center">
            <div class="input-group mb-3">
                <input type="text" class="form-control" id='search' placeholder="How can IPAMS help you?" aria-label="Recipient's username" aria-describedby="button-addon2"/>
            </div>
            <div class="input-group mb-3">
                <input type="number" class="form-control" id='show-result' placeholder="How many results to show?" aria-label="Recipient's username" aria-describedby="button-addon2"/>
            </div>
        </div>
    );
};

export default Search;