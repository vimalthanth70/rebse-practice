import React from 'react'
import withHello from './withHello'

function MyComponent() {
  return (
    <div>MyComponent</div>
  )
}


export default withHello(MyComponent) 


