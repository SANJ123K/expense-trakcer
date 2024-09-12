// export default Dashboard
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Image } from '../../Assets/Image'

function Page1() {
  const [animatedText, setAnimatedText] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const text = "With AIxpense, you can easily and quickly track all your expenses. Enjoy full control over your finances. AIxpense provides easy access to all your financial information at your fingertips. Start managing your finances more efficiently.";
    const words = text.split(" ");
    setAnimatedText(words);
  }, []);

  const handleButtonClick = () => {
    setShowPopup(true);  // Show popup when button is clicked
  };

  const closePopup = () => {
    setShowPopup(false);  // Close popup
  };

  return (
    <DashboardStyled>
      <div className='left-container'>
        <h1>AIxpense - Money Tracker</h1>
        <p>
          {animatedText.map((word, index) => (
            <span key={index} className="animated-word" style={{ animationDelay: `${index * 0.1}s` }}>
              {word + ' '}
            </span>
          ))}
        </p>
        <div className="button-container">
          <button className='total-amount' style={{"backgroundColor":"Yellow"}} onClick={handleButtonClick}>
            <span>Total Amount</span>
            <span className="amount-value" >$0</span>
          </button>
          <div className="expense-income-buttons">
            <button className='expense-income' style={{"backgroundColor":"Red"}}  onClick={handleButtonClick}>
              <span>Expense</span>
              <span className="amount-value">$0</span>
            </button>
            <button className='expense-income' style={{"backgroundColor":"Green"}} onClick={handleButtonClick}>
              <span>Income</span>
              <span className="amount-value">$0</span>
            </button>
          </div>
        </div>
      </div>
      <div className='right-container'>
        <img src={Image.girls} alt="Financial Tracker" />
      </div>

      {showPopup && (
        <Popup>
          <div className="popup-content">
            <h2>Please Login</h2>
            <button onClick={closePopup}>Close</button>
          </div>
        </Popup>
      )}
    </DashboardStyled>
  )
}

const DashboardStyled = styled.div`
  height: 500px;
  width: 100vw;
  background: radial-gradient(circle at center, #1A4F6E 20%, #0a0a23 100%);
  display: flex;
  color: white;

  .left-container {
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Align left */
    justify-content: center;
    padding-left: 40px; /* Padding for better spacing */
  }

  h1 {
    margin-bottom: 20px;
    font-size: 2.5em;
  }

  p {
    margin-bottom: 40px;
    font-size: 1.2em;
    line-height: 1.6em;
    max-width: 80%; /* Ensure paragraph does not span full width */
  }

  .animated-word {
    opacity: 0;
    transform: translateX(-20px);
    display: inline-block;
    animation: fadeInLeft 0.8s forwards;
    margin-right: 5px; /* Adds space between words */
  }

  @keyframes fadeInLeft {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .button-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Align buttons to the left */
    justify-content: center;
    margin-bottom:10px;
  }

  .total-amount, .expense-income {
    color:Black;
    border: none;
    border-radius: 10px;
    padding: 15px;
    height: 80px;
    min-width: 150px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }
   .total-amount{
    margin-left:70px;
    background-color:yellow;
    }
  .amount-value {
    font-size: 20px;
    font-weight: bold;
    margin-top: 5px; /* Space between text and number */
  }

  .expense-income-buttons {
    display: flex;
    gap: 15px;
    margin-top: 20px; /* Adds space below the total amount button */
  }

  .right-container {
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;

  .popup-content {
    background-color: white;
    color: black;
    padding: 20px;
    border-radius: 10px;
    text-align: center;

    h2 {
      margin-bottom: 20px;
    }

    button {
      padding: 10px 20px;
      background-color: #1A4F6E;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`

export default Page1;
