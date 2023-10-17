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
    const [loggedInUser, setLoggedInUser] = useState(null); // 추가
    const loggedInUserId = localStorage.getItem('userId'); //추가
    const navigate = useNavigate(); // useNavigate 훅 사용

    useEffect(() => {
        fetch("http://localhost:3001/users")
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    const user = data.find(user => user.id === parseInt(loggedInUserId)); // 해당 id를 가진 유저 찾기
                    setLoggedInUser(user); // 찾은 유저를 loggedInUser 상태에 저장
                } else {
                    console.error('Received data is not an array');
                }
            })
            .catch(error => console.error('Error:', error));
    }, [loggedInUserId]); // useEffect의 종속성 배열에 loggedInUserId 추가

    const handleQuitClick = () => {
        setShowPopup(true);  // 탈퇴하기 버튼이 클릭되면 팝업 창을 표시합니다.
    };

    const handleYesClick = async () => {  // 예 버튼 클릭 시 이벤트 핸들러
        setShowPopup(false);
    
        try {
            await fetch(`http://localhost:3001/users/${loggedInUserId}`, {
                method: 'PATCH', // or 'PUT'
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    is_deleted: true
                })
            });
            
            //alert('탈퇴되었습니다.');
            navigate('/MyPageQuitComplete');  // MyPageQuitComplete.js로 이동
        } catch (error) {
            console.error(error);
            alert('탈퇴 실패');
        }
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