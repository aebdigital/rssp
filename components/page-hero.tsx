import Image from "next/image";

type PageHeroProps = {
  title: string;
  image: string;
};

export function PageHero({ title, image }: PageHeroProps) {
  return (
    <section className="relative z-20 flex min-h-[200px] items-center overflow-hidden text-white md:h-[25vh] md:min-h-0">
      <div className="absolute inset-0 -z-20">
        <Image src={image} alt={title} fill className="object-cover" sizes="100vw" priority />
      </div>
      <div className="absolute inset-0 -z-10 bg-black/25" />
      <div className="site-container text-center">
        <h1 className="text-[1.8rem] font-light leading-none md:text-[clamp(2rem,5vw,3rem)]">{title}</h1>
      </div>
    </section>
  );
}
