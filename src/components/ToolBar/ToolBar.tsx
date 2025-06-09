import React, { useEffect, useState } from 'react';
import './ToolBar.css';

const ToolBar = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            setIsDark(true);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    };

    return (
        <nav className="toolbar">
            <div className="container d-flex justify-content-between align-items-center">
                <span className="toolbar-title">Personal Finance Tracker</span>
                <button
                    onClick={toggleTheme}
                    className="btn-toggle fs-5"
                    aria-label="Toggle theme"
                >
                    {isDark ? '☀️' : '🌙'}
                </button>
            </div>
        </nav>
    );
};

export default ToolBar;
