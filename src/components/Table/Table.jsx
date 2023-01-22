import React from 'react';
import './Table.css';

const data =[
   {
       name: 'Aave Abat v2',
       amount: 99,
       total: '$56.48',
       charge: '1.88%',
       cap: '72.8B',
       price: 9.12455558,
       graph: 'graph',
       dot: 'dot',
   },
   {
        name: 'Aave Abat v2',
        amount: 99,
        total: '$56.48',
        charge: '1.88%',
        cap: '72.8B',
        price: 9.12455558,
        graph: 'graph',
        dot: 'dot',
   },
   {
        name: 'Aave Abat v2',
        amount: 99,
        total: '$56.48',
        charge: '1.88%',
        cap: '72.8B',
        price: 9.12455558,
        graph: 'graph',
        dot: 'dot',
    }

];

export default function Table() {
    return(
      <div className='tableContainer'>
        <div className = 'tabletitle'>
            <div>Holdings</div>
            <div>See More</div>
        </div>
        <table>
            <tr>
                <th>Name</th>
                <th>Amount</th>
                <th>Total</th>
                <th>1 Hour Charge</th>
                <th>Market Cap</th>
                <th>Price in BTC</th>
                <th>Price Graph(7D)</th>
                <th><img src={'images/burger.png'} alt='img'/></th>
            </tr>
            {
                data.map((item, i)=><tr key={i} className='tableRow'>
                    <td className='rowName'>
                       <img src={`images/${item.name.split(' ')[0]}.png`} alt='img'/>
                       <span>{item.name}</span>
                    </td>
                    <td>{item.amount}</td>                          
                    <td>{item.total}</td>      
                    <td className='charge'>
                       <img src={'images/charge.png'} alt='img'/>
                       <span>{item.charge}</span>
                    </td>
                    <td>{item.cap}</td>
                    <td>{item.price}</td>
                    <td><img src={'images/graph.png'} alt='img'/></td>
                    <td><img src={'images/dot.png'} alt='img'/></td>
                </tr>)
            }
        </table>
      </div>
    );
}