import React, { useState, useEffect } from 'react';

const DateComponent = () => {
    const [date, setDate] = useState(new Date());

   
    const tick = () => {
        setDate(new Date());
    };

    
    useEffect(() => {
        const timerId = setInterval(tick, 1000);   
        return () => clearInterval(timerId);
    }, []);

    return (
        <div>
            <h1>Текущий год: {date.getFullYear()}</h1>
        </div>
    );
};

export default DateComponent;
