import React from 'react'
import { useRecoilValue } from 'recoil'
import countState from './countState'

const componentA = () => {
    const count = useRecoilValue(countState)
  return (
    <div>
      <p>So hien tai la: {count}</p>
    </div>
  )
}
export default componentA

