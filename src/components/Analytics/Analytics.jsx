import React from 'react';
import './Analytics.css';

const data = [
  {
    img: 'coin',
    desc: 'Total Trade Count',
    value: 128
  },
  {
    img: 'exchange',
    desc: 'The Most Used Exchanges',
    value: 'binance'
  },
  {
    img: 'withdraw',
    desc: 'Total Withdraw',
    value: '$200'
  },
  {
    img: 'fee',
    desc: 'Total Fee Paid',
    value: '$12'
  }
];



export default function Analytics() {
    return(
       <div className='analitycsContainer'>
           <div className = 'analyticstitle'>
            <div>Analytics</div>
            <div>See More</div>
           </div>
           <div className='dataContainer'>
              {
                  data.map((item, i)=><div key={i} className='dataItem'>
                     <div className='dataItemContent'>
                         <img src={`images/${item.img}.png`} alt = 'img'/>
                         <div className='desc' style={{marginLeft: i===1 && '30px'}}>
                            {item.desc}
                         </div>
                         <div className='value'>
                           {i===1 && <img src={`images/${item.value}.png`} alt = 'img'/>} 
                           {item.value}
                         </div>
                     </div>
                  </div>)
              }
           </div>

       </div>
    )
}