"use client";

import { useEffect, useState } from "react";
import "./test.css";
import { arrayCharacters, customeCharacter ,TestProps} from "../provider";

export default function Test({setResult}:TestProps) {
  const [line, setLine] = useState("");
  const [characters, setCharacters] = useState<customeCharacter[]>([]);
  const [expectedLetter, setExpectedLetter] = useState<customeCharacter | null>(
    null
  );
  const [index, setIndex] = useState(0);
  const [correctIds, setCorrectIds] = useState<number[]>([]);
  const [wrongIds, setWrongIds] = useState<number[]>([]);
  const [R, setR] = useState(true);

  const handleKeydown = (event: KeyboardEvent) => {
    console.log("the pressed key", event.key);

    if (event.key === "Backspace") {
      console.log("go back");
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
    // setLine(randomWords(1).join(" ").trim());
    setLine("make")
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  useEffect(() => {
    setCharacters(arrayCharacters(line));
    setExpectedLetter(arrayCharacters(line)[index]);
    console.log("the length of the line : " ,line.length)
  }, [line]);

  useEffect(() => {
    if (index === line.length)
        {
            if (correctIds.includes(index - 1)){
                setLine("")
                setCharacters([])
                setExpectedLetter(null)
                setIndex(0)
                setCorrectIds([])
                setWrongIds([])
                setR(true)
                setResult(true)
            }
        }
    setExpectedLetter(arrayCharacters(line)[index]);
    console.log("the index", index);
  }, [index]);

  useEffect(() => {
    if (expectedLetter) {
      console.log("the expected letter is : ", expectedLetter);
      console.log("the correct ids : ", correctIds);
      console.log("the wrong ids : ", wrongIds);

      // Remove the expected letter from correctIds or wrongIds if it exists
      setCorrectIds((prev) =>
        prev.filter((id) => id !== expectedLetter.id)
      );
      setWrongIds((prev) =>
        prev.filter((id) => id !== expectedLetter.id)
      );
    }
  }, [expectedLetter]);

  useEffect(() => {
    if (!R) {
      console.log(
        "we need to decrease the size of the tables" + new Date().getTime()
      );
      if (index > 0) setIndex((prev) => prev - 1);
      setR(true);
    }
  }, [R]);

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
