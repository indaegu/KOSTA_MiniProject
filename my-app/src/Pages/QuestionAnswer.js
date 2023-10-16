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

    useEffect(() => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `http://localhost:3000/comments/${id}`, true); // Replace with the actual API endpoint for comments
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                setComments(JSON.parse(xhr.responseText)); // Update 'comments' state with fetched data
            }
        };
        xhr.send();
    }, [id]);

    useEffect(() => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `http://localhost:3000/problems/${id}`, true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                setProblem(JSON.parse(xhr.responseText));
            }
        };
        xhr.send();
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
            id: comments.length + 1,
            author: "CurrentUser",
            content: comment,
            date: new Date().toISOString().split("T")[0]
        };

        setComments([...comments, newComment]);
        setComment("");
    };

    return (
        <div className="qa-detail-container">
            <Header />
            <div className="breadcrumb">
                홈 ▷ 문제 리스트 ▷ 문제 상세 ▷ 문제 해설
            </div>
            <h2 className="qa-title">문제 번호: {problem.id} - {problem.content}</h2>
            <div className="qa-explanation-box">
                <p ref={explanationRef}>
                    {problem.explanation.question}<br />
                    {problem.explanation.options.map(option => <span key={option}>{option}<br /></span>)}
                    <br />
                    {problem.explanation.description.map(desc => <span key={desc}>{desc}<br /></span>)}
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
                {comments.map(comment => (
                    <div key={comment.id} className="comment-item">
                        <div className="comment-author">{comment.author}</div>
                        <div className="comment-content">{comment.content}</div>
                        <div className="comment-date">{comment.date}</div>
                    </div>
                ))}
            </div>
            <Chatbot />
            <Footer />
        </div>
    );
}

export default QuestionAnswer;
