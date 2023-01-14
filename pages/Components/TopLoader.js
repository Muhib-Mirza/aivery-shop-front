import React, { useState } from 'react'
import LoadingBar from 'top-loading-bar/dist'
import {useRouter} from 'next/router'

const TopLoader = () => {
    const router = useRouter();
    router.events.on("routeChangeStart", ()=>{
        setProgress(40)
    });
    router.events.on("routeChangeComplete", ()=>{
        setProgress(100)
    })
  const [progress, setProgress] = useState(0)
    return ( 
        <>
        <div>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <button onClick={() => setProgress(progress + 10)}>Add 10%</button>
      <button onClick={() => setProgress(progress + 60)}>Add 70%</button>
      <button onClick={() => setProgress(progress + 20)}>Add 90%</button>
      <button onClick={() => setProgress(100)}>Complete</button>
      <br />
    </div>
        </>
     );
}
 
export default TopLoader;