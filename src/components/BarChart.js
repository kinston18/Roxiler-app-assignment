import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const BarChart = ({ month }) => {
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        fetchChartData();
    }, [month]);

    const fetchChartData = async () => {
        const response = await axios.get('/api/products/bar-chart', { params: { month } });
        const labels = response.data.map(item => item.range);
        const data = response.data.map(item => item.count);

        setChartData({
            labels,
            datasets: [{
                label: 'Number of Items',
                data,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        });
    };

    return (
        <div>
            <Bar data={chartData} />
        </div>
    );
};

export default BarChart;
