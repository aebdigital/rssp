"use client";

import Image from "next/image";
import { useState } from "react";
import { projects } from "@/lib/site-data";
import { LightboxGallery } from "@/components/lightbox-gallery";

export function ProjectStackGallery() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  return (
    <div className="space-y-[110px]">
      {projects.map((project, index) => {
        const reversed = index % 2 === 1;
        const isOpen = openSlug === project.slug;

        return (
          <div key={project.slug}>
            <article
              className={`relative mx-auto flex h-auto w-full flex-col overflow-visible bg-white shadow-[0_5px_20px_rgba(0,0,0,0.1)] transition hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] md:h-[480px] md:w-[50vw] ${
                reversed ? "md:translate-x-[-20vw] hover:md:translate-x-[-20vw] hover:md:-translate-y-[5px]" : "md:translate-x-[20vw] hover:md:translate-x-[20vw] hover:md:-translate-y-[5px]"
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

              <div
                className={`z-10 bg-[var(--brand-blue)] px-6 py-8 text-left text-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] md:absolute md:top-1/2 md:w-1/2 md:-translate-y-1/2 md:px-5 md:py-5 ${
                  reversed ? "md:right-[-25%]" : "md:left-[-25%]"
                }`}
              >
                <div className="flex w-full flex-col gap-4">
                  <h3 className="text-[2rem] font-light text-white">{project.title}</h3>
                  <div className="text-[1.1rem] leading-[1.4] text-white">
                    <p>{project.description}</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setOpenSlug(isOpen ? null : project.slug)}
                  className="mt-6 border-b border-white/50 pb-0.5 text-sm font-light uppercase tracking-[0.12em] text-white transition hover:border-white"
                >
                  {isOpen ? "ZATVORIŤ ←" : "VIAC →"}
                </button>
              </div>
            </article>

            {isOpen ? (
              <div className="border-t border-black/10 bg-white px-6 py-8 shadow-[0_8px_28px_rgba(0,0,0,0.08)] md:px-10">
                <h4 className="mb-6 text-2xl font-light text-[var(--ink)]">Galéria projektu - {project.title}</h4>
                <LightboxGallery
                  images={project.gallery}
                  title={project.title}
                  columns={4}
                  imageHeight={220}
                />
                <div className="mt-6">
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
