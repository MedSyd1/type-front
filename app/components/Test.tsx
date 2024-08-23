"use client"

import { useEffect, useState } from "react";

import "./test.css"
import {randomWords,arrayCharacters , customeCharacter} from "../provider"; 



export default function Test(){

    const [line,setLine] = useState("")
    const [characters,setCharacters] = useState<customeCharacter[]>([])
    const [expectedCharacters,setExpectedCharacters] = useState<customeCharacter[]>([])
    const [currentLetter, setCurrentLetter] = useState<customeCharacter | null>(null);
    const [index,setIndex] = useState(0);
    const [correctIds,setCorrectIds] = useState<number[]>([])
    const [wrongIds,setWrongIds] = useState<number[]>([])
    
    const handleKeydown = (event:KeyboardEvent) => {
        console.log( "the pressed key" , event.key)
       
        const newIndex = index + 1; 
        setIndex(prev => prev + 1)

        setCurrentLetter(prev => {
              if (prev){
                if (prev?.label === event.key)
                    {
                        let newCorrectIds = correctIds;
                        newCorrectIds.push(prev.id)
                        setCorrectIds(pr => newCorrectIds)
                        console.log("the correct ids : ",newCorrectIds)
                    }
                else{
                        let newWrongIds = wrongIds;
                        newWrongIds.push(prev.id)
                        setWrongIds(pr => newWrongIds)
                        console.log("the wrong ids : ",newWrongIds)
                    }
              }
            return characters[newIndex]});

    }

    useEffect(() =>{
        setLine(randomWords(30).join(" "))
        window.addEventListener("keydown",handleKeydown)
        return () => { window.removeEventListener("keydown",handleKeydown)}
    },[])

    useEffect(()=>{
        setCharacters(arrayCharacters(line))
        setExpectedCharacters(arrayCharacters(line))
        setCurrentLetter(arrayCharacters(line)[index])
    },[line])

    useEffect(()=>{
        setCurrentLetter(arrayCharacters(line)[index])
    },[index])

    useEffect(()=>{ 
    },[currentLetter])

    useEffect(()=>{
        
    },[index])

    return (
    <div className="container">
       
       {characters.map(n => <div className={`cell ${(correctIds.includes(n.id)? "correct":(wrongIds.includes(n.id)? "wrong":""))}`} id={`${n.id}`} >{n.label}</div>)}

    </div>
)

}