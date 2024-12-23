"use client";
import statistics from "@/app/data/statistics";

import React, { useEffect, useRef, useState } from "react";
import StaticCard from "./staticCard/StaticCard";

function StatisticsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [statisticsNum, setStatisticsNum] = useState<number[]>(
    new Array(statistics.length).fill(0)
  );

  const intervalRefs = useRef<(NodeJS.Timeout | null)[]>(
    new Array(statistics.length).fill(null)
  ); // Store interval IDs
  useEffect(() => {
    if (isVisible) {
      // console.log("visible");
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
    <section className="grid grid-cols-1 lg:grid-cols-3 my-16 md:my-24">
      {statistics.map((item, index) => (
        <StaticCard
          index={index}
          statisticsNum={statisticsNum}
          setIsVisible={setIsVisible}
          item={item}
          key={index}
        />
      ))}
    </section>
  );
}

export default StatisticsSection;
