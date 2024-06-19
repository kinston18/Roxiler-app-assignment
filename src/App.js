import React, { useState } from 'react';
import TransactionsTable from './components/TransactionsTable';
import StatisticsDisplay from './components/StatisticsDisplay';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';

const App = () => {
    const [month, setMonth] = useState('01');

    return (
        <div>
            <h1>Product Transactions Dashboard</h1>
            <div>
                <label>Select Month: </label>
                <select value={month} onChange={(e) => setMonth(e.target.value)}>
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
            </div>
            <StatisticsDisplay month={month} />
            <TransactionsTable month={month} />
            <BarChart month={month} />
            <PieChart month={month} />
        </div>
    );
};

export default App;
