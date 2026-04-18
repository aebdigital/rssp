"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { company, navigation, services } from "@/lib/site-data";

function Modal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}) {
  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.classList.add("modal-open");
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, open]);

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[1100] flex items-center justify-center bg-black/80 p-5 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-[800px] overflow-y-auto rounded-lg bg-white"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-black/10 bg-[#f8f9fa] px-6 py-5">
          <h2 className="text-2xl font-light text-[#333]">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full text-2xl text-[#666] transition hover:bg-black/5 hover:text-[#333]"
          >
            &times;
          </button>
        </div>
        <div className="space-y-4 px-6 py-6 text-[15px] leading-7 text-[#333]">{children}</div>
      </div>
    </div>
  );
}

export function SiteFooter() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [cookiesOpen, setCookiesOpen] = useState(false);
  const [cookieVisible, setCookieVisible] = useState(false);

  useEffect(() => {
    const consent = window.localStorage.getItem("cookieConsent");
    if (!consent) {
      const timer = window.setTimeout(() => setCookieVisible(true), 400);
      return () => window.clearTimeout(timer);
    }

    return undefined;
  }, []);

  const handleCookieChoice = (accepted: boolean) => {
    window.localStorage.setItem("cookieConsent", accepted ? "accepted" : "declined");
    setCookieVisible(false);
  };

  return (
    <>
      <footer className="bg-black pb-5 pt-[60px] text-white">
        <div className="site-container mb-[60px] flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-[720px]">
            <h2 className="mb-5 text-[clamp(2rem,4vw,2.5rem)] font-light">Potrebujete stavebné práce?</h2>
            <p className="text-[1.1rem] leading-6 text-[#ccc]">
              Kontaktujte nás a my Vám radi poradíme s výberom vhodného riešenia pre vašu stavbu
            </p>
          </div>
          <div className="shrink-0">
            <Link href="/kontakt" className="blue-button inline-block px-[30px] py-[15px] uppercase tracking-[1px]">
              Kontakt
            </Link>
          </div>
        </div>

        <div className="site-container mb-[60px] h-px bg-[#333]" />

        <div className="site-container mb-10 grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <h3 className="mb-5 text-2xl font-light">{company.name}</h3>
            <div className="space-y-2 text-[#ccc]">
              <p>
                <strong>Adresa:</strong> {company.registeredOffice}
              </p>
              <p>
                <strong>IČO:</strong> {company.billing.ico}
              </p>
              <p>
                <strong>DIČ:</strong> {company.billing.dic}
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${company.office.email}`} className="underline">
                  {company.office.email}
                </a>
              </p>
              <p>
                <strong>Mobil:</strong>{" "}
                <a href="tel:+421915447187" className="underline">
                  +421 915 447 187
                </a>
              </p>
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <h4 className="mb-4 text-xl font-light">Navigácia</h4>
              <ul className="space-y-2 text-[#ccc]">
                {navigation.main.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="transition hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-xl font-light">Služby</h4>
              <ul className="space-y-2 text-[#ccc]">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link href={`/sluzby/${service.slug}`} className="transition hover:text-white">
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-xl font-light">Ochrana údajov</h4>
              <ul className="space-y-2 text-[#ccc]">
                <li>
                  <button
                    type="button"
                    onClick={() => setPrivacyOpen(true)}
                    className="text-left transition hover:text-[var(--brand-blue)]"
                  >
                    Ochrana osobných údajov
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setCookiesOpen(true)}
                    className="text-left transition hover:text-[var(--brand-blue)]"
                  >
                    Cookies
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="site-container flex flex-col gap-4 border-t border-[#333] pt-5 text-sm md:flex-row md:items-center md:justify-between">
          <div className="text-[#ccc]">
            Tvorba stránky -{" "}
            <a href="https://aebdigital.sk" target="_blank" rel="noopener noreferrer" className="underline">
              AEB Digital
            </a>
          </div>
          <p className="text-[#999]">&copy; 2026 {company.name}</p>
        </div>
      </footer>

      <Modal open={privacyOpen} onClose={() => setPrivacyOpen(false)} title="Ochrana osobných údajov">
        <div className="rounded-md border-l-4 border-[var(--brand-blue)] bg-[#f8f9fa] p-5">
          <strong>{company.name}</strong>
          <br />
          Drážkovská cesta 32, 969 01 Banská Štiavnica
          <br />
          Slovenská republika
          <br />
          E-mail: {company.office.email}
          <br />
          Tel.: +421 915 447 187
        </div>
        <p>
          Vážime si osobné údaje našich zamestnancov, záujemcov o zamestnanie, zákazníkov a
          spolupracujúcich osôb. Všetky osobné údaje spracúvame v súlade s GDPR a zákonom č.
          18/2018 Z. z. o ochrane osobných údajov.
        </p>
        <p>
          Osobné údaje spracúvame len v nevyhnutnom rozsahu na plnenie zákonných a zmluvných
          povinností, komunikáciu so zákazníkmi, vybavenie dopytov a ochranu oprávnených záujmov
          spoločnosti.
        </p>
        <p>
          Ak máte otázky týkajúce sa používania vašich osobných údajov, kontaktujte nás na adrese{" "}
          <a href={`mailto:${company.office.email}`} className="underline">
            {company.office.email}
          </a>
          .
        </p>
      </Modal>

      <Modal open={cookiesOpen} onClose={() => setCookiesOpen(false)} title="Zásady používania súborov cookies">
        <p>
          Táto lokalita používa súbory cookies na zabezpečenie správneho fungovania stránky,
          zlepšenie používateľskej skúsenosti a základné analytické vyhodnocovanie návštevnosti.
        </p>
        <p>
          Cookies môžu byť technické, analytické alebo marketingové. Nevyhnutné cookies pomáhajú
          stránke fungovať správne, ostatné používame len po udelení súhlasu.
        </p>
        <p>
          Ukladaniu cookies môžete zabrániť zmenou nastavení vo vašom prehliadači. Berte však na
          vedomie, že vypnutie niektorých cookies môže obmedziť funkcionalitu webu.
        </p>
      </Modal>

      <div
        className={`fixed inset-x-0 bottom-0 z-[1050] bg-black/90 px-5 py-5 text-white transition-transform duration-300 ${
          cookieVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center md:text-left">
            Používame cookies na zlepšenie vašej skúsenosti na našom webe. Pokračovaním v prehliadaní
            súhlasíte s ich používaním.
          </p>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => handleCookieChoice(true)}
              className="rounded-md bg-[var(--brand-blue)] px-5 py-2.5 transition hover:bg-[#014f85]"
            >
              Súhlasím
            </button>
            <button
              type="button"
              onClick={() => handleCookieChoice(false)}
              className="rounded-md border border-white px-5 py-2.5 transition hover:bg-white/10"
            >
              Odmietnuť
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
