export type Testimonial = {
  author: string;
  initials: string;
  quote: string;
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
  icon: string;
  description: string[];
  highlights: string[];
  heroImage: string;
  coverImage: string;
  gallery: string[];
};

export type Project = {
  slug: string;
  title: string;
  place: string;
  description: string;
  coverImage: string;
  crestImage: string;
  gallery: string[];
};

export type Certificate = {
  title: string;
  image: string;
  description: string;
};

export const navigation = {
  main: [
    { href: "/", label: "Domov" },
    { href: "/o-nas", label: "O nás" },
    { href: "/sluzby", label: "Služby" },
    { href: "/galeria", label: "Galéria" },
    { href: "/certifikaty", label: "Certifikáty" },
    { href: "/zivotne-prostredie", label: "Životné prostredie" },
    { href: "/kontakt", label: "Kontakt" },
  ],
};

export const heroImages = [
  "/sources/SLIEZKY DOM/VYBRATE/sliezky-8.jpg",
  "/sources/LONTOV/VYBRATE/lontov-99.jpg",
  "/sources/NITRA/VYBRATE/nitra-2.jpg",
];

export const testimonials: Testimonial[] = [
  {
    author: "Roman Žažo",
    initials: "RŽ",
    quote: "Maximálna spokojnosť a profesionalita s dodávkou aj montážou.",
  },
  {
    author: "Martin Beko",
    initials: "MB",
    quote: "Profesionálny prístup, rýchle dodanie a kvalitné spracovanie rovnej väzníkovej strechy.",
  },
  {
    author: "Tibor Barborik",
    initials: "TB",
    quote:
      "Stavebný sociálny podnik príjemný kolektív veľmi pružná reaguje promptne čo sa týka materiálov hodnotím vysoká kvalita spokojnosť. Príjemne som prekvapený.",
  },
  {
    author: "Robert Brezovský",
    initials: "RB",
    quote: "Od začiatku komunikácie až po montáž..čistá profesionalita...montáž to bol jeden zladený orchester.",
  },
  {
    author: "Mária Kvočkuliaková",
    initials: "MK",
    quote: "Všetko super termín aj kvalita odporúčam.",
  },
];

export const stats = [
  { label: "realizovaných projektov", value: "100+" },
  { label: "spokojných zákazníkov", value: "50+" },
];

