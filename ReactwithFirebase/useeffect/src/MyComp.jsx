import React, { useEffect, useState } from 'react'

const MyComp = () => {
    const [count, setCount] = useState(0);
    const [count2,setCount2] = useState(10);
    useEffect(()=>{
        console.log("Count got updated", count);
    },[]);
    useEffect(()=>{
        console.log("Count got updated", count);
    },[count, count2]);
  return (
      <>
      <p>So the count is{count}</p>
      <p>Hi new count is me{count2}</p>
      <button onClick={()=>setCount(count+1)}>Update</button>
      <button onClick={()=>setCount2(count2+1)}>Update 2</button>
    </>
  )
}

export default MyComp