import Head from "next/head";
import style from "../styles/Bird.module.css";
import {motion} from "framer-motion";
import axios from "axios";

export const getStaticPaths = async ()=>{
    const res = await fetch("https://morning-star-aivary.onrender.com/alldata");
    const data = await res.json();
    const paths = data.map(curElem=>{
        return{
            params:{
                bird:curElem.birdid
            }
        }
    });

    return{
        paths,
        fallback: false,
    }
}

export const getStaticProps = async ( context )=>{
    let data;
    const res = await axios.get("https://morning-star-aivary.onrender.com/"+context.params.bird).then((result)=>{
        data = result.data;
    })

    return{
        props:{
            data:data
        }
    }
}

const Bird = ({ data }) => {
    return ( 
        <>
        <Head>
        <title>Morning Star Aivary</title>
        <meta name="description" content="We have best quality of love birds" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/parrot.png" />
      </Head>
      <div className={`${style.container}`}>
        {data.map(curElem=>{
            const image = btoa(
                String.fromCharCode(...new Uint8Array(curElem.image.data.data)));
                return <div key={curElem._id} className={style.ccontainer}>
                    <div className={style.card}>
                    <img src={`data:img/png;base64,${image}`} alt="" className={`${style.image}`} />
                    <div className={`${style.cbody}`}>
                        <h4 className={style.birdName}>{curElem.birdname} </h4>
                    <div>
                        <span className={style.cos}>Cost :</span>
                        <span className={style.cost}>
                        {curElem.birdcost} 
                        </span>
                        <span className={style.unit}>
                            Rs
                        </span>
                        </div>
                        <a href="tel:+923070408790">
                        <motion.button className={style.btn} whileHover={{scale:1.1, backgroundColor:"grey", color:"black",fontWeight:"bold"}} >
                            Buy Now
                        </motion.button>
                        </a>
                    </div>
                </div>
                </div>
        })}
        </div>
        </>
     );
}
 
export default Bird;