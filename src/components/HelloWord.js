import React from 'react'

const HelloWord = (props) => {
  return ( 
    <header>
      <h1 className="animated infinite heartBeat delay-0s">{props.titulo}</h1>
    </header>
   );
}
 
export default HelloWord;