"use client";

import "next-cloudinary/dist/cld-video-player.css";
import SectionDivider from "@/common/components/shared/section-divider";
import TextAnimation from "./_components/text-animation";
import { useSectionInView } from "@/common/lib/hooks";
import { useActiveSectionContext } from "@/common/stores/active-section";
import { smoothScrollTo } from "@/common/lib/utils";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const { ref } = useSectionInView("home");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <>
      <section
        className="relative flex h-screen w-full scroll-mt-36 flex-col items-center justify-center"
        id="home"
        ref={ref}
        aria-label="Hero section - Introduction"
      >
        <div
          className={
            "absolute left-0 top-0 h-screen w-full dark:bg-[#0000007c]"
          }
          aria-hidden="true"
        ></div>
        <video
          width="480"
          height="720"
          preload="none"
          autoPlay
          crossOrigin="anonymous"
          muted
          loop
          className="absolute -z-10 h-screen w-screen object-cover"
          aria-label="Background video showing animated patterns"
        >
          <source src="/layout.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="container flex flex-col items-start justify-center tracking-wide text-black dark:text-white">
          <div className="container relative flex h-full w-full flex-col items-center">
            <div className="h-72 w-[280px] text-center text-[2rem] font-extrabold sm:w-[520px] md:w-[700px] lg:mb-5 lg:w-[920px] lg:text-[3rem]">
              <motion.h1
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
                className="mb-10 text-start font-extrabold"
              >
                Hey!
              </motion.h1>
              <br />
              <h2 className="sr-only">I&apos;m Aditya Pratap Singh, Full Stack Developer</h2>
              <TextAnimation delay={1} baseText={`I'm Aditya`} />
            </div>
            <motion.div
              className="w-92 flex flex-col items-center justify-center gap-3 px-4 text-sm font-medium md:mt-12 md:flex-row lg:text-lg"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
              }}
            >
              <a
                className="group flex w-64 cursor-pointer items-center justify-center gap-2 rounded-full bg-darkBg px-7 py-3 text-white outline-none transition hover:bg-lightBeige hover:text-black hover:dark:text-black sm:w-auto"
                onClick={(e) => {
                  smoothScrollTo({ e, id: "contact" });
                  setActiveSection("contact");
                  setTimeOfLastClick(Date.now());
                }}
                role="button"
                aria-label="Navigate to contact section"
              >
                <span>Contact me here</span>
              </a>

              <a
                className="borderBlack group flex w-64 cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-black outline-none transition hover:bg-gray-100 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 sm:w-auto"
                href="/CV_Aditya-Singh-GP.pdf"
                download
                aria-label="Download Aditya Pratap Singh's CV (PDF)"
              >
                <span>Download CV</span>
              </a>

              <div className="flex gap-2" role="navigation" aria-label="Social media links">
                <a
                  className="borderBlack flex h-[50px] w-[50px] cursor-pointer items-center justify-center gap-2 rounded-full bg-white p-2 text-black transition hover:bg-gray-100 hover:text-gray-950 dark:bg-white/10 dark:text-white/60 dark:hover:bg-white/20"
                  href="https://www.linkedin.com/in/aditya-pratap-singh-980ab9269/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Aditya Pratap Singh's LinkedIn profile (opens in new tab)"
                >
                  <Linkedin aria-hidden="true" />
                </a>
                <a
                  className="borderBlack flex h-[50px] w-[50px] cursor-pointer items-center justify-center gap-2 rounded-full bg-white p-2 text-gray-700 transition hover:bg-gray-100 hover:text-gray-950 dark:bg-white/10 dark:text-white/60 dark:hover:bg-white/20"
                  href="https://github.com/adi-tyasingh"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Aditya Pratap Singh's GitHub profile (opens in new tab)"
                >
                  <Image
                    width={25}
                    height={25}
                    src={"/svgs/github.svg"}
                    alt="GitHub icon"
                  />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <div className="flex w-full justify-center dark:bg-darkBg">
        <SectionDivider />
      </div>
    </>
  );
}
