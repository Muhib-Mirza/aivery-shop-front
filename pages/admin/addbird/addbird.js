import { useState } from "react";

const AddBird = () => {
    const [bird , setBird] = useState({
     birdid:"",
     birdname:"",
     birdcost:"",   
    });
    let image;
    const postData = (e)=>{
        e.preventDefault();
    const res = await fetch("http://localhost:4000/adddata",{
        headers:{
            "Content-Type":"application/json"
        },
        method:"POST",
        body:JSON.stringify(bird)
    })
    }

    return ( 
        <>
        </>
     );
}
 
export default AddBird;