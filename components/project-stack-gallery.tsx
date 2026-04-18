"use client";

import Image from "next/image";
import { useState } from "react";
import { projects } from "@/lib/site-data";
import { LightboxGallery } from "@/components/lightbox-gallery";

export function ProjectStackGallery() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  return (
    <div className="space-y-10">
      {projects.map((project, index) => {
        const reversed = index % 2 === 1;
        const isOpen = openSlug === project.slug;

        return (
          <div key={project.slug}>
            <article className="grid items-center gap-0 lg:grid-cols-2">
              <div className={`${reversed ? "lg:order-2" : ""}`}>
                <div className="relative h-[300px] overflow-hidden shadow-[0_8px_28px_rgba(0,0,0,0.16)] md:h-[420px]">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              </div>

              <div
                className={`relative bg-white px-6 py-8 shadow-[0_8px_28px_rgba(0,0,0,0.08)] md:px-10 md:py-10 ${
                  reversed ? "lg:order-1 lg:mr-[-60px]" : "lg:ml-[-60px]"
                } z-10`}
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-[2rem] font-light text-[var(--ink)]">{project.title}</h3>
                    <div className="mt-4 text-[1.05rem] leading-7 text-[var(--muted)]">
                      <p>{project.description}</p>
                    </div>
                  </div>
                  <div className="relative h-[72px] w-[72px] shrink-0 rounded-lg bg-white p-2 shadow-[0_2px_12px_rgba(30,28,89,0.2)]">
                    <Image
                      src={project.crestImage}
                      alt={project.title}
                      fill
                      className="object-contain p-2"
                      sizes="72px"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setOpenSlug(isOpen ? null : project.slug)}
                  className="text-sm uppercase tracking-[0.12em] text-[var(--brand-blue)] transition hover:text-[var(--brand-blue-dark)]"
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
