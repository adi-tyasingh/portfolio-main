"use client";

import CodingStats from "@/common/components/sections/coding-stats";
import CodingTopics from "@/common/components/sections/coding-topics";

export default function ProblemSolvingStats() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center p-0">
      <div className="mt-20 w-full">
        <CodingStats />
        <CodingTopics />
      </div>
    </main>
  );
}
