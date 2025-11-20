"use client"
import Image from "next/image"
import { useEffect, useState } from "react";
export default function Home(){
  const topPlayers:{name:string;profit:number;img:string}[] = [{name:"<Amir/>",profit:(((Date.parse("2025-10-06T03:56:00")-Date.now())*-1)*0.0000003).toFixed(0),img:"/IMG_20251114_010653_926.jpg"},{name:"Trex",profit:(((Date.parse("2025-10-09T03:56:00")-Date.now())*-1)*0.0000003).toFixed(0),img:"/IMG_20251114_022119_296.jpg"}]
  const [text,setText] = useState("")
  const rText:string = "Rabbit is a strong"
  const [under,setUnder] = useState(false)
  useEffect(()=>{
    for(let i = 0;i<rText.length;i++){
      setTimeout(()=>{
        setText(prev=>prev+rText[i])
      },i*200)
      
    }
  },[])
  useEffect(()=>{
    setInterval(()=>{
      setUnder(prev=>!prev)
    },400)
  },[])

  function Way(props:{name:string;img:string}){
    return(
      <div id="interactButton" className="flex bg-[#1f1f1f] w-72 justify-start p-2 items-center h-12 rounded-md gap-2">
        <div>
          <Image src={props.img} alt={props.name} width={30} height={30}/>
        </div>
        <h2 className="small text-2xl">{props.name}</h2>
      </div>
    )
  }

  return(
    <>
      <h1 className="big text-6xl mt-10">Rabbit</h1>
      <p className="big text-red-500 text-2xl text-center p-2 rounded-2xl mt-2 mx-auto w-fit" style={{backgroundColor:"#1b1b1b"}}>follow the rabbit for TON</p>
      <p className="small text-2xl text-center mx-5 mt-5">A time-based project supported by the Rabbit Academy, Element Division.</p>
      <p className="small text-2xl text-center mx-5 mt-2">Earn TON by following the rabbit, and increase your progress rate by inviting your friends.</p>
      <h1 className="text-2xl big mt-5 text-red-500">{text} {<span style={{color:under?"white":"#0b0b0b"}}>|</span>}</h1>
      <div className="flex flex-wrap justify-between mx-2 md:mx-12 mt-5">
        <div className="bg-[#1f1f1f] rounded-2xl w-full h-auto py-5 md:w-[45%]">
          <h1 className="big text-2xl text-green-400">take profit</h1>
          <h2 className="small text-2xl ml-10">Enter Referral Code:</h2>
          <div className="flex flex-col justify-center w-[80%] mx-auto items-center gap-5">
            <input className="border-2 border-cyan-500 rounded-md w-full h-10 text-2xl text-center bg-cyan-900 big opacity-70"/>
            <button id="interactButton" className="big text-2xl bg-cyan-400 w-36 h-12 rounded-md hover:scale-110 transition-transform duration-500">TAKE COIN</button>
          </div>
        </div>
        <div className="w-full md:w-[45%]">
          <h1 className="big text-cyan-400 text-2xl">start game</h1>
          <h2 className="text-xl text-red-500 big">1 - Login</h2>
          <div className="ml-5 flex flex-col gap-2">
            <Way img="/search.png" name="Countione with google"/>
            <Way img="/plus.png" name="Add new account"/>
            <Way img="/wallet.png" name="Countione with wallet"/>
          </div>
        </div>
      </div>
    </>
  )
}