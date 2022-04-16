import React from "react";
import NavBar from "../components/header/NavBar";
import useFetch from "use-http";
import { useState, useEffect } from "react";

interface Props {}

const Main: React.FC<Props> = () => {
  const [message, setMessage] = useState("");

  const options = {};
  const {
    get,
    loading,
    error,
    response = [],
  } = useFetch("http://localhost:8080");

  useEffect(() => {
    loadMessage();
  }, []);

  async function loadMessage() {
    const data = await get("/");
    setMessage(data.message);
  }

  return (
    <>
      <NavBar />
      {error && "Error!"}
      {loading && "Loading..."}
      {message && message}
      <p>Hello World</p>
    </>
  );
};

export default Main;
