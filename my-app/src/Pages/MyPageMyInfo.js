import React, { useState, useEffect } from 'react';
import '../App.css';
import '../MyPage.css';
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import SideMenu from "../Component/SideMenu";
//import Chatbot from "../Component/ChatBot";

function MyPageMyInfo() {
    const [users, setUsers] = useState([]);
    const [loggedInUser, setLoggedInUser] = useState(null); // 추가
    const loggedInUserId = localStorage.getItem('userId'); //추가
    
    useEffect(() => {
        fetch("http://localhost:3001/users")
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setUsers(data);
                    const user = data.find(user => user.id === parseInt(loggedInUserId)); // 해당 id를 가진 유저 찾기
                    setLoggedInUser(user); // 찾은 유저를 loggedInUser 상태에 저장
                } else {
                    console.error('Received data is not an array');
                }
            })
            .catch(error => console.error('Error:', error));
    }, [loggedInUserId]); // useEffect의 종속성 배열에 loggedInUserId 추가

    const Card = ({ ranking, score, nickname, rank }) => {
        return (
            <div className="my-page-card" title={`
랭크 안내(기본 100점) 
1 점수 150점이상 
2 점수 200점이상 
3 점수 300점이상
            `}>
                <div className="my-page-card-content">
                    <span className="my-page-card-nickname">{nickname}</span>
                    <span className="my-page-card-ranking">{ranking}</span>
                    <span className="my-page-card-rank">{rank}</span>
                    <span className="my-page-card-score">{score}</span>
                </div>
            </div>
        );
    };

    return (
        <div className="main-container">
            <Header />
            <div className="content">
                <SideMenu />
                {loggedInUser && (
                    <div key={loggedInUser.id} className="my-page-info">
                        <h3 id="h-tag">내 정보</h3>
                        <div>
                            <p id="p-tag" className="label">닉네임</p>
                            <input id="input-tag" type="text" value={loggedInUser.nickname} readOnly />
                        </div>
                        <div>
                            <p id="p-tag" className="label">이메일</p>
                            <input id="input-tag" type="email" value={loggedInUser.email} readOnly />
                        </div>
                        <br />
                        <Card nickname={loggedInUser.nickname + "님의 "} rank={"랭크는 " + loggedInUser.rank + "입니다."} score={"점수: " + loggedInUser.score + "점"} />
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default MyPageMyInfo;