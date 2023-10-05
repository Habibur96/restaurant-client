import React from "react";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import chalad from "../../../../assets/home/slide1.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";

const Recommands = () => {
  return (
    <section>
      <SectionTitle
        heading="-----Should try----"
        subHeading="CHEF RECOMMANDS"
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24 mt-24"
      >
       
        <SwiperSlide>
          <img src={chalad} alt="" className="rounded-xl" />{" "}
          <h2 className=" text-white text-2xl uppercase -mt-10 text-center">Caeser Salad</h2>
          <div className="card-body  items-center text-center">
            
            <p className=" mt-4">Letture,Eggs,Parmesan Cheese, Chiken Breeast Fillets</p>
            <div className="card-actions">
              <button className="btn btn-#1F2937 color-#BB8506 btn btn-outline border-0 border-b-4">
                ADD TO CART
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={chalad} alt="" className="rounded-xl" />{" "}
          <h2 className=" text-white text-2xl uppercase -mt-10 text-center">Caeser Salad</h2>
          <div className="card-body  items-center text-center">
            
            <p className=" mt-4">Letture,Eggs,Parmesan Cheese, Chiken Breeast Fillets</p>
            <div className="card-actions">
              <button className="btn btn-#1F2937 color-#BB8506 btn btn-outline border-0 border-b-4">
                ADD TO CART
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={chalad} alt="" className="rounded-xl" />{" "}
          <h2 className=" text-white text-2xl uppercase -mt-10 text-center">Caeser Salad</h2>
          <div className="card-body  items-center text-center">
            
            <p className=" mt-4">Letture,Eggs,Parmesan Cheese, Chiken Breeast Fillets</p>
            <div className="card-actions">
              <button className="btn btn-#1F2937 color-#BB8506 btn btn-outline border-0 border-b-4">
                ADD TO CART
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    
    </section>
  );
};

export default Recommands;
