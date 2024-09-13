import React, { JSXElementConstructor } from 'react'

export default function withHello(ChildComponent:React.FC) {
  return ()=>{
    return <div>
        <h1>Hello There</h1>
        <ChildComponent />
    </div>
  }
}
