import React from 'react'
import { useRecoilState } from 'recoil'
import themeAtom from './theme'

const themeTogle = () => {
    const [theme, setTheme] = useRecoilState(themeAtom)
    const togle = () =>{
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        localStorage.setItem('app-theme', newTheme)
        console.log(localStorage);
       
    }
  return (
    <div>
      <button onClick={togle}>Doi theme {theme === 'light' ? 'toi' : 'sang'}</button>
      <h1>Theme hien tai: {localStorage.getItem({theme})}</h1>
    </div>
  )
}

export default themeTogle
