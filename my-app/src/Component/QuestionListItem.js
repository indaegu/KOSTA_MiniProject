import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const QuestionListItem = ({ question }) => {
    return (
        <tr className="question-list-item">
            <td><Link to={`/QuestionDetail/${question.id}`}>{question.id}</Link></td>
            <td><Link to={`/QuestionDetail/${question.id}`}>{question.title}</Link></td>
            <td>{question.created_at}</td>
        </tr>
    );
}

export default QuestionListItem;
