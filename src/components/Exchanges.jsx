import React from 'react';
import './Exchanges.css';


const data = {
  "gate.io": 25,
  "coinbase": 76,
  "binance": 39,
  "huobi": 52,
};

function Excahanges() {
    return (
       <div className='exchangeContainer'>
          <div className = 'title'>
              <div>Most usable exchanges</div>
              <div>See More</div>
          </div>
          <div className='chart'>
              {
                Object.entries(data).map((item)=><div key = {item[0]} className='barItem'>
                    <div className='number'>{item[1]}%</div>
                    <div className='images'>
                        <img alt='img' className='fullbar' src={'images/fullbar.png'} />
                        <img 
                          alt='img' 
                          className = 'fillbar'
                          src={'images/fillbar.png'}
                          style={{
                              height: `${(231*item[1]/100)+'px'}`,
                              width: '50px'
                          }}
                        />
                    </div>
                    <div className='name'>{item[0]}</div>
                </div>)
              }
          </div> 
        

       </div>
    )
}

export default Excahanges;