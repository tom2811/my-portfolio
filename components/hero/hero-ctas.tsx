"use client";

import { ArrowRight } from "lucide-react";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import Link from "next/link";
import { useState, type ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export function HeroCtas(): ReactNode {
  const [resumeHover, setResumeHover] = useState(false);

  return (
    <LayoutGroup>
      <motion.div
        layout
        transition={{ layout: { duration: 0.55, ease: EASE } }}
        className="mt-2 flex flex-wrap items-center gap-3"
      >
        <motion.div
          layout
          transition={{ layout: { duration: 0.55, ease: EASE } }}
        >
          <Link
            href="/Oak_Soe_Thein_Resume.pdf"
            download
            onMouseEnter={() => setResumeHover(true)}
            onMouseLeave={() => setResumeHover(false)}
            className="focus-ring relative inline-flex h-[42px] cursor-pointer items-center justify-center rounded-xl bg-foreground px-5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
          >
            <motion.span
              layout="position"
              className="relative inline-flex items-center"
            >
              <AnimatePresence initial={false} mode="popLayout">
                {resumeHover ? (
                  <motion.span
                    key="download"
                    layout="position"
                    initial={{ opacity: 0, filter: "blur(8px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, filter: "blur(8px)" }}
                    transition={{ duration: 0.35, ease: EASE }}
                    className="inline-flex items-center gap-2 whitespace-nowrap"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    <span>Download Resume</span>
                  </motion.span>
                ) : (
                  <motion.span
                    key="resume"
                    layout="position"
                    initial={{ opacity: 0, filter: "blur(8px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, filter: "blur(8px)" }}
                    transition={{ duration: 0.35, ease: EASE }}
                    className="inline-flex items-center gap-2 whitespace-nowrap"
                  >
                    <span>Resume</span>
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.span>
          </Link>
        </motion.div>

        <motion.div
          layout
          transition={{ layout: { duration: 0.55, ease: EASE } }}
        >
          <Link
            href="/projects"
            className="border border-foreground/5 focus-ring group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-background px-5 py-2.5 text-sm font-medium text-foreground shadow-2xl transition-colors hover:bg-foreground/4"
          >
            View My Work
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </motion.div>
      </motion.div>
    </LayoutGroup>
  );
}
