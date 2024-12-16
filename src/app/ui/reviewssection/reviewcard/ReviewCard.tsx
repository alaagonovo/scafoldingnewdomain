import React from "react";
import styles from "../reviews.module.css";

interface IReviewProps {
  id: string;
  caption: string;
  backgroundImage: string;
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
        activeCard === review.id ? styles.active : ""
      }`}
    >
      <div
        className={`${
          activeCard === review.id ? "bg-reviewactive" : "bg-slate-100"
        } w-full h-full  border rounded-[35px] border-r-1 `}
      >
        {activeCard !== review.id ? (
          <div>
            <div
              className={`absolute top-10 ${
                index === 0 ? "left-8" : "left-32"
              }`}
            >
              <p
                className={`bg-white  
            }  py-1   px-4 text-[12px] font-semibold text-reviewTitle rounded-md`}
              >
                Label
              </p>
              <h3 className="text-reviewTitle text-[24px] font-semibold mt-6">
                {index + 1}
              </h3>
            </div>
            <button
              className="z-20 bottom-3 left-24 absolute"
              onClick={() => handleOpenCard(review.id)}
            >
              press
            </button>
          </div>
        ) : (
          <div className={`w-full ${index !== 0 ? "ml-24" : ""}`}>
            <p className="bg-white py-1 px-4 text-[12px] font-semibold text-reviewTitle rounded-md w-fit mt-10 ml-10">
              Label
            </p>
            <h1>Exceptional Service!</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default ReviewCard;
