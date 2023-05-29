import React from 'react';
import '../Style/Search.css';
import { useState } from 'react';


const Search = (props) => {
    const [searched , setSearched] = useState("");
    const [result , setResult] = useState(props.rows);
    
    const handleOnClick = () => {
        if(searched === ""){
            alert("Please input a search query.");
        } else{
            props.onClick(searched, result);
        }
    }
    return (
        <div class="container text-center">
            <br/>
            <div class="input-group input-group-lg ">
                <input 
                    type="text" 
                    class="form-control rounded-input" 
                    id='search' 
                    placeholder="How can IPAMS help you?" 
                    aria-label="Recipient's username" 
                    aria-describedby="button-addon2"
                    onChange={(e) => {setSearched(e.target.value)}}
                />   
            </div>
            <br/>
            <div class="input-group input-group-sm">
                <input 
                    type="number" 
                    class="form-control rounded-input" 
                    id='show-result'
                    placeholder="How many results to show?" 
                    aria-label="Recipient's username" 
                    aria-describedby="button-addon2"
                    onChange={(e) => {setResult(e.target.value)}}
                />
            </div>
            <br/>
            <button type="button" class="btn btn-primary btn-lg" id='search-btn' onClick={handleOnClick}>Search</button>
        </div>
    );
};

export default Search;