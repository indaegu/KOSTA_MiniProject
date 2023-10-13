import React from 'react';
import '../App.css';
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Slideshow from "../Component/slideshow";
import { RankingSummary, WrongQuestions } from "../Component/Rankingsummary";
import IconMenu from "../Component/IconMenu";
import Chatbot from "../Component/ChatBot";

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
            {/* <Chatbot /> */}
            <Footer />
        </div>
    );
}

export default Main;
