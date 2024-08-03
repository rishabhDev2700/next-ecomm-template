import React from 'react'

export default function CartOptions({setter,index,qnty,cart}) {
    const update = (op)=>{
        const updatedCart = [...cart]
        updatedCart[index].qnty = op==="+"?qnty+1:qnty-1
        setter(updatedCart)
    }
  return (
    <div className='text-2xl'>
        <button className='rounded-xl py-1 px-2 mx-2 bg-blue-500 text-white font-black' onClick={e=>update("+")}>+</button>
        {qnty}
        <button className='rounded-xl py-1 px-2 mx-2 bg-blue-500 text-white font-black' onClick={e=>update("-")}>-</button>
    </div>
  )
}
