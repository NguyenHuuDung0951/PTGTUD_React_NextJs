import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'



// const Counter6Cach = () => {
//     const [count,setCount] = useState(0)
//     console.log("+1");

//   return (
//     <>
//     <p>{count}</p>
//     <button onClick={() => setCount(count+1)}>+</button>
    
//     </>
//   )
// }

// const Counter6Cach = () => {
//     const [count,setCount] = useState(0)
//     useEffect(() =>{
//          console.log("Thay đổi count",count);
//     },[count])

//   return (
//     <>
//     <p>{count}</p>
//     <button onClick={() => setCount(count+1)}>+</button>
    
//     </>
//   )
// }

// const Counter6Cach = () => {
//     const [count,setCount] = useState(0)
 
//     const double = useMemo(()=>{
//         console.log("render lại");
//         return count*2;
        
//     },[count])

//   return (
//     <>
//     <p>{count}</p>
//     <p>gấp đôi: {double}</p>
//     <button onClick={() => setCount(count+1)}>+</button>
    
//     </>
//   )
// }

// const Counter6Cach = () => {
//     const [count,setCount] = useState(0)
 
//     const increse = useCallback(()=>{
//         console.log("Function không bị lặp lại");
//         setCount((prev) =>(prev+1))
        
        
//     },[count])

//   return (
//     <>
//     <p>{count}</p>
//     <button onClick={increse}>+</button>
    
//     </>
//   )
// }
const Counter6Cach = () => {
    const renderCounter = useRef(0)
    const [count,setCount] = useState(0)
    console.log("render counter");
    const handleClick = () =>{
        setCount(renderCounter.current++)

    }

  return (
    <>
    <p>{count}</p>
    <button onClick={handleClick}>+</button>
    
    </>
  )
}
export default Counter6Cach
