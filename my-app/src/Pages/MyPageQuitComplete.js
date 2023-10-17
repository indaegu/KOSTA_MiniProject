import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../App.css';
import '../MyPage.css';
import Header from "../Component/HeaderQuit";
import Footer from "../Component/Footer";

const MyPageQuitComplete = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // 페이지에 처음 들어왔을 때 history 스택에 같은 페이지를 추가
        window.history.pushState(null, document.title, window.location.href);
        
        // popstate 이벤트 리스너 추가
        window.addEventListener('popstate', handlePopState);

        return () => {
            // 컴포넌트 unmount 시 이벤트 리스너 제거
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);

    const handlePopState = (event) => {
        // 뒤로 가기 시도 시 다시 같은 페이지를 history 스택에 추가
        window.history.pushState(null, document.title, window.location.href);
    };

    const handleButtonClick = () => {  
        navigate('/');  // index.js로 이동
    };

    return (
        <div className="main-container">
            <Header />
            <div className="content complete-content">
                회원 탈퇴가 완료되었습니다.
                <span className="complete-span-tag">보다 나은 코글로 다시 만나뵐 수 있기를 바랍니다.</span>
                <button id="quit-button" className="complete-btn" onClick={handleButtonClick}>로그인으로</button>
            </div>
            <Footer />
        </div>
    );
}

export default MyPageQuitComplete;