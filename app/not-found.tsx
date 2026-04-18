import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-6 text-center">
      <p className="text-xs uppercase tracking-[0.34em] text-[var(--brand-blue)]">404</p>
      <h1 className="mt-6 text-5xl font-light tracking-tight text-[var(--ink)] sm:text-6xl">
        Stránka nebola nájdená.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
        Hľadaná stránka už neexistuje alebo bola presunutá. Vráťte sa na domovskú stránku alebo
        si pozrite prehľad našich služieb.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-full bg-[var(--brand-blue)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[var(--brand-blue-dark)]"
        >
          Domovská stránka
        </Link>
        <Link
          href="/sluzby"
          className="rounded-full border border-[var(--ink)]/12 px-5 py-3 text-sm font-medium text-[var(--ink)] transition hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)]"
        >
          Naše služby
        </Link>
      </div>
    </main>
  );
}
