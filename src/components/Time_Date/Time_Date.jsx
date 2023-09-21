import React from 'react'

const Time_Date = () => {

  // date
  let d = new Date();
  let date = d.getDate();
  let year = d.getFullYear();
  let month = d.toLocaleString('default', { month: 'long' });
  let day = d.toLocaleString('default', { weekday: 'long' });

  // time
  let time = d.toLocaleString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  return (
    <div>
      <p className="card-text lead fw-bold">{day}, {month} {date}, {year} </p>
      <h4>{time}</h4>
    </div>
  )
}

export default Time_Date
