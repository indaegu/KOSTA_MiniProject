// RankingList.js : 페이지
import React from 'react';
import '../App.css';
import '../Ranking.css';
import Header from "../Component/Header";
import Footer from "../Component/Footer";
//import Chatbot from "../Component/ChatBot";

const rankings = [
    { nickname: 'UserF', rank: 1, score: 147 },
    { nickname: 'UserG', rank: 1, score: 145 },
    { nickname: 'UserJ', rank: 1, score: 122 },
    { nickname: 'UserH', rank: 1, score: 137 },
    { nickname: 'UserE', rank: 1, score: 149 },
    { nickname: 'UserC', rank: 3, score: 320 },
    { nickname: 'UserK', rank: 1, score: 113 },
    { nickname: 'UserB', rank: 3, score: 430 },
    { nickname: 'UserD', rank: 3, score: 299 },
    { nickname: 'UserI', rank: 1, score: 133 },
    { nickname: 'UserA', rank: 3, score: 500 },
].sort((a, b) => b.score - a.score); // Sort by score in descending order


const Card = ({ ranking, nickname, rank, score, image }) => {
    return (
      <div className="ranking-card">
        <img className="ranking-card-image" src={image} alt={`Rank ${ranking}`} />
        <div className={`ranking-card-content rank-${ranking}`}>
          <span className="ranking-card-ranking">{`${ranking}위`}</span>
          <span className="ranking-card-nickname">{"닉네임:"+nickname}</span>
          <span className="ranking-card-rank">{`랭크:${rank}단계`}</span>
          <span className="ranking-card-score">{`점수:${score}점`}</span>
        </div>
      </div>
    );
};

const RankingList = () => {
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
                                <Card key={ranking.nickname}
                                    image={topThreeImages[index]}
                                    nickname={ranking.nickname}
                                    ranking={`${index +1}`}
                                    rank={ranking.rank}
                                    score={ranking.score}
                                />
                            </div>
                        ))}
                    </div>
                    <table className="ranking-table">
                        <thead>
                            <tr>
                                <th>순위</th>
                                <th>닉네임</th>
                                <th>랭크</th>
                                <th>점수</th>
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
                                <td>{ranking.nickname}</td>
                                <td>{ranking.rank+"단계"}</td>
                                <td>{ranking.score+"점수"}</td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default RankingList;