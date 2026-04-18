import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LightboxGallery } from "@/components/lightbox-gallery";
import { PageHero } from "@/components/page-hero";
import { services } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  return buildMetadata({
    title: service.title,
    description: service.summary,
    path: `/sluzby/${service.slug}`,
    image: service.coverImage,
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHero title={service.title} image={service.heroImage} />

      <section className="bg-white py-20">
        <div className="site-container">
          <div className="grid items-start gap-10 lg:grid-cols-[40%_60%]">
            <div className="flex flex-col">
              <h2 className="relative mb-[30px] text-[2.5rem] font-light text-[var(--ink)] after:mt-4 after:block after:h-1 after:w-[60px] after:bg-[#265286] after:content-['']">
                {service.title}
              </h2>
              <div className="mb-10 space-y-5 text-[1.1rem] leading-[1.8] text-[#555]">
                {service.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <LightboxGallery images={service.gallery} title={service.title} columns={2} imageHeight={200} />
            </div>

            <div className="relative overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.1)]">
              <div className="relative h-[400px]">
                <Image
                  src={service.coverImage}
                  alt={`${service.title} - hlavný obraz`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 60vw, 100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
