import { Link } from "react-router-dom";
import UseAllBannerData from "../hookPersonal/UseAllBannerData";


const Banner = () => {


    const { isPending, error, activeData } = UseAllBannerData();
    if (isPending) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message


    const {
        bannerName,
        bannerImageLink,
        bannerTitle,
        bannerDescription,
        bannerCouponCodeName,
        bannerCouponRate,

    } = activeData;



    return (


        <div className="">
            <div className="bg-gray-100 font-[sans-serif] relative container mx-auto rounded overflow-hidden mt-4">
                <div className="grid sm:grid-cols-2 items-center justify-between max-sm:gap-10 py-10 border-y-8 border-orange-400">
                    <div className="text-center px-6">
                        <h3 className="font-extrabold text-5xl text-orange-500 leading-tight"><span className="text-gray-800">Special</span> Offer</h3>
                        <h6 className="text-2xl text-gray-800 mt-2">{bannerTitle}</h6>
                        <p className="text-gray-800 text-base leading-relaxed mt-4">{bannerDescription}</p>
                        <Link to={'/userAllTestPage'}>
                            <button type="button" className="bg-gradient-to-r hover:bg-gradient-to-l from-orange-400 to-orange-600 hover:bg-orange-500 text-white tracking-wide font-semibold text-sm py-3 px-6 rounded-lg w-max mt-8">
                                Get Started
                            </button>
                        </Link>

                    </div>

                    <div className="bg-gradient-to-tr from-orange-400 to-orange-600 rounded-tl-full rounded-bl-full w-full h-max">
                        <div className="p-2">
                            <img src={bannerImageLink} className="h-64 w-64 rounded-full object-cover border-4 border-white" alt="img" />
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Banner;