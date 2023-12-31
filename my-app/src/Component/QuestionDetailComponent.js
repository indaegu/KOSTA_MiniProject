//QuestionDeatailComponent.js : 문세 상세페이지에 활용될 컴포넌트
import React, { useState, useEffect, useRef } from 'react';  // useRef와 useEffect를 import 합니다.
import '../App.css';
import { Link } from "react-router-dom";
import Modal from './Modal'; // 새로운 모달 컴포넌트를 import 합니다.



const QuestionDetailComponent = ({ setId }) => {
    const [score, setScore] = useState(0);
    const [ListScore, setListScore] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});
    const [correctAnswers, setCorrectAnswers] = useState([]);
    const [incorrectAnswers, setIncorrectAnswers] = useState([]);
    const [feedbackMessages, setFeedbackMessages] = useState({});
    const [gradedQuestions, setGradedQuestions] = useState([]);
    const [favoredQuestions, setFavoredQuestions] = useState([]);
    const [favoriteFeedback, setFavoriteFeedback] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false); // 모달의 상태
    const [modalQuestionId, setModalQuestionId] = useState(null); // 모달에 표시될 문제의 ID
    const [questions, setQuestions] = useState([]); // 초기 값을 빈 배열로 설정
    const [problemSet, setProblemSet] = useState(null); // 문제 세트 정보를 저장할 상태 변수 추
    const prevScoreRef = useRef();  // 이전 점수를 추적하기 위한 ref
    const [scoreClass, setScoreClass] = useState('');  // 점수 증감에 따른 클래스 상태
    const [loggedInUser, setLoggedInUser] = useState(null); // 로그인한 유저의 정보를 저장
    const [loggedInUserId, setLoggedInUserId] = useState(null);

    useEffect(() => {
        const loggedInUserId = localStorage.getItem('userId');

        if (loggedInUserId) {
            fetch(`http://localhost:3001/users/${loggedInUserId}`)
                .then(res => res.json())
                .then(data => {
                    setLoggedInUserId(loggedInUserId)
                    setLoggedInUser(data);
                    setScore(data.score); // 로그인한 유저의 score로 상태 초기화
                })
                .catch(error => console.error('Error:', error));
        }
    }, []);

    useEffect(() => {
        if (prevScoreRef.current !== undefined) {  // 초기화를 위해 undefined 체크
            if (score > prevScoreRef.current) {
                setScoreClass('increase');
            } else if (score < prevScoreRef.current) {
                setScoreClass('decrease');
            } else {
                setScoreClass(''); // 점수가 변경되지 않은 경우
            }

            // 애니메이션 효과가 끝나면 클래스를 초기화합니다.
            const timer = setTimeout(() => {
                setScoreClass('');
            }, 600);  // 0.6s는 애니메이션 지속 시간과 동일해야 합니다.

            return () => clearTimeout(timer);  // 컴포넌트 언마운트시 타이머를 제거합니다.
        }

        prevScoreRef.current = score;  // 현재 점수를 ref에 저장합니다.
    }, [score]);

    useEffect(() => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `http://localhost:3001/problems?problem_set_id=${setId}`, true); // 문제 세트 ID와 관련된 문제를 가져오도록 엔드포인트를 수정
        xhr.onload = function () {
            if (this.status === 200) {
                setQuestions(JSON.parse(this.responseText));
            } else {
                console.error("Failed to fetch questions.");
            }
        };
        xhr.send();
    }, [setId]);

    // 문제 세트 정보를 가져오는 요청
    const xhrProblemSet = new XMLHttpRequest();
    xhrProblemSet.open('GET', `http://localhost:3001/problem_sets/${setId}`, true);
    xhrProblemSet.onload = function () {
        if (this.status === 200) {
            setProblemSet(JSON.parse(this.responseText));
        } else {
            console.error("Failed to fetch problem set.");
        }
    };
    xhrProblemSet.send();



    const handleCheckAnswer = (questionId, questionScore, correctAnswer) => {
        if (gradedQuestions.includes(questionId)) {
            return;  // 이미 채점된 문제면 함수를 종료
        }

        let feedback = "";  // 피드백 메시지 초기화
        let newScore;  // 새로운 점수 값을 저장할 변수

        if (userAnswers[questionId] === correctAnswer) {
            newScore = score + questionScore;
            feedback = `맞았습니다! (+${questionScore}점)`;
            setCorrectAnswers(prev => [...prev, questionId]);
        } else {
            newScore = score - questionScore;
            feedback = `틀렸습니다! (-${questionScore}점)`;
            setIncorrectAnswers(prev => [...prev, questionId]);
        }

        setScore(newScore); // 로컬 상태 업데이트

        // 로그인한 유저의 점수 업데이트 (DB에 반영)
        if (loggedInUser) {
            const xhr = new XMLHttpRequest();
            xhr.open('PUT', `http://localhost:3001/users/${loggedInUserId}`, true);
            xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
            xhr.onload = function () {
                if (xhr.status === 200) {
                    const updatedUser = JSON.parse(xhr.responseText);
                    setLoggedInUser(updatedUser); // 상태 업데이트
                } else {
                    console.error('Error updating user score:', xhr.responseText);
                }
            };
            xhr.send(JSON.stringify({
                ...loggedInUser,
                score: newScore
            }));
        }

        prevScoreRef.current = score;  // 현재 점수를 ref에 바로 저장합니다.

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
        }, 2000);

        setGradedQuestions(prev => [...prev, questionId]);
    };


    const handleFavorite = (questionId) => {
        let feedback = "";
        if (favoredQuestions.includes(questionId)) {
            setFavoredQuestions(favoredQuestions.filter(id => id !== questionId));
            feedback = "즐겨찾기가 해제되었습니다!";
        } else {
            setFavoredQuestions([...favoredQuestions, questionId]);
            feedback = "즐겨찾기 되었습니다!";
        }
        setFavoriteFeedback({ [questionId]: feedback });

        // 2초 후 피드백 메시지를 숨깁니다.
        setTimeout(() => {
            setFavoriteFeedback(prevFeedback => ({
                ...prevFeedback,
                [questionId]: ""
            }));
        }, 2000);
    };

    const handleDiscussionClick = (questionId, questionScore) => {
        if (!gradedQuestions.includes(questionId)) {
            setIsModalOpen(true);
            setModalQuestionId(questionId);
        } else {
            // 이미 채점된 경우, 직접 해설 페이지로 이동합니다.
            window.location.href = `/QuestionAnswer/${questionId}`;
        }
    };

    const handleModalConfirm = (questionScore) => {
        setIsModalOpen(false);
        setScore(score - questionScore); // 점수 차감
        window.location.href = `/QuestionAnswer/${modalQuestionId}`; // 이동
    };

    const handleModalCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="question-detail-container">
            {isModalOpen && (
                <Modal
                    message="채점하기전 해설 및 토론버튼을 누르면 점수가 차감됩니다!"
                    onConfirm={() => handleModalConfirm(questions.find(q => q.id === modalQuestionId).score)}
                    onCancel={handleModalCancel}
                />
            )}
            <h1>{problemSet?.title || "제목 없음"}</h1>
            <div className={`score-board ${scoreClass}`} data-text={`Score: ${score}`}></div>
            <div className="questions-grid">
                {questions.map(question => (
                    <div key={question.id} className="question-item">
                        <div>{question.number}</div>
                        <div>{question.content}</div>
                        <div>({question.score}점)</div>
                        <input
                            type="text"
                            placeholder="정답 입력"
                            value={userAnswers[question.id] || ""}
                            onChange={(e) => setUserAnswers({ ...userAnswers, [question.id]: e.target.value })}
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
                        <button onClick={() => handleDiscussionClick(question.id, question.score)}>
                            해설 및 토론
                        </button>

                        <button onClick={() => handleFavorite(question.id)}>즐겨찾기</button>
                        <div
                            className={`feedback-message ${favoriteFeedback[question.id] ? 'visible hide-after-2s' : ''}`}
                        >
                            {favoriteFeedback[question.id]}
                        </div>
                    </div>
                ))}
            </div>
            <div className="summary-section">
                <h2>문제 세트 종합 정보</h2>
                <p>맞은 문제: {correctAnswers.join(", ") || "없음"}</p>
                <p>틀린 문제: {incorrectAnswers.join(", ") || "없음"}</p>
                <p>총점: {ListScore}</p>
            </div>
        </div>
    );

}

export default QuestionDetailComponent;
