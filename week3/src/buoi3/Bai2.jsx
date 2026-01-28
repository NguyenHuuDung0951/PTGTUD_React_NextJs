import React, { useState, useEffect } from 'react'

function Bai2() {
    const [now, setNow] = useState(new Date())
    useEffect( () => {
        const id = setInterval( () =>{
            setNow( new Date())
        },1000)
        return () => clearInterval(id)
    })
    return(
        <>
        <div>
            <h3>Digital lock</h3>
            <div>
                {now.toLocaleTimeString()}
            </div>
        </div>
        </>
    )
}

export default Bai2