export const services: Service[] = [
  {
    slug: "stavebna-cinnost",
    title: "Stavebná činnosť",
    summary: "Komplexné stavebné práce a rekonštrukcie",
    icon: "/sources/ikonky/stavebna_cinnost.png",
    description: [
      "Poskytujeme komplexné stavebné služby od prípravných prác až po finálne odovzdanie realizácie. Každý projekt vedieme s dôrazom na technickú presnosť, spoľahlivý harmonogram a čistú koordináciu profesií.",
      "Máme skúsenosti s verejnými budovami, objektmi občianskej vybavenosti aj rozsiahlejšími rekonštrukciami, kde je dôležité skĺbiť kvalitu remesla s prevádzkovými a bezpečnostnými nárokmi.",
    ],
    highlights: [
      "rekonštrukcie verejných a historických budov",
      "koordinácia profesií a subdodávok",
      "dôraz na kvalitu detailu a trvácnosť riešenia",
    ],
    heroImage: "/sources/LONTOV/VYBRATE/lontov-5.jpg",
    coverImage: "/sources/BREZNO/VYBRATE/brezno-1.jpg",
    gallery: [
      "/sources/BREZNO/VYBRATE/brezno-2.jpg",
      "/sources/STIAVNICKE BANE/VYBRATE/stiavnicke-3.jpg",
      "/sources/BREZNO/VYBRATE/brezno-4.jpg",
      "/sources/STIAVNICKE BANE/VYBRATE/stiavnicke-5.jpg",
    ],
  },
  {
    slug: "zateplovania-budov",
    title: "Zatepľovanie budov",
    summary: "Energetické zateplenie a izolácia fasád",
    icon: "/sources/ikonky/Zateplovanie.png",
    description: [
      "Navrhujeme a realizujeme fasádne zatepľovacie systémy, ktoré zvyšujú energetickú efektívnosť budov a zároveň kultivujú ich výsledný architektonický výraz.",
      "Zameriavame sa na technicky správne vrstvenie, kvalitné materiály a precízne spracovanie detailov okolo otvorov, soklov, atík a styčných plôch.",
    ],
    highlights: [
      "fasádne zatepľovacie systémy",
      "obnova vzhľadu objektu a lepší tepelný komfort",
      "detaily riešené s dôrazom na životnosť",
    ],
    heroImage: "/sources/ZLIECHOV/VYBRATE/zliechov-16.jpg",
    coverImage: "/sources/ZLIECHOV/VYBRATE/zliechov-10.jpg",
    gallery: [
      "/sources/ZLIECHOV/VYBRATE/zliechov-16.jpg",
      "/sources/ZLIECHOV/VYBRATE/zliechov-12.jpg",
      "/sources/BALOG NAD IPLOM/VYBRATE/balog-10.jpg",
      "/sources/BALOG NAD IPLOM/VYBRATE/balog-12.jpg",
    ],
  },
  {
    slug: "vodozadrzne-prace",
    title: "Vodozádržné práce",
    summary: "Regulácia povrchových vôd a ochrana pred záplavami",
    icon: "/sources/ikonky/vodozadrzne.png",
    description: [
      "Realizujeme vodozádržné opatrenia, ktoré pomáhajú spomaľovať odtok dažďovej vody, zlepšovať vsak a znižovať riziko lokálnych záplav.",
      "Pri návrhu a realizácii pracujeme s ohľadom na terén, miestne podmienky a dlhodobú udržateľnosť riešenia tak, aby malo praktický aj environmentálny prínos.",
    ],
    highlights: [
      "regulácia povrchových vôd",
      "opatrenia pre krajinotvorbu a vsak",
      "realizácia so zreteľom na ekologický dopad",
    ],
    heroImage: "/sources/vodozadrzne/vodozadrzne-opatrenia.jpg",
    coverImage: "/sources/vodozadrzne/df976637039f6dd29f7865521bc11a89.jpg",
    gallery: [
      "/sources/vodozadrzne/IMG20230802131820.jpg",
      "/sources/vodozadrzne/vodozadrzne-opatrenia.jpg",
      "/sources/vodozadrzne/vodozadrzne-opatrenie-2024.jpg",
      "/sources/vodozadrzne/screenshot20191108-201911070826280-20191028092506-jpg-obrzok-jpeg-800x450-bodov_z3wcs_1573249951.png",
    ],
  },
  {
    slug: "terenne-upravy",
    title: "Terénne úpravy",
    summary: "Výkopové práce a príprava pozemkov",
    icon: "/sources/ikonky/terenne upravy.png",
    description: [
      "Pracujeme s výškovým aj smerovým modelovaním terénu, prípravou podkladov a úpravami pozemkov pre ďalšie stavebné etapy alebo finálne využitie územia.",
      "Dôraz kladieme na funkčnosť, odvodnenie, stabilitu a čisté napojenie nových úprav na existujúce komunikácie či okolité plochy.",
    ],
    highlights: [
      "modelovanie terénu a príprava podkladov",
      "úpravy komunikácií a spevnených plôch",
      "technicky čisté riešenie napojení a spádov",
    ],
    heroImage: "/sources/LONTOV/VYBRATE/lontov-5.jpg",
    coverImage: "/sources/LONTOV/VYBRATE/lontov-1.jpg",
    gallery: [
      "/sources/LONTOV/VYBRATE/lontov-4.jpg",
      "/sources/LONTOV/VYBRATE/lontov-5.jpg",
      "/sources/LONTOV/VYBRATE/lontov-7.jpg",
      "/sources/LONTOV/VYBRATE/lontov-10.jpg",
    ],
  },
  {
    slug: "rekonstrukcia-mostov",
    title: "Rekonštrukcia mostov",
    summary: "Komplexné rekonštrukcie mostov s modernými materiálmi a technológiami.",
    icon: "/sources/ikonky/rekonstrukcia_mostov.png",
    description: [
      "Mostné stavby vyžadujú presnú organizáciu postupu, dôslednú kontrolu detailov a rešpektovanie prevádzkových aj bezpečnostných obmedzení počas realizácie.",
      "Pri rekonštrukciách sa zameriavame na funkčnosť nosných aj povrchových vrstiev, kvalitné technologické spracovanie a dlhodobú odolnosť výsledku.",
    ],
    highlights: [
      "rekonštrukcie múrov, mostov a oporných konštrukcií",
      "bezpečné vedenie realizácie v citlivých lokalitách",
      "odolné riešenia pre náročné prevádzkové zaťaženie",
    ],
    heroImage: "/sources/NITRA/VYBRATE/nitra-2.jpg",
    coverImage: "/sources/spevnenie mostov/e22071c1-2d4b-46ba-bf7b-ea5c310ecad0.jpg",
    gallery: [
      "/sources/spevnenie mostov/e22071c1-2d4b-46ba-bf7b-ea5c310ecad0.jpg",
      "/sources/spevnenie mostov/4daf3c45-7054-4862-a898-dabfc90fce5e.jpg",
      "/sources/spevnenie mostov/88ecade7-659d-4e4a-875a-4fa238fa9c3b.jpg",
      "/sources/spevnenie mostov/0ea5e1d4-2725-4cbe-9ca9-6e901f2bbb1e.jpg",
    ],
  },
  {
    slug: "spevnenie-ploch",
    title: "Spevnenie plôch",
    summary: "Spevnenie plôch, betónovanie a asfaltovanie pre parkoviská, cesty a priemyselné areály.",
    icon: "/sources/ikonky/spevnenie.png",
    description: [
      "Navrhujeme a realizujeme spevnené plochy tak, aby zvládali každodennú prevádzku, mali čitateľnú skladbu vrstiev a pôsobili upravene aj vo verejnom priestore.",
      "Riešime podklady, vrstvy, obrubníky aj finálne povrchy s ohľadom na odvodnenie, údržbu a vizuálnu čistotu detailov.",
    ],
    highlights: [
      "parkoviská, chodníky a nástupné plochy",
      "stabilné podkladové vrstvy",
      "odolné povrchy s čistým detailom",
    ],
    heroImage: "/sources/Rekonstrukcia cesty/11.jpg",
    coverImage: "/sources/Rekonstrukcia cesty/12.jpg",
    gallery: [
      "/sources/Rekonstrukcia cesty/11.jpg",
      "/sources/Rekonstrukcia cesty/12.jpg",
      "/sources/Rekonstrukcia cesty/13.jpg",
      "/sources/Rekonstrukcia cesty/14.jpg",
    ],
  },
  {
    slug: "vykopove-prace",
    title: "Výkopové práce",
    summary: "Profesionálne výkopové práce pre inžinierske siete, základy stavieb a terénne úpravy.",
    icon: "/sources/ikonky/Vykopove_prace.png",
    description: [
      "Zabezpečujeme výkopové práce pre stavebné prípravy, základy, siete a technickú infraštruktúru s dôrazom na presnosť, bezpečnosť a koordináciu ďalších etáp.",
      "Riešenia prispôsobujeme typu podložia, prístupu na stavbu a následnému využitiu územia tak, aby bol výsledok pripravený na bezproblémové pokračovanie prác.",
    ],
    highlights: [
      "výkopy pre inžinierske siete a základy",
      "koordinačne pripravené stavenisko",
      "bezpečná realizácia v rôznych terénnych podmienkach",
    ],
    heroImage: "/sources/vykopove/Utilities.jpg",
    coverImage: "/sources/vykopove/istockphoto-505896768-612x612.jpg",
    gallery: [
      "/sources/vykopove/istockphoto-505896768-612x612.jpg",
      "/sources/vykopove/Utilities.jpg",
      "/sources/vykopove/Utilitiess.jpg",
      "/sources/vykopove/rucne-vykopove-prace-bratislava-zemne-vyskove-p5tan0337nh121967h8sggqgsq8e2prduaft4dl5rk.jpg",
    ],
  },
  {
    slug: "klampiarske-prace",
    title: "Klampiarske práce",
    summary: "Klampiarske a pokrývačské práce, oplechovanie striech a okapové systémy.",
    icon: "/sources/ikonky/klampiarske.png",
    description: [
      "Klampiarske prvky riešime ako dôležitú súčasť funkčnosti objektu aj jeho celkového výrazu. Dbáme na presné napojenia, čisté hrany a správne odvádzanie vody.",
      "Pracujeme na detailoch, ktoré majú priamy vplyv na životnosť obalových konštrukcií a dlhodobú ochranu budovy pred poveternostnými vplyvmi.",
    ],
    highlights: [
      "oplechovania a odvodňovacie prvky",
      "detailné spracovanie napojení",
      "riešenia pre novostavby aj rekonštrukcie",
    ],
    heroImage: "/sources/klampiarske/slide-3.jpg",
    coverImage: "/sources/klampiarske/Klampiarske-prace-min-scaled.webp",
    gallery: [
      "/sources/klampiarske/Klampiarske-prace-min-scaled.webp",
      "/sources/klampiarske/service-other-1.jpg",
      "/sources/klampiarske/2.webp",
      "/sources/klampiarske/P4040060.jpeg",
    ],
  },
  {
    slug: "vodarske-kurenske-prace",
    title: "Vodárenske a kurenárske práce",
    summary: "Inštalácia vykurovacích systémov, vodárenskych inštalácií a súvisiace technické práce.",
    icon: "/sources/ikonky/vodarenske_kurenarske_prace.png",
    description: [
      "Realizujeme vodárenské a kúrenárske práce ako súčasť komplexných rekonštrukcií aj samostatných technických zásahov v objektoch rôzneho typu.",
      "Dôležitá je pre nás spoľahlivosť systému, technická čistota osadenia a nadväznosť na ostatné profesie, aby prevádzka fungovala bez kompromisov.",
    ],
    highlights: [
      "rozvody a technické zariadenia budov",
      "spoľahlivé napojenia a servisná logika",
      "vhodné riešenia pre rekonštrukcie aj nové prevádzky",
    ],
    heroImage: "/sources/vodarenske/vodari_bratislava.jpg",
    coverImage: "/sources/vodarenske/picture.jpeg",
    gallery: [
      "/sources/vodarenske/picture.jpeg",
      "/sources/vodarenske/vodari_bratislava.jpg",
      "/sources/vodarenske/181829222.jpg",
      "/sources/vodarenske/a.jpeg",
    ],
  },
  {
    slug: "elektroinstalacne-prace",
    title: "Elektroinštalačné práce",
    summary: "Komplexné elektroinštalačné práce, rozvody silnoprúdu a slaboproudu, revízie a servis.",
    icon: "/sources/ikonky/elektroinstalacne.png",
    description: [
      "Elektroinštalačné práce realizujeme ako samostatnú profesiu aj ako súčasť väčších rekonštrukčných celkov, kde je kľúčová presná koordinácia s ostatnými dodávkami.",
      "Dbáme na funkčnosť, bezpečnosť a budúcu údržbu, aby inštalácie nielen fungovali, ale boli aj logicky navrhnuté a kvalitne vyhotovené.",
    ],
    highlights: [
      "rozvody a inštalácie pre interiéry aj exteriéry",
      "bezpečnosť a čisté technické spracovanie",
      "koordinácia s ostatnými stavebnými profesiami",
    ],
    heroImage: "/sources/elektroinstalacie/elektroinstalacne-prace-clanok.jpg",
    coverImage: "/sources/elektroinstalacie/elektroinstalacne_prace.webp",
    gallery: [
      "/sources/elektroinstalacie/elektroinstalacne-prace-clanok.jpg",
      "/sources/elektroinstalacie/elektroinstalacne_prace.webp",
      "/sources/elektroinstalacie/bigstav_sro_elektroinstalacne_prace_4.webp",
      "/sources/elektroinstalacie/elektroinstalacne-prace-kvalita-dobra-cena.jpg",
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "stiavnicke-bane",
    title: "Štiavnické Bane",
    place: "Denný stacionár",
    description:
      "Prestavba kultúrneho strediska na denný stacionár v historickom banskom dome, realizovaná s rešpektom k dedičstvu lokality a jej prírodnému kontextu.",
    coverImage: "/sources/STIAVNICKE BANE/VYBRATE/stiavnicke-1.jpg",
    crestImage: "/projekty/Stiavnicke.svg",
    gallery: [
      "/sources/STIAVNICKE BANE/VYBRATE/stiavnicke-2.jpg",
      "/sources/STIAVNICKE BANE/VYBRATE/stiavnicke-4.jpg",
      "/sources/STIAVNICKE BANE/VYBRATE/stiavnicke-6.jpg",
      "/sources/STIAVNICKE BANE/VYBRATE/stiavnicke-8.jpg",
      "/sources/STIAVNICKE BANE/VYBRATE/stiavnicke-10.jpg",
    ],
  },
  {
    slug: "brezno",
    title: "Brezno",
    place: "SOŠ techniky a služieb",
    description:
      "Komplexné stavebné práce v školskom objekte vrátane zateplenia fasád a rekonštrukcie interiérov s dôrazom na energetickú efektívnosť.",
    coverImage: "/sources/BREZNO/VYBRATE/brezno-1.jpg",
    crestImage: "/projekty/Brezno.png",
    gallery: [
      "/sources/BREZNO/VYBRATE/brezno-2.jpg",
      "/sources/BREZNO/VYBRATE/brezno-4.jpg",
      "/sources/BREZNO/VYBRATE/brezno-6.jpg",
      "/sources/BREZNO/VYBRATE/brezno-8.jpg",
      "/sources/BREZNO/VYBRATE/brezno-10.jpg",
    ],
  },
  {
    slug: "lontov",
    title: "Lontov",
    place: "Pozemné komunikácie",
    description:
      "Výstavba a rekonštrukcia pozemných komunikácií vrátane terénnych úprav, spevnenia plôch a úprav dopravných trás s dôrazom na dlhodobú životnosť.",
    coverImage: "/sources/LONTOV/VYBRATE/lontov-1.jpg",
    crestImage: "/projekty/Lontov.jpg",
    gallery: [
      "/sources/LONTOV/VYBRATE/lontov-2.jpg",
      "/sources/LONTOV/VYBRATE/lontov-4.jpg",
      "/sources/LONTOV/VYBRATE/lontov-6.jpg",
      "/sources/LONTOV/VYBRATE/lontov-8.jpg",
      "/sources/LONTOV/VYBRATE/lontov-10.jpg",
    ],
  },
  {
    slug: "nitra",
    title: "Nitra",
    place: "Ohradný múr ústavu",
    description:
      "Rekonštrukcia ohradného múru v historickom centre Nitry s mimoriadnym dôrazom na bezpečnosť verejnosti a kvalitu trvácneho riešenia.",
    coverImage: "/sources/NITRA/VYBRATE/nitra-2.jpg",
    crestImage: "/projekty/nitra.png",
    gallery: [
      "/sources/NITRA/VYBRATE/nitra-1.jpg",
      "/sources/NITRA/VYBRATE/nitra-3.jpg",
      "/sources/NITRA/VYBRATE/nitra-4.jpg",
      "/sources/NITRA/VYBRATE/nitra-5.jpg",
    ],
  },
  {
    slug: "bzovik",
    title: "Bzovík",
    place: "Autobusová zastávka",
    description:
      "Rekonštrukcia zastávky a jej zázemia s dôrazom na funkčný verejný priestor, bezpečný pohyb a odolnosť voči prevádzkovému zaťaženiu.",
    coverImage: "/sources/BZOVIK/VYBRATE/bzovik-1.jpg",
    crestImage: "/projekty/Bzovik.gif",
    gallery: [
      "/sources/BZOVIK/VYBRATE/bzovik-2.jpg",
      "/sources/BZOVIK/VYBRATE/bzovik-4.jpg",
      "/sources/BZOVIK/VYBRATE/bzovik-7.jpg",
      "/sources/BZOVIK/VYBRATE/bzovik-10.jpg",
      "/sources/BZOVIK/VYBRATE/bzovik-12.jpg",
    ],
  },
  {
    slug: "sliezky-dom",
    title: "Sliezsky dom",
    place: "Horská obnova trasy",
    description:
      "Stavebné zásahy a úpravy v náročnom horskom prostredí, kde bolo potrebné zladiť logistiku, odolnosť materiálov a citlivý zásah do krajiny.",
    coverImage: "/sources/SLIEZKY DOM/VYBRATE/sliezky-1.jpg",
    crestImage: "/projekty/Sliezky-dom.png",
    gallery: [
      "/sources/SLIEZKY DOM/VYBRATE/sliezky-2.jpg",
      "/sources/SLIEZKY DOM/VYBRATE/sliezky-5.jpg",
      "/sources/SLIEZKY DOM/VYBRATE/sliezky-8.jpg",
      "/sources/SLIEZKY DOM/VYBRATE/sliezky-10.jpg",
      "/sources/SLIEZKY DOM/VYBRATE/sliezky-13.jpg",
    ],
  },
  {
    slug: "zliechov",
    title: "Zliechov",
    place: "Obnova objektu",
    description:
      "Rozsiahla obnova objektu so zameraním na obálku budovy, technický stav konštrukcií a celkové zvýšenie štandardu užívania.",
    coverImage: "/sources/ZLIECHOV/VYBRATE/zliechov-16.jpg",
    crestImage: "/projekty/Zliechov.jpg",
    gallery: [
      "/sources/ZLIECHOV/VYBRATE/zliechov-3.jpg",
      "/sources/ZLIECHOV/VYBRATE/zliechov-6.jpg",
      "/sources/ZLIECHOV/VYBRATE/zliechov-10.jpg",
      "/sources/ZLIECHOV/VYBRATE/zliechov-14.jpg",
      "/sources/ZLIECHOV/VYBRATE/zliechov-18.jpg",
    ],
  },
  {
    slug: "balog-nad-iplom",
    title: "Balog nad Ipľom",
    place: "Školské zariadenie",
    description:
      "Zateplenie budovy školského zariadenia vrátane obnovy krovu, strechy a fasády, rešpektujúce technické požiadavky zadávateľa.",
    coverImage: "/sources/BALOG NAD IPLOM/VYBRATE/balog-10.jpg",
    crestImage: "/projekty/balog.png",
    gallery: [
      "/sources/BALOG NAD IPLOM/VYBRATE/balog-1.jpg",
      "/sources/BALOG NAD IPLOM/VYBRATE/balog-4.jpg",
      "/sources/BALOG NAD IPLOM/VYBRATE/balog-7.jpg",
      "/sources/BALOG NAD IPLOM/VYBRATE/balog-11.jpg",
      "/sources/BALOG NAD IPLOM/VYBRATE/balog-13.jpg",
    ],
  },
  {
    slug: "agentura-zivotneho-prostredia",
    title: "Agentúra životného prostredia",
    place: "Rekonštrukcia interiéru",
    description:
      "Komplexná rekonštrukcia interiéru administratívnej budovy vrátane povrchov, technických zariadení, podláh, stropov aj nových sociálnych zázemí.",
    coverImage: "/sources/AGENTURA ZIVOTNEHO PROSTREDIA/2.jpg",
    crestImage: "/projekty/zilina erb.png",
    gallery: [
      "/sources/AGENTURA ZIVOTNEHO PROSTREDIA/1.jpg",
      "/sources/AGENTURA ZIVOTNEHO PROSTREDIA/3.jpg",
      "/sources/AGENTURA ZIVOTNEHO PROSTREDIA/5.jpg",
      "/sources/AGENTURA ZIVOTNEHO PROSTREDIA/7.jpg",
    ],
  },
  {
    slug: "cisticka-odpadovych-vod",
    title: "Čistička odpadových vôd",
    place: "SEV Dropie",
    description:
      "Stavebné práce na malej čistiarni odpadových vôd v areáli SEV Dropie, citlivé na technologické aj ekologické parametre prevádzky.",
    coverImage: "/sources/Cisticka odpadovych vod/1_20230616_104153.jpg",
    crestImage: "/projekty/Zemianska.svg",
    gallery: [
      "/sources/Cisticka odpadovych vod/4-img-20230628-110454_20230706-090929.jpg",
      "/sources/Cisticka odpadovych vod/5_IMG_20230628_110550.jpg",
      "/sources/Cisticka odpadovych vod/6_IMG_20230706_111142.jpg",
      "/sources/Cisticka odpadovych vod/7_IMG_20230706_111242.jpg",
    ],
  },
  {
    slug: "banska-stiavnica",
    title: "Banská Štiavnica",
    place: "Rekonštrukcia komunikácie",
    description:
      "Rekonštrukcia úseku miestnej komunikácie na ulici SNP vrátane podkladov, asfaltobetónovej vrstvy a nadväzujúceho chodníka pre peších.",
    coverImage: "/sources/Rekonstrukcia cesty/11.jpg",
    crestImage: "/projekty/BanskaStiavnica.png",
    gallery: [
      "/sources/Rekonstrukcia cesty/12.jpg",
      "/sources/Rekonstrukcia cesty/13.jpg",
      "/sources/Rekonstrukcia cesty/14.jpg",
      "/sources/Rekonstrukcia cesty/15.png",
    ],
  },
];

export const certificates: Certificate[] = [
  {
    title: "ISO 14001",
    image: "/sources/certifikaty/ISO certifikovane _Nova-1.png",
    description: "Systém environmentálneho manažmentu a riadenia dopadov na životné prostredie.",
  },
  {
    title: "EMAS",
    image: "/sources/certifikaty/Emas-1.png",
    description: "Európsky systém environmentálneho manažérstva a auditu s dôrazom na transparentnosť.",
  },
  {
    title: "Certifikát kvality",
    image: "/sources/certifikaty/new.png",
    description: "Dokumentujúci naše interné štandardy kvality a kontinuálne zlepšovanie procesov.",
  },
  {
    title: "ISO 37001",
    image: "/sources/certifikaty/ISO 37001-1.png",
    description: "Systém manažmentu pre boj proti korupcii a etické riadenie procesov.",
  },
];

export const company = {
  name: "Stavebný sociálny podnik s.r.o.",
  shortDescription:
    "Sme stavebný sociálny podnik, ktorý vznikol v roku 2021 s cieľom spájať poctivú prácu v oblasti stavebníctva s ľudskosťou a zodpovednosťou voči mestu a lokalite.",
  aboutParagraphs: [
    "Naša činnosť je pevne zakorenená v regióne Banskej Štiavnice – mieste s výnimočnou prírodou, bohatou históriou a kultúrnym dedičstvom.",
    "Napriek vymenovanej krásne, má tento región svoju odvrátenú stranu – zvýšenú nezamestnanosť a sociálne znevýhodnenie, ktoré sú pre mnohých každodennou realitou.",
    "Snažíme sa vytvárať pracovné príležitosti pre ľudí, ktorí to najviac potrebujú – najmä pre zdravotne znevýhodnených – a zároveň prispievať k udržateľnému rozvoju tohto jedinečného regiónu.",
  ],
  office: {
    address: "Eleny Maróthy Šoltésovej 5397/3, 969 01 Banská Štiavnica",
    email: "rsspodnik@gmail.com",
    officePhone: "0915 447 187",
    siteManagerPhone: "0908 342 988",
  },
  registeredOffice: "Banská Belá 501, 966 15 Banská Belá",
  billing: {
    ico: "53 495 373",
    dic: "212 138 2175",
    iban: "SK34 0900 0000 0051 7809 7623",
    bank: "Slovenská sporiteľňa",
  },
};

export const featuredServiceSlugs = [
  "stavebna-cinnost",
  "zateplovania-budov",
  "vodozadrzne-prace",
  "terenne-upravy",
];

export const featuredProjectSlugs = ["stiavnicke-bane", "brezno", "lontov"];

export const socialEnterprisePdf = "/sources/certifikaty/SOCIALNY PODNIK.pdf";
export const environmentDeclarationPdf = "/sources/prehlasenie.pdf";
