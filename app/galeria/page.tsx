import { PageHero } from "@/components/page-hero";
import { ProjectStackGallery } from "@/components/project-stack-gallery";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Galéria",
  description: "Galéria zrealizovaných projektov, rekonštrukcií a stavebných prác spoločnosti RSSP.",
  path: "/galeria",
  image: "/sources/STIAVNICKE BANE/VYBRATE/stiavnicke-1.jpg",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero title="Zrealizované projekty" image="/sources/SLIEZKY DOM/VYBRATE/sliezky-8.jpg" />

      <section className="bg-[var(--brand-blue)] py-20">
        <div className="site-container">
          <ProjectStackGallery />
        </div>
      </section>
    </>
  );
}
