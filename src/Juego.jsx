import React from 'react'
import { useState } from 'react';

function Juego() {

    let opc = ['piedra', 'papel', 'tijera'];
    //creamos variables, una de usuario y otra de maquina
    
    const [human, setHuman] = useState('')
    const [robot, setRobot] = useState('');

    let juegoMaquina = () => {
        let randomOpcMaquina = Math.round( Math.random()*(opc.length-1) );
        setRobot( opc[randomOpcMaquina])
    }

    let juegoHuman = (e) => {
        setHuman(e.target.innerText)
        juegoMaquina();
    }
    function ganador () {
        if (human === "piedra" && robot === "tijera") {
            alert("gano humano")
        } else if (human === "tijera" && robot === "papel") {
            alert("gano humano")
        } else if (human === "papel" && robot === "piedra") {
            alert("gano humano")
        } else if (human === robot) {
            alert("empate")
        }
        else {
            alert("gano robot")
        }
    }

  return (
    <div className='pantalla'>
        <div>
            <h4>Human</h4>
            <h1 style={{color: 'orange'}}>{human}</h1>
        </div>
        <div>
            <h4>Robot</h4>
            <h1>{robot}</h1>
        </div>
        <div>
            <button onClick={juegoHuman}>piedra</button>
            <button onClick={juegoHuman}>papel</button>
            <button onClick={juegoHuman}>tijera</button>
            <button onClick={ganador}>ganador</button>

        </div>
    </div>
  )
}

export default Juego