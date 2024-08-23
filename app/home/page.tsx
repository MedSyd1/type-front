"use client"
import Header from "../components/Header";
import "./css.css"
import Test from '../components/Test';

export default function Home() {
  return (
    <>
      <Header></Header>
      <main>
        {/* here we need to create a condition to render either the Test or the Result */}
      <Test/>
      
      </main>
      
    </>
  );
}
