//QuestionDeatailComponent.js : 문세 상세페이지에 활용될 컴포넌트
import React, { useState } from 'react';
import '../App.css';

const QuestionDetailComponent = () => {
    const [score, setScore] = useState(100);
    const [ListScore, setListScore] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});
    const [correctAnswers, setCorrectAnswers] = useState([]);
    const [incorrectAnswers, setIncorrectAnswers] = useState([]);
    const [feedbackMessages, setFeedbackMessages] = useState({});
    const [gradedQuestions, setGradedQuestions] = useState([]);

    const [questions, setQuestions] = useState([
        { id: 1, number: 'Q1', content: '아래 내용을 확인하여 알맞는 답을 작성하시오.\n2 계층(데이터링크 계층)에서 구현되는 터널링 기술 중 하나\nL2F와 PPTP가 결합된 프로토콜로 VPN과 인터넷 서비스 제공자(ISP)가 이용\nIPsec을 함께 사용하면 PPTP보다 훨씬 안전하지만 보안보다 익명화에 더 적합', score: 10, answer: 'L2TP' },
        { id: 2, number: 'Q2', content: '문제 내용 2', score: 20, answer: 'B' },
        { id: 3, number: 'Q3', content: '문제 내용 2', score: 20, answer: 'B' },
        { id: 4, number: 'Q4', content: '문제 내용 2', score: 20, answer: 'B' },
        { id: 5, number: 'Q5', content: '문제 내용 2', score: 20, answer: 'B' },
        { id: 6, number: 'Q6', content: '문제 내용 2', score: 20, answer: 'B' },
        { id: 7, number: 'Q7', content: '문제 내용 2', score: 20, answer: 'B' },
        { id: 8, number: 'Q8', content: '문제 내용 2', score: 20, answer: 'B' },
        { id: 9, number: 'Q9', content: '문제 내용 2', score: 20, answer: 'B' },
        { id: 10, number: 'Q10', content: '문제 내용 2', score: 20, answer: 'B' },
    ]);
    const handleCheckAnswer = (questionId, questionScore, correctAnswer) => {
        if (gradedQuestions.includes(questionId)) {
            return;  // 이미 채점된 문제면 함수를 종료
        }

        let feedback = "";  // 피드백 메시지 초기화

        if (userAnswers[questionId] === correctAnswer) {
            setScore(prevScore => prevScore + questionScore);
            setListScore(prevScore => prevScore + questionScore);
            feedback = `맞았습니다! (+${questionScore}점)`;  // 점수 정보를 추가
            setCorrectAnswers(prev => [...prev, questionId]);
        } else {
            setScore(prevScore => prevScore - questionScore);
            setListScore(prevScore => prevScore - questionScore);
            feedback = `틀렸습니다! (-${questionScore}점)`;  // 점수 정보를 추가
            setIncorrectAnswers(prev => [...prev, questionId]);
        }

        setFeedbackMessages(prevMessages => ({
            ...prevMessages,
            [questionId]: feedback
        }));

        // 2초 후 피드백 메시지를 숨깁니다.
        setTimeout(() => {
            setFeedbackMessages(prevMessages => ({
                ...prevMessages,
                [questionId]: ""
            }));
        }, 3000);

        setGradedQuestions(prev => [...prev, questionId]);
    };




    return (
        <div className="question-detail-container">
            <h1>정보처리기사 20년 1회</h1>
            <div className="score-board">내점수: {score}</div>
            <div className="questions-grid">
                {questions.map(question => (
                    <div key={question.id} className="question-item">
                        <div>{question.number}</div>
                        <div>{question.content}</div>
                        <div>{question.score}점</div>
                        <input
                            type="text"
                            placeholder="정답 입력"
                            value={userAnswers[question.id] || ""}
                            onChange={(e) => setUserAnswers({ ...userAnswers, [question.id]: e.target.value.toUpperCase() })}
                        />
                        <button
                            onClick={() => handleCheckAnswer(question.id, question.score, question.answer)}
                            disabled={gradedQuestions.includes(question.id)}
                        >
                            채점하기
                        </button>
                        <div
                            className={`feedback-message ${feedbackMessages[question.id] ? 'visible hide-after-2s' : ''}`}
                        >
                            {feedbackMessages[question.id]}
                        </div>
                        <button>해설 및 토론</button>
                        <button>즐겨찾기</button>
                    </div>
                ))}
            </div>
            <div className="summary-section">
                <h2>문제 세트 종합 정보</h2>
                <p>맞은 문제: {correctAnswers.join("번, ") || "없음"}</p>
                <p>틀린 문제: {incorrectAnswers.join("번, ") || "없음"}</p>
                <p>총점: {ListScore}</p>
            </div>
        </div>
    );
}

export default QuestionDetailComponent;
