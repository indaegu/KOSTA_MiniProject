import React from 'react';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Slideshow from "./slideshow";
import { RankingSummary, WrongQuestions } from "./Rankingsummary";
import IconMenu from "./IconMenu";
import Chatbot from "./ChatBot";

const dummyData = {
    slidingBanner: 'banner1.png',
    logo: 'logo.png',
    rankingSummary: [
        { name: 'User1', score: 100 },
        { name: 'User2', score: 95 },
        // ... 나머지 사용자 정보
    ],
    frequentlyWrongQuestions: [
        { questionTitle: 'Sample Question 1' },
        // ... 나머지 문제 정보
    ]
};

const Main = () => {
    return (
        <div className="main-container">
            <Header />
                <Slideshow />
            <div className="content">
                <RankingSummary />
                <WrongQuestions />
            </div>
            <IconMenu />
            <Chatbot />
            <Footer />
        </div>
    );
}

export default Main;
