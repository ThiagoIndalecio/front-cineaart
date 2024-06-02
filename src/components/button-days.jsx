import React, { useState } from "react";
import '../styles/button-days.css'
import 'moment/dist/locale/pt-br'
import moment from 'moment'


export default function ButtonDay({id,day, dayWeek, month}) {
    moment.locale('pt-br')
    const [selectedDate, setSelectedDate] = useState([]);

    const handleButtonClick = (dateValue) => {
        setSelectedDate(dateValue);
      };
    
    return (
        <>

            <button onClick={() => handleButtonClick({day})}className="button-days" key={id}>
                
                <span className="button-days-subtitle">{dayWeek}</span>
                <span className="button-days-tittle">{day}</span>
                <span className="button-days-end">{month}</span>

            </button>
            {console.log(selectedDate.day)}
        </>
    )
}