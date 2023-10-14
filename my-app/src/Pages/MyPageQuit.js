import React, { useState, useEffect } from 'react';
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

    const handleBeforeUnload = (e) => {
        e.preventDefault();
        e.returnValue = '';
    };

    useEffect(() => {
        if (showPopup) {
            window.addEventListener('beforeunload', handleBeforeUnload);
        } else {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        }

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [showPopup]);

    const handleQuitClick = () => {
        // 탈퇴하기 버튼이 클릭되면 팝업 창을 표시합니다.
        setShowPopup(true);
    };

    const handleDeleteClick = () => {
        setShowPopup(false);
        navigate('/'); // index.js로 이동
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
                   {/* .popup-content 클래스를 적용하여 스타일링 합니다. */}
                   <div className="popup-content"> 
                        회원 탈퇴가 완료되었습니다.
                        {/* 확인 버튼에 onClick 이벤트 핸들러 추가 */}
                        <button className="popup-button" onClick={handleDeleteClick}>확인</button>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
}

export default MyPageQuit;