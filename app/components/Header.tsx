"use client";

import "bootstrap/dist/css/bootstrap.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard ,faUser,faRightFromBracket} from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  return (
  <>  
    <nav className="navbar navbar-light " style={{background:""}}>
        
        <a className="navbar-brand" href="#home" style={{color : "#73D0FF"}}>
            <FontAwesomeIcon className="ms-5 me-2 fa-1x" style={{color:'#D7D2BC'}} icon={faKeyboard}/>
            Type-Type
        </a>

        <div className="d-flex align-items-center">
          <a className="btn" href="#Profile" style={{ color: "#D7D2BC" }}>
            <FontAwesomeIcon className="btn" style={{ color: '#D7D2BC' }} icon={faUser} />
            <small style={{ lineHeight: '1' }}>Med</small> {/* Adjust margin as needed */}
          </a>

          <a className="navbar-brand" href="#logout">
            <FontAwesomeIcon className="ms-2 me-3" style={{ color: '#D7D2BC' }} icon={faRightFromBracket} />
          </a>
        </div>
    </nav>

  </>
  );
}
