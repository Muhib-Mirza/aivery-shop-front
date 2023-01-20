import axios from "axios";
import Router from "next/router";
import React,{ useState } from "react";
import style from "../../styles/Auth.module.css";

const Auth = () => {
    const [user,setUser] = useState({
        email:"",
        pass:"",
    });
    const handleChange = (e)=>{
        let name = e.target.name;
        let value = e.target.value;

        setUser({...user, [name]:value});
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post("https://morning-star-aivary.onrender.com/signin",user).then((result)=>{
            if(result.data.message === "Error"){
                window.alert("Please Enter Correct Credential");
            }else{
                Router.push("/admin/bird/8253148976253");
            }
        });
    }
    return ( 
        <>
        <div className={style.container}>
        <form onSubmit={handleSubmit} className={style.form} >
            <input className={`${style.input}`} type="email" placeholder="Enter Email" name="email" value={user.email} onChange={handleChange} />
            <input className={`${style.input} ${style.pass}`} type="password" name="pass" placeholder="Enter Password" value={user.pass} onChange={handleChange} />
            <button type="submit" className={`${style.btn}`} >Submit</button>
        </form>
        </div>
        </>
     );
}
 
export default Auth;