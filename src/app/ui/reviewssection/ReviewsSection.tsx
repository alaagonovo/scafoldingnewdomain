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
      <div
        className="main_wrapper "
        style={{ marginTop: "3rem", marginBottom: "2rem" }}
      >
        <h1 data-aos="fade-up" className="text-[3rem] font-semibold mb-[14px]">
          What Our Clients Say
        </h1>
        <div className="flex justify-between">
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="w-[880px]  text-[18px] font-medium"
          >
            Read the success stories and heartfelt testimonials from our valued
            clients. Discover why they chose Estatein for their real estate
            needs.
          </p>
          <Link
            data-aos="fade-left"
            data-aos-delay="300"
            className="text-white bg-btnbg text-[22px] inline-block ring-1 ring-white rounded-[68px] px-12 py-3"
            href="/"
          >
            Get a Quote
          </Link>
        </div>
      </div>
      <div
        data-aos="zoom-in-out"
        data-aos-delay="600"
        className={styles.container}
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
