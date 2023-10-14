import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // react-router-dom에서 useNavigate import
import '../App.css';
import '../MyPage.css';
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import SideMenu from "../Component/SideMenu";
//import Chatbot from "../Component/ChatBot";

const MyPageInfoEdit = () => {
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

    const handleEditClick = () => {
        // 수정 버튼이 클릭되면 팝업 창을 표시합니다.
        setShowPopup(true);
    };
    
    const handleConfirmClick = () => {
        setShowPopup(false);
        navigate('/main'); // main.js(홈)으로 이동
    };

    return (
        <div className="main-container">
            <Header />
            <div className="content">
                <SideMenu />
                <div className="my-page-info">
                    <h3 id="h-tag">정보 수정</h3>
                    {/* 수정할 닉네임, 비밀번호, 주소 입력 */}
                    <div>
                        <p id="p-tag" className="label">닉네임</p>
                        <input id="input-tag" type="text" placeholder="닉네임을 입력하세요." />
                    </div>
                    <div>
                        <p id="p-tag" className="label">비밀번호</p>
                        <input id="input-tag" type="password" placeholder="비밀번호를 입력하세요." />
                    </div>
                    <div>
                        <p id="p-tag" className="label">비밀번호 확인</p>
                        <input id="input-tag" type="password" placeholder="비밀번호를 입력하세요." />
                    </div>
                    <div id="button-div">
                        {/* 수정 버튼에 onClick 이벤트 핸들러를 추가합니다. */}
                        <button id="button-tag" onClick={handleEditClick}>수정</button>
                    </div>
                </div>
            </div>
            {/* 조건부 렌더링으로 팝업 창을 표시합니다. */}
            {showPopup && (
                <div className="popup-container">
                   {/* .popup-content 클래스를 적용하여 스타일링 합니다. */}
                   <div className="popup-content"> 
                        회원 수정이 완료되었습니다.
                        {/* 확인 버튼에 onClick 이벤트 핸들러 추가 */}
                        <button className="popup-button" onClick={handleConfirmClick}>확인</button>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
}

export default MyPageInfoEdit;