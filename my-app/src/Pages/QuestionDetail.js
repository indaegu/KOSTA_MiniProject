// QuestionDetail.js : 문제 상세페이지
import React from 'react';
import '../App.css';
import '../Modal.css';
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import QuestionDetailComponent from '../Component/QuestionDetailComponent';
import { useParams } from 'react-router-dom';  // useParams를 import 합니다.


const QuestionDetail = () => {
    const { id } = useParams();  // 문제 세트 ID를 가져옵니다.

    return (
        <div className="main-container">
            <Header />
            <div className="QuestionDetailComponent-content">
            <QuestionDetailComponent setId={id} />
            </div>
            <Footer />
        </div>
    );
}

export default QuestionDetail;