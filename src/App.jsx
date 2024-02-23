import { Card } from './components/Card'
import './App.css'
import jugadores from './data/jugadores'
import ShowHide from './components/ShowHide'


function App() {
  const jugadoresList = jugadores.map((jugador, index) => {
    return <Card key={index} 
                nombre={jugador.nombre} 
                numero={jugador.numero}
                equipo={jugador.equipo}
                posicion={jugador.posicion}
                image={jugador.image}
    />
  })

  return (
  <>
      <div className='App'>
           <h1 className='h1'>Tarjeta Jugadores | <em>NBA</em>  🏀</h1>
        <div className='container'>
          {jugadoresList}
        </div>
      </div>
      <div className='btnInfo'>
          <ShowHide />
      </div>
    </>
  )
}

export default App
