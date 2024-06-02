


import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addByAmount, decrement, increment, reset  } from '../redux/slices/CounterSlices'

const Counter = () => {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();
  return (
    <div>
        <button onClick={()=> dispatch(increment())}
            >Increment</button>
        <br />
        <br />
        <div>{count}</div>


        <br />
        <br />
        <button onClick={() =>{dispatch(decrement())}}>Decrement</button>

        <br />
        <input type="number" placeholder='enter the amount' />
        <br />
        <button onClick={ () =>{
          const amount = parseInt(document.querySelector('input').value, 10) || 0;
          dispatch(addByAmount(amount))
        }}>Add by Amount</button>

        <br />
        <br />
        <button onClick={ () =>{
          dispatch(reset())
        }}>Reset</button>
    </div>

   
  )
}

export default Counter
