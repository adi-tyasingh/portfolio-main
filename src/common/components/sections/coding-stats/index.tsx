"use client";

import React, { useEffect, useState } from "react";
import { useSectionInView } from "@/common/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "@/common/components/shared/section-heading";
import SectionDivider from "@/common/components/shared/section-divider";

interface CodingStatsData {
  totalProblems: number;
  activeDays: number;
  leetcodeRating: number;
  codeforcesRating: string;
  codechefRating: number;
  codechefStars: number;
  contestsParticipated: number;
}

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
      duration: 0.5,
    },
  }),
};

export default function CodingStats() {
  const { ref } = useSectionInView("coding");
  const [stats, setStats] = useState<CodingStatsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCodingStats = async () => {
      try {
        const res = await fetch("/api/codolio");
        const data = await res.json();

        if (data.status?.success) {
          const platforms = data.data?.platformProfiles?.platformProfiles || [];

          // Calculate total problems
          const totalProblems = platforms.reduce(
            (acc: number, platform: any) =>
              acc + (platform.totalQuestionStats?.totalQuestionCounts || 0),
            0
          );

          // Get LeetCode stats
          const leetcode = platforms.find((p: any) => p.platform === "leetcode");
          const leetcodeRating = leetcode?.userStats?.currentRating || 0;

          // Get Codeforces stats
          const codeforces = platforms.find((p: any) => p.platform === "codeforces");
          const codeforcesRating = codeforces?.userStats?.rank || "Unrated";

          // Get CodeChef stats
          const codechef = platforms.find((p: any) => p.platform === "codechef");
          const codechefRating = codechef?.userStats?.currentRating || 0;
          const codechefStars = codechef?.userStats?.stars || 0;

          // Aggregate active days across ALL platforms - count unique days
          const allActiveDays = new Set<string>();
          platforms.forEach((platform: any) => {
            const submissionCalendar = platform.dailyActivityStatsResponse?.submissionCalendar;
            if (submissionCalendar && typeof submissionCalendar === 'object') {
              // Add all unique timestamps (each timestamp represents a unique day)
              Object.keys(submissionCalendar).forEach((timestamp) => {
                allActiveDays.add(timestamp);
              });
            }
          });
          const totalActiveDays = allActiveDays.size;

          // Count total contests participated
          const contestsParticipated = platforms.reduce(
            (acc: number, platform: any) =>
              acc + (platform.contestActivityStats?.contestActivityList?.length || 0),
            0
          );

          setStats({
            totalProblems,
            activeDays: totalActiveDays,
            leetcodeRating,
            codeforcesRating,
            codechefRating,
            codechefStars,
            contestsParticipated,
          });
        }
      } catch (error) {
        console.error("Error fetching coding stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCodingStats();
  }, []);

  const statCards = stats
    ? [
        // Row 1
        {
          label: "Contests",
          value: stats.contestsParticipated,
          icon: "🏆",
          color: "from-pink-500 to-rose-500",
          url: null,
        },
        {
          label: "Problems Solved",
          value: stats.totalProblems.toLocaleString(),
          icon: "🎯",
          color: "from-blue-500 to-cyan-500",
          url: null,
        },
        {
          label: "Active Days",
          value: stats.activeDays.toLocaleString(),
          icon: "📅",
          color: "from-green-500 to-emerald-500",
          url: null,
        },
        // Row 2 - Platform ratings with links
        {
          label: "CodeChef",
          value: `${stats.codechefRating}`,
          icon: "👨‍🍳",
          color: "from-indigo-500 to-blue-500",
          url: "https://www.codechef.com/users/singhaditya4",
        },
        {
          label: "Codeforces",
          value: stats.codeforcesRating,
          icon: "⚔️",
          color: "from-purple-500 to-pink-500",
          url: "https://codeforces.com/profile/SinghAditya",
        },
        {
          label: "LeetCode",
          value: stats.leetcodeRating,
          icon: "💻",
          color: "from-yellow-500 to-orange-500",
          url: "https://leetcode.com/u/Adi-tyaSingh/",
        },
      ]
    : [];

  return (
    <section
      id="coding"
      ref={ref}
      className="flex w-full flex-col items-center justify-center py-24 pb-[150px] text-center dark:bg-darkBg dark:text-white sm:pb-40"
      aria-label="Coding statistics section"
    >
      <SectionHeading>Coding Statistics</SectionHeading>

      {loading ? (
        <div className="my-26 mb-[150px] flex items-center justify-center">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-gray-900 dark:border-gray-600 dark:border-t-gray-100"></div>
        </div>
      ) : (
        <div className="my-26 mb-[150px] grid w-full max-w-5xl grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3">
          {statCards.map((stat, index) => {
            const CardContent = (
              <motion.div
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
                className="borderBlack group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl dark:bg-white/10"
              >
                <div className="flex flex-col items-center justify-center space-y-3">
                  <div className="text-5xl">{stat.icon}</div>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </div>
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 -z-10 bg-gradient-to-br ${stat.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
                ></div>
              </motion.div>
            );

            return stat.url ? (
              <a
                key={index}
                href={stat.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                aria-label={`Visit ${stat.label} profile (opens in new tab)`}
              >
                {CardContent}
              </a>
            ) : (
              CardContent
            );
          })}
        </div>
      )}

      <div className="flex w-full justify-center dark:bg-darkBg">
        <SectionDivider />
      </div>
    </section>
  );
}
