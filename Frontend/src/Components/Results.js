import React from 'react';

const Results = (props) => {
    return (
        <div>
            <table class="table">
                <thead>
                <tr>
                    <th scope='col'>ID</th> 
                    <th scope="col">RESEARCH TITLE</th>
                    <th scope="col">ABSTRACT</th>
                    <th scope="col">PSCED</th>
                    <th scope="col">COMMERCIALIZATION</th>
                    <th scope="col">DATE UPLOADED</th>
                </tr>
                </thead>
                <tbody>
                    {props.data.map((item) => (
                        <tr>
                            <th scope='row'>{item.id}</th>
                            <td>{item.title}</td>
                            <td>{item.abstract}</td>
                            <td>{item.psed_classification_id}</td>
                            <td>{item.for_commercialization}</td>
                            <td>{item.date_uploaded}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Results;