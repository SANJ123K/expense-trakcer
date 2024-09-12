import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Image } from '../../Assets/Image';

function Page2() {
  const [animatedText, setAnimatedText] = useState(['']);

  useEffect(() => {
    const text = "Experience AI-driven expense tracking at its finest. Our platform leverages the latest in machine learning and robotics to streamline your financial management. Every transaction is carefully categorized and analyzed by intelligent algorithms. With the power of AI, you gain insights like never before, forecasting future expenses, detecting anomalies, and optimizing your budget. This is more than just tracking expenses; it's a financial revolution, designed to make your life easier and your financial decisions smarter. Welcome to the future of personal finance, powered by AI and automation.";
    const words = text.split(" ");
    setAnimatedText(words);
  }, []);

  return (
    <ImageTextStyled>
      <div className="left-side">
        <img src={Image.man} alt="AI-driven expense tracking" />
      </div>
      <div className="right-side">
        <p>
          {animatedText.map((word, index) => (
            <span key={index} className="animated-word" style={{ animationDelay: `${index * 0.05}s` }}>
              {word + ' '}
            </span>
          ))}
        </p>
      </div>
    </ImageTextStyled>
  );
}

const ImageTextStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 350px;
  background: linear-gradient(to right, #e0f7fa, #b9fbc0); /* Lighter background */
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  .left-side {
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .left-side img {
    width: 300px; /* Increased size */
    height: 300px; /* Increased size */
    border-radius: 50%; /* Circular image */
    object-fit: cover;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
    animation: moveImage 8s ease-in-out infinite, rotateImage 10s linear infinite; /* Added rotation animation */
  }

  .right-side {
    width: 55%;
    padding-left: 20px;
    color: #333;
  }

  p {
    font-size: 1.2em;
    line-height: 1.6em;
    color: #333;
  }

  .animated-word {
    opacity: 0;
    transform: translateY(20px);
    display: inline-block;
    animation: fadeInUp 0.5s forwards;
    margin-right: 6px;
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes moveImage {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes rotateImage {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Page2;
