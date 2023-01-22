import React from 'react';
import './LineChart.css';
import {Line} from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, LineElement, Filler, CategoryScale, LinearScale, PointElement } from "chart.js";

ChartJS.register(ArcElement, Tooltip, LineElement, Filler, CategoryScale, LinearScale, PointElement);


const LineChart = () => {
  return (
      <div className='lineChartContainer'>
         <Line 
          data= {{
            labels: ['May 2021', 'Jun 2021', 'Jul 2021', 'Aug 2021', 'Sep 2021', 'Oct 2021', 'Nov 2021', 'Dec 2021'],
            datasets: [{
              data: [400, 500, 510, 450, 300, 350, 400, 200],
              fill: false,
              borderColor: '#805AD5',
              tension: 0.4
            }]
          }}
          margin = 'auto'
          width='625px'
          height = '177'
          options = {{
            plugins : {
              tooltip: {
                yAlign: "bottom",
                backgroundColor: 'white',
                bodyColor: 'black',
                paddingLeft: 30
              }
            },
            scales: {
              x: {
                grid: {
                  color: (context)=>{
                    if(context.tick.value === 0) {
                      return '#686868'
                    } else {
                      return 'transparent'
                    }
                  }
                },
                ticks: {
                  color: '#FFFFFF'
                }
              },
              y: {
                grid: {
                  color: '#686868'
                },
                ticks: {
                  color: '#FFFFFF'
                }
              }
            }
          }}
         />
      </div>
  )
}

export default LineChart;