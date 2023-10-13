
import React from 'react';
import '../App.css';
import '../MyPage.css';
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import SideMenu from "../Component/SideMenu";
//import Chatbot from "../Component/ChatBot";

const MyPageQuestion = () => {
    return (
        <div className="main-container">
            <Header />            
            <div className="content">
                <SideMenu />
            </div>
            <Footer />
        </div>
    );
}

export default MyPageQuestion;