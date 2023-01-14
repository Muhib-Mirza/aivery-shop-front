import axios from "axios";

export const getStaticProps = async ()=>{
    let res;
    axios.get("https://morning-star-aivary.onrender.com/alldata").then((result)=>{
        console.log(result);
        res = result;
    })
    return{
        props:{
            data:res
        }
    }
}

const Test = ({ data }) => {
    console.log(data);
    return ( 
        <>
        <h1>Hello World</h1>
        </>
     );
}
 
export default Test;