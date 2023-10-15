import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom'; // react-router-dom에서 useNavigate import
import '../App.css';
import '../MyPage.css';
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import SideMenu from "../Component/SideMenu";
//import Chatbot from "../Component/ChatBot";

const MyPageQuit = () => {
    const [showPopup, setShowPopup] = useState(false); // 팝업 창 표시 여부를 관리하는 상태값

    const navigate = useNavigate(); // useNavigate 훅 사용

    const handleQuitClick = () => {
        setShowPopup(true);  // 탈퇴하기 버튼이 클릭되면 팝업 창을 표시합니다.
    };

    const handleYesClick = () => {  // 예 버튼 클릭 시 이벤트 핸들러
        setShowPopup(false);
        navigate('/MyPageQuitComplete');  // MyPageQuitComplete.js로 이동
    };

    const handleNoClick = () => {  // 아니오 버튼 클릭 시 이벤트 핸들러
        setShowPopup(false);
        navigate('/main');  // main.js로 이동
    };

    return (
        <div className="main-container">
            <Header />
            <div className="content">
                <SideMenu />
                <div className="quit-page-content">
                    <h3 id="h-tag">회원 탈퇴</h3>
                    {/* 설명창 */}
                    <textarea id="textarea-tag" readOnly value="※주의사항
                        탈퇴가 완료되면 개인정보가 즉시 파기되며, 복구가 불가능합니다.
                        회원 탈퇴 시 신중히 진행하시기 바랍니다.
                        코글을 사용하신 경험이 도움이 되었길 바랍니다.
                        감사합니다.
                    "/>
                    {/* 탈퇴 버튼 */}
                    <div id="button-div">
                        <button id="quit-button" onClick={handleQuitClick}>탈퇴하기</button>
                    </div>
                </div>
            </div>
            {/* 조건부 렌더링으로 팝업 창을 표시합니다. */}
            {showPopup && (
                <div className="popup-container">
                    <div className="popup-content">
                        회원 탈퇴하시겠습니까?
                        <div className="popup-button-container">
                            <button className="popup-button" onClick={handleYesClick}>예</button>
                            <button className="popup-button" onClick={handleNoClick}>아니오</button>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
}

export default MyPageQuit;