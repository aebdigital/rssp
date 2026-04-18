import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { services } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Služby",
  description: "Prehľad stavebných, technických a realizačných služieb spoločnosti RSSP.",
  path: "/sluzby",
  image: "/sources/LONTOV/VYBRATE/lontov-5.jpg",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Naše služby" image="/sources/LONTOV/VYBRATE/lontov-5.jpg" />

      <section className="bg-white py-20">
        <div className="site-container">
          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                href={`/sluzby/${service.slug}`}
                className="group block bg-white p-8 shadow-[0_5px_20px_rgba(0,0,0,0.08)] transition hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
              >
                <div className="mb-4 text-sm text-[var(--brand-blue)]">{String(index + 1).padStart(2, "0")}.</div>
                <div className="relative mb-5 h-10 w-10">
                  <Image src={service.icon} alt={service.title} fill className="object-contain" sizes="40px" />
                </div>
                <h2 className="mb-3 text-[1.6rem] font-light text-[var(--ink)]">{service.title}</h2>
                <p className="text-base leading-[1.6] text-[#555]">{service.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
