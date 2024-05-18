// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Category.css';

// import required modules
import { Pagination } from 'swiper/modules';

// import slide images
import sliderImage1 from "../../../assets/home/slide1.jpg";
import sliderImage2 from "../../../assets/home/slide2.jpg";
import sliderImage3 from "../../../assets/home/slide3.jpg";
import sliderImage4 from "../../../assets/home/slide4.jpg";
import SectionHeading from '../../Shared/SectionHeading/SectionHeading';

const Category = () => {
    return (
        <div className='container mx-auto my-24'>
            <SectionHeading top_heading={"---From 11:00am to 10:00pm---"} heading={"Order Online"} />
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='relative' src={sliderImage1} alt='Salads' />
                    <h3 className='absolute top-3/4'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='relative' src={sliderImage2} alt='Salads' />
                    <h3 className='absolute top-3/4'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='relative' src={sliderImage3} alt='Salads' />
                    <h3 className='absolute top-3/4'>Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='relative' src={sliderImage4} alt='Salads' />
                    <h3 className='absolute top-3/4'>Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='relative' src={sliderImage1} alt='Salads' />
                    <h3 className='absolute top-3/4'>Salads</h3>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;