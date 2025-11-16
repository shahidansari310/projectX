import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChatWindow from '../components/ChatWindow';
import '../assets/css/style.css'; 
import '../assets/css/dashboard.css'; 

// Placeholder data for active chats
const studentChats = [
    { id: 1, name: 'Rajesh Kumar (Owner)', role: 'owner' },
    { id: 2, name: 'Suresh Varma (Owner)', role: 'owner' },
    { id: 3, name: 'Urban Co-living PG', role: 'owner' },
];

const ownerChats = [
  { id: 101, name: 'Priya Sharma (Student)', role: 'student' },
  { id: 102, name: 'Amit Singh (Student)', role: 'student' },
];

const Chat = () => {
    // In a real application, this would come from global state or context
    const isStudent = true; 
    const chatList = isStudent ? studentChats : ownerChats; 
    const [activeChat, setActiveChat] = useState(chatList[0] || null);
    
    // Simulated message history fetch (replace with real API call)
    const getInitialMessages = (chatId) => {
      if (chatId === 1) {
        return [
            { id: 1, sender: 'owner', text: 'Hi, I saw your request. When would you like to visit?', timestamp: '10:00 AM' },
            { id: 2, sender: 'student', text: 'I am available tomorrow at 4 PM.', timestamp: '10:05 AM' },
        ];
      }
      return [];
    }

    return (
        <>
            <Navbar />
            <div className="dashboard-layout">
                {/* Chat Sidebar (Contact List) */}
                <aside className="dashboard-sidebar chat-sidebar">
                    <div className="sidebar-header">
                        <h3>{isStudent ? 'Owner Contacts' : 'Customer Chats'}</h3>
                    </div>
                    <nav className="sidebar-nav">
                        {chatList.map(chat => (
                            <div 
                                key={chat.id} 
                                className={`nav-item chat-contact ${activeChat?.id === chat.id ? 'active' : ''}`}
                                onClick={() => setActiveChat(chat)}
                            >
                                <span className="icon">💬</span>
                                <span>{chat.name}</span>
                            </div>
                        ))}
                    </nav>
                </aside>

                {/* Main Chat Area */}
                <main className="dashboard-main chat-main-area">
                    {activeChat ? (
                        <ChatWindow 
                            userRole={isStudent ? 'student' : 'owner'} 
                            targetUser={activeChat}
                            initialMessages={getInitialMessages(activeChat.id)}
                        />
                    ) : (
                        <div className="chat-empty-state">
                            <span className="icon">👆</span>
                            <h1>Select a chat to start messaging</h1>
                            <p>Communicate with {isStudent ? 'owners' : 'customers'} instantly.</p>
                        </div>
                    )}
                </main>
            </div>
            <Footer hasCreatorInfo={false} />
        </>
    );
};

export default Chat;