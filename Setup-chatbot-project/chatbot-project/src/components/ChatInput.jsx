 import { useState} from 'react';
import { Chatbot } from 'supersimpledev';
import LoadingIcon from '../assets/loading_icon.gif'
import './ChatInput.css'

export function ChatInput({ chatMessages, setChatMessages }) {
        const [inputText, setInputText] = useState("");
        const [isLoading, setIsLoading] = useState(false);

        function saveInputText(event) {
          setInputText(event.target.value);
        }

        async function sendMessage() {
          if (isLoading || inputText === "") {
            return;
          }
          setIsLoading(true);
          const newChatMessages = [
            ...chatMessages,
            {
              index: chatMessages.length,
              message: inputText,
              sender: "user",
            },
          ];

          setChatMessages([
            ...newChatMessages,
            {
              index: chatMessages.length,
              message: <img className="loading-icon" src={LoadingIcon} />,
              sender: "robot",
            },
          ]);
          setInputText("");

          const response = await Chatbot.getResponseAsync(inputText);

          setChatMessages([
            ...newChatMessages,
            // ...newChatMessages.slice(0, newChatMessages.length - 1),
            {
              index: newChatMessages.length,
              message: response,
              sender: "robot",
            },
          ]);
          setIsLoading(false);
        }

        return (
          <div className="chat-input-container">
            <input
              type="text"
              placeholder="Type your message..."
              size="30"
              className="chat-input"
              onChange={saveInputText}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  sendMessage(inputText, "user");
                } else if (event.key === "Escape") {
                  setInputText("");
                }
              }}
              value={inputText}
            />
            <button
              onClick={() => sendMessage(inputText, "user")}
              className="send-button"
            >
              Send
            </button>
          </div>
        );
      }
