import React from 'react'
import { atom } from 'recoil'

const savedTheme = localStorage.getItem("app-theme") || "light";
const theme = atom({
   key: 'themeState',
   default: savedTheme,
})

export default theme
