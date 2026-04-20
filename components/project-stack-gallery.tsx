"use client";

import Image from "next/image";
import { useState } from "react";
import { projects } from "@/lib/site-data";
import { LightboxGallery } from "@/components/lightbox-gallery";

export function ProjectStackGallery() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const toggleProject = (slug: string) => {
    const isOpening = openSlug !== slug;
    setOpenSlug(isOpening ? slug : null);

    if (isOpening) {
      // Find the element after state update and render
      setTimeout(() => {
        const element = document.getElementById(`gallery-${slug}`);
        if (element) {
          const yOffset = -100; // Offset for header
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <div className="space-y-[110px]">
      {projects.map((project, index) => {
        const reversed = index % 2 === 1;
        const isOpen = openSlug === project.slug;

        return (
          <div key={project.slug}>
            <article
              className={`relative mx-auto flex h-auto w-full flex-col overflow-visible bg-white shadow-[0_5px_20px_rgba(0,0,0,0.1)] transition hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] md:h-[480px] md:w-[50vw] ${
                reversed
                  ? "md:-translate-x-[20vw] hover:md:-translate-x-[20vw] hover:md:-translate-y-[5px]"
                  : "md:translate-x-[20vw] hover:md:translate-x-[20vw] hover:md:-translate-y-[5px]"
              }`}
            >
              <div className="relative h-[320px] overflow-hidden md:h-full">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-300 hover:scale-105"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>

              {/* Text Container */}
              <div
                className={`z-10 bg-[var(--brand-blue)] px-6 py-10 text-left text-white shadow-[0_8px_32px_rgba(0,0,0,0.2)] md:absolute md:top-1/2 md:w-[60%] md:-translate-y-1/2 ${
                  reversed ? "md:right-[-30%]" : "md:left-[-30%]"
                }`}
              >
                <div className="flex w-full flex-col gap-5">
                  <h3 className="text-[2.2rem] font-light leading-tight text-white">
                    {project.title}
                  </h3>
                  <div className="text-[1.1rem] leading-[1.6] text-white/90 font-light">
                    <p>{project.description}</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => toggleProject(project.slug)}
                  className="mt-8 border-b border-white/50 pb-1 text-sm font-light uppercase tracking-[0.15em] text-white transition hover:border-white"
                >
                  {isOpen ? "ZATVORIŤ GALÉRIU ←" : "POZRIEŤ GALÉRIU →"}
                </button>
              </div>

              {/* Crest Image (Erb) */}
              <div
                className={`absolute top-1/2 z-20 hidden h-[220px] w-[220px] -translate-y-1/2 items-center justify-center rounded-xl bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.2)] md:flex ${
                  reversed ? "md:right-[-500px]" : "md:left-[-500px]"
                }`}
              >
                <Image
                  src={project.crestImage}
                  alt={`${project.title} erb`}
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
            </article>

            {isOpen ? (
              <div
                id={`gallery-${project.slug}`}
                className="animate-slide-down border-t border-black/10 bg-white px-6 py-8 shadow-[0_8px_28px_rgba(0,0,0,0.08)] md:px-10"
              >
                <LightboxGallery
                  images={project.gallery}
                  title={project.title}
                  columns={4}
                  imageHeight={220}
                />
                <div className="mt-6 text-center">
                  <button
                    type="button"
                    onClick={() => setOpenSlug(null)}
                    className="blue-button px-6 py-3"
                  >
                    Zatvoriť galériu
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
