import React, { useState, useEffect } from 'react';
import '../App.css';
import '../MyPage.css';
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import SideMenu from "../Component/SideMenu";
//import Chatbot from "../Component/ChatBot";

function MyPageMyInfo() {
    const [users, setUsers] = useState([]);
    const [loggedInUserId, setLoggedInUserId] = useState(localStorage.getItem('userId'));
    useEffect(() => {
        // Fetch all users
        const xhrUsers = new XMLHttpRequest();
        xhrUsers.open('GET', `http://localhost:3001/users`, true);
        xhrUsers.onreadystatechange = () => {
            if (xhrUsers.readyState === 4 && xhrUsers.status === 200) {
                const allUsers = JSON.parse(xhrUsers.responseText);
                setUsers(allUsers);
            } else {
                console.error('Failed to fetch users:', xhrUsers.statusText);
            }
        };
        xhrUsers.send();
    }, []);
    
    useEffect(() => {
        fetch("http://localhost:3001/users")
            .then(res => {
                return res.json();
            })
            .then(data => {
                if (Array.isArray(data)) { // data가 배열인지 확인
                    // score 기준으로 내림차순 정렬
                    const sortedData = data.sort((a, b) => b.score - a.score);
                    // 각 유저에게 랭킹 정보와 rank 추가
                    const rankedData = sortedData.map((user, index) => {
                        let rank;
                        if (user.score >= 300) {
                            rank = 3;
                        } else if (user.score >= 200) {
                            rank = 2;
                        } else if (user.score >= 150) {
                            rank = 1;
                        } else {
                            rank = 0;
                        }

                        return { ...user, ranking: index + 1, rank };
                    });
                    setUsers(rankedData);
                } else {
                    console.error('Received data is not an array');
                }
            })
            .catch(error => console.error('Error:', error));
    }, []);

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
                {parseInt(loggedInUserId) && ( // users의 첫 번째 요소가 존재하는지 확인
                    <div key={parseInt(loggedInUserId)} className="my-page-info">
                        <h3 id="h-tag">내 정보</h3>
                        {/* 닉네임, 이메일 조회 */}
                        <div>
                            <p id="p-tag" className="label">닉네임</p>
                            <input id="input-tag" type="text" value={parseInt(loggedInUserId).nickname} readOnly />
                        </div>
                        <div>
                            <p id="p-tag" className="label">이메일</p>
                            <input id="input-tag" type="email" value={parseInt(loggedInUserId).email} readOnly />
                        </div>
                        <br />
                        {/* 카드형 UI로 순위와 점수와 닉네임 조회 */}
                        <Card nickname={parseInt(loggedInUserId).nickname + "님의 "} ranking={"순위는 " + parseInt(loggedInUserId).ranking + "위이며 "} rank={"랭크는 " + parseInt(loggedInUserId).rank + "입니다."} score={"점수: " + parseInt(loggedInUserId).score + "점"} />
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default MyPageMyInfo;