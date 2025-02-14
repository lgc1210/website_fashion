import React from "react";
import styles from "./index.module.css";
import QuotationLeft from "../../../assets/images/654dbb5d161bb35eb5832368_Testimonial-left.svg";
import QuotationRight from "../../../assets/images/654dbb21bd187659d9beb63f_Testimonial-right.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const sampleData = [
  {
    content:
      "“It's about self-expression and attitude, not a final destination. Your choices speak volumes about your evolving self. Embrace this dynamic process where attitude brings your unique fashion to life.”",
    client: "Ruby Rose",
  },
  {
    content:
      "“Fashion you can buy, but style you possess. The key to style is learning who you are, which takes years. There's no how-to road map to style. It's about self expression and, above all, attitude.”",
    client: "Donald Duck",
  },
  {
    content:
      "“Unveiling your style is a journey of self-discovery that spans years. There's no step-by-step guide to cultivate style. It revolves around self-expression and, most importantly, attitude.”",
    client: "Charlie Chaplin",
  },
];

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
};

const Feedback = () => {
  return (
    <div className='max-w-6xl mx-auto flex flex-col gap-8 pb-44 border-b'>
      <div
        className={`${styles.border_color} py-4 px-10 rounded-full border w-fit mx-auto text-center`}>
        <p
          className={`${styles.primary_text} ${styles.secondary_font} uppercase text-lg secondary_font`}>
          Feedback from Clients"
        </p>
      </div>

      <div
        className='bg-no-repeat lg:bg-[position:left_top,right_top] bg-[position:left_top,right_bottom]'
        style={{
          backgroundImage: `url(${QuotationLeft}), url(${QuotationRight})`,
        }}>
        <Slider {...settings}>
          {sampleData.map((item, index) => (
            <div
              key={index}
              className='text-center lg:px-40 lg:py-0 py-32 px-0'>
              <p className='mb-8 text-3xl font-extralight'>{item?.content}</p>
              <p>{item?.client}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Feedback;
