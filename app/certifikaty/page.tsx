import { LightboxGallery } from "@/components/lightbox-gallery";
import { PageHero } from "@/components/page-hero";
import { certificates } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Certifikáty",
  description: "Prehľad certifikátov, registrácií a dokumentov spoločnosti RSSP.",
  path: "/certifikaty",
  image: certificates[0]?.image ?? "/sources/SLIEZKY DOM/VYBRATE/sliezky-8.jpg",
});

export default function CertificatesPage() {
  return (
    <>
      <PageHero title="Dosiahnuté certifikáty" image="/sources/SLIEZKY DOM/VYBRATE/sliezky-8.jpg" />

      <section className="bg-[#f8f9fa] py-20">
        <div className="site-container">
          <LightboxGallery
            images={certificates.map((certificate) => certificate.image)}
            title="Dosiahnuté certifikáty"
            columns={4}
            imageHeight={360}
            rounded
          />
        </div>
      </section>
    </>
  );
}
