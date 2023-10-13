// QuestionList.js : 페이지
import React from 'react';
import '../App.css';
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Slideshow from "../Component/slideshow";
import Chatbot from "../Component/ChatBot";
import QuestionListItemSet from '../Component/QuestionListItemSet';

const QuestionList = () => {
    return (
        <div className="main-container">
            <Header />
            {/* <Slideshow /> */}
            <div className="content">
                <QuestionListItemSet />
            </div>
            <Chatbot />
            <Footer />
        </div>
    );
}

export default QuestionList;