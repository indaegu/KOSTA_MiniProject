// QuestionListItem.js : 문제 리스트의 개별 문제를 다루기 위한 컴포넌트
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const QuestionListItem = ({ question }) => {
    return (
        <tr className="question-list-item">
            <td><Link to={`/QuestionDetail/${question.id}`}>{question.number}</Link></td>
            <td><Link to={`/QuestionDetail/${question.id}`}>{question.title}</Link></td>
            <td>{question.date}</td>
        </tr>
    );
}


export default QuestionListItem;
