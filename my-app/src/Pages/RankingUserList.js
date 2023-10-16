// RankingList.js : 페이지
import React, { useState, useEffect } from 'react';
import '../App.css';
import '../Ranking.css';
import Header from "../Component/Header";
import Footer from "../Component/Footer";
//import Chatbot from "../Component/ChatBot";

function RankingUserList() {
    let [users, setUsers] = useState([]);
    const [loggedInUser, setLoggedInUser] = useState(null); // 추가
    const loggedInUserId = localStorage.getItem('userId'); //추가
    let [myRankings, setMyRankings] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3001/users")
            .then(res => {
                return res.json();
            })
            .then(data => {
                if (Array.isArray(data)) { // data가 배열인지 확인
                    // score 기준으로 내림차순 정렬
                    const sortedData = data.sort((a, b) => b.score - a.score);
                    // 각 유저에게 랭킹 정보 추가
                    const rankedData = sortedData.map((user, index) => {
                        return { ...user, ranking: index + 1 };
                    });
                    setUsers(rankedData);
                /// 로그인된 사용자의 랭킹 찾기 및 저장
                const myRankingIndex = rankedData.findIndex(user => user.id === parseInt(loggedInUserId));
                
                if(myRankingIndex !== -1){
                    let surroundingRankings = [];
                    if(myRankingIndex > 0){
                        surroundingRankings.push(rankedData[myRankingIndex-1]); // Add the user above me.
                    }
                    
                    surroundingRankings.push(rankedData[myRankingIndex]); // Add me.
                    
                    if(myRankingIndex < rankedData.length-1){
                        surroundingRankings.push(rankedData[myRankingIndex+1]); // Add the user below me.
                    }
                    
                    setMyRankings(surroundingRankings); 
                 } else{
                     console.error('Could not find the logged in user in the rankings');
                 }
            } else {
               console.error('Received data is not an array');
            }
        })
        .catch(error => console.error('Error:', error));
}, []);

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

    const topThreeImages = [
        "gold.png",
        "silver.png",
        "bronze.png"
    ];

    const topThree = users.slice(0, 3);
    const rest = users.slice(3);
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
                                    index <= 2 &&
                                        index === 1 ?
                                        (<tr key={index} style={{ fontWeight: 'bold' }}>
                                            <td>{ranking.ranking + "위"}</td>
                                            <td>{ranking.nickname}</td>
                                            <td>{ranking.rank + "단계"}</td>
                                            <td>{ranking.score + "점수"}</td>
                                        </tr>)
                                        :
                                        (<tr key={index}>
                                            <td>{ranking.ranking + "위"}</td>
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