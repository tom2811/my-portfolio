import Image from "next/image";
import type { ReactNode } from "react";

type Certificate = {
  name: string;
  issuer: string;
  image: string;
  date: string;
};

const CERTIFICATES: Certificate[] = [
  {
    name: "CS50x: Introduction to Computer Science",
    issuer: "Harvard University",
    image: "/certificates/CS50x.png",
    date: "2023",
  },
  {
    name: "CS50P: Introduction to Programming with Python",
    issuer: "Harvard University",
    image: "/certificates/CS50P.png",
    date: "2023",
  },
  {
    name: "Fundamentals of Data Science",
    issuer: "University of Tokyo",
    image: "/certificates/Certificate.png",
    date: "2026",
  },
];

export function Certificates(): ReactNode {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-foreground text-[15px] font-semibold tracking-tight">
        Certifications
      </h3>
      <div className="border-foreground/5 bg-foreground/2 dark:bg-foreground/5 rounded-4xl border p-2 sm:p-4">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          {CERTIFICATES.map((cert) => (
            <div
              key={cert.name}
              className="bg-background border-foreground/5 group relative overflow-hidden rounded-2xl border transition-all hover:border-foreground/10"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={cert.image}
                  alt={`${cert.name} certificate`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-3">
                <h4 className="text-foreground text-[14px] font-semibold leading-tight tracking-tight">
                  {cert.name}
                </h4>
                <p className="text-foreground/65 mt-1 text-[12px] tracking-tight">
                  {cert.issuer}
                </p>
                <p className="text-foreground/45 mt-0.5 text-[11px] tracking-tight">
                  {cert.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
