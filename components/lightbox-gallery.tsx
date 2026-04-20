"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type LightboxGalleryProps = {
  images: string[];
  title: string;
  columns?: 1 | 2 | 3 | 4;
  imageHeight?: number;
  aspectRatio?: string;
  objectFit?: "cover" | "contain";
  rounded?: boolean;
};

export function LightboxGallery({
  images,
  title,
  columns = 2,
  imageHeight = 200,
  aspectRatio,
  objectFit = "cover",
  rounded = false,
}: LightboxGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) {
      return undefined;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((value) => (value === null ? 0 : (value + 1) % images.length));
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((value) => (value === null ? 0 : (value - 1 + images.length) % images.length));
      }
    };

    document.body.classList.add("modal-open");
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, images.length]);

  const gridClass =
    columns === 4
      ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-4"
      : columns === 3
        ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
        : columns === 1
          ? "grid-cols-1"
          : "grid-cols-1 sm:grid-cols-2";

  return (
    <>
      <div className={`grid gap-[15px] ${gridClass}`}>
        {images.map((image, index) => (
          <button
            key={`${title}-${image}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`group relative overflow-hidden bg-white text-left shadow-[0_4px_15px_rgba(0,0,0,0.1)] transition hover:-translate-y-1 ${
              rounded ? "rounded-lg" : ""
            }`}
          >
            <div
              className={`relative w-full ${aspectRatio ?? ""}`}
              style={!aspectRatio ? { height: `${imageHeight}px` } : {}}
            >
              <Image
                src={image}
                alt={`${title} ${index + 1}`}
                fill
                className={`transition duration-300 group-hover:scale-105 ${
                  objectFit === "contain" ? "object-contain" : "object-cover"
                }`}
                sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
              />
            </div>
          </button>
        ))}
      </div>

      {activeIndex !== null ? (
        <div
          className="fixed inset-0 z-[1200] flex items-center justify-center bg-black/90 p-4 backdrop-blur-[5px]"
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="fixed right-5 top-5 z-[1202] flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:scale-110 hover:bg-white/20"
          >
            ×
          </button>
          {images.length > 1 ? (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setActiveIndex((value) => (value === null ? 0 : (value - 1 + images.length) % images.length));
                }}
                className="fixed left-5 top-1/2 z-[1202] hidden h-[60px] w-[60px] -translate-y-1/2 items-center justify-center rounded-full border-2 border-white/30 bg-black/60 text-[30px] text-white transition hover:scale-110 hover:border-white/60 hover:bg-black/80 md:flex"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setActiveIndex((value) => (value === null ? 0 : (value + 1) % images.length));
                }}
                className="fixed right-5 top-1/2 z-[1202] hidden h-[60px] w-[60px] -translate-y-1/2 items-center justify-center rounded-full border-2 border-white/30 bg-black/60 text-[30px] text-white transition hover:scale-110 hover:border-white/60 hover:bg-black/80 md:flex"
              >
                ›
              </button>
            </>
          ) : null}
          <div className="relative max-h-[90vh] max-w-[90%]" onClick={(event) => event.stopPropagation()}>
            <div className="relative h-auto max-h-[85vh] w-[min(1200px,90vw)]">
              <Image
                src={images[activeIndex]}
                alt={`${title} detail`}
                width={1200}
                height={900}
                className="h-auto max-h-[85vh] w-full object-contain shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
