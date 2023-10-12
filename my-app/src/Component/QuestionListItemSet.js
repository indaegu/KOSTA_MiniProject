// QuestionList.js : 문제의 리스트 즉, 묶음을 다루기 위한 컴포넌트

import React, { useState } from 'react';
import QuestionListItem from './QuestionListItem';
import Pagination from './PageNation';

import '../App.css';

const QuestionListItemSet = () => {
    const [questions, setQuestions] = useState([
        { id: 1, number: 'Q1', title: '정보처리기사 23년 3회차 실기 단답형', date: '2023-10-10' },
        { id: 2, number: 'Q2', title: '정보처리기사 23년 2회차 실기 단답형', date: '2023-10-10' },
        { id: 3, number: 'Q3', title: '정보처리기사 23년 1회차 실기 단답형', date: '2023-10-10' },
        { id: 4, number: 'Q4', title: '정보처리기사 22년 3회차 실기 단답형', date: '2023-10-10' },
        { id: 5, number: 'Q5', title: '정보처리기사 22년 2회차 실기 단답형', date: '2023-10-10' },
        { id: 6, number: 'Q6', title: '정보처리기사 22년 1회차 실기 단답형', date: '2023-10-10' },
        { id: 7, number: 'Q7', title: '정보처리기사 21년 3회차 실기 단답형', date: '2023-10-10' },
        { id: 8, number: 'Q8', title: '정보처리기사 21년 2회차 실기 단답형', date: '2023-10-10' },
        { id: 9, number: 'Q9', title: '정보처리기사 21년 1회차 실기 단답형', date: '2023-10-10' },
        { id: 10, number: 'Q10', title: '정보처리기사 20년 3회차 실기 단답형', date: '2023-10-10' },
        { id: 11, number: 'Q11', title: '정보처리기사 20년 2회차 실기 단답형', date: '2023-10-10' },
        { id: 12, number: 'Q12', title: '정보처리기사 20년 1회차 실기 단답형', date: '2023-10-10' },
        { id: 13, number: 'Q13', title: '정보처리기사 19년 3회차 실기 단답형', date: '2023-10-10' },
        { id: 14, number: 'Q14', title: '정보처리기사 19년 2회차 실기 단답형', date: '2023-10-10' },
        { id: 15, number: 'Q15', title: '정보처리기사 19년 1회차 실기 단답형', date: '2023-10-10' }
    ]
    );

    const [currentPage, setCurrentPage] = useState(1);
    const questionsPerPage = 10;

    const indexOfLastQuestion = currentPage * questionsPerPage;
    const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
    const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="question-list-container">
            <table className="question-list-table">
                <thead>
                    <tr>
                        <th>문제번호</th>
                        <th>문제제목</th>
                        <th>게시일</th>
                    </tr>
                </thead>
                <tbody>
                    {currentQuestions.map(question => (
                        <QuestionListItem key={question.id} question={question} />
                    ))}
                </tbody>
            </table>
            <Pagination totalQuestions={questions.length} questionsPerPage={questionsPerPage} paginate={paginate} />
        </div>
    );
}

export default QuestionListItemSet;
