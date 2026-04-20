import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { environmentDeclarationPdf } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Životné prostredie",
  description: "Environmentálny prístup, ISO 14001, EMAS a udržateľné princípy spoločnosti RSSP.",
  path: "/zivotne-prostredie",
  image: "/sources/Zivotne prostredie.jpg",
});

export default function EnvironmentPage() {
  return (
    <>
      <PageHero title="Životné prostredie" image="/sources/LONTOV/VYBRATE/lontov-5.jpg" />

      <section className="bg-white py-[100px]">
        <div className="site-container">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <span className="text-base tracking-[0.5px] text-[#1E1C59]">— Naša zodpovednosť</span>
                <h2 className="text-[clamp(3rem,6vw,4rem)] font-light leading-[1.1] text-black">
                  Udržateľná budúcnosť
                </h2>
              </div>

              <div className="flex flex-col gap-[30px]">
                <p className="text-[1.1rem] leading-[1.6] text-[#666]">
                  V našej spoločnosti veríme, že kvalitná výstavba a zodpovedný prístup k životnému
                  prostrediu môžu ísť ruka v ruke. Udržateľnosť nie je pre nás len trendom – je
                  záväzkom, ktorý premietame do každého projektu, rozhodnutia aj procesu aj s
                  ohľadom na región v ktorom pôsobíme.
                </p>
                <p className="text-[1.1rem] leading-[1.6] text-[#666]">
                  Sme držiteľom certifikátu ISO 14 001, ktorý potvrdzuje náš systematický prístup k
                  environmentálnemu manažmentu. Naše činnosti pravidelne hodnotíme a optimalizujeme
                  tak, aby sme minimalizovali negatívne dopady na prírodu a zároveň šetrne využívali
                  zdroje.
                </p>
                <p className="text-[1.1rem] leading-[1.6] text-[#666]">
                  Zároveň sme zapísaní v systéme EMAS (Eco-Management and Audit Scheme), ktorý je
                  jedným z najnáročnejších nástrojov environmentálneho riadenia v Európe. Tento
                  certifikát svedčí o našej transparentnosti, dodržiavaní legislatívy a neustálom
                  zlepšovaní našich ekologických výsledkov.
                </p>
                <p className="text-[1.1rem] font-semibold leading-[1.6] text-[#333]">
                  Našim cieľom je vytvárať udržateľné stavby, rekonštrukcie ciest, ktoré slúžia ľuďom
                  a rešpektujú prírodu – dnes aj pre budúce generácie.
                </p>

                <Link
                  href={environmentDeclarationPdf}
                  target="_blank"
                  className="outline-button inline-flex self-start border-[#333] px-[30px] py-[15px] uppercase tracking-[1px] text-[#333] hover:bg-[#333] hover:text-white"
                >
                  ENVIRONMENTÁLNE PREHLÁSENIE
                </Link>
              </div>
            </div>

            <div className="relative flex h-full flex-col">
              <div className="relative min-h-[400px] md:min-h-[500px] w-full lg:w-[80%]">
                <Image
                  src="/sources/Zivotne prostredie.jpg"
                  alt="Environmentálny prístup v stavebníctve"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>

              <div className="absolute right-0 lg:right-[-10px] top-[-30px] flex min-w-[200px] md:min-w-[250px] items-center gap-5 bg-[#333] p-[20px] md:p-[25px] text-white shadow-[0_8px_28px_rgba(0,0,0,0.15)]">
                <div className="text-[2.2rem] font-light leading-[0.9]">ISO 14001</div>
                <div className="text-sm uppercase tracking-[0.5px]">certifikát</div>
              </div>
              <div className="absolute right-0 lg:right-[-10px] top-[65px] flex min-w-[200px] md:min-w-[250px] items-center gap-5 bg-[var(--brand-blue)] p-[20px] md:p-[25px] text-white shadow-[0_8px_28px_rgba(0,0,0,0.15)]">
                <div className="text-[2.2rem] font-light leading-[0.9]">EMAS</div>
                <div className="text-sm uppercase tracking-[0.5px]">registrácia</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
