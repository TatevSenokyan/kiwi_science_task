import React, {useState} from 'react';
import './AreaChart.css';


const AreaChart = () => {
  const date = ["1h", "24h", "7d", "1m", "3m", "6m", "1y", "All"];
  const [select, setSelect] = useState('7d');
  return (
      <div className='areaChartContainer'>
        <div className = 'futuretitle'>
            <div>Futures</div>
            <div>See More</div>
        </div>
        <div className = 'areaChartWrapper'>
           <div className = 'futureInfo'>
              <div className='firstSection'>
                 <div>3/22/2022 17:51:03 PM</div>
                 <div style={{marginTop: '9px'}}>
                   <img alt='img' src={'images/future-inc.png'} />
                   <div style={{color: '#61E224'}}>$0.74</div>
                   <img alt='img' src={'images/future-decr.png'} />
                   <div style={{color: '#FF0000'}}>0.58%</div>
                 </div>
              </div>
              <div className = 'secondSection'>
                 $3,698.58
              </div>
           </div>
           <div className='areaChart'>
            <div className = 'date areadate'>
              {
                  date.map((item)=><div
                      onClick = {()=>setSelect(item)}
                      style={{
                        background: select === item && '#1A202C',
                        border: select === item && '0.911574px solid #A3A0A0',
                        borderRadius: select === item  && '1.82315px'
                      }}
                      className = 'dateItem areaItem'
                      key={item}>{item}
                    </div>)
              }
            </div>
           </div>
           <div className='chartBottom'>
              <div>
                 <div>Assets:</div>
                 <hr />
                 <div>ES</div>
              </div>
              <div>
                 <div>Margin balance</div>
                 <hr />
                 <span>$12.50</span>
              </div>
              <div>
                <div>Wallet balance</div>
                <hr />
                <span>$5,225.00</span>
              </div>
           </div>
        </div>

      </div>
  )
}

export default AreaChart;