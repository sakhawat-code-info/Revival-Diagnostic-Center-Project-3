
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className=" max-w-[1920px] lg:w-[90%] w-[98%] mx-auto font-mont"
            style={{
                // backgroundImage: `url(${background})`,
                // backgroundColor: "#F0F0F0",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",

                width: "100%",
            }}>
            <Navbar />
            <div className="min-h-[calc(100vh-520.667px)]">
                <Outlet></Outlet>
            </div>
            <Footer />
        </div>
    );
};

export default Root;