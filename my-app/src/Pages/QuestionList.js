import React from 'react';
import '../App.css';
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Slideshow from "../Component/slideshow";
import Chatbot from "../Component/ChatBot";

const QuestionList = () => {
    return (
        <div className="main-container">
            <Header />
            <Slideshow />
            <div className="content">
            문제리스트 담을 곳
            </div>
            <Chatbot />
            <Footer />
        </div>
    );
}

export default QuestionList;
