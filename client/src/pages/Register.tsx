import dayjs from "dayjs";
import React, { useState } from "react";
import styled from "styled-components";
import { daysInMonth } from "../global";
import { Link } from "react-router-dom";

interface Props {}

const Register: React.FC<Props> = () => {
  const [part1, setPart1] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [days, setDays] = useState<String[]>([]);
  const [years, _] = useState<Number[]>(() => {
    const yearList = [];
    for (let i = dayjs().year() - 10; i > dayjs().year() - 90; i--) {
      yearList.push(i);
    }
    return yearList;
  });
  const [username, setUsername] = useState("");
  const [label, setLabel] = useState("");

  function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const userInfo = {
      firstName: first,
      lastName: last,
      DOB: year + "-" + month + "-" + day,
      email,
      password,
      username,
      label,
    };
    console.log(userInfo);
  }

  return (
    <Container>
      <div className="top">
        <div className="pane">
          <img
            src="/images/login1.png"
            alt="BLACKPINK"
            width="100%"
            height="100%"
          />
        </div>
        <div className="main">
          <div className="wrapper">
            <div className="form-wrapper">
              <h1>Register</h1>
              <form onSubmit={handleRegister}>
                {part1 && (
                  <div id="part1" className="part">
                    <div className="section">
                      <div className="item">
                        <label>Name</label>
                        <input
                          onChange={(e) => {
                            setFirst(e.currentTarget.value);
                          }}
                          placeholder="First"
                          value={first}
                          type="text"
                          name="first"
                          required
                        />
                      </div>
                      <div className="item">
                        <input
                          onChange={(e) => {
                            setLast(e.currentTarget.value);
                          }}
                          placeholder="Last"
                          value={last}
                          type="text"
                          name="last"
                          required
                        />
                      </div>
                    </div>
                    <div className="section">
                      <div className="item">
                        <label htmlFor="email">Date of Birth</label>
                        <div className="row">
                          <select
                            onChange={(e) => {
                              setMonth(e.currentTarget.value);
                              setDays(
                                daysInMonth(
                                  Number.parseInt(e.currentTarget.value)
                                )!
                              );
                            }}
                            value={month}
                            id="month"
                            required
                          >
                            <option value="" selected disabled>
                              Month
                            </option>
                            <option value="01">Jan</option>
                            <option value="02">Feb</option>
                            <option value="03">Mar</option>
                            <option value="04">Apr</option>
                            <option value="05">May</option>
                            <option value="06">Jun</option>
                            <option value="07">Jul</option>
                            <option value="08">Aug</option>
                            <option value="09">Sep</option>
                            <option value="10">Oct</option>
                            <option value="11">Nov</option>
                            <option value="12">Dec</option>
                          </select>
                          <select
                            onChange={(e) => {
                              setDay(e.currentTarget.value);
                            }}
                            id="day"
                            disabled={days.length === 0 ? true : false}
                            required
                          >
                            <option value={0} selected disabled>
                              Day
                            </option>
                            {days?.map((num) => {
                              return <option key={`day${num}`}>{num}</option>;
                            })}
                          </select>
                          <select
                            onChange={(e) => {
                              setYear(e.currentTarget.value);
                            }}
                            id="year"
                            required
                          >
                            <option value={0} selected disabled>
                              Year
                            </option>
                            {years?.map((num) => {
                              return (
                                <option key={`year${num}`}>
                                  {num.toString()}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="section">
                      <div className="item">
                        <label htmlFor="email">Email</label>
                        <input
                          onChange={(e) => {
                            e.preventDefault();
                            setEmail(e.currentTarget.value);
                          }}
                          value={email}
                          type="text"
                          id="email"
                          autoComplete="off"
                          required
                        />
                      </div>
                    </div>
                    <div className="section">
                      <div className="item">
                        <label htmlFor="password">Password</label>
                        <input
                          onChange={(e) => {
                            e.preventDefault();
                            setPassword(e.currentTarget.value);
                          }}
                          value={password}
                          type="password"
                          id="password"
                          autoComplete="off"
                          required
                        />
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setPart1(false);
                      }}
                    >
                      Next
                    </button>
                  </div>
                )}
                {!part1 && (
                  <div id="part2" className="part">
                    <div className="section">
                      <div className="item">
                        <label htmlFor="username">
                          What is the name of your company?
                        </label>
                      </div>
                      <div className="item">
                        <input
                          onChange={(e) => {
                            setUsername(e.currentTarget.value);
                          }}
                          value={username}
                          type="text"
                          id="username"
                          autoComplete="off"
                          required
                          autoFocus
                        />
                      </div>
                      <div className="item">
                        <select
                          id="label"
                          onChange={(e) => {
                            setLabel(e.currentTarget.value);
                          }}
                        >
                          <option value="" selected disabled>
                            Label
                          </option>
                          <option>Entertainment</option>
                          <option>Media</option>
                          <option>Nation</option>
                          <option>Company</option>
                          <option>Music</option>
                          <option>Culture</option>
                          <option>Records</option>
                          <option>Studio</option>
                          <option>Island</option>
                          <option>Asia</option>
                          <option>Agency</option>
                          <option value=""></option>
                        </select>
                      </div>
                    </div>
                    <div className="between">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setPart1(true);
                        }}
                      >
                        Back
                      </button>
                      <button type="submit">Register</button>
                    </div>
                  </div>
                )}
              </form>
            </div>
            <div className="around">
              <span>
                <Link to={"/login"}>Login</Link>
              </span>
              <span>Forgot Password?</span>
            </div>
          </div>
        </div>
        <div className="pane">
          <img src="/images/login2.png" alt="ITZY" width="100%" height="100%" />
        </div>
      </div>
      <div className="bottom">Carousel</div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #2c3e50;
  background-color: #cccccc;
  border: 10px solid #566573;
  height: 100vh;
  box-sizing: border-box;
  .top {
    display: flex;
    flex: 1;
    max-height: 80vh;
    img {
      display: flex;
    }
    .main {
      border-right: 10px solid #566573;
      border-left: 10px solid #566573;
      background-image: url("/images/bg.png");
      background-size: cover;
      background-position: left;
      background: 
      display: flex;
      flex: 1;
      padding: 40px;
      justify-content: center;
      align-items: center;
      background-color: #EEDEE1;
      .wrapper {
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 100%;
        height: 100%;
        justify-content: center;
        max-width: 370px;
        h1 {
          margin: 16px 0;
        }
      }
    }
  }
  .bottom {
    display: flex;
    background-color: #2c3e50;
    height: 20vh;
    border-top: 10px solid #566573;
  }
  .form-wrapper {
    background-color: #2c3e50;
    color: #cccccc;
    border-radius: 16px;
    h1 {
      padding: 0 24px;
    }
    form {
      border-radius: 0 0 16px 16px;
    }
  }

  @media only screen and (max-width: 1700px) {
    .main {
      background-image: none !important;
      .wrapper {
      margin: 0 auto;
      }
    }
  }
`;

export default Register;
