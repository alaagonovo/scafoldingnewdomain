"use client";
import statistics from "@/app/data/statistics";
import { useIntersectionObserver } from "@/app/lib/useIntersectionObserver";
import React, { useEffect, useRef, useState } from "react";

function StatisticsSection() {
  const { isVisible, elementRef } = useIntersectionObserver("0");
  const [statisticsNum, setStatisticsNum] = useState<number[]>(
    new Array(statistics.length).fill(0)
  );

  const intervalRefs = useRef<(NodeJS.Timeout | null)[]>(
    new Array(statistics.length).fill(null)
  ); // Store interval IDs
  useEffect(() => {
    if (isVisible) {
      statistics.forEach((item, index) => {
        handleChangeStatistics(index, item.num);
      });
    }
    return () => {
      intervalRefs.current.forEach((interval) => {
        if (interval) clearInterval(interval);
      });
    };
  }, [isVisible]);
  const handleChangeStatistics = (index: number, value: number) => {
    const intervalDelay = 100; // Interval delay in milliseconds
    const steps = 2000 / intervalDelay; // Total number of intervals
    const increment = Math.ceil(value / steps); // Increment step for this counter
    setInterval(() => {
      setStatisticsNum((prev) => {
        const newStats = [...prev];
        if (newStats[index] + increment < value) {
          newStats[index] += increment;
        } else {
          newStats[index] = value;
          clearInterval(intervalRefs.current[index]!);
          // Stop the interval once the value is reached
        }
        return newStats;
      });
    }, intervalDelay); // Change the
  };
  return (
    <section className="grid grid-cols-3 my-12">
      {statistics.map((item, index) => (
        <div
          key={index}
          ref={elementRef}
          style={{
            backgroundColor: `${item.bgColor}`,
            color: `${item.textColor}`,
          }}
          className="flex justify-center items-center h-[613px]"
        >
          <h1 className="text-[59px] font-bold w-[323px] text-center leading-[70px]">
            <span
              style={{ animationDuration: `1ms` }}
              className="animate-slide"
            >
              {statisticsNum[index]}
            </span>
            {item?.sign}
            <br />
            {item.text}
          </h1>
        </div>
      ))}
    </section>
  );
}

export default StatisticsSection;
