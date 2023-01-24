import React from 'react'

interface ButtonTypes {
    children: string,
    props:  React.ComponentPropsWithoutRef<"button">
   
}

export default function button({children, props}:ButtonTypes) {

  return (
    <button {...props} className='border border-violet-500 font-semibold rounded-lg px-6 bg-white'>
       {children}
    </button>
  )
}
