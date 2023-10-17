// Pagination.js

import React from 'react';
import '../App.css';

const Pagination = ({ totalQuestions, questionsPerPage, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalQuestions / questionsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="pagination-nav">
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Pagination;
