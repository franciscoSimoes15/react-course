import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/user.png'

export function ChatMessage(props) {
        const { message, sender } = props;

        const isUser = sender === "user";

        return (
          <div
            className={
              sender === "user" ? "chat-message-user" : "chat-message-robot"
            }
          >
            {!isUser && <img src={RobotProfileImage} className="chat-message-profile" />}
            <div className="chat-message-text">{message}</div>

            {isUser && <img src={UserProfileImage} className="chat-message-profile" />}
          </div>
        );
      }
