import Drawer from "./Components/Drawer";
import Fotter from "./Components/Fotter";
import Navbar from "./Components/Navbar";

const Layout = ({ children }) => {
    return (  
        <>
        <Navbar />
        <Drawer />
        {children}
        <Fotter />
        </>
    );
}
 
export default Layout;