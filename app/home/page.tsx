"use client"
import Header from "../components/Header";
import "./css.css"
import Test from '../components/Test';
import { useState } from "react";
import Result from "../components/Result";

export default function Home() {

  const [result,setResult] = useState(false);


  return (
    <>
      <Header></Header>
      <main>
        {/* here we need to create a condition to render either the Test or the Result */}
      {!result && <Test  setResult={setResult} />}
      {result && <Result setResult={setResult} />}
      </main>
      
    </>
  );
}
