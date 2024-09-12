import React from 'react'; // Import useEffect
import styled from 'styled-components';
import { menuItems } from '../../utils/menuItems';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Header() {


  const navigate = useNavigate();
  const handleItemClick = (link) => {  
    navigate(link);
  };



  return (
    <HeadStyled>
      <ul className='menu-items'>
        {menuItems.map((item) => (
          <li key={item.id} onClick={() => handleItemClick(item.link)}>
            {item.icon}
            <span>{item.title}</span>
          </li>
        ))}
        <li>
          
            <NavLink to="/login" className="a">Login</NavLink> 
  
        </li>
      </ul>

    </HeadStyled>
  );
}

const HeadStyled = styled.div`
  height: 60px;
  width: 100vw;
  display: flex;
  justify-content: end;
  align-items: center;
  background-color: #232F3E;

  .profile {
    width: 80px;
    border: 1px solid gray;
    background-color: yellow;
  }

  .menu-items {
    color: white;
    display: flex;
    list-style: none;
    width: 50%;
    justify-content: space-around;
    margin-left: 20px;

    li {
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .a{
    text-decoration:none;
    color:white;
  }

  @media (max-width: 768px) {
    .menu-items {
      width: 100%;
      justify-content: space-between;
      margin-left: 10px;
    }
  }

  @media (max-width: 480px) {
    height: auto;
    padding: 10px;

    .menu-items {
      flex-direction: column;
      align-items: center;
      gap: 10px;
      width: 100%;
      padding: 10px 0;
    }

    li {
      text-align: center;
    }
  }
`;

export default Header;
