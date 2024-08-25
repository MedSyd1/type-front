
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { TestProps } from '../provider';
import "./result.css"

export default function Result({updateState,wpm,ts,nc,nw}:TestProps) {
    return (
        <div className="Resultcontainer">
            <div className="wpm">
                <label htmlFor="">wpm</label>
                <div className="div">{wpm}</div>
            </div>
            <div className="container1">
                <div className="characters">
                    <label htmlFor="">characters</label>
                    <div className="char">
                        <span className='correctNc'>{nc}</span>
                        <span> / </span>
                        <span className='wrongNw'>{nw}</span>
                        </div>
                </div>
                <div className="time">
                    <label htmlFor="">time</label>
                    <div className="tm">{Math.floor(ts || 0)} <span className='seconds'>s</span></div>
                </div>
            </div>
            <div className="button-container">
                <button className="icon-button" onClick={updateState}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </div>
    );
}
