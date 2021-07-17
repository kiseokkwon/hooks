import React from 'react'
import { useClick } from './useClick/useClick';


function UseClick() {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  return (
    <div>
      <h1 ref={title}>Hi</h1>
    </div>
  )
}

export default UseClick
