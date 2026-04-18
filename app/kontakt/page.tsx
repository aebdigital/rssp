import { PageHero } from "@/components/page-hero";
import { company } from "@/lib/site-data";

export const metadata = {
  title: "Kontakt",
  description: "Kontaktné a fakturačné údaje spoločnosti RSSP.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="Kontakt" image="/sources/NITRA/VYBRATE/nitra-2.jpg" />

      <section className="bg-[#f8f9fa] py-20">
        <div className="site-container">
          <div className="grid gap-[60px] lg:grid-cols-2">
            <div>
              <h3 className="mb-5 text-2xl font-semibold text-[rgb(30,28,89)]">Office</h3>
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
              <h3 className="mb-5 text-2xl font-semibold text-[rgb(30,28,89)]">Sídlo spoločnosti / poštová adresa</h3>
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
          <h2 className="section-title-underline mb-[60px] text-[clamp(2rem,4vw,2.5rem)] font-bold text-[#1a1a1a]">
            Fakturačné údaje
          </h2>
          <div className="grid gap-[60px] lg:grid-cols-2">
            <div>
              <h3 className="mb-5 text-[1.3rem] font-semibold leading-[1.4] text-[rgb(30,28,89)]">
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
              <h3 className="mb-5 text-[1.3rem] font-semibold leading-[1.4] text-[rgb(30,28,89)]">Spoločnosť zapísaná</h3>
              <p className="text-base leading-[1.6] text-[#555]">
                Spoločnosť je zapísaná v Obchodnom registry Okresného súdu Banská Bystrica.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen">
        <div className="h-[450px] w-full">
          <iframe
            title="Mapa umiestnenia Stavebný sociálny podnik s.r.o."
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.8!2d18.8944!3d48.4610!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2zNDjCsDI3JzM5LjYiTiAxOMKwNTMnMzkuOCJF!5e0!3m2!1ssk!2ssk!4v1640995200000!5m2!1ssk!2ssk"
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
