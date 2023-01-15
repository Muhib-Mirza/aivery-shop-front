import style from "../styles/Error.module.css";
import { useEffect } from "react";
import router from "next/router"

const ErrorPage = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
        router.push("/"); 
        }, 3000);
        return () => clearTimeout(timer);
      }, []);
    return ( 
        <>
        <div className={style.container}>
            <h1 className={style.heading}>
                Sorry No Bird At This Time
            </h1>
        </div>
        </>
     );
}
 
export default ErrorPage;