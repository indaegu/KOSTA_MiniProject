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
          nickname: "창민",
          email: "example@example.com",
          ranking: 11,
          rank: 2,
          score: 213,
        },
    ];

    const Card = ({ ranking, rank, score, nickname }) => {
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
                {dummyData.map((user) => (
                    <div key={user.id} className="my-page-info">
                        <h3 id="h-tag">내 정보</h3>
                        {/* 닉네임, 이메일 조회 */}
                        <div>
                            <p id="p-tag" className="label">닉네임</p>
                            <input id="input-tag" type="text" value={user.nickname} readOnly />
                        </div>
                        <div>
                            <p id="p-tag" className="label">이메일</p>
                            <input id="input-tag" type="email" value={user.email} readOnly />
                        </div>
                        <br/>
                        {/* 카드형 UI로 순위와 점수와 닉네임 조회 */}
                        <Card nickname={user.nickname+"님의 "} ranking={"순위는 "+user.ranking+"위이며 "} rank={"랭크는 "+user.rank+"입니다."} score={"점수: "+user.score+"점"} />
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default MyPageMyInfo;