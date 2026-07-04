import { useState} from 'react';
import { Chatbot } from 'supersimpledev';
import ChatMessages from './components/ChatMessages'
import './App.css'
import {ChatInput} from './components/ChatInput'


 function App() {
        const [chatMessages, setChatMessages] = useState([]);

        // const [chatMessages, setChatMessages] = array;
        // const chatMessages = array[0];
        // const setChatMessages = array[1];
        return (
          <div className="app-container">
            <ChatMessages chatMessages={chatMessages} />
            <ChatInput
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
            />
          </div>
        );
      }

export default App
