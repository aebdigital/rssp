import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { company, socialEnterprisePdf } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "O nás",
  description: company.shortDescription,
  path: "/o-nas",
  image: "/sources/O-nas.jpg",
});

export default function AboutPage() {
  return (
    <>
      <PageHero title="O nás" image="/sources/NITRA/VYBRATE/nitra-2.jpg" />

      <section className="bg-white py-[100px]">
        <div className="site-container">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <span className="text-base tracking-[0.5px] text-[#1E1C59]">— Kto sme</span>
                <h2 className="text-[clamp(3rem,6vw,4rem)] font-light leading-[1.1] text-black">O nás</h2>
              </div>

              <div className="flex flex-col gap-[30px]">
                <p className="text-[1.1rem] leading-[1.6] text-[#666]">
                  Sme stavebný sociálny podnik, ktorý vznikol v roku 2021 s cieľom spájať poctivú
                  prácu v oblasti stavebníctva s ľudskosťou a zodpovednosťou voči mestu a lokalite.
                  Naša činnosť je pevne zakorenená v regióne Banskej Štiavnice – mieste s výnimočnou
                  prírodou, bohatou históriou a kultúrnym dedičstvom.
                </p>
                <p className="text-[1.1rem] leading-[1.6] text-[#666]">
                  Napriek vymenovanej krásne, má tento región svoju odvrátenú stranu – zvýšenú
                  nezamestnanosť a sociálne znevýhodnenie, ktoré sú pre mnohých každodennou realitou.
                </p>
                <p className="text-[1.1rem] leading-[1.6] text-[#666]">
                  Snažíme sa vytvárať pracovné príležitosti pre ľudí, ktorí to najviac potrebujú –
                  najmä pre zdravotne znevýhodnených – a zároveň prispievať k udržateľnému rozvoju
                  tohto jedinečného regiónu.
                </p>

                <Link
                  href={socialEnterprisePdf}
                  target="_blank"
                  className="outline-button inline-flex self-start border-[#333] px-[30px] py-[15px] uppercase tracking-[1px] text-[#333] hover:bg-[#333] hover:text-white"
                >
                  Osvedčenie
                </Link>
              </div>
            </div>

            <div className="relative flex h-full flex-col">
              <div className="relative min-h-[400px] md:min-h-[500px] w-full lg:w-[80%]">
                <Image
                  src="/sources/O-nas.jpg"
                  alt="Stavebný sociálny podnik"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>

              <div className="absolute right-0 lg:right-[-10px] top-[-30px] flex min-w-[200px] md:min-w-[250px] items-center gap-5 bg-[#333] p-[20px] md:p-[25px] text-white shadow-[0_8px_28px_rgba(0,0,0,0.15)]">
                <div className="text-[2.5rem] font-light leading-[0.8]">100+</div>
                <div className="text-sm uppercase tracking-[0.5px]">realizovaných projektov</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
