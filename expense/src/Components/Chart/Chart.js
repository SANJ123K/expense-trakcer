import React, { useEffect } from 'react';
import {
    Chart as ChartJs, 
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
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
    Legend,
);

function IncomeBarChart() {
    const { incomes, getIncomes } = useGlobalContext();

    useEffect(() => {
        getIncomes();
    }, [getIncomes]);

    // Return loading state if incomes are not fetched yet
    if (!incomes || incomes.length === 0) {
        return <div>Loading...</div>;
    }

    const incomeLabels = incomes.map((inc) => dateFormat(inc.date));
    const incomeData = incomes.map((income) => income.amount);

    // Chart data for income bar chart
    const data = {
        labels: incomeLabels,
        datasets: [
            {
                label: 'Income',
                data: incomeData,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',  // Light Green
                borderColor: 'rgba(75, 192, 192, 1)',        // Dark Green
                borderWidth: 1,
            }
        ]
    };

    // Chart options for better appearance and responsiveness
    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Income Over Time',
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
                beginAtZero: true,
            }
        }
    };

    return (
        <BarChartStyled>
            <Bar data={data} options={options} />
        </BarChartStyled>
    );
}

// Styled component for the bar chart container
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

export default IncomeBarChart;
