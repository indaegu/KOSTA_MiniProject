import React, { useState, useEffect } from 'react';

function RankingSummary() {
    const [users, setUsers] = useState([]);

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
                } else {
                    console.error('Received data is not an array');
                }
            })
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <section className="ranking-summary">
            <h2>랭킹 요약 <a href="/RankingUserList" className="more-link">+More</a></h2>
            <table>
                <thead>
                    <tr>
                        <th>순위</th>
                        <th>랭크</th>
                        <th>닉네임</th>
                        <th>총점수</th>
                    </tr>
                </thead>
                <tbody>
                    {users.slice(0, 5).map(user => (
                        <tr key={user.ranking}>
                            <td>{user.ranking}</td>
                            <td>{user.rank}</td>
                            <td>{user.nickname}</td>
                            <td>{user.score}점</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}

function WrongQuestions() {
    const [questions, setQuestions] = useState([
        { id: 1, category: "정보처리기사", title: "20년 1회 19번", failureRate: "90%" },
        { id: 2, category: "알고리즘", title: "백트래킹 알고리즘", failureRate: "85%" },
        { id: 3, category: "CS", title: "SJF 스케줄링", failureRate: "80%" },
        { id: 4, category: "SQLD", title: "Join문 작성하기", failureRate: "75%" },
        { id: 5, category: "언어-Java", title: "다형성 구현하기", failureRate: "70%" },
    ]);

    useEffect(() => {
        const shuffleInterval = setInterval(() => {
            setQuestions(prevQuestions => prevQuestions.sort(() => Math.random() - 0.5));
        }, 3000);

        return () => clearInterval(shuffleInterval);
    }, []);

    return (
        <section className="wrong-questions">
            <h2>자주 틀린 문제 <a href="/RankingQuestionList" className="more-link">+More</a></h2>
            <table>
                <thead>
                    <tr>
                        <th>순위</th>
                        <th>문제카테고리</th>
                        <th>문제제목</th>
                        <th>오답률</th>
                    </tr>
                </thead>
                <tbody>
                    {questions.map(q => (
                        <tr key={q.id}>
                            <td>{q.id}</td>
                            <td>{q.category}</td>
                            <td>{q.title}</td>
                            <td>{q.failureRate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}

export { RankingSummary, WrongQuestions };
