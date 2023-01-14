import Head from 'next/head'
import Card from './Components/Card'
import Carousel from './Components/Slider'

export default function Home() {
  return (
    <>
      <Head>
        <title>Morning Star Aivary</title>
        <meta name="description" content="We have best quality of love birds" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/parrot.png" />
      </Head>
      <Carousel />
      <Card />
    </>
  )
}
