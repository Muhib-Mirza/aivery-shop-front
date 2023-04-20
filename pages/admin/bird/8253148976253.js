import Head from "next/head";
import axios from "axios";
import { useState } from "react";
import style from "../../../styles/Add.module.css";
import Router from "next/router";
import {motion} from "framer-motion"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddBird = () => {
    const [image,setImage] = useState(null);
    const [bdata,setBdata] = useState({
        birdid:"",
        birdname:"",
        birdcost:"",
    });
    const handleImage = (e)=>{
        setImage(e.target.files[0]);
    }
    const handleChange = (e)=>{
        let name = e.target.name;
        let value = e.target.value;

        setBdata({...bdata, [name]:value});
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        let formdata = new FormData();
        formdata.append("bimage",image);
        formdata.append("birdid", bdata.birdid);
        formdata.append("birdname",bdata.birdname);
        formdata.append("birdcost", bdata.birdcost);
        try{
            axios.post("https://morning-star-aivary.onrender.com/adddata",formdata).then(res=>{
                if(res.data.message === true){
                    toast.success("Data Added",{
                        autoClose:3000,
                        theme:"dark"
                    });
                }else{
                    toast.error("Operation Failed");
                }
            })
        }catch(err){
            console.log(err);
        }
    }
    const handleDelete = (e)=>{
        Router.push("/admin/bird/allbird/delete");
    }
    return ( 
        <>
        <Head>
        <title>Morning Star Aivary</title>
        <meta name="description" content="We have best quality of love birds" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/parrot.png" />
      </Head>
        <div className={style.container}>
            <button onClick={handleDelete} className={style.delete}>Delete</button>
        <form onSubmit={handleSubmit} className={style.form} >
            <input className={`${style.input}`} type="text" name="birdid" placeholder="Enter Bird ID" value={bdata.birdid} onChange={handleChange} required />
            <input className={`${style.input} ${style.margin}`} type="text" name="birdname" placeholder="Enter Bird Name" value={bdata.birdname} onChange={handleChange} required />
            <input className={`${style.input} ${style.margin}`} type="number" name="birdcost" placeholder="Enter Bird Cost" value={bdata.birdcost} onChange={handleChange} required />
            <input className={`${style.file} ${style.margin}`} type="file" onChange={handleImage} />
            <motion.button className={`${style.margin} ${style.btn}`} type="submit"
            whileTap={{scale:0.8, opacity:0.8}}
            >Submit</motion.button>
        </form>
        <div className={style.list}>
            <h3 className={style.head} >Bird ID</h3>
        <ul className={style.ul} >
            <li className={style.listitem}>Albino Black Eye = ab</li>
            <li className={style.listitem}>Albino Red Eye = ar</li>
            <li className={style.listitem}>Pastle Split ino = psi</li>
            <li className={style.listitem}>Cremino = crm</li>
            <li className={style.listitem}>Pastle Ino = pin</li>
            <li className={style.listitem}>Green Opaline = gop</li>
            <li className={style.listitem}>Green Euwing Opalines = geo</li>
            <li className={`${style.listitem} ${style.incwidth}`}>Green Opalines Split Blue = gosb</li>
            <li className={style.listitem}>Green Euwing / blue = gesb</li>
            <li className={style.listitem}>Blue Euwing Opalines = beo</li>
            <li className={style.listitem}>Parblue Opalines = po</li>
            <li className={style.listitem}>Green/ opaline/Parblue = gsosp</li>
        </ul>
        </div>
        </div>
        <ToastContainer />
        </>
     );
}
 
export default AddBird;