/* eslint-disable no-unused-vars */
import { useState } from "react"
import MasInformacion from "./MasInformacion"



function ShowHide() {

    const [show, setShow] = useState(true)
    
    const btnShow = (event) => {setShow(!show)}

  return (<>
    <div>
      <button 
          type="submit"
          className="btnShow"
          onClick={btnShow}>{show ? ' ' : 'Mas '} Informacion</button>
          <div className="divInfo">
            {show &&<h5>{<MasInformacion />}</h5>}
          </div>
       
    </div>
    
    
  </>)
}

export default ShowHide
