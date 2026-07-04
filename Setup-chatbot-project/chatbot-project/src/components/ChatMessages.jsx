import { useAutoScroll } from '../hooks/useAutoScroll';
import { ChatMessage } from './ChatMessage'
import './ChatMessage.css'

function ChatMessages({ chatMessages }) {
        const chatMessagesRef = useAutoScroll(chatMessages);
        
        const chatMessagesContent = chatMessages.length !== 0 ? chatMessages.map((msg) => (
          <ChatMessage
            key={msg.index}
            message={msg.message}
            sender={msg.sender}
          />
        )) : <div className="welcome-text">Welcome to the chatbot project! Send a message using the textbox below.</div>;

        // const button = (
        //   <button
        //     onClick={() => {
        //       sendMessage("Hello, how can I help you today?", "robot");
        //     }}
        //   >
        //     Send message
        //   </button>
        // );

        return <div className="chat-messages-container" ref={chatMessagesRef}>{chatMessagesContent}</div>;
      }

export default ChatMessages;