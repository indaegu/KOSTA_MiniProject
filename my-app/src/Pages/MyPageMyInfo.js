import React, { useState, useEffect } from 'react';
import '../App.css';
import '../MyPage.css';
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import SideMenu from "../Component/SideMenu";
//import Chatbot from "../Component/ChatBot";

function MyPageMyInfo() {
    const [users, setUsers] = useState([]); 

    useEffect(() => {
        fetch("http://localhost:3001/users")
        .then(res => {
            return res.json();
          })
          .then(data => {
            if (Array.isArray(data)) { // data가 배열인지 확인
                setUsers(data);
            } else {
                console.error('Received data is not an array');
            }
          })
          .catch(error => console.error('Error:', error));
      }, []);

    const Card = ({ /*ranking,*/ score, nickname, rank }) => {
        return (
            <div className="my-page-card" title={`
랭크 안내(기본 100점) 
1 점수 150점이상 
2 점수 200점이상 
3 점수 300점이상
            `}>
                <div className="my-page-card-content">
                    <span className="my-page-card-nickname">{nickname}</span>
                    {/* <span className="my-page-card-ranking">{ranking}</span> */}
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
                {users[0] && ( // users의 첫 번째 요소가 존재하는지 확인
                <div key={users[0].id} className="my-page-info">
                    <h3 id="h-tag">내 정보</h3>
                    {/* 닉네임, 이메일 조회 */}
                    <div>
                        <p id="p-tag" className="label">닉네임</p>
                        <input id="input-tag" type="text" value={users[0].nickname} readOnly />
                    </div>
                    <div>
                        <p id="p-tag" className="label">이메일</p>
                        <input id="input-tag" type="email" value={users[0].email} readOnly />
                    </div>
                    <br />
                    {/* 카드형 UI로 순위와 점수와 닉네임 조회 */}
                    <Card nickname={users[0].nickname + "님의 "} /*ranking={"순위는 "+ranking+"위이며 "}*/ rank={"랭크는 " + users[0].rank + "입니다."} score={"점수: " + users[0].score + "점"} />
                </div>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default MyPageMyInfo;