import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';

const PieChart = ({ month }) => {
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        fetchChartData();
    }, [month]);

    const fetchChartData = async () => {
        const response = await axios.get('/api/products/pie-chart', { params: { month } });
        const labels = response.data.map(item => item.category);
        const data = response.data.map(item => item.count);

        setChartData({
            labels,
            datasets: [{
                label: 'Number of Items',
                data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        });
    };

    return (
        <div>
            <Pie data={chartData} />
        </div>
    );
};

export default PieChart;
