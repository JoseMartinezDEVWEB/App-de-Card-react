import './Card.css'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export const Card = ({nombre, numero, equipo, posicion, image, id}) => {
  return (
    <div className="Card"> 
        <Link className='Link' to={nombre}><h2>{nombre}</h2></Link>
        <img src={image}/>
        <h3>Numero : {numero}</h3>
        <h3>Equipo: {equipo}</h3>
        <h3>Posicion: {posicion}</h3>
        <p>{id}</p>
    </div>
  )
}
