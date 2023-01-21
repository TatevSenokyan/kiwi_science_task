import React from 'react';
import './Stats.css';


function Stats () {
    return (
      <>
      <div className="statsContainer">
          <div className = "statsContent">
              <div className='info'>
                  <div  className='balance'>
                      <span className = 'text'>Hide small balances</span>
                      <img src={'images/hide.png'} className = 'hideImg' alt='img'/>
                  </div>
                  <div  className='sort'>
                      <span className = 'text'>Sort</span>
                      <img src={'images/sort.png'} alt='img'/>
                  </div>

              </div>
              <input placeholder='Search your exchange' className='input'/>
              <div className='metamask'>
                  <img src={'images/fox.png'} alt='img' />
                  <span >Metamask</span>
                  <div>4.85%</div>
                  <img src={'images/decrease.png'} alt = 'img' className ='decrImg' />
                  <img src={'images/edit.png'} alt = 'img' className ='editImg' />
                  <img src={'images/delete.png'} alt = 'img' className ='incrImg' />
              </div>
              <div className = 'binance'>
                  <div className = 'binanceContent'>
                    <div className='metamask'>
                        <img src={'images/binance.png'} alt = 'img' />
                        <span >Binance</span>
                        <div>4.85%</div>
                    </div>
                    <div className='binanceAmount'>
                      <div>$1000.00</div>
                      <img src = {'images/increase.png'} alt= 'img' />
                    </div>
                  </div>
                  <div className='border'></div>
                  <div className='binanceBtns'>
                      <div className='saving'>
                          <img alt='img' src={'/images/binance.png'} />
                          <span>Binance Savings</span>
                      </div>
                      <div className = 'saving future'>
                        <img alt='img' src={'/images/binance.png'} /> 
                        <span>Binance Futures</span>
                      </div>
                  </div>
                  <div className = 'coinbase'>
                      {
                          [1, 2, 3, 4].map((item)=><div key = {item} className='metamask'>
                            <img src={'images/coinbase.png'} alt='img' />
                            <span >Metamask</span>
                            <div>4.85%</div>
                            <img src={'images/decrease.png'} alt = 'img' className ='decrImg' />
                            <img src={'images/edit.png'} alt = 'img' className ='editImg' />
                            <img src={'images/delete.png'} alt = 'img' className ='incrImg' />
                          </div>)
                      }

                  </div>
              </div>
              
          </div>
      </div>
      <div className = 'subscribe'>
          <div>
             Your free trial has been started․ There are
             <br />
             <span>5 days</span> left.
          </div>
      </div>
     </>
    )
}

export default Stats;