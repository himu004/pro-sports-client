
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div className="h-[600px] w-full">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper h-full"
            >
                <SwiperSlide>
                    <div className="hero h-full" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1593419528756-3cdfa1645f23)'}}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Premium Sports Apparel</h1>
                                <p className="mb-5">Discover our collection of high-performance athletic wear designed for champions</p>
                                <button className="btn btn-primary">Shop Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-full" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1556906781-9a412961c28c)'}}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Elite Sports Shoes</h1>
                                <p className="mb-5">Step into greatness with our cutting-edge athletic footwear collection</p>
                                <button className="btn btn-primary">Explore</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-full" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1517466787929-bc90951d0974)'}}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Official Jerseys</h1>
                                <p className="mb-5">Wear your team pride with our authentic sports jerseys collection</p>
                                <button className="btn btn-primary">View Collection</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-full" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1535131749006-b7f58c99034b)'}}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Sports Equipment</h1>
                                <p className="mb-5">Professional grade equipment for every sport and athlete</p>
                                <button className="btn btn-primary">Browse Equipment</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;