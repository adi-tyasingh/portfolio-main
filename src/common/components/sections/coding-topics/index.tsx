"use client";

import React from "react";
import { codingTopicsData } from "@/common/lib/data";
import { motion } from "framer-motion";
import SectionHeading from "@/common/components/shared/section-heading";
import SectionDivider from "@/common/components/shared/section-divider";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function CodingTopics() {
  return (
    <section
      className="flex w-full flex-col items-center justify-center py-24 pb-[150px] text-center dark:bg-darkBg dark:text-white sm:pb-40"
      aria-label="Coding topics section"
    >
      <SectionHeading>Topics I've Mastered</SectionHeading>
      <ul className="my-26 mb-[150px] flex max-w-[53rem] flex-wrap items-center justify-center gap-2 text-lg text-gray-800" aria-label="List of coding topics">
        {codingTopicsData.map((topic, index) => (
          <motion.li
            className="borderBlack flex items-center justify-center rounded-xl bg-gray-200 px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {topic}
          </motion.li>
        ))}
      </ul>
      <div className="flex w-full justify-center dark:bg-darkBg">
        <SectionDivider />
      </div>
    </section>
  );
}
