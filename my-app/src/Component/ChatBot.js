import React, { useState } from 'react';
import '../App.css';

function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    

    const handleSend = async () => {
        setIsLoading(true);
        setInputMessage('');
        setMessages([...messages, { type: 'user', text: inputMessage }]);
    
        await fetch('http://localhost:3000/sendMessage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userMessage: inputMessage
            })
        });
    
        const sse = new EventSource('http://localhost:3000/server');
    
        sse.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
        
                // 첫 번째 메시지는 보통 빈 내용이므로 확인하고 건너뛰기
                if (data.choices[0].delta && data.choices[0].delta.content) {
                    const content = data.choices[0].delta.content;
        
                    // 이전 메시지가 bot 타입이면 그 메시지와 합치기
                    if (messages.length && messages[messages.length - 1].type === 'bot') {
                        const prevMessages = [...messages];
                        prevMessages[prevMessages.length - 1].text += content;
                        setMessages(prevMessages);
                    } else {
                        // 그렇지 않으면 새로운 메시지로 추가
                        setMessages(prevMessages => [...prevMessages, { type: 'bot', text: content }]);
                    }
                }
        
                setIsLoading(false);
            } catch (error) {
                console.error('Invalid JSON received:', event.data);
            }
        };
        
        sse.onerror = (error) => {
            console.error('SSE failed:', error);
            sse.close();
        };
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <div className="chatbot">
            <button className="float-button" onClick={() => setIsOpen(!isOpen)}>
                Gpt에게 물어보기
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
                        onKeyPress={handleKeyPress}
                        />
                        <button onClick={handleSend}>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Chatbot;
