import React,{useState} from 'react'

const State = () => {
    //variable [variablename, setter funtions] = usestate(in)
    const[count,setcount] = useState(0);
      return (
    <div>
        <p>count : {count}</p>
        <button onClick={()=>{setcount(count+1)}}>Increment</button> 
    </div>
  )
}

export default State