import React, { useState, useEffect } from 'react';
// --- FIREBASE CONCEPT IMPORTS ---
// import { db } from '../firebase'; 
// import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
// --- END FIREBASE CONCEPT IMPORTS ---

// const socket = io('http://localhost:3000'); // Socket.io is conceptually replaced by Firestore listeners

const ChatWindow = ({ userRole, targetUser, initialMessages }) => {
  const [messages, setMessages] = useState(initialMessages || []);
  const [input, setInput] = useState('');

  useEffect(() => {
    // --- FIREBASE REALTIME CHAT CONCEPT ---
    // In a production app, this is where you would set up your Firestore listener:
    /*
    const messagesQuery = query(
      collection(db, `chats/${targetUser.id}/messages`), 
      orderBy('timestamp', 'asc') 
    );
    const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
      const fetchedMessages = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().timestamp?.toDate().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })
      }));
      setMessages(fetchedMessages);
    });
    return () => unsubscribe(); 
    */
    
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

    // --- FIREBASE SEND MESSAGE CONCEPT ---
    /*
    const newMessageData = {
      sender: userRole,
      text: input.trim(),
      timestamp: serverTimestamp(),
      // userId: 'currentUserId',
    };
    addDoc(collection(db, `chats/${targetUser.id}/messages`), newMessageData);
    */

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