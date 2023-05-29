import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Generate an array of page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <nav>
        <ul className="pagination">
          {/* Render previous button */}
          {currentPage > 1 && (
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => onPageChange(currentPage - 1)}
              >
                Previous
              </button>
            </li>
          )}

          {/* Render page numbers */}
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={`page-item ${number === currentPage ? 'active' : ''}`}
            >
              <button
                className="page-link"
                onClick={() => onPageChange(number)}
              >
                {number}
              </button>
            </li>
          ))}

          {/* Render next button */}
          {currentPage < totalPages && (
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => onPageChange(currentPage + 1)}
              >
                Next
              </button>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
