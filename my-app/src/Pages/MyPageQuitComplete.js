import React from 'react';
import { useNavigate } from 'react-router-dom'; // react-router-dom에서 useNavigate import
import '../App.css';
import '../MyPage.css';
import Header from "../Component/HeaderQuit";
import Footer from "../Component/Footer";
//import Chatbot from "../Component/ChatBot";

const MyPageQuitComplete = () => {

    const navigate = useNavigate();  // useNavigate 훅 사용

    const handleButtonClick = () => {  // 버튼 클릭 시 이벤트 핸들러
        navigate('/');  // index.js로 이동
    };

    return (
        <div className="main-container">
            <Header />
            <div className="content quit-complete-content">
                회원 탈퇴가 완료되었습니다.
                <span className="quit-span-tag">보다 나은 코글로 다시 만나뵐 수 있기를 바랍니다.</span>
                <button id="quit-button" onClick={handleButtonClick}>로그인으로</button>
            </div>
            <Footer />
        </div>
    );
}

export default MyPageQuitComplete;