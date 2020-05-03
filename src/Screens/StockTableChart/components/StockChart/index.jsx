import React, { useState, useEffect } from 'react';

import { Line } from 'react-chartjs-2';

function LineChart(props) {
  const [close, setClose] = useState([]);
  const [date, setDate] = useState([]);

  const data = {
    labels: date,
    datasets: [
      {
        label: 'Price',
        fill: false,
        backgroundColor: 'rgb(112, 157, 226)',
        borderColor: 'rgb(112, 157, 226)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgb(112, 157, 226)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgb(112, 157, 226)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: close,
      },
    ],
  };
  useEffect(() => {
    setClose(
      props.data
        .map((history) => {
          return history.close;
        })
        .reverse()
    );
    setDate(
      props.data
        .map((history) => {
          return history.date;
        })
        .reverse()
    );
  }, [props]);
  return (
    <Line
      data={data}
      height={100}
      options={{
        responsive: true,
        title: {
          display: true,
          text: 'Closing Price',
          fontSize: 20,
        },
        scales: {
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'Day',
              },
            },
          ],
          yAxes: [
            {
              scaleLabel: {
                labelString: '($)',
                display: true,
              },
              ticks: {
                beginAtZero: true,
                min: 0,
              },
            },
          ],
        },
      }}
    />
  );
}

export default LineChart;
