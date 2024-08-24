"use client";

import { useEffect, useState } from "react";
import "./test.css";
import {
  randomWords,
  arrayCharacters,
  customeCharacter,
  TestProps,
} from "../provider";

export default function Test({ setResult }: TestProps) {
  const [line, setLine] = useState("");
  const [characters, setCharacters] = useState<customeCharacter[]>([]);
  const [expectedLetter, setExpectedLetter] = useState<customeCharacter | null>(
    null
  );
  const [index, setIndex] = useState(0);
  const [correctIds, setCorrectIds] = useState<number[]>([]);
  const [wrongIds, setWrongIds] = useState<number[]>([]);
  const [R, setR] = useState(true);
  const [start,setStart] = useState<Date | null>(null)
  const [end,setEnd] = useState<Date | null>(null)
  const [AR,setAR] = useState(false)
  const handleKeydown = (event: KeyboardEvent) => {

    setAR(true)
    
    if (event.key === "Backspace") {
      setR(false);
      return;
    }
    
    const newIndex = index + 1;
    setIndex((prev) => prev + 1);
    setR(true);

    setExpectedLetter((prev) => {
      if (prev) {
        if (prev.label === event.key) {
          setCorrectIds((prevCorrectIds) => [...prevCorrectIds, prev.id]);
        } else {
          setWrongIds((prevWrongIds) => [...prevWrongIds, prev.id]);
        }
      }
      return characters[newIndex];
    });
  };

  useEffect(() => {
    // setLine(randomWords(10).join(" ").trim());
    setLine("make make make");
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  useEffect(() => {
    setCharacters(arrayCharacters(line));
    setExpectedLetter(arrayCharacters(line)[index]);
  }, [line]);

  useEffect(() => {
    if (index === 1 && start === null)
        setStart(new Date())
    if (index === line.length) {
      if (correctIds.includes(index - 1)) {
        setLine("");
        setCharacters([]);
        setExpectedLetter(null);
        setIndex(0);
        setCorrectIds([]);
        setWrongIds([]);
        setR(true);
        if(end === null)
          setEnd(new Date())
        // setResult(true)
      }
    }
    setExpectedLetter(arrayCharacters(line)[index]);
  }, [index]);

  useEffect(() => {
    if (expectedLetter) {
      setCorrectIds((prev) => prev.filter((id) => id !== expectedLetter.id));
      setWrongIds((prev) => prev.filter((id) => id !== expectedLetter.id));
    }
  }, [expectedLetter]);

  useEffect(() => {
    if (!R) {
      if (index > 0) setIndex((prev) => prev - 1);
      setR(true);
    }
  }, [R]);

useEffect(()=>{
  console.log("start : " , start?.getTime())
  console.log("end  : " , end?.getTime())
  
},[start,end])

  return (
    <div className="container">
      {characters.map((n) => (
        <div
          className={`cell ${
            correctIds.includes(n.id)
              ? "correct"
              : wrongIds.includes(n.id)
              ? "wrong"
              : ""
          } ${n.id === index ? "indexed" : ""}`}
          key={n.id}
        >
          {n.label}
        </div>
      ))}
    </div>
  );
}
