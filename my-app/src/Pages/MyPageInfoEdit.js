import React from 'react';
import '../App.css';
import '../MyPage.css';
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import SideMenu from "../Component/SideMenu";
//import Chatbot from "../Component/ChatBot";

const MyPageInfoEdit = () => {
    return (
        <div className="main-container">
            <Header />            
            <div className="content">
                <SideMenu />
                    <div className="user-info">
                        {/* 수정할 닉네임, 비밀번호, 주소 입력 */}
                        <div>
                            <p className="label">닉네임</p>
                            <input type="text"/>
                        </div>
                        <div>
                            <p className="label">비밀번호</p>
                            <input type="password" />
                        </div>
                        <div>
                            <p className="label">비밀번호 확인</p>
                            <input type="password" />
                        </div>
                        <div>
                            <p className="label">주소</p>
                            <input type="text" />
                        </div>
                    </div>
                    <div>
                        <button>111</button>
                    </div>
            </div>
            <Footer />
        </div>
    );
}

export default MyPageInfoEdit;