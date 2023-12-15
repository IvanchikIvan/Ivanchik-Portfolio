import React from "react";
import "./Chat.css";
import icon from "../Assets/chat-avatar.jpg";

const Chat = () => {
  return (
    <div className="chat" id="chat">
      <div className="message-list">
        <div className="message">
          <div className="logo">
            <img src={icon} alt=""></img>
          </div>
          <div className="text">
            <h3>&lt; Ivanchik /&gt;</h3>
            <p>
              I`m 16 years old, I`ve been putting me soul into a world of
              web-development for two whole years now
            </p>
          </div>
        </div>
        <div className="message">
          <div className="logo">
            <img src={icon} alt=""></img>
          </div>
          <div className="text">
            <h3>&lt; Ivanchik /&gt;</h3>
            <p>
              I spent the first year learning to code with my friend, ready to
              explore the world of code further! 💻🚀
            </p>
          </div>
        </div>
      </div>
      <div className="About Me"></div>
    </div>
  );
};

export default Chat;
