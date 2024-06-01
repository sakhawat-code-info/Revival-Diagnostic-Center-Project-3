
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet, useLocation } from "react-router-dom";

const Root = () => {
    const location = useLocation();
    const noHeaderFooterForLogin = location.pathname.includes("login")
    const noHeaderFooterForRegistration = location.pathname.includes("registration")

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
            {
                noHeaderFooterForLogin || noHeaderFooterForRegistration || <Navbar />
            }

            <div className="min-h-[calc(100vh-520.667px)]">
                <Outlet></Outlet>
            </div>
            {
                noHeaderFooterForLogin || noHeaderFooterForRegistration || <Footer />
            }


        </div>
    );
};

export default Root;