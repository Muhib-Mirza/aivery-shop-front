import Head from 'next/head'
import React,{ useEffect, useState } from 'react'
import Card from './Components/Card'
import Carousel from './Components/Slider'

export default function Home() {
  const [flag,setFlag] = useState(0);
  useEffect(()=>{
    setFlag(1);
  },[]);
  return (
    <>
      <Head>
        <title>Morning Star Aivary</title>
        <meta name="description" content="We have best quality of love birds" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/parrot.png" />
      </Head>
      {
        flag === 1?
        <>
        <Carousel />
        <Card />
        </>
        :<div class="loader">
        <div class="circle"></div>
        </div>
      }
    </>
  )
}
