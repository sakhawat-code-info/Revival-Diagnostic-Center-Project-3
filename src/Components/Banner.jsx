import { Link } from "react-router-dom";
import UseAllBannerData from "../hookPersonal/UseAllBannerData";


const Banner = () => {


    const [allBanner] = UseAllBannerData();

    // const activeData = allBanner.map(item => item.bannerIsActive == 'true')

    // console.log(activeData)


    // console.log(
    //     bannerName,
    //     bannerImageLink,
    //     bannerTitle,

    //     bannerDescription,
    //     bannerCouponCodeName,
    //     bannerCouponRate,

    //     bannerActualRate,
    //     bannerIsActive,
    // )



    return (
        <div className="container mx-auto my-10">
            <div className="bg-gray-100 font-[sans-serif] relative  rounded overflow-hidden my-4">
                <div className="grid sm:grid-cols-2 gap-6 max-sm:gap-12 py-12 px-6">
                    <div className="bg-gradient-to-tr from-[#273284b6] to-[#1e1e60] px-4 py-8 text-center rounded-[30px] w-full max-w-[300px] h-max skew-x-[10deg] mx-auto shadow-lg shadow-purple-400">

                        <h6 className="text-gray-300 text-4xl">Big</h6>
                        <h2 className="text-white text-7xl font-bold mt-0.5">Sale!</h2>{/* bannerCouponCodeName */}
                        <p className="text-gray-300 text-base mt-2">Arriving this weekend</p>{/* bannerCouponRate */}
                    </div>

                    <div className="text-center">
                        <h3 className="font-bold text-4xl text-orange-500">bannerName</h3>
                        <h6 className="text-2xl text-orange-500 mt-0.5">bannerTitle</h6>
                        <p className="text-gray-800 text-base mt-4">bannerDescription Discover amazing discounts and deals. Don miss out on our exclusive offers available for a limited time.</p>

                        <Link to={'/userAllTestPage'} className="btn bg-gradient-to-r hover:bg-gradient-to-l from-orange-400 to-orange-600 hover:bg-orange-500 text-white tracking-wide font-semibold py-3 px-6 rounded-lg w-max mt-8">
                            See All Test
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;