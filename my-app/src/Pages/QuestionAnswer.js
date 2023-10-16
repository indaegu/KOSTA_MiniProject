import React, { useState, useRef, useEffect } from 'react';
import '../App.css';
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Chatbot from '../Component/ChatBot';
import Modal2 from '../Component/Modal2';
import { useParams } from 'react-router-dom';

const QuestionAnswer = () => {
    const [comment, setComment] = useState("");
    const [problem, setProblem] = useState(null);
    const [comments, setComments] = useState([]); // Define 'comments' state
    const { id } = useParams();
    const explanationRef = useRef(null); // Move useRef outside of conditional logic
    const [users, setUsers] = useState([]);
    const [loggedInUserId, setLoggedInUserId] = useState(localStorage.getItem('userId'));


    useEffect(() => {
        // Fetch all comments
        const xhrComments = new XMLHttpRequest();
        xhrComments.open('GET', `http://localhost:3001/comments`, true);
        xhrComments.onreadystatechange = () => {
            if (xhrComments.readyState === 4 && xhrComments.status === 200) {
                const allComments = JSON.parse(xhrComments.responseText);
                const relevantComments = allComments.filter(comment => comment.problem_id === parseInt(id));
                setComments(relevantComments);
            } else {
                console.error('Failed to fetch problem:', xhrComments.statusText);
            }
        };
        xhrComments.send();
    }, [id]);

    useEffect(() => {
        // Fetch all users
        const xhrUsers = new XMLHttpRequest();
        xhrUsers.open('GET', `http://localhost:3001/users`, true);
        xhrUsers.onreadystatechange = () => {
            if (xhrUsers.readyState === 4 && xhrUsers.status === 200) {
                const allUsers = JSON.parse(xhrUsers.responseText);
                setUsers(allUsers);
            } else {
                console.error('Failed to fetch users:', xhrUsers.statusText);
            }
        };
        xhrUsers.send();
    }, []);

    useEffect(() => {
        // Fetch problem details based on the problem ID
        const xhrProblem = new XMLHttpRequest();
        xhrProblem.open('GET', `http://localhost:3001/problems/${id}`, true);
        xhrProblem.onreadystatechange = () => {
            if (xhrProblem.readyState === 4 && xhrProblem.status === 200) {
                const problemDetails = JSON.parse(xhrProblem.responseText);
                setProblem(problemDetails);
            } else {
                console.error('Failed to fetch problem:', xhrProblem.statusText);
            }
        };
        xhrProblem.send();
    }, [id]);

    if (!problem) return "Loading...";

    const handleCopyExplanation = () => {
        const textarea = document.createElement('textarea');
        textarea.textContent = explanationRef.current.textContent;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        alert("문제 해설이 복사되었습니다!");
        document.body.removeChild(textarea);
    };

    const handleCommentSubmit = () => {
        if (comment.trim() === "") {
            alert("댓글을 입력해주세요.");
            return;
        }
    
        const newComment = {
            user_id: parseInt(loggedInUserId), 
            problem_id: parseInt(id),
            content: comment,
            created_at: new Date().toISOString()
        };
    
        // 서버에 데이터 전송
        const xhr = new XMLHttpRequest();
        xhr.open('POST', `http://localhost:3001/comments`, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // 서버에서 응답 받은 댓글 데이터를 상태로 설정
                const postedComment = JSON.parse(xhr.responseText);
                
                // 클라이언트에서 생성한 댓글 객체에 서버에서 반환된 ID를 추가
                newComment.id = postedComment.id;
    
                setComments(prevComments => [...prevComments, newComment]);
            } else if (xhr.readyState === 4) {
                console.error('Failed to post comment:', xhr.statusText);
            }
        };
        xhr.send(JSON.stringify(newComment));
    
        setComments(prevComments => {
            const updatedComments = [...prevComments, newComment];
            console.log("Updated comments:", updatedComments);  // 콘솔에 업데이트된 댓글 배열 로깅
            return updatedComments;
        });
    };
    
    return (
        <div className="qa-detail-container">
            <Header />
            <div className="breadcrumb">
                홈 ▷ 문제 리스트 ▷ 문제 상세 ▷ 문제 해설
            </div>
            <h2 className="qa-title">문제 번호: {problem.id}</h2>
            <div className="qa-explanation-box">
                <p ref={explanationRef}>
                    {/* 문제 내용과 해설 참조 */}
                    문제 내용 : {problem.content}<br /><br />
                    해설 : {problem.explanation}
                    {/* 만약 `options`나 `description`이 문제 설명에 있다면, 이들을 매핑 */}
                    {problem.explanation.options ? problem.explanation.options.map(option => <span key={option}>{option}<br /></span>) : null}
                    <br />
                    {problem.explanation.description ? problem.explanation.description.map(desc => <span key={desc}>{desc}<br /></span>) : null}
                </p>
                <Modal2 />
                <button onClick={handleCopyExplanation}>문제해설복사하기</button>
            </div>
            <div className="comment-section">
                <textarea
                    placeholder="댓글을 입력하세요..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <button onClick={handleCommentSubmit}>댓글 작성</button>
            </div>
            <div className="comment-list">
                {comments.map(comment => {
                    // `users` 배열에서 해당 comment의 user_id와 일치하는 user를 찾습니다.
                    const user = users.find(u => u.id === comment.user_id);

                    return (
                        <div key={comment.id} className="comment-item">
                            <div className="comment-author">{user ? user.nickname : 'Unknown'}</div>
                            <div className="comment-content">{comment.content}</div>
                            <div className="comment-date">{comment.created_at}</div>
                        </div>
                    );
                })}
            </div>
            <Chatbot />
            <Footer />
        </div>
    );

}

export default QuestionAnswer;
