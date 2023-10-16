// RankingList.js : 페이지
import React from 'react';
import '../App.css';
import '../Ranking.css';
import Header from "../Component/Header";
import Footer from "../Component/Footer";
//import Chatbot from "../Component/ChatBot";

const rankings = [
    { nickname: 'UserF', rank: 2, score: 247 },
    { nickname: 'UserG', rank: 2, score: 245 },
    { nickname: 'UserJ', rank: 2, score: 222 },
    { nickname: 'UserH', rank: 2, score: 237 },
    { nickname: 'UserE', rank: 2, score: 249 },
    { nickname: 'UserC', rank: 3, score: 320 },
    { nickname: 'UserB', rank: 3, score: 430 },
    { nickname: 'UserD', rank: 3, score: 299 },
    { nickname: 'UserI', rank: 2, score: 233 },
    { nickname: 'UserA', rank: 3, score: 500 },
].sort((a, b) => b.score - a.score); // Sort by score in descending order

const myRankings = [
    { nickname: 'UserJ', rank: 2, score: 222 },
    { nickname: '창민', rank: 2, score: 213 },
    { nickname: '동건', rank: 2, score: 180 },
].sort((a, b) => b.score - a.score); // Sort by score in descending order


const Card = ({ ranking, nickname, rank, score, image }) => {
    return (
        <div className="ranking-card">
            <img className="ranking-card-image" src={image} alt={`Rank ${ranking}`} />
            <div className={`ranking-card-content rank-${ranking}`}>
                <span className="ranking-card-ranking">{`${ranking}위`}</span>
                <span className="ranking-card-nickname">{"닉네임:" + nickname}</span>
                <span className="ranking-card-rank">{`랭크:${rank}단계`}</span>
                <span className="ranking-card-score">{`점수:${score}점`}</span>
            </div>
        </div>
    );
};

const RankingUserList = () => {
    const topThreeImages = [
        "gold.png",
        "silver.png",
        "bronze.png"
    ];

    const topThree = rankings.slice(0, 3);
    const rest = rankings.slice(3);
    const myRest = myRankings.slice(0);

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
                                    ranking={`${index + 1}`}
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
                        <tbody>
                            {/* Display only up to the rank of #10 */}
                            {rest.slice(0, 7).map((ranking, index) => (
                                // Start counting from #4
                                // because the top three are displayed separately
                                index <= 6 &&
                                <tr key={index}>
                                    {/* The actual ranking is (index + current length of topThree + 1) */}
                                    {/* Here it's (index + 3 + 1), which starts from #4 */}
                                    {/* So it's (index+4) */}
                                    <td>{index + 4 + "위"}</td>
                                    <td>{ranking.nickname}</td>
                                    <td>{ranking.rank + "단계"}</td>
                                    <td>{ranking.score + "점수"}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="ranking-div">
                        <p className="ranking-p-tag">나의 순위</p>
                        <table className="my-ranking-table">
                            {/* The same table header as above */}
                            <thead>
                                <tr>
                                    <th>순위</th>
                                    <th>닉네임</th>
                                    <th>랭크</th>
                                    <th>점수</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Display only up to the rank of #10 for dummy data*/}
                                {myRest.map((ranking, index) =>
                                    // Start counting from #11 because this is a continuation of the previous ranking
                                    index <= 2 &&
                                        index === 1 ?
                                        (<tr key={index} style={{ fontWeight: 'bold' }}>
                                            {/* So it's (index+11) */}
                                            <td>{index + 10 + "위"}</td>
                                            <td>{ranking.nickname}</td>
                                            <td>{ranking.rank + "단계"}</td>
                                            <td>{ranking.score + "점수"}</td>
                                        </tr>)
                                        :
                                        (<tr key={index}>
                                            {/* So it's (index+11) */}
                                            <td>{index + 10 + "위"}</td>
                                            <td>{ranking.nickname}</td>
                                            <td>{ranking.rank + "단계"}</td>
                                            <td>{ranking.score + "점수"}</td>
                                        </tr>))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default RankingUserList;