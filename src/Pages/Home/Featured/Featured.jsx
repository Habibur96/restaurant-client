import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";
const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle
        subHeading="check it out"
        heading="Featured Items"
      ></SectionTitle>
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-40 pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Oct 3,2023</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
            similique non recusandae nam alias esse quos hic ipsam qui modi
            delectus, praesentium ipsa quasi iure accusamus exercitationem
            consequuntur, voluptates, voluptas dolores eum! Doloremque totam
            excepturi error esse officia inventore reiciendis! Deleniti libero
            repellat non dolores error voluptatibus aspernatur aliquam harum?
          </p>
          <button className="btn btn-outline border-0 border-b-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
