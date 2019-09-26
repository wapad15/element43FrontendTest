import React, { Component } from 'react'
import HelloWord from '../components/HelloWord'

class Inicio extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="App container">
        <HelloWord 
        titulo = "HELLO WORD"
        />
      </div>
     );
  }
}
 
export default Inicio;