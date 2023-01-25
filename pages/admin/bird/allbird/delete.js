import Head from "next/head";
import axios from "axios"
import Router from "next/router";
import style from "../../../../styles/Bird.module.css";
import { motion } from "framer-motion";
import { BsFillTrash2Fill } from "react-icons/bs";

export const getServerSideProps = async (context)=>{
    const response = await axios.get("https://morning-star-aivary.onrender.com/alldata");
    return{
        props:{
            data: response.data
        }
    }
}

const Delete = (data) => {
    const hanldeDelete = (id)=>{
        axios.delete("https://morning-star-aivary.onrender.com/"+id).then(res=>{
            if(!res){
                window.alert("Something Went Wrong");
            }else{
                window.alert("Card Deleted Sucessful");
                Router.reload();
            }
        })
    }
    return ( 
        <>
        <Head>
        <title>Morning Star Aivary</title>
        <meta name="description" content="We have best quality of love birds" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/parrot.png" />
      </Head>
      <div className={style.body}>
      <div className={`${style.container}`}>
    { data.data.map(curElem=>{
        const image = btoa(
            String.fromCharCode(...new Uint32Array(curElem.image.data.data)));
            return <div key={curElem._id}>
                <div className={style.card}>
                    <div>
                        <motion.button onClick={()=>hanldeDelete(curElem._id)} >
                        <BsFillTrash2Fill />
                        </motion.button>
                    </div>
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
                    <motion.button className={style.btn} whileTap={{scale:0.8, opacity:0.8}} >
                        Buy Now
                    </motion.button>
                    </a>
                </div>
            </div>
            </div>
    })
}
    </div>       
    </div> 
        </>
     );
}
 
export default Delete;