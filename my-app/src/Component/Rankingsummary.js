import React, { useState, useEffect } from 'react';

function RankingSummary() {
    const [users, setUsers] = useState([
        { rank: 1, level: "3단계", nickname: "UserA", totalScore: 500 },
        { rank: 2, level: "3단계", nickname: "UserB", totalScore: 430 },
        { rank: 3, level: "3단계", nickname: "UserC", totalScore: 320 },
        { rank: 4, level: "2단계", nickname: "UserD", totalScore: 299},
        { rank: 5, level: "1단계", nickname: "UserE", totalScore: 149 },
    ]);

    useEffect(() => {
        const shuffleInterval = setInterval(() => {
            setUsers(prevUsers => prevUsers.sort(() => Math.random() - 0.5));
        }, 3000);

        return () => clearInterval(shuffleInterval);
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
                    {users.map(user => (
                        <tr key={user.rank}>
                            <td>{user.rank}</td>
                            <td>{user.level}</td>
                            <td>{user.nickname}</td>
                            <td>{user.totalScore}점</td>
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
                        <th>문제번호</th>
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
