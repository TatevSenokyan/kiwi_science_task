import React, {useState} from 'react';
import './BarChart.css';


const BarChart = () => {
  const date = ["1h", "24h", "7d", "1m", "3m", "6m", "1y", "All"];
  const [select, setSelect] = useState('1m');

  return (
      <div className='barChartContainer'>
           <div className='barInfo'>
              <img alt='img' src={'images/bar-logo.png'}/>
              <div>
                <img alt='img' src={'images/bar-number.png'}/>
                <div>Mr. Nick Peterson</div>
              </div>
           </div>
           <div className = 'date bardate'>
              {
                  date.map((item)=><div
                      onClick = {()=>setSelect(item)}
                      style={{
                        background: select === item && '#1A202C',
                        border: select === item && '0.911574px solid #A3A0A0',
                        borderRadius: select === item  && '1.82315px'
                      }}
                      className = 'dateItem'
                      key={item}>{item}
                    </div>)
              }
            </div>

      </div>
  )
}

export default BarChart;