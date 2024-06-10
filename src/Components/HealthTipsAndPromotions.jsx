import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';

// import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";
import UseHealthTipsData from '../hookPersonal/UseHealthTipsData';


const HealthTipsAndPromotions = () => {

    const { allHealthTips } = UseHealthTipsData();

    console.log(allHealthTips)

    return (
        <div className='my-10'>

            <div className="bg-gradient-to-r from-blue-700 to-[#B06AB3] font-sans px-6 py-12">
                <div className="container mx-auto flex flex-col justify-center items-center text-center">
                    <h2 className="text-white sm:text-4xl text-3xl font-bold mb-4">Discover our health tips && Preventive measures</h2>
                    <p className="text-white text-base text-center mb-8"> Your doctor will ask about your medical history, including any chronic illnesses, surgeries, or hospitalizations. They will also inquire about your family medical history.</p>
                </div>
            </div>


            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    allHealthTips?.map(item => <SwiperSlide key={item._id}>

                        <div className="flex flex-col items-center justify-center text-center gap-4 my-10">
                            {/* <Rating
                                style={{ maxWidth: 180 }}
                                value={item.rating}
                                readOnly
                            /> */}
                            <FaQuoteLeft size={70} />

                            <p>{item.description}</p>
                            <h1 className="text-red-500">{item.title}</h1>
                        </div>


                    </SwiperSlide>)
                }



            </Swiper>


        </div>
    );
};

export default HealthTipsAndPromotions;