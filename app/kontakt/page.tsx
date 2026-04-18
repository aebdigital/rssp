import { PageHero } from "@/components/page-hero";
import { company } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Kontakt",
  description: "Kontaktné a fakturačné údaje spoločnosti RSSP v Banskej Štiavnici vrátane mapy a spojenia.",
  path: "/kontakt",
  image: "/sources/NITRA/VYBRATE/nitra-2.jpg",
});

const mapsEmbedUrl =
  "https://www.google.com/maps?q=Stavebn%C3%BD%20soci%C3%A1lny%20podnik%20s.r.o.,%20Eleny%20Mar%C3%B3thy%20%C5%A0olt%C3%A9sovej%205397/3,%20969%2001%20Bansk%C3%A1%20%C5%A0tiavnica&z=17&output=embed";

const mapsProfileUrl =
  "https://www.google.com/maps/place//data=!4m2!3m1!1s0x471533ebd888ed97:0xc57788d4a06d21c1?sa=X&ved=1t:8290&ictx=111";

export default function ContactPage() {
  return (
    <>
      <PageHero title="Kontakt" image="/sources/NITRA/VYBRATE/nitra-2.jpg" />

      <section className="bg-[#f8f9fa] py-20">
        <div className="site-container">
          <div className="grid gap-[60px] lg:grid-cols-2">
            <div>
              <h3 className="mb-5 text-2xl font-light text-[rgb(30,28,89)]">Office</h3>
              <p className="text-[1.1rem] leading-[1.6] text-[#555]">
                Eleny Maróthy Šoltésovej 5397/3
                <br />
                969 01 Banská Štiavnica
                <br />
                <br />
                Email: {company.office.email}
                <br />
                <br />
                <strong>Office - Dana Engelová:</strong> {company.office.officePhone}
                <br />
                <strong>Stavby - Anna Mališova:</strong> {company.office.siteManagerPhone}
              </p>
            </div>
            <div>
              <h3 className="mb-5 text-2xl font-light text-[rgb(30,28,89)]">Sídlo spoločnosti / poštová adresa</h3>
              <p className="text-[1.1rem] leading-[1.6] text-[#555]">
                Banská Belá 501
                <br />
                966 15 Banská Belá
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="site-container">
          <h2 className="section-title-underline mb-[60px] text-[clamp(2rem,4vw,2.5rem)] font-light text-[#1a1a1a]">
            Fakturačné údaje
          </h2>
          <div className="grid gap-[60px] lg:grid-cols-2">
            <div>
              <h3 className="mb-5 text-[1.3rem] font-light leading-[1.4] text-[rgb(30,28,89)]">
                {company.name}
              </h3>
              <p className="text-base leading-[1.6] text-[#555]">
                Banská Belá 501
                <br />
                966 15 Banská Belá
                <br />
                <br />
                IČO: {company.billing.ico}
                <br />
                DIČ: {company.billing.dic}
                <br />
                <br />
                <strong>Účet:</strong> {company.billing.bank}
                <br />
                <strong>IBAN:</strong> {company.billing.iban}
              </p>
            </div>
            <div>
              <h3 className="mb-5 text-[1.3rem] font-light leading-[1.4] text-[rgb(30,28,89)]">Spoločnosť zapísaná</h3>
              <p className="text-base leading-[1.6] text-[#555]">
                Spoločnosť je zapísaná v Obchodnom registry Okresného súdu Banská Bystrica.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen">
        <div className="relative h-[450px] w-full">
          <iframe
            title="Mapa umiestnenia Stavebný sociálny podnik s.r.o."
            src={mapsEmbedUrl}
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <a
            href={mapsProfileUrl}
            target="_blank"
            rel="noreferrer"
            className="absolute bottom-5 right-5 bg-white px-5 py-3 text-sm uppercase tracking-[0.08em] text-[var(--brand-blue)] shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition hover:-translate-y-1"
          >
            Otvoriť profil na mapách
          </a>
        </div>
      </section>
    </>
  );
}
