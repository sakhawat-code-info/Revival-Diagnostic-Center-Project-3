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
        <div>
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