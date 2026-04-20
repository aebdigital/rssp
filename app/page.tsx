import Image from "next/image";
import Link from "next/link";
import { HomeHero } from "@/components/home-hero";
import { featuredProjectSlugs, featuredServiceSlugs, projects, services } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Domov",
  description:
    "Stavebný sociálny podnik z Banskej Štiavnice ponúka stavebné práce, zatepľovanie, terénne úpravy a vodozádržné práce. Vyše 100 realizovaných projektov.",
  path: "/",
  image: "/sources/SLIEZKY DOM/VYBRATE/sliezky-8.jpg",
});

export default function HomePage() {
  const featuredServices = services.filter((service) => featuredServiceSlugs.includes(service.slug));
  const featuredProjects = projects.filter((project) => featuredProjectSlugs.includes(project.slug));

  return (
    <>
      <HomeHero />

      <section id="services" className="bg-[#f8f9fa] py-[100px]">
        <div className="site-container">
          <div className="mb-10">
            <h2 className="section-outline-title">Naše služby</h2>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-4">
            {featuredServices.map((service) => (
              <Link
                key={service.slug}
                href={`/sluzby/${service.slug}`}
                className="group relative block h-[300px] overflow-hidden text-white shadow-[0_5px_20px_rgba(0,0,0,0.15)] transition hover:-translate-y-2.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
              >
                <div className="absolute inset-0">
                  <Image
                    src={service.coverImage}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
                <div className="absolute bottom-[5%] left-[5%] z-10 max-w-[90%]">
                  <h3 className="mb-2 text-[1.6rem] font-light [text-shadow:0_2px_4px_rgba(0,0,0,0.3)]">
                    {service.title}
                  </h3>
                  <p className="text-base leading-[1.4] text-white/90 [text-shadow:0_1px_2px_rgba(0,0,0,0.3)]">
                    {service.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-[100px]">
        <div className="site-container">
          <div className="mb-[60px]">
            <h2 className="section-outline-title">Projekty</h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                href="/galeria"
                className="group relative block bg-white p-5 shadow-[0_5px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
              >
                <div className="relative h-[310px] overflow-hidden">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-110"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/galeria" className="blue-button inline-flex items-center gap-3 px-[35px] py-[18px] uppercase tracking-[0.5px]">
              Zobraziť všetky projekty
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
