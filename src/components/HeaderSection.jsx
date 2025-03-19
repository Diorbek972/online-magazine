import React from 'react'
import { Container } from 'react-bootstrap'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// icons
import { BsApple } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
// image
import imgone from '../assets/image/apple.jpg'

function HeaderSection() {
  return (
    <Container>
      <div className="row">
        <div className="col-md-3">
            <h6 className='my-4'>Woman’s Fashion</h6>
            <h6 className='my-4'>Men’s Fashion</h6>
            <h6 className='my-4'>Electronics</h6>
            <h6 className='my-4'>Home & Lifestyle</h6>
            <h6 className='my-4'>Medicine</h6>
            <h6 className='my-4'>Sports & Outdoor</h6>
            <h6 className='my-4'>Groceries & Pets</h6>
            <h6 className='my-4'>Health & Beauty</h6>
        </div>
        <div className="col-md-9">
        <Swiper
                spaceBetween={1}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className='bak-color '>
                <div className="row align-items-center ">
                    <div className='col-md-6 p-5'>
                    <BsApple className='icon text-light '/>
                    <h4 className='text-light d-inline ms-3'>iPhone 14 Series</h4>
                    <h1 className='text-light my-4'>Up to 10% off Voucher</h1>
                    <h4 className='text-light'>Shop Now <FaArrowRight /></h4>
                    </div>
                    <div className='col-md-6'>
                    <img src={imgone} className='img-fluid' alt="" />
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide className='bak-color'>
                <div className="row align-items-center ">
                    <div className='col-md-6 p-5'>
                    <BsApple className='icon text-light '/>
                    <h4 className='text-light d-inline ms-3'>iPhone 14 Series</h4>
                    <h1 className='text-light my-4'>Up to 10% off Voucher</h1>
                    <h4 className='text-light'>Shop Now <FaArrowRight /></h4>
                    </div>
                    <div className='col-md-6'>
                    <img src={imgone} className='img-fluid' alt="" />
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide className='bak-color'>
                <div className="row align-items-center ">
                    <div className='col-md-6 p-5'>
                    <BsApple className='icon text-light '/>
                    <h4 className='text-light d-inline ms-3'>iPhone 14 Series</h4>
                    <h1 className='text-light my-4'>Up to 10% off Voucher</h1>
                    <h4 className='text-light'>Shop Now <FaArrowRight /></h4>
                    </div>
                    <div className='col-md-6'>
                    <img src={imgone} className='img-fluid' alt="" />
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide className='bak-color'>
                <div className="row align-items-center ">
                    <div className='col-md-6 p-5'>
                    <BsApple className='icon text-light '/>
                    <h4 className='text-light d-inline ms-3'>iPhone 14 Series</h4>
                    <h1 className='text-light my-4'>Up to 10% off Voucher</h1>
                    <h4 className='text-light'>Shop Now <FaArrowRight /></h4>
                    </div>
                    <div className='col-md-6'>
                    <img src={imgone} className='img-fluid' alt="" />
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide className='bak-color'>
                <div className="row align-items-center ">
                    <div className='col-md-6 p-5'>
                    <BsApple className='icon text-light '/>
                    <h4 className='text-light d-inline ms-3'>iPhone 14 Series</h4>
                    <h1 className='text-light my-4'>Up to 10% off Voucher</h1>
                    <h4 className='text-light'>Shop Now <FaArrowRight /></h4>
                    </div>
                    <div className='col-md-6'>
                    <img src={imgone} className='img-fluid' alt="" />
                    </div>
                </div>
                </SwiperSlide>

            </Swiper>
        </div>
      </div>
    </Container>
  )
}

export default HeaderSection
