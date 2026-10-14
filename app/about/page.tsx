import { Certificates } from "@/components/about/certificates";
import { Education } from "@/components/about/education";
import { Experience } from "@/components/about/experience";
import { PolaroidStrip } from "@/components/about/polaroid-strip";
import { Skills } from "@/components/about/skills";
import { Stack } from "@/components/about/stack";
import { FadeIn } from "@/components/ui/motion-primitives";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "About",
  description: "About me, background, and how to get in touch.",
  path: "/about",
});

export default function AboutPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-312 pt-40 sm:pt-56">
        <PolaroidStrip />
      </section>

      <section className="mx-auto w-full max-w-160 px-6 pt-20 pb-16 sm:px-10 sm:pt-28 sm:pb-24">
        <FadeIn delay={0.5}>
          <div className="rounded-4xl border border-foreground/5 bg-foreground/1.5 p-8 sm:p-12 dark:bg-foreground/3">
            <h1 className="font-serif text-[1.75rem] font-medium tracking-tight text-foreground sm:text-[2rem]">
              Hello! I&rsquo;m <span className="border-b border-foreground/30 pb-0.5">Oak Soe Thein</span>.
            </h1>
            <div className="mt-8 space-y-6 text-[17px] leading-[1.7] tracking-tight text-foreground/75 sm:text-[18px]">
              <p>
                A <strong className="font-semibold text-foreground">full-stack developer</strong> currently living in Bangkok, Thailand, with a passion for building scalable web applications. My expertise spans across React, Next.js, TypeScript on the frontend, and Python (FastAPI, Django) and Node.js on the backend.
              </p>
              <p>
                Currently pursuing a <strong className="font-semibold text-foreground">Higher Diploma in Infocomm Technology</strong> (with plans to progress to a Bachelor&apos;s degree) while gaining hands-on experience through professional work and personal projects. I&apos;ve built production systems handling complex challenges like atomic transactions, real-time data processing, and hybrid AI architectures.
              </p>
              <p>
                My journey started with <strong className="font-semibold text-foreground">Harvard&apos;s CS50</strong> courses, leading to six months of professional experience migrating legacy systems to modern React architectures. Now, I&apos;m transitioning toward <strong className="font-semibold text-foreground">AI engineering</strong>, focusing on RAG systems, LangChain integration, and building intelligent applications that combine traditional software engineering with modern AI capabilities.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto w-full max-w-[40rem] px-6 pb-20 sm:px-10 sm:pb-28">
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-10">
            <Experience />
            <Education />
            <Certificates />
            <Skills />
            <Stack />
          </div>
        </FadeIn>
      </section>

      <div className="h-12 sm:h-16" />
    </main>
  );
}
