"use client";

import React, { useState } from "react";

import reviews from "@/app/data/reviews";
import styles from "./reviews.module.css";

import ReviewCard from "./reviewcard/ReviewCard";
const ReviewsSection = () => {
  const [activeCard, setActiveCard] = useState(reviews[0].id); // Default active card

  const handleCardClick = (id: string) => {
    setActiveCard(id);
  };

  return (
    <div>
      <h1 className={styles.title}>Expanding Cards</h1>
      <div className={styles.container}>
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
    </div>
  );
};

export default ReviewsSection;
