import React from 'react';
import "./Pagination.css";

const Pagination = ({itemsPerPage, totalItems, paginate}) => {

    const pageNumbers= [ ];

    for(let i =1; i<=Math.ceil(totalItems / itemsPerPage); i++){
        pageNumbers.push(i);
    }

  return (
    <div className="pagination">
        {pageNumbers.map(number => (
        <h2 key={number}>
            <a onClick = {() => paginate(number)} href="!#">
                {number}
            </a>
        </h2>
        ))}
    </div>
  )
}

export default Pagination