import Head from "next/head";
import style from "../styles/Bird.module.css";
import {motion} from "framer-motion";
import axios from "axios";

export async function getServerSideProps(context){
    const {bird} = context.query;
    const res = await axios.get("https://morning-star-aivary.onrender.com/"+bird);
    return{
    props:{
        data:res.data
    }
}
}

const Test = ({data}) => {
    return ( 
        <>
        <Head>
        <title>Morning Star Aivary</title>
        <meta name="description" content="We have best quality of love birds" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/parrot.png" />
      </Head>
      <div className={`${style.container}`}>
    { data.map(curElem=>{
        const image = btoa(
            String.fromCharCode(...new Uint8Array(curElem.image.data.data)));
            return <div key={curElem._id}>
                <div className={style.ccontainer}>
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
            </div>
    })
}
    </div>       
        </>
     );
}
 
export default Test;