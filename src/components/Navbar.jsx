import React, {useState} from 'react';
import './Navbar.css';


function Navbar() {
    const [selected, setSelected] = useState('home');
    const navbar = ['home', 'portfolio', 'pricing', 'marketplace', 'futures', 'settings'];
    return (
      <div className="navbarContainer">
        <div className = "navbarWrapper">
          <img src={`images/logo.png`} alt='logo'/>
          <div style={{width: '58%', display: 'flex'}}>
          {
              navbar.map((item, i)=><div 
                 className = "navItem"
                 onClick = {()=>setSelected(item)}
                 style={{background: item === selected && 'linear-gradient(180deg, #A37DF9 0%, #7B5AC5 100%)'}}
               >
                    <img 
                       alt = 'img'
                       style = {{
                           marginBottom: i===1 || i === 2 ? '5px' : '0px', 
                        }}
                       src={`images/${item}.png`}
                    />
                    <span>{item}</span>
                    {i === 1 && <img style = {{padding: '0px 15px'}} src={`images/arrow.png`} alt='arrow'/>}
                    {i === 5 && <img style = {{padding: '0px 15px'}} src={`images/arrow.png`} alt = 'arrow'/>}
                </div>
              )
          }
          </div>
          <div className = "mode">
              <img src = {`images/user.png`} alt='img'/>
              <img src = {`images/mode.png`} alt='img' />
          </div>

        </div>
      </div>
    );
  }
  
  export default Navbar;