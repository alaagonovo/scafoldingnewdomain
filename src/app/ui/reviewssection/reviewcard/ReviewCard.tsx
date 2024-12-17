import React from "react";
import styles from "../reviews.module.css";
import Image from "next/image";
import Reviewer from "../reviewer/Reviewer";

interface IReviewProps {
  id: string;
  caption: string;
  subtitle?: string;
  review: string;
  clientImage: string;
  clientName: string;
  clientPlace: string;
}
function ReviewCard({
  review,
  index,
  handleOpenCard,
  activeCard,
}: {
  review: IReviewProps;
  index: number;
  handleOpenCard: (id: string) => void;
  activeCard: string;
}) {
  return (
    <div
      key={review.id}
      id={review.id}
      style={index === 0 ? { zIndex: "4" } : { zIndex: `${4 - index}` }}
      className={`${styles.card} ${
        activeCard === review.id
          ? index === 0
            ? styles.active
            : styles.otheraActive
          : ""
      }`}
    >
      <div
        className={`${
          activeCard === review.id
            ? "bg-reviewactive"
            : index === 1
            ? activeCard === "3"
              ? "bg-reviewsemidark"
              : "bg-reviewsemilight"
            : index === 2
            ? activeCard === "3"
              ? "bg-reviewsemilight"
              : "bg-reviewsemidark"
            : "bg-reviewdark"
        } w-full h-full rounded-[45px]`}
      >
        {activeCard !== review.id ? (
          <div>
            <div
              className={`absolute top-10 ${index === 0 ? "left-8" : "left-32"}
                
              }`}
            >
              <p
                className={`bg-white py-1 px-4 text-[12px] w-fit font-semibold text-reviewTitle rounded-md ${styles.otherAnimation}`}
              >
                Label
              </p>
              <h3
                className={`text-reviewTitle text-[24px] font-semibold mt-6 ${styles.otherAnimation}`}
              >
                Section {index + 1}
              </h3>
            </div>
            <div
              className={`z-20 bottom-3 ${
                index === 0 ? "left-8" : "left-32"
              } absolute ${styles.otherAnimation}`}
            >
              <button
                className="relative"
                onClick={() => handleOpenCard(review.id)}
              >
                <Image
                  src="/svgs/btnreview.svg"
                  alt="arrow button"
                  width={56}
                  height={56}
                />
              </button>
            </div>
          </div>
        ) : (
          <div className={`max-w-full ${index !== 0 ? "ml-24" : ""}`}>
            <div
              className={`px-[32px] py-[26px] ${
                index !== 0 ? styles.otherAnimation : styles.firstAnimation
              }`}
            >
              <p className="bg-white py-1 px-4 text-[12px] font-semibold text-reviewTitle rounded-md w-fit">
                Label
              </p>

              <Image
                className="mt-7 mb-6"
                src="/svgs/rate.svg"
                alt=""
                width={260}
                height={44}
              />

              <h1 className="text-[33px] font-semibold text-btnbg mb-7">
                {review.caption}
              </h1>
              <p className="text-[20px] leading-8 text-btnbg font-normal max-h-24 overflow-hidden">
                {review.review}
              </p>
              <Reviewer
                clientImage={review.clientImage}
                clientName={review.clientName}
                clientPlace={review.clientPlace}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ReviewCard;
