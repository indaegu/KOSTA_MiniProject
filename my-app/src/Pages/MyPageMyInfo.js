import React from 'react';
import '../App.css';
import '../MyPage.css';
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import SideMenu from "../Component/SideMenu";
//import Chatbot from "../Component/ChatBot";

const MyPageMyInfo = () => {
    const dummyData = [
        {
          id: 1,
          nickname: "뤼튼",
          address: "서울시 강남구",
          email: "example@example.com",
          ranking: 48,
          rank: 3,
          score: 100,
        },
    ];

    const Card = ({ ranking, rank, score, nickname }) => {
        return (
          <div className="card" title={`
랭크 안내(기본 100점)
1 점수 150점이상 
2 점수 200점이상 
3 점수 300점이상
            `}>
            <div className="card-content">
              <span className="card-nickname">{nickname}</span>
              <span className="card-ranking">{ranking}</span>
              <span className="card-rank">{rank}</span>
              <span className="card-score">{score}</span>
            </div>
          </div>
        );
    };

    return (
        <div className="main-container">
            <Header />            
            <div className="content">
                <SideMenu />
                {dummyData.map((user) => (
                    <div key={user.id} className="user-info">
                        {/* 닉네임, 주소, 이메일 조회 */}
                        <div>
                            <p className="label">닉네임</p>
                            <input type="text" value={user.nickname} readOnly />
                        </div>
                        <div>
                            <p className="label">주소</p>
                            <input type="text" value={user.address} readOnly />
                        </div>
                        <div>
                            <p className="label">이메일</p>
                            <input type="email" value={user.email} readOnly />
                        </div>
                        <br/>
                        {/* 카드형 UI로 순위와 점수와 닉네임 조회 */}
                        <Card nickname={user.nickname+"님의"} ranking={"순위는 "+user.ranking+"위이며 "} rank={"랭크는 "+user.rank+"입니다."} score={"점수:"+user.score+"점"} />
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default MyPageMyInfo;