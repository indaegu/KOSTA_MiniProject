// QuestionDetail.js
import React from 'react';
import '../App.css';
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import QuestionDetailComponent from '../Component/QuestionDetailComponent';

const QuestionDetail = () => {
    return (
        <div className="main-container">
            <Header />
            <div className="content">
            <QuestionDetailComponent/>
            </div>
            <Footer />
        </div>
    );
}

export default QuestionDetail;