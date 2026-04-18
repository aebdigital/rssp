import Image from "next/image";

type PageHeroProps = {
  title: string;
  image: string;
};

export function PageHero({ title, image }: PageHeroProps) {
  return (
    <section className="relative z-20 flex h-[25vh] items-center overflow-hidden text-white">
      <div className="absolute inset-0 -z-20">
        <Image src={image} alt={title} fill className="object-cover" sizes="100vw" priority />
      </div>
      <div className="absolute inset-0 -z-10 bg-black/25" />
      <div className="site-container text-center">
        <h1 className="text-[clamp(2rem,5vw,3rem)] font-light leading-none">{title}</h1>
      </div>
    </section>
  );
}
