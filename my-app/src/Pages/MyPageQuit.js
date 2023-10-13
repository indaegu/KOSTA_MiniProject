import React from 'react';
import '../App.css';
import '../MyPage.css';
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import SideMenu from "../Component/SideMenu";
//import Chatbot from "../Component/ChatBot";

const MyPageQuit = () => {
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
                        <button id="quit-button">탈퇴하기</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default MyPageQuit;