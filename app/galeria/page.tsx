import { PageHero } from "@/components/page-hero";
import { ProjectStackGallery } from "@/components/project-stack-gallery";

export const metadata = {
  title: "Galéria",
  description: "Prehľad zrealizovaných projektov a fotogalérií RSSP.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero title="Zrealizované projekty" image="/sources/SLIEZKY DOM/VYBRATE/sliezky-8.jpg" />

      <section className="bg-white py-20">
        <div className="site-container">
          <ProjectStackGallery />
        </div>
      </section>
    </>
  );
}
