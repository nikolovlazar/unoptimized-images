"use client";

import { useEffect } from "react";

export const PerfObserver = ({ type }) => {
  useEffect(() => {
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        console.log(type, entry.startTime, entry);
      }
    }).observe({ type, buffered: true });
  }, []);

  return <></>;
};
