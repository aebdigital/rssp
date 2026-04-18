"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { services } from "@/lib/site-data";

const serviceLinks = services.map((service) => ({
  href: `/sluzby/${service.slug}`,
  label: service.title,
}));

const sustainabilityLinks = [
  { href: "/certifikaty", label: "Dosiahnuté certifikáty" },
  { href: "/zivotne-prostredie", label: "Životné prostredie" },
];

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const solid = scrolled || menuOpen;
  const linkClass = solid ? "text-[var(--brand-blue)]" : "text-white";
  const servicesActive = pathname.startsWith("/sluzby");
  const sustainabilityActive = pathname === "/certifikaty" || pathname === "/zivotne-prostredie";

  return (
    <>
      <a
        href="#main-content"
        className="absolute left-1.5 top-[-48px] z-[1200] rounded bg-[var(--brand-blue)] px-4 py-2 text-white transition-all focus:top-2"
      >
        Preskočiť na hlavný obsah
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-[1000] transition-all duration-300 ${
          solid ? "bg-white/95 shadow-[0_2px_20px_rgba(0,0,0,0.18)] backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="site-container flex items-center justify-between py-5">
          <Link href="/" className="shrink-0 transition-opacity hover:opacity-80">
            <Image
              src={solid ? "/logo1.png" : "/logo.png"}
              alt="RSS podnik"
              width={178}
              height={49}
              className="h-[49px] w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-10">
              <li>
                <Link
                  href="/"
                  className={`relative text-base uppercase tracking-[0.5px] ${linkClass} ${
                    isActive(pathname, "/") ? "after:w-full" : "after:w-0"
                  } after:absolute after:bottom-[-3px] after:left-0 after:h-0.5 after:bg-current after:transition-all hover:after:w-full`}
                >
                  Domov
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`relative text-base uppercase tracking-[0.5px] ${linkClass} ${
                    isActive(pathname, "/about") ? "after:w-full" : "after:w-0"
                  } after:absolute after:bottom-[-3px] after:left-0 after:h-0.5 after:bg-current after:transition-all hover:after:w-full`}
                >
                  O nás
                </Link>
              </li>
              <li className="group relative">
                <Link
                  href="/sluzby"
                  className={`relative text-base uppercase tracking-[0.5px] ${linkClass} ${
                    servicesActive ? "after:w-full" : "after:w-0"
                  } after:absolute after:bottom-[-3px] after:left-0 after:h-0.5 after:bg-current after:transition-all hover:after:w-full`}
                >
                  Služby
                </Link>
                <div className="invisible absolute left-0 top-full pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <ul className="min-w-[280px] rounded-lg bg-white py-2 shadow-[0_8px_25px_rgba(0,0,0,0.15)]">
                    {serviceLinks.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="block px-5 py-2.5 text-sm text-[#333] transition hover:bg-[#f8f9fa] hover:text-[var(--brand-blue)]"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li>
                <Link
                  href="/galeria"
                  className={`relative text-base uppercase tracking-[0.5px] ${linkClass} ${
                    isActive(pathname, "/galeria") ? "after:w-full" : "after:w-0"
                  } after:absolute after:bottom-[-3px] after:left-0 after:h-0.5 after:bg-current after:transition-all hover:after:w-full`}
                >
                  Galéria
                </Link>
              </li>
              <li className="group relative">
                <Link
                  href="/certifikaty"
                  className={`relative text-base uppercase tracking-[0.5px] ${linkClass} ${
                    sustainabilityActive ? "after:w-full" : "after:w-0"
                  } after:absolute after:bottom-[-3px] after:left-0 after:h-0.5 after:bg-current after:transition-all hover:after:w-full`}
                >
                  Udržateľnosť
                </Link>
                <div className="invisible absolute left-0 top-full pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <ul className="min-w-[240px] rounded-lg bg-white py-2 shadow-[0_8px_25px_rgba(0,0,0,0.15)]">
                    {sustainabilityLinks.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="block px-5 py-2.5 text-sm text-[#333] transition hover:bg-[#f8f9fa] hover:text-[var(--brand-blue)]"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className={`relative text-base uppercase tracking-[0.5px] ${linkClass} ${
                    isActive(pathname, "/kontakt") ? "after:w-full" : "after:w-0"
                  } after:absolute after:bottom-[-3px] after:left-0 after:h-0.5 after:bg-current after:transition-all hover:after:w-full`}
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Otvoriť menu"
            className="flex flex-col gap-1.5 lg:hidden"
          >
            <span className={`h-0.5 w-6 transition-all ${solid ? "bg-[var(--brand-blue)]" : "bg-white"}`} />
            <span className={`ml-1 h-0.5 w-5 transition-all ${solid ? "bg-[var(--brand-blue)]" : "bg-white"}`} />
            <span className={`h-0.5 w-6 transition-all ${solid ? "bg-[var(--brand-blue)]" : "bg-white"}`} />
          </button>
        </div>

        <div
          className={`overflow-hidden bg-white/95 backdrop-blur-md transition-all duration-300 lg:hidden ${
            menuOpen ? "max-h-[calc(100vh-var(--navbar-height))] border-t border-black/10" : "max-h-0"
          }`}
        >
          <div className="site-container h-[calc(100vh-var(--navbar-height))] overflow-y-auto py-6">
            <div className="space-y-5">
              <Link href="/" className="block text-xl text-[var(--brand-blue)]">
                Domov
              </Link>
              <Link href="/about" className="block text-xl text-[var(--brand-blue)]">
                O nás
              </Link>
              <div className="space-y-3">
                <Link href="/sluzby" className="block text-xl text-[var(--brand-blue)]">
                  Služby
                </Link>
                <div className="space-y-2 pl-4">
                  {serviceLinks.map((item) => (
                    <Link key={item.href} href={item.href} className="block text-sm text-[var(--brand-blue)]">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="/galeria" className="block text-xl text-[var(--brand-blue)]">
                Galéria
              </Link>
              <div className="space-y-3">
                <Link href="/certifikaty" className="block text-xl text-[var(--brand-blue)]">
                  Udržateľnosť
                </Link>
                <div className="space-y-2 pl-4">
                  {sustainabilityLinks.map((item) => (
                    <Link key={item.href} href={item.href} className="block text-sm text-[var(--brand-blue)]">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="/kontakt" className="block text-xl text-[var(--brand-blue)]">
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
