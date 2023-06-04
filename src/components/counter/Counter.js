import React from 'react'
import classes from './Counter.module.css'
export const Counter = () => {
    const countList = ['1','2','3','>']
    const  counter =()=>{
            return countList.map((count,index)=><div key={index} className={classes.counterElement}>{count}</div>)
    }
  return (
    <div className={classes.container}>{counter()}</div>
  )
}
