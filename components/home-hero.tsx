"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { heroImages, stats, testimonials } from "@/lib/site-data";

export function HomeHero() {
  const [imageIndex, setImageIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const imageTimer = window.setInterval(() => {
      setImageIndex((value) => (value + 1) % heroImages.length);
    }, 5000);
    const testimonialTimer = window.setInterval(() => {
      setTestimonialIndex((value) => (value + 1) % testimonials.length);
    }, 6000);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.clearInterval(imageTimer);
      window.clearInterval(testimonialTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative flex min-h-screen items-end overflow-hidden text-white">
      <div className="absolute inset-0 -z-20">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              imageIndex === index ? "opacity-100" : "opacity-0"
            }`}
            style={{ 
              transform: `translateY(${scrollY * 0.3}px) scale(1.1)`,
            }}
          >
            <Image
              src={image}
              alt="RSS podnik stavebná činnosť"
              fill
              className="object-cover"
              sizes="100vw"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 -z-10 bg-black/20" />

      <div className="site-container flex w-full flex-col gap-5 pb-[30px] pt-24 sm:gap-6 md:pb-[60px] md:pt-32 lg:flex-row lg:items-end lg:justify-between lg:gap-[60px]">
        <div className="max-w-[700px] flex-1">
          <h1 className="max-w-[650px] text-[2.5rem] font-light leading-[1.1] [text-shadow:0_4px_8px_rgba(0,0,0,0.5)] max-[480px]:text-[2rem] sm:text-[3rem] md:text-[clamp(3rem,7vw,4rem)]">
            Stavebný sociálny podnik s.r.o.
          </h1>
          <p className="mb-6 mt-4 text-base leading-[1.45] text-white/90 [text-shadow:0_2px_4px_rgba(0,0,0,0.5)] md:mb-[30px] md:mt-5 md:text-[1.2rem]">
            Sme stavebný sociálny podnik, ktorý vznikol v roku 2021 s cieľom spájať poctivú prácu
            v oblasti stavebníctva s ľudskosťou a zodpovednosťou voči mestu a lokalite.
          </p>
          <div className="flex w-full flex-wrap gap-2.5 md:gap-5">
            <Link
              href="/galeria"
              className="blue-button inline-block flex-1 px-5 py-3 text-center text-[13px] uppercase tracking-[1px] sm:flex-none md:px-[30px] md:py-[15px] md:text-sm"
            >
              GALÉRIA
            </Link>
            <a
              href="#services"
              className="outline-button inline-block flex-1 border-white px-5 py-[11px] text-center text-[13px] uppercase tracking-[1px] text-white hover:bg-white hover:text-[#333] sm:flex-none md:px-[30px] md:py-[13px] md:text-sm"
            >
              NAŠE SLUŽBY
            </a>
          </div>
        </div>

        <div className="flex max-w-[500px] flex-1 flex-col gap-5 md:gap-[30px]">
          <div className="flex flex-wrap gap-6 md:gap-[30px]">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-[2.5rem] font-light leading-none [text-shadow:0_4px_8px_rgba(0,0,0,0.5)] max-[480px]:text-[2.15rem] md:text-[3rem]">{stat.value}</div>
                <div className="text-sm uppercase tracking-[0.5px] text-white/80 [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="min-h-[110px] border border-white/20 bg-white/10 p-4 backdrop-blur-[20px] max-[480px]:p-3 md:min-h-[190px] md:p-[30px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.author}
                className={`${testimonialIndex === index ? "flex" : "hidden"} h-full flex-col justify-between`}
              >
                <blockquote className="mb-4 text-[0.82rem] italic leading-[1.4] text-white max-[480px]:text-[0.72rem] md:mb-5 md:text-base">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-[var(--brand-blue)] text-sm uppercase text-white md:h-[50px] md:w-[50px] md:text-base">
                    {testimonial.initials}
                  </div>
                  <div>
                    <span className="block text-sm text-white md:text-base">{testimonial.author}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[#ffd700] md:text-base">★★★★★</span>
                      <span className="text-[0.8rem] text-white/80 md:text-sm">5.0</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
