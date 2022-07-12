import React, { useEffect } from "react";
const axios = require("axios").default;

interface Props {}

const Account: React.FC<Props> = () => {
  useEffect(() => {
    axios
      .get("/test")
      .then((response: any) => {
        console.log(response);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  return <div>Account</div>;
};

export default Account;
