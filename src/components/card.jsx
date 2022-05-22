import React,  {useState}  from "react";
import "..//styles.css";

const Card = (e)=> {
  const [value, setValue] = useState("")
  const [date, setDate] = useState("")
  const [device, setDevice] = useState("")

  return (
    <> 
     <h1 className="h1">Card-Details</h1>
     <input type="text"
     placeholder="Enter Name"
     value={value}
     onChange={(e)=> {
      setValue(e.target.value);
    }}/> <br/><br/>

<input type="date"
     placeholder="Enter Date"
     value={date}
     onChange={(e)=> {
      setDate(e.target.value);
    }}/> <br/><br/>

    
<input type="text"
     placeholder="Enter Device-Name"
     value={device}
     onChange={(e)=> {
      setDevice(e.target.value);
    }}/>
    
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
      

    </>
  )
}
export default Card