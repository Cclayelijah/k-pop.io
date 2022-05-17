import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ColSpace } from "../../styled/Custom";

interface Props {
  username: string;
}

const Chat: React.FC<Props> = ({ username }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([""]);

  useEffect(() => {
    if (messages[0] === "") {
      setMessages([]);
    }
    document.getElementById("chat")?.focus();
  }, []);

  function handleMessage(e: React.FormEvent<HTMLInputElement>) {
    e.preventDefault();
    setMessage(e.currentTarget.value);
  }

  function handleSend(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (message !== "") {
      // only send message if not empty.
      setMessages((oldMessages) => [...oldMessages, message]);
      setMessage("");
    }
  }

  return (
    <Container>
      <div className="title">
        <h3>Chat</h3>
        {username && <h4>{username}</h4>}
      </div>
      <ColSpace className="messages">
        {messages &&
          messages.map((m) => {
            return <p key={m}>{m}</p>;
          })}
      </ColSpace>
      <form onSubmit={handleSend} className="chatbox">
        <input
          type="text"
          name="chat"
          id="chat"
          onChange={handleMessage}
          value={message}
          autoComplete="off"
        />
        <button type="submit">
          <h3>Send</h3>
        </button>
      </form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 16px;
  .messages {
    justify-content: flex-end;
    gap: 8px;
    p {
      background-color: #90a0d9;
      color: #2c3e50;
      width: fit-content;
      max-width: 75%;
      padding: 8px;
      margin: 0;
      font-size: 1em;
      border-radius: 8px;
    }
  }
  form {
    padding: 0;
    flex-direction: row;
    background-color: #2c3e50;
    input {
      border-radius: 0;
    }
  }
  .chatbox {
    display: flex;
    gap: 4px;
    box-shadow: 6px 6px 4px rgba(0, 0, 0, 0.5);
    input {
      flex: 1;
      background-color: #566573;
    }
    button {
      width: fit-content;
      padding: 6px 16px;
      background-color: #bb8fce;
      border-radius: 0;
      h3 {
        color: #2c3e50;
      }
    }
  }
  .title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
    h4 {
      display: inline-block;
      padding: 4px 12px;
      background-color: #90a0d9;
      color: #2c3e50;
    }
  }
`;

export default Chat;
