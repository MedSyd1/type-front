
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { TestProps } from '../provider';
import "./result.css"

export default function Result({ setResult }: TestProps) {
    return (
        <div className="Resultcontainer">
            <div className="wpm">
                <label htmlFor="">wpm</label>
                <div className="div">73</div>
            </div>
            <div className="container1">
                <div className="characters">
                    <label htmlFor="">characters</label>
                    <div className="char">
                        <span>91</span>
                        <span>/</span>
                        <span>7</span>
                        <span>/</span>
                        <span>1</span>
                        </div>
                </div>
                <div className="time">
                    <label htmlFor="">time</label>
                    <div className="tm">15 s</div>
                </div>
            </div>
            <div className="button-container">
                <button className="icon-button" onClick={() => setResult(false)}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </div>
    );
}
