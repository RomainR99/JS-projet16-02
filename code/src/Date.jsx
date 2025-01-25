import React, { useEffect, useState } from 'react';

function DateComponent() {
    const [currentDate, setCurrentDate] = useState("");

    useEffect(() => {
        const date = new Date();
        date.setFullYear(2025); 
        date.setMonth(0); 
        date.setDate(1); 
        const formattedDate = date.toDateString(); 
        setCurrentDate(formattedDate); 
    }, []);

    return (
        <div style={{ color: "white", fontSize: "24px", textAlign: "center" }}>
            {currentDate ? `${currentDate}` : "Chargement..."} {/* date sinon : Chargement...*/}
        </div>
    );
}

export default DateComponent;

