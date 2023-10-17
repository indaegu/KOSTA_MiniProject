import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // react-router-dom에서 useNavigate import
import '../App.css';
import '../MyPage.css';
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import SideMenu from "../Component/SideMenu";
//import Chatbot from "../Component/ChatBot";

function MyPageInfoEdit() {
    const [showPopup, setShowPopup] = useState(false); // 팝업 창 표시 여부를 관리하는 상태값
    const [loggedInUser, setLoggedInUser] = useState(null); // 추가
    const loggedInUserId = localStorage.getItem('userId'); //추가
    const navigate = useNavigate(); // useNavigate 훅 사용
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');

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

    const handleNicknameChange = (e) => {
        setNickname(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handlePasswordConfirmChange = (e) => {
        setPasswordConfirm(e.target.value);
    };

    const handleEditClick = () => {
        setShowPopup(true);
    };

    const handleYesClick = async () => {  // 예 버튼 클릭 시 이벤트 핸들러
        setShowPopup(false);
    
        try {
            await fetch(`http://localhost:3001/users/${loggedInUserId}`, {
                method: 'PATCH', // or 'PUT'
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    nickname,
                    password
                })
            });
            
            //alert('수정되었습니다.');
            navigate('/MyPageInfoEditComplete');  // MyPageInfoEditComplete.js로 이동
        } catch (error) {
            console.error(error);
            alert('수정 실패');
        }
    };

    const handleNoClick = () => {  // 아니오 버튼 클릭 시 이벤트 핸들러
        setShowPopup(false);
    };

    return (
        <div className="main-container">
            <Header />
            <div className="content">
                <SideMenu />
                <div className="my-page-info">
                    <h3 id="h-tag">정보 수정</h3>
                    {/* 수정할 닉네임, 비밀번호 입력 */}
                    <div>
                        <p id="p-tag" className="label">닉네임</p>
                        <input id="input-tag" type="text" placeholder="닉네임을 입력하세요." name="nickname" value={nickname} onChange={handleNicknameChange} />
                    </div>
                    <div>
                        <p id="p-tag" className="label">비밀번호</p>
                        <input id="input-tag" type="password" placeholder="비밀번호를 입력하세요." name="password" value={password} onChange={handlePasswordChange} />
                    </div>
                    <div>
                        <p id="p-tag" className="label">비밀번호 확인</p>
                        <input id="input-tag" type="password" placeholder="비밀번호를 입력하세요." name="passwordConfirm" value={passwordConfirm} onChange={handlePasswordConfirmChange} />
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
                    <div className="popup-content">
                        정보를 수정하시겠습니까?
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

export default MyPageInfoEdit;