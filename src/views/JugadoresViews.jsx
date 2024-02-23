/* eslint-disable react/prop-types */
import './JugadoresViews.css'

// eslint-disable-next-line react/prop-types
function JugadoresViews( jugador ) {

    
  
  return (
    <div className="views">
      <h1>{jugador.nombre}</h1>
      <h2>{jugador.equipo}</h2>
      <img src={jugador.image} />    
      </div>
  )
}

export default JugadoresViews
