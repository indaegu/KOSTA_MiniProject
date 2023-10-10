import React, { useState } from 'react';
import './App.css'; // 스타일

function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);  // 로딩 상태 추가

    const handleSend = async () => {
        setIsLoading(true);
        setInputMessage(''); // 입력창 초기화
        setMessages([...messages, { type: 'user', text: inputMessage }]);
        const response = await fetch('http://localhost:3000/server', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userMessage: inputMessage
            })
        });
    
        const data = await response.json();
        setMessages(prevMessages => [...prevMessages, { type: 'bot', text: data.assistant }]);
        setInputMessage(''); // 입력창 초기화
        setIsLoading(false);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <div className="chatbot">
            <button className="float-button" onClick={() => setIsOpen(!isOpen)}>
                Chat
            </button>
            {isOpen && (
                <div className="chat-window">
                    {messages.map((message, idx) => (
                        <div key={idx} className={`message ${message.type}`}>
                            {message.text}
                        </div>
                    ))}
                    {isLoading && <div className="loading-spinner"></div>}
                    <div className="input-container">
                        <input value={inputMessage} 
                        onChange={e => setInputMessage(e.target.value)} 
                        onKeyPress={handleKeyPress} // Enter 키 이벤트 추가
                        />
                        <button onClick={handleSend}>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Chatbot;
