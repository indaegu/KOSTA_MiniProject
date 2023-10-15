// RankingList.js : 페이지
import React from 'react';
import '../App.css';
import '../Ranking.css';
import Header from "../Component/Header";
import Footer from "../Component/Footer";
//import Chatbot from "../Component/ChatBot";

const rankings = [
    { category: 'SQLD', title: 'Join문 작성하기', rate: 75 },
    { category: '알고리즘', title: '백트래킹 알고리즘', rate: 85 },
    { category: 'CS', title: 'SJF 스케줄링', rate: 80 },
    { category: 'CS', title: 'OOP의 5가지 설계 원칙', rate: 65 },
    { category: '언어-C', title: '포인터 구현하기', rate: 60 },
    { category: '언어-Java', title: '다형성 구현하기', rate: 70 },
    { category: '언어-Java', title: '람다식 구현하기', rate: 55 },
    { category: '언어-JavaScript', title: '프로토타입 구현하기', rate: 50 },
    { category: '정보처리기사', title: '20년 1회 19번', rate: 90 },
    { category: 'SQLD', title: '데이터 모델링', rate: 45 },
    { category: '정보처리기사', title: '21년 2회 13번', rate: 40 },
].sort((a, b) => b.rate - a.rate); // Sort by score in descending order


const Card = ({ ranking, category, title, rate, image }) => {
    return (
      <div className="ranking-card">
        <img className="ranking-card-image" src={image} alt={`Rank ${ranking}`} />
        <div className={`ranking-card-content rank-${ranking}`}>
          <span className="ranking-card-ranking">{`${ranking}위`}</span>
          <span className="ranking-card-category">{"문제카테고리:"+category}</span>
          <span className="ranking-card-title">{"문제제목:"+title}</span>
          <span className="ranking-card-rate">{`오답률:${rate}%`}</span>
        </div>
      </div>
    );
};

const RankingQuestionList = () => {
    const topThreeImages = [
        "gold.png",
        "silver.png",
        "bronze.png"
    ];

    const topThree = rankings.slice(0, 3);
    const rest = rankings.slice(3);

    return (
        <div className="main-container">
            <Header />
            <div className="content">
                <div className="question-list-container">
                    <div className="top-rankings">
                        {topThree.map((ranking, index) => (
                            <div key={index} className={`top-ranking rank-${index + 1}`}>
                                <Card key={ranking.title}
                                    image={topThreeImages[index]}
                                    title={ranking.title}
                                    ranking={`${index +1}`}
                                    category={ranking.category}
                                    rate={ranking.rate}
                                />
                            </div>
                        ))}
                    </div>
                    <table className="ranking-table">
                        <thead>
                            <tr>
                                <th>순위</th>
                                <th>문제카테고리</th>
                                <th>문제제목</th>
                                <th>오답률</th>
                            </tr>
                        </thead>

                        {/* Display only up to the rank of #10 */}
                        {rest.slice(0, 7).map((ranking, index) => (
                            // Start counting from #4
                            // because the top three are displayed separately
                            index <= 6 &&
                            <tr key={index}>
                                {/* The actual ranking is (index + current length of topThree + 1) */}
                                {/* Here it's (index + 3 + 1), which starts from #4 */}
                                {/* So it's (index+4) */}
                                <td>{index + 4+"위"}</td>
                                <td>{ranking.category}</td>
                                <td>{ranking.title}</td>
                                <td>{ranking.rate+"%"}</td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default RankingQuestionList;