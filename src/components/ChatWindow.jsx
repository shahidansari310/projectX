import React, { useState, useEffect } from 'react';
// Note: In a real environment, you would run 'npm install socket.io-client' and uncomment the import below.
// import io from 'socket.io-client'; 

// const socket = io('http://localhost:3000'); // Connect to your Socket.io backend URL

const ChatWindow = ({ userRole, targetUser, initialMessages }) => {
  const [messages, setMessages] = useState(initialMessages || []);
  const [input, setInput] = useState('');

  useEffect(() => {
    // --- SOCKET.IO IMPLEMENTATION CONCEPT ---
    // This hook would handle connecting, joining a room, and listening for new messages.
    // if (!socket.connected) {
    //   socket.connect();
    // }

    // socket.emit('joinRoom', { userId: 'currentUserId', targetId: targetUser.id });

    // socket.on('receiveMessage', (message) => {
    //   setMessages((prev) => [...prev, message]);
    // });

    // return () => {
    //   socket.off('receiveMessage');
    //   socket.disconnect();
    // };
    
    // Cleanup console log for simulation
    console.log('Chat window mounted for:', targetUser.name);
  }, [targetUser.id]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    const newMessage = {
      id: Date.now(),
      sender: userRole,
      text: input.trim(),
      timestamp: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
    };

    // socket.emit('sendMessage', { targetId: targetUser.id, message: newMessage }); // Real-time send

    setMessages((prev) => [...prev, newMessage]);
    setInput('');
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <h4>Chat with {targetUser.name} ({targetUser.role})</h4>
      </div>
      <div className="chat-messages">
        {messages.length === 0 ? (
          <div className="chat-empty-state">
            <span className="icon">💬</span>
            <p>Start the conversation!</p>
          </div>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} className={`message-bubble ${msg.sender === userRole ? 'sent' : 'received'}`}>
              <p>{msg.text}</p>
              <span className="timestamp">{msg.timestamp}</span>
            </div>
          ))
        )}
      </div>
      <form className="chat-input-form" onSubmit={sendMessage}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit" className="btn-send btn-primary">Send</button>
      </form>
    </div>
  );
};

export default ChatWindow;