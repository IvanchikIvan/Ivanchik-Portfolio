import React from "react";
import "./Chat.css";
import icon from "../Assets/chat-avatar.jpg";

const Chat = () => {
  return (
    <div className="chat" id="chat">
      <div className="chat__message-list">
        <div className="chat__message">
          <div className="chat__logo">
            <img src={icon} alt="" />
          </div>
          <div className="chat__text">
            <h3 className="chat__author">&lt; Ivanchik /&gt;</h3>
            <p>
              I'm 16 years old, I've been putting my soul into the world of
              web-development for two whole years now.
            </p>
          </div>
        </div>
        <div className="chat__message">
          <div className="chat__logo">
            <img src={icon} alt="" />
          </div>
          <div className="chat__text">
            <h3 className="chat__author">&lt; Ivanchik /&gt;</h3>
            <p>
              I spent the first year learning to code with my friend, ready to
              explore the world of code further! 💻🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
