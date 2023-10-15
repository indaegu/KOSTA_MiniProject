import React from 'react';
import { useNavigate } from 'react-router-dom'; // react-router-dom에서 useNavigate import
import '../App.css';
import '../MyPage.css';
import Header from "../Component/Header";
import Footer from "../Component/Footer";
//import Chatbot from "../Component/ChatBot";

const MyPageInfoEditComplete = () => {

    const navigate = useNavigate();  // useNavigate 훅 사용

    const handleButtonClick = () => {  // 버튼 클릭 시 이벤트 핸들러
        navigate('/MypageInfoEdit');  // MypageInfoEdit.js로 이동
    };

    return (
        <div className="main-container">
            <Header />
            <div className="content complete-content">
                정보 수정이 완료되었습니다.
                <button id="button-tag" onClick={handleButtonClick}>정보 수정으로</button>
            </div>
            <Footer />
        </div>
    );
}

export default MyPageInfoEditComplete;