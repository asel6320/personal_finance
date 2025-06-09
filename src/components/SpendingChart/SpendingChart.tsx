import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';
import React from 'react';
import { IItem } from '../../types';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

interface Props {
    items: IItem[];
    type?: 'pie' | 'bar';
}

const SpendingChart: React.FC<Props> = ({ items, type = 'pie' }) => {
    const totals: Record<string, number> = {};

    items.forEach((item) => {
        totals[item.category] = (totals[item.category] || 0) + item.cost;
    });

    const data = {
        labels: Object.keys(totals),
        datasets: [
            {
                label: 'Total spent (KGS)',
                data: Object.values(totals),
                backgroundColor: [
                    '#0d6efd', // Bootstrap primary
                    '#198754', // Bootstrap success
                    '#ffc107', // Bootstrap warning
                    '#dc3545', // Bootstrap danger
                    '#6f42c1', // Optional purple
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="mt-4">
            {type === 'bar' ? (
                <Pie data={data} />
            ) : (
                <Bar data={data} />
            )}
        </div>
    );
};

export default SpendingChart;
