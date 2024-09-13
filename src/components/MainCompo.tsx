
import React from 'react'

export default function MainCompo() {
     function some(){
        throw new Error("Something went wrong")
    }
    some()
  return (
    <div>MainCompo</div>
  )
}
