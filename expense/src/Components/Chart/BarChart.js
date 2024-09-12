import React, { useEffect } from 'react';
import {
    Chart as ChartJs, 
    CategoryScale, 
    LinearScale, 
    BarElement, 
    Title, 
    Tooltip, 
    Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import { dateFormat } from '../../utils/dateFormat';

ChartJs.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function BarChart() {
    const { incomes, expenses, getExpenses, getIncomes } = useGlobalContext();

    useEffect(() => {
        getExpenses();
        getIncomes();
    }, [getExpenses, getIncomes]);

    const incomeLabels = incomes.length > 0 ? incomes.map((inc) => dateFormat(inc.date)) : [];
    const incomeData = incomes.length > 0 ? incomes.map((income) => income.amount) : [];
    const expenseData = expenses.length > 0 ? expenses.map((expense) => expense.amount) : [];

    // Data for the Bar Chart
    const data = {
        labels: incomeLabels,
        datasets: [
            incomes.length > 0 && {
                label: 'Income',
                data: incomeData,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
            expenses.length > 0 && {
                label: 'Expenses',
                data: expenseData,
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            }
        ].filter(Boolean) // Remove undefined datasets if income or expenses are missing
    };

    // Chart options
    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Income vs Expenses Over Time',
                font: {
                    size: 18
                }
            },
            legend: {
                position: 'top',
            },
            tooltip: {
                enabled: true
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    return (
        <BarChartStyled>
            <Bar data={data} options={options} />
        </BarChartStyled>
    );
}

// Styled component for the chart container
const BarChartStyled = styled.div`
    width: 100%;
    max-width: 700px;
    background: #FFFFFF;
    border: 2px solid #F0F0F0;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    border-radius: 20px;
    margin: 2rem auto;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        padding: 1.5rem;
        max-width: 100%;
    }

    @media (max-width: 480px) {
        padding: 1rem;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
    }
`;

export default BarChart;
