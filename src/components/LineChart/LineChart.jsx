import React, {useState} from 'react';
import './LineChart.css';
import {Line} from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, LineElement, Filler, CategoryScale, LinearScale, PointElement } from "chart.js";

ChartJS.register(ArcElement, Tooltip, LineElement, Filler, CategoryScale, LinearScale, PointElement);


const LineChart = () => {
  const [checkedUSD, setCheckedUSD] = useState(true);
  const [checkedBTC, setCheckedBTC] = useState(true);
  const [checkedETH, setCheckedETH] = useState(false);

  const hoveraValue = {
    id: 'hoverValue',
    afterDatasetsDraw(chart, args, pluginOptions) {
      const {ctx, data, options} = chart;
      ctx.save();
      console.log( active.element.x, active.element.y)
      chart.getActiveElements().forEach((active)=> {
         ctx.drawImage(<img src={'images/point.png'}/>, active.element.x, active.element.y, 10, 10);
      });;
    }

  }

  return (
      <div className='lineChartContainer'>
        <div className='total'>
          <div>Total Points</div>
          <select className='all'>
            <option>All</option>
          </select>
          <select className='dateSelect'>
            <option>1 year</option>
          </select>
          <span>See more</span>
        </div>
        <div className='chartIcons'>
          <img src = {'images/minus.png'} alt='img' />
          <img src = {'images/plus.png'} alt='img' />
          <img src = {'images/zoom.png'} alt='img' />
          <img src = {'images/home-icon.png'} alt='img' />
          <img src = {'images/hand.png'} alt='img' />
        </div>
        <div className='wrapper'>
         <Line 
          data= {{
            labels: ['May 2021', 'Jun 2021', 'Jul 2021', 'Aug 2021', 'Sep 2021', 'Oct 2021', 'Nov 2021', 'Dec 2021'],
            datasets: [{
              data: [400.000, 500.000, 510.000, 450.000, 300.000, 350.000, 400.000, 200.000],
              fill: false,
              borderColor: '#805AD5',
              tension: 0.4
            }]
          }}
          margin = 'auto'
          width='625px'
          height = '177px'
          options = {{
            // elements: {
            //   point:{
            //       radius: 1
            //   }
            // },
            plugins : {
              tooltip: {
                displayColors: false,
                yAlign: "bottom",
                backgroundColor: 'white',
                bodyColor: 'black',
                paddingLeft: 30,
                callbacks: {
                  label: function(tooltipItem) {
                    console.log(tooltipItem)
                      return "$" + tooltipItem.raw+'.000'
                  },
                  title : () => null
                },
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
                   color: (context)=>{
                     if(context.index%2===0) {
                       return '#686868'
                     } else {
                       return 'transparent'
                     }
                   }
                },
                ticks: {
                  color: '#FFFFFF',
                  callback: function(value, index, ticks) {
                    return '$' + value+'.000';
                  }
                }
              }
            }
          }}
         />
      </div>
      <div className='checkbox'>
        <div>
          <div 
             onClick = {()=>setCheckedUSD(!checkedUSD)} 
             className='custominput'
             style={{
               backgroundImage: checkedUSD && `url(../images/checked.png)`
             }}
            >
           </div>
          <span>USD</span>
        </div>
        <div>
        <div 
            onClick = {()=>setCheckedBTC(!checkedBTC)} 
            className='custominput'
            style={{
               backgroundImage: checkedBTC && `url(../images/checked.png)`
            }}
          >
          </div>
          <span>BTC</span>
        </div>
        <div>
        <div 
            onClick = {()=>setCheckedETH(!checkedETH)} 
            className='custominput'
            style={{
              backgroundImage: checkedETH && `url(../images/checked.png)`
            }}
         >
        </div>
        <span>ETH</span>
       </div>
      </div>
    </div>
  )
}

export default LineChart;