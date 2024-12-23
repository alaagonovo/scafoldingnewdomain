"use client";
import React, { useState } from "react";
import reviews from "@/app/data/reviews";
import styles from "./reviews.module.css";
import ReviewCard from "./reviewcard/ReviewCard";
import Link from "next/link";
const ReviewsSection = () => {
  const [activeCard, setActiveCard] = useState(reviews[0].id); // Default active card

  const handleCardClick = (id: string) => {
    setActiveCard(id);
  };

  return (
    <section className="overflow-hidden">
      <div className="mx-auto w-[92%] md:w-[88%] mt-16 md:mt-24 mb-20 lg:mb-8">
        <h1
          data-aos="fade-up"
          className="text-3xl md:text-[3rem] font-semibold mb-[14px] md:leading-[72px]"
        >
          What Our Clients Say
        </h1>
        <div className="flex justify-between flex-wrap gap-8 ">
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="w-[870px] text-sm md:text-[18px] font-medium md:leading-7"
          >
            Discover the Inspiring Success Stories and Heartfelt Testimonials
            from Our Valued Clients: Learn Why They Trust Face2Face for
            Exceptional Service
          </p>
          <Link
            data-aos="fade-left"
            data-aos-delay="300"
            className="text-white text-[18px] md:text-[22px] inline-block ring-1 ring-white rounded-[68px] bg-btnbg px-7 py-3 md:px-12 md:py-3"
            href="/getaquote"
          >
            Get a Quote
          </Link>
        </div>
      </div>
      <div
        data-aos="zoom-in-out"
        data-aos-delay="600"
        className={`${styles.container} mb-16 md:mb-24 mx-auto`}
      >
        {reviews.map((item, index) => (
          <ReviewCard
            review={item}
            key={index}
            index={index}
            handleOpenCard={handleCardClick}
            activeCard={activeCard}
          />
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;
