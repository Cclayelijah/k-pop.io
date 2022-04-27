import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface Props {}

const Chat: React.FC<Props> = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([""]);

  useEffect(() => {
    if (messages[0] === "") {
      setMessages([]);
    }
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
      <div className="messages">
        {messages &&
          messages.map((m) => {
            return <p key={m}>{m}</p>;
          })}
      </div>
      <form onSubmit={handleSend}>
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
  flex-direction: column;
  flex: 1;
  .messages {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    flex: 1;
    padding: 0 24px 0 12px;
    background: linear-gradient(180deg, rgba(44, 62, 80, 0) 0%, #2c3e50 100%);
    overflow-y: auto;
  }
  form {
    display: flex;
    flex-direction: row;
    max-width: 100%;
    border-radius: 0;
    padding: 0;
    height: 32px;
    border: 4px solid #2c3e50;
    gap: 4px;
    background-color: #2c3e50;
    input {
      flex: 1;
      background-color: #566573;
      border-radius: 0;
    }
    button {
      display: flex;
      align-items: center;
      width: fit-content;
      padding: 6px 16px;
      h3 {
        color: #2c3e50;
      }
    }
  }
`;

export default Chat;
