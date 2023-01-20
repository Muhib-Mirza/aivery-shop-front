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
        </div>
        </>
     );
}
 
export default AddBird;