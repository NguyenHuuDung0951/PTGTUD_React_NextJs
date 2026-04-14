import React from 'react'
import countState from './countState';
import { useRecoilValue, useRecoilState } from 'recoil'
const componentB = () => {
    const [count, setCount] = useRecoilState(countState);
  return (
    <div>
      <button onClick={() => setCount(count+1)}>Increment</button>
      <button onClick={() => setCount(count-1)}>Decrement</button>
    </div>
  )
}

export default componentB
