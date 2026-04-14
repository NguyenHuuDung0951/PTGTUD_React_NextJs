import React from 'react'
import { atom } from 'recoil'

const countState = atom({
    key: 'countState', // bien global dung cho toan chuong trinh
    default: 0,
})

export default countState
