import React from 'react';
import Card from './card'

const Input = ({value, date, device, setValue})=> {
  return (
    <div className="parent" >
    <div className="child1" >
      <h2 className="name" >{value}</h2>
          <h4>{date}</h4>
          <button className="button">Case Study</button>
          <h1>Amazon Gift Pay</h1>
            <h3>Desktop- {device}</h3>
    </div>
    <div className="child2" >
       <img src="http://pngimg.com/uploads/amazon/amazon_PNG5.png" alt=""/>
        </div>
</div>

  )
}

export default Input