import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import QuestionListItem from './QuestionListItem';
import Pagination from './PageNation';

import '../App.css';

const QuestionListItemSet = () => {
    const [questions, setQuestions] = useState([]);
    const [categories, setCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const questionsPerPage = 5;
    const { category } = useParams();

    useEffect(() => {
        // 먼저 카테고리 리스트를 가져옵니다.
        const xhrCategories = new XMLHttpRequest();
        xhrCategories.open('GET', 'http://localhost:3001/categories', true);
        xhrCategories.onload = function () {
            if (this.status === 200) {
                setCategories(JSON.parse(this.responseText));
            } else {
                console.error("Failed to fetch categories.");
            }
        };
        xhrCategories.send();
    }, []);

    useEffect(() => {
        // 카테고리 이름을 ID로 변환합니다.
        const categoryId = categories.find(cat => cat.name === category)?.id;
        if (!categoryId) return;  // 카테고리 ID를 찾지 못하면 API 호출을 중단합니다.

        const xhr = new XMLHttpRequest();
        xhr.open('GET', `http://localhost:3001/problem_sets?category_id=${categoryId}`, true);
        xhr.onload = function () {
            if (this.status === 200) {
                setQuestions(JSON.parse(this.responseText));
            } else {
                console.error("Failed to fetch questions.");
            }
        };
        xhr.send();
    }, [category, categories]);  // category 값 또는 categories 값이 변경될 때마다 useEffect를 다시 실행합니다.

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
