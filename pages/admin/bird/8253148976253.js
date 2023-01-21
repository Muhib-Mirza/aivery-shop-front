import axios from "axios";
import { useState } from "react";
import style from "../../../styles/Add.module.css";

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
                window.alert(res.data);
            })
        }catch(err){
            console.log(err);
        }
    }
    return ( 
        <>
        <div className={style.container}>
        <form onSubmit={handleSubmit} className={style.form} >
            <input className={`${style.input}`} type="text" name="birdid" placeholder="Enter Bird ID" value={bdata.birdid} onChange={handleChange} />
            <input className={`${style.input} ${style.margin}`} type="text" name="birdname" placeholder="Enter Bird Name" value={bdata.birdname} onChange={handleChange} />
            <input className={`${style.input} ${style.margin}`} type="text" name="birdcost" placeholder="Enter Bird Cost" value={bdata.birdcost} onChange={handleChange} />
            <input className={`${style.file} ${style.margin}`} type="file" onChange={handleImage} />
            <button className={`${style.margin} ${style.btn}`} type="submit">Submit</button>
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
        </>
     );
}
 
export default AddBird;