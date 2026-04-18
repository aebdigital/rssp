"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { heroImages, stats, testimonials } from "@/lib/site-data";

export function HomeHero() {
  const [imageIndex, setImageIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const imageTimer = window.setInterval(() => {
      setImageIndex((value) => (value + 1) % heroImages.length);
    }, 5000);
    const testimonialTimer = window.setInterval(() => {
      setTestimonialIndex((value) => (value + 1) % testimonials.length);
    }, 6000);

    return () => {
      window.clearInterval(imageTimer);
      window.clearInterval(testimonialTimer);
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

      <div className="site-container flex w-full flex-col gap-10 pb-[60px] pt-32 lg:flex-row lg:items-end lg:justify-between lg:gap-[60px]">
        <div className="max-w-[700px] flex-1">
          <h1 className="max-w-[650px] text-[clamp(3rem,7vw,4rem)] font-light leading-[1.1] [text-shadow:0_4px_8px_rgba(0,0,0,0.5)]">
            Stavebný sociálny podnik s.r.o.
          </h1>
          <p className="mb-[30px] mt-5 text-[1.2rem] leading-[1.45] text-white/90 [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
            Sme stavebný sociálny podnik, ktorý vznikol v roku 2021 s cieľom spájať poctivú prácu
            v oblasti stavebníctva s ľudskosťou a zodpovednosťou voči mestu a lokalite.
          </p>
          <div className="flex flex-wrap gap-5">
            <Link
              href="/galeria"
              className="blue-button inline-block px-[30px] py-[15px] text-sm uppercase tracking-[1px]"
            >
              GALÉRIA
            </Link>
            <a
              href="#services"
              className="outline-button inline-block border-white px-[30px] py-[13px] text-sm uppercase tracking-[1px] text-white hover:bg-white hover:text-[#333]"
            >
              NAŠE SLUŽBY
            </a>
          </div>
        </div>

        <div className="flex max-w-[500px] flex-1 flex-col gap-[30px]">
          <div className="flex flex-wrap gap-[30px]">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-[3rem] font-light leading-none [text-shadow:0_4px_8px_rgba(0,0,0,0.5)]">{stat.value}</div>
                <div className="text-sm uppercase tracking-[0.5px] text-white/80 [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="min-h-[190px] border border-white/20 bg-white/10 p-[30px] backdrop-blur-[20px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.author}
                className={`${testimonialIndex === index ? "flex" : "hidden"} h-full flex-col justify-between`}
              >
                <blockquote className="mb-5 italic leading-[1.4] text-white">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[var(--brand-blue)] text-base uppercase text-white">
                    {testimonial.initials}
                  </div>
                  <div>
                    <span className="block text-white">{testimonial.author}</span>
                    <div className="flex items-center gap-2.5">
                      <span className="text-[#ffd700]">★★★★★</span>
                      <span className="text-sm text-white/80">5.0</span>
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
