import React, { useState } from "react";
import { Image } from "../../Assets/Image";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('user@gmail.com');
  const [password, setPassword] = useState('user@123');

  const handle = (e) =>{
    e.preventDefault();
    console.log(email, password);
  }

  return (
    <LoginStyled onSubmit={handle}>
      <div className="login-left">
        <h1>AIxpense - Money Tracker</h1>
        <img src={Image.login} alt="Login Illustration" />
        <p>Track all your expenses quickly and efficiently with AIxpense. Enjoy complete control over your finances and access financial information at your fingertips.</p>
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-center">
            <h2>Welcome Back!</h2>
            <p>Please enter your details to log in.</p>
            <form>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
              <input
                type='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
              <div className="login-center-buttons">
                <button type="submit" className="btn">Log In</button>
                <button type="button" className="btn google-btn">
                  <img src={Image.google} alt="Google Logo" />
                  Log In with Google
                </button>
              </div>
            </form>
            <p className="login-bottom-p">
              Don't have an account? <NavLink to="/signup">Sign Up</NavLink>
            </p>
          </div>
        </div>
      </div>
    </LoginStyled>
  );
};

const LoginStyled = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f7f9fc; /* Light, unified background color */

  .login-left, .login-right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

  .login-left {
    background-color: #ffffff; /* White background for left side */
    display: flex;
    flex-direction: column;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .login-left h1 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 20px;
  }

  .login-left img {
    width: 80%;
    max-width: 400px;
    border-radius: 50%;
    margin-bottom: 20px;
  }

  .login-left p {
    font-size: 1.1rem;
    color: #666;
    line-height: 1.5;
  }

  .login-right {
    background-color: #ffffff; /* White background for right side */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .login-right-container {
    width: 100%;
    max-width: 400px;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
  }

  .login-center {
    text-align: center;
  }

  .login-center h2 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 10px;
  }

  .login-center p {
    font-size: 1rem;
    color: #666;
    margin-bottom: 20px;
  }

  form input {
    width: calc(100% - 32px);
    padding: 14px;
    margin: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    box-sizing: border-box;
  }

  .login-center-options {
    margin: 10px 0;
  }

  .remember-div {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.9rem;
    color: #666;
  }

  .login-center-buttons {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .btn {
    width: 100%;
    padding: 14px;
    border: none;
    border-radius: 30px;
    font-size: 16px;
    cursor: pointer;
    font-weight: 600;
    transition: background-color 0.3s, color 0.3s;
  }

  .btn.google-btn {
    background-color: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .btn.google-btn img {
    width: 24px;
  }

  .btn:hover {
    background-color: #333;
    color: white;
  }

  .btn.google-btn:hover {
    background-color: #e0e0e0;
  }

  .login-bottom-p {
    text-align: center;
    font-size: 0.9rem;
    margin-top: 20px;
  }

  .login-bottom-p a {
    text-decoration: none;
    font-weight: 600;
    color: #007bff;
  }

  .login-bottom-p a:hover {
    text-decoration: underline;
  }


`;

export default Login;
