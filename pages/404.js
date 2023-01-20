import style from "../styles/Error.module.css";
import { useEffect } from "react";
import router from "next/router"
import Head from "next/head";

const ErrorPage = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
        router.push("/"); 
        }, 3000);
        return () => clearTimeout(timer);
      }, []);
    return ( 
        <>
        <Head>
        <title>Morning Star Aivary</title>
        <meta name="description" content="We have best quality of love birds" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/parrot.png" />
        </Head>
        <div className={style.container}>
            <h1 className={style.heading}>
                Sorry No Bird At This Time
            </h1>
        </div>
        </>
     );
}
 
export default ErrorPage;