import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount,decrementbyamount } from './counterslice'
import { useState } from 'react'
export function Counter() {
  const [inputVal,setInputVal]=useState(0)
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button><br/>
        <span>{count}</span>
        <br/>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          
          Decrement
        </button>
        <hr/>
        <input type="text" placeholder='Add value to increment' onChange={(e)=>{
               setInputVal(e.target.value)

        }}/>
        <br/>
        <button onClick={()=>dispatch(incrementByAmount(inputVal))}>Increment by your entered value</button>
        <br/>
        <button onClick={()=>dispatch(decrementbyamount(inputVal))}>Decrement by your entered value</button>
      </div>
    </div>
  )
}