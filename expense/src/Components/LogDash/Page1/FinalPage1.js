import React from 'react';
import TopPage1 from './TopPage1';
import { Chart } from 'react-chartjs-2';
import IncomeHistory from '../Page2/AddIncomeHistory';
import ExpenseHistory from '../Page3/ExpenseHistory';
import styled from 'styled-components';
import BarChart from '../../Chart/BarChart';

function FinalPage() {
  return (
    <StyledFinalPage>
      <TopPage1 />
      {/* <Chart/> */}
      <BarChart/>
      <div className='middle'>
        <IncomeHistory />
        <ExpenseHistory />
      </div>
    </StyledFinalPage>
  );
}

const StyledFinalPage = styled.div`
  display: flex;
  flex-direction: column;


  .middle {
    display: flex;
    justify-content: space-around;
    margin-top: 20px; /* Adds space between chart and the history sections */
  }
  .chart{
  display:flex;
  width:100vw;
  justify-content:space-around;
  }
`;

export default FinalPage;
