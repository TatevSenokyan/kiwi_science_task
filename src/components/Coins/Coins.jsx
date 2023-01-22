import React, {useState} from 'react';
import './Coins.css';

const data = {
   '1h': {
      gainer: 0.8,
      looser: 0.8,
   },
   '24h': {
      gainer: 0.5,
      looser: 0.6,
    },
    '1m': {
        gainer: 0.5,
        looser: 0.9,
    },
    '7d': {
        gainer: 0.74,
        looser: 0.74,
    },
    '3m': {
        gainer: 0.7,
        looser: 0.79,
    },
    '6m': {
        gainer: 0.5,
        looser: 0.9,
    },
    '1y': {
        gainer: 0.4,
        looser: 0.6,
    },
};

function Coins() {
    const date = ["1h", "24h", "7d", "1m", "3m", "6m", "1y", "All"];
    const [select, setSelect] = useState('7d');
    const [height, setHeight] = useState("121px");

    const update=(item)=>{
        const all = data[item].gainer+data[item].looser;
        const newHeight = data[item].looser*242/all;
        setHeight(newHeight+'px');
        setSelect(item);

    }
    return(
      <div className = 'coinsContainer'>
        <div className = 'cointitle'>
            <div>Coins</div>
            <div>See More</div>
        </div>
        <div className='topGainer'>
            TOP <span style={{color: '#61E224'}}>Gainer</span>
            <br />
            <span>Apecoin</span>
            <br />
            <img alt='img' src={'images/inc-arrow.png'} />
            <span style={{marginLeft: '5px'}}>{data[select].gainer}%</span>
        </div>
        <div className='coinChart'>
          <div style={{height: height, width: '213px'}} className = 'looser'>
          </div>
        </div>
            <div className='topLooser'>
                TOP <span style={{color: '#D23737'}}>Looser</span>
                <br />
                <span>Apecoin</span>
                <br />
                <img alt='img' src={'images/decr-arrow.png'} />
                <span style={{marginLeft: '5px'}}>{data[select].looser}%</span>
            </div>
        <div className = 'date'>
           {
               date.map((item)=><div
                  onClick = {()=>update(item)}
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

export default Coins;