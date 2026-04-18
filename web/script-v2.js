// Performance optimization: Preconnect to external domains
const preconnectLinks = ['https://fonts.gstatic.com', 'https://www.google-analytics.com'];
preconnectLinks.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    document.head.appendChild(link);
});

// Lazy loading for images
function lazyLoadImages() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for browsers without IntersectionObserver
        document.querySelectorAll('img[data-src]').forEach(img => {
            img.src = img.dataset.src;
        });
    }
}

// Critical CSS detection
function loadNonCriticalCSS() {
    const links = document.querySelectorAll('link[data-preload="true"]');
    links.forEach(link => {
        link.rel = 'stylesheet';
        link.removeAttribute('data-preload');
    });
}

// Accessibility: Detect mouse vs keyboard navigation
let isUsingMouse = false;

document.addEventListener('mousedown', () => {
    isUsingMouse = true;
    document.body.classList.add('mouse-user');
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        isUsingMouse = false;
        document.body.classList.remove('mouse-user');
    }
});

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize lazy loading
    lazyLoadImages();
    
    // Load non-critical CSS after DOM load
    setTimeout(loadNonCriticalCSS, 100);
    
    // Load global header and footer
    loadHeader();
    loadFooter();
    
    // Set initial navbar height for mobile menu positioning
    setTimeout(() => {
        const navbar = document.querySelector('.navbar-transparent');
        if (navbar) {
            const navbarHeight = navbar.offsetHeight;
            document.documentElement.style.setProperty('--navbar-height', `${navbarHeight}px`);
        }
    }, 100);
    
    function loadHeader() {
        // Detect if we're in a subfolder
        const isInSubfolder = window.location.pathname.includes('/projekty/') || window.location.pathname.includes('/sluzby/');
        const pathPrefix = isInSubfolder ? '../' : '';
        
        const headerHTML = `
            <!-- Scroll Progress Indicator -->
            <div class="scroll-progress">
                <div class="scroll-progress-bar"></div>
            </div>

            <!-- Transparent Navigation -->
            <nav class="navbar navbar-transparent">
                <div class="nav-container">
                    <div class="nav-logo">
                        <a href="${pathPrefix ? pathPrefix : '/'}" class="logo-link">
                            <img src="${pathPrefix}logo.png" alt="RSS podnik" class="logo-image">
                        </a>
                    </div>
                    <ul class="nav-menu">
                        <li><a href="${pathPrefix ? pathPrefix : '/'}" class="nav-link">Domov</a></li>
                        <li><a href="${pathPrefix}about" class="nav-link">O nás</a></li>
                        <li class="nav-dropdown">
                            <a href="#" class="nav-link dropdown-toggle">Služby</a>
                            <ul class="dropdown-menu">
                                <li><a href="${pathPrefix}sluzby/stavebna-cinnost" class="dropdown-link">Stavebná činnosť</a></li>
                                <li><a href="${pathPrefix}sluzby/zateplovania-budov" class="dropdown-link">Zatepľovanie budov</a></li>
                                <li><a href="${pathPrefix}sluzby/vodozadrzne-prace" class="dropdown-link">Vodozádržné práce</a></li>
                                <li><a href="${pathPrefix}sluzby/terenne-upravy" class="dropdown-link">Terénne úpravy</a></li>
                                <li><a href="${pathPrefix}sluzby/rekonstrukcia-mostov" class="dropdown-link">Rekonštrukcia mostov</a></li>
                                <li><a href="${pathPrefix}sluzby/spevnenie-ploch" class="dropdown-link">Spevnenie plôch</a></li>
                                <li><a href="${pathPrefix}sluzby/vykopove-prace" class="dropdown-link">Výkopové práce</a></li>
                                <li><a href="${pathPrefix}sluzby/klampiarske-prace" class="dropdown-link">Klampiarske práce</a></li>
                                <li><a href="${pathPrefix}sluzby/vodarske-kurenske-prace" class="dropdown-link">Vodárenske a kurenárske práce</a></li>
                                <li><a href="${pathPrefix}sluzby/elektroinstalacne-prace" class="dropdown-link">Elektroinštalačné práce</a></li>
                            </ul>
                        </li>
                        <li><a href="${pathPrefix}galeria" class="nav-link">Galéria</a></li>
                        <li class="nav-dropdown">
                            <a href="#" class="nav-link dropdown-toggle">Udržateľnosť</a>
                            <ul class="dropdown-menu">
                                <li><a href="${pathPrefix}certifikaty" class="dropdown-link">Dosiahnuté certifikáty</a></li>
                                <li><a href="${pathPrefix}zivotne-prostredie" class="dropdown-link">Životné prostredie</a></li>
                            </ul>
                        </li>
                        <li><a href="${pathPrefix}kontakt" class="nav-link">Kontakt</a></li>
                    </ul>
                    <div class="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        `;
        
        // Insert header at the beginning of body
        document.body.insertAdjacentHTML('afterbegin', headerHTML);
    }
    
    function loadFooter() {
        // Detect if we're in a subfolder
        const isInSubfolder = window.location.pathname.includes('/projekty/') || window.location.pathname.includes('/sluzby/');
        const pathPrefix = isInSubfolder ? '../' : '';
        
        const footerHTML = `
            <footer id="footer" class="footer">
                <div class="container">
                    <div class="footer-top">
                        <div class="footer-cta-content">
                            <h2>Potrebujete stavebné práce?</h2>
                            <p>Kontaktujte nás a my Vám radi poradíme s výberom vhodného riešenia pre vašu stavbu</p>
                        </div>
                        <div class="footer-cta-button">
                            <a href="${pathPrefix}kontakt" class="footer-btn">Kontakt</a>
                        </div>
                    </div>
                    
                    <div class="footer-divider"></div>
                    
                    <div class="footer-content">
                        <div class="footer-section footer-contact">
                            <h3>Stavebný sociálny podnik s.r.o.</h3>
                            <p><strong>Adresa:</strong> Banská Belá 501, 966 15 Banská Belá</p>
                            <p><strong>IČO:</strong> 53 495 373</p>
                            <p><strong>DIČ:</strong> 212 138 2175</p>
                            <p><strong>Email:</strong> <a href="mailto:rsspodnik@gmail.com">rsspodnik@gmail.com</a></p>
                            <p><strong>Mobil:</strong> <a href="tel:+421 915 447 187">+421 915 447 187</a></p>
                        </div>
                        
                        <div class="footer-section footer-navigation">
                            <div class="footer-nav-columns">
                                <div class="footer-nav-column">
                                    <h4>Navigácia</h4>
                                    <ul>
                                        <li><a href="${pathPrefix ? pathPrefix : '/'}">Domov</a></li>
                                        <li><a href="${pathPrefix}about">O nás</a></li>
                                        <li><a href="${pathPrefix}galeria">Galéria</a></li>
                                        <li><a href="${pathPrefix}certifikaty">Dosiahnuté certifikáty</a></li>
                                        <li><a href="${pathPrefix}zivotne-prostredie">Životné prostredie</a></li>
                                        <li><a href="${pathPrefix}kontakt">Kontakt</a></li>
                                    </ul>
                                </div>
                                <div class="footer-nav-column">
                                    <h4>Služby</h4>
                                    <ul>
                                        <li><a href="${pathPrefix}sluzby/stavebna-cinnost">Stavebná činnosť</a></li>
                                        <li><a href="${pathPrefix}sluzby/zateplovania-budov">Zatepľovanie budov</a></li>
                                        <li><a href="${pathPrefix}sluzby/vodozadrzne-prace">Vodozádržné práce</a></li>
                                        <li><a href="${pathPrefix}sluzby/terenne-upravy">Terénne úpravy</a></li>
                                        <li><a href="${pathPrefix}sluzby/rekonstrukcia-mostov">Rekonštrukcia mostov</a></li>
                                        <li><a href="${pathPrefix}sluzby/spevnenie-ploch">Spevnenie plôch</a></li>
                                        <li><a href="${pathPrefix}sluzby/vykopove-prace">Výkopové práce</a></li>
                                        <li><a href="${pathPrefix}sluzby/klampiarske-prace">Klampiarske práce</a></li>
                                        <li><a href="${pathPrefix}sluzby/vodarske-kurenske-prace">Vodárenske a kurenárske práce</a></li>
                                        <li><a href="${pathPrefix}sluzby/elektroinstalacne-prace">Elektroinštalačné práce</a></li>
                                    </ul>
                                </div>
                                <div class="footer-nav-column footer-privacy">
                                    <h4>Ochrana údajov</h4>
                                    <ul>
                                        <li><a href="#" id="privacy-policy-link">Ochrana osobných údajov</a></li>
                                        <li><a href="#" id="cookies-policy-link">Cookies</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="footer-bottom">
                        <div class="footer-website-credit">
                            <span>Tvorba stránky - <a href="https://aebdigital.com" target="_blank" rel="noopener">AEB Digital</a></span>
                        </div>
                        <div class="footer-copyright">
                            <p>&copy; 2024 Stavebný sociálny podnik s.r.o.</p>
                        </div>
                    </div>
                </div>
            </footer>
            
            <!-- Privacy Policy Popup -->
            <div id="privacy-popup" class="privacy-popup">
                <div class="privacy-popup-content">
                    <div class="privacy-popup-header">
                        <h2>Ochrana osobných údajov</h2>
                        <button class="privacy-popup-close" onclick="closePrivacyPopup()">&times;</button>
                    </div>
                    <div class="privacy-popup-body">
                        <div class="company-info">
                            <strong>Stavebný sociálny podnik s.r.o.-r.s.p.</strong><br>
                            Drážkovská cesta 32, 969 01 Banská Štiavnica<br>
                            Slovenská republika<br>
                            IČO: 55123456, DIČ: 2023456789<br>
                            IČ DPH: SK2023456789<br>
                            E-mail: rsspodnik@gmail.com<br>
                            Tel.: +421 915 447 187
                        </div>
                        
                        <h3>Informácie o spracovaní a ochrane osobných údajov v spoločnosti Stavebný sociálny podnik s.r.o.-r.s.p.</h3>
                        
                        <p><strong>Vyhlásenie spoločnosti Stavebný sociálny podnik s.r.o.-r.s.p (ďalej aj ako Prevádzkovateľ, alebo Spoločnosť) k ochrane osobných údajov.</strong></p>
                        
                        <p>Vážime si osobné údaje našich zamestnancov, záujemcov o zamestnanie, akcionárov, spolupracujúce osoby, zákazníkov a ostatné fyzické osoby, ktorých osobné údaje spracúvame.</p>
                        
                        <p>Všetky osobné údaje spracúvame v súlade s Nariadením Európskeho parlamentu a rady č. 2016/679 o ochrane fyzických osôb pri spracúvaní osobných údajov a o voľnom pohybe takýchto údajov (ďalej len „GDPR") a so zákonom č. 18/2018 Z. z. o ochrane osobných údajov (ďalej len „zákon").</p>
                        
                        <p>Máme zavedený rámec smerníc, postupov a školení, ktoré sa vzťahujú na ochranu osobných údajov, dôvernosť a bezpečnosť a pravidelne prehodnocujeme primeranosť opatrení, ktoré sú zavedené na účely bezpečnosti osobných údajov, ktoré máme.</p>
                        
                        <h4>Právny rámec spracúvania osobných údajov:</h4>
                        <p>a) Ako zamestnávateľ spracúvame osobné údaje našich zamestnancov na základe zmluvných a zákonných povinností a to len v rozsahu nevyhnutnom na plnenie zmluvných a zákonných povinností zamestnávateľa.</p>
                        
                        <p>b) Ako možno váš budúci zamestnávateľ spracúvame vaše osobné údaje v rozsahu zaslaného životopisu, aby sme vedeli posúdiť, či spĺňate predpoklady na začatie prijímacieho pohovoru.</p>
                        
                        <p>c) Pre informovanosť našich partnerov, zákazníkov a obyvateľov, ktorí sú dotknutí našou stavebnou činnosťou, zverejňujeme osobné údaje zamestnanca v rozsahu titul, meno, priezvisko, pracovné zaradenie, služobné zaradenie, funkčné zaradenie, odborný útvar, miesto výkonu práce, pracovné telefónne číslo, faxové číslo, adresa elektronickej pošty na pracovisko.</p>
                        
                        <p>d) Pre ochranu našich oprávnených záujmov (ochrana proti vandalizmu, krádežiam) chránime naše objekty, stavebné objekty, stavebnú a manipulačnú techniku kamerovými systémami.</p>
                        
                        <p>e) Pre ochranu našich oprávnených záujmov a vašu vyššiu bezpečnosť monitorujeme pohyb v našich priestoroch, kde je riziko zvýšeného úrazu, všetky monitorované priestory sú riadne označené informáciou o monitorovaní a varovnými tabuľami.</p>
                        
                        <p>f) Všetky chránené priestory sú riadne označené, aby ste boli informovaní, že vstupujete do zabezpečených priestorov a obsahujú informácie s kontaktnými údajmi našej spoločnosti, odkaz na toto Vyhlásenie a kontaktný mail na Zodpovednú osobu.</p>
                        
                        <p>g) Pokiaľ chceme spracovať osobné údaje na účel, kde sa nevieme oprieť o zákonné povinnosti, vždy si vyžiadame váš súhlas a osobné údaje spracúvame len na konkrétny účel, na ktorý ste nám súhlas dali.</p>
                        
                        <p>Snažíme sa, aby rozsah nami spracúvaných osobných údajov bol minimálny a ohraničený účelom ich spracúvania. Osobné údaje preto archivujeme len na nevyhnutnú dobu, ktorá je daná pri zmluvných a zákonných povinnostiach Registratúrnym poriadkom, pri oprávnených záujmoch ukladáme kamerové záznamy maximálne po dobu 30 dní (pokiaľ nie sú predmetom šetrenia orgánmi činnými v trestnom konaní), vaše životopisy maximálne 1 rok a osobné údaje získané na základe súhlasu len kým trvá účel alebo váš súhlas.</p>
                        
                        <p>Pokiaľ ste nám udelili súhlas so spracovaním vašich osobných údajov, je dôležité aby ste vedeli, že svoj súhlas môžete kedykoľvek písomne odvolať. Adresa pre komunikáciu ohľadom vašich práv je uvedená na konci tejto informácie.</p>
                        
                        <h4>Aké sú vaše práva ako dotknutej osoby?</h4>
                        <p>a) Právo na prístup: máte právo vedieť aké osobné údaje o vás máme a ako ich spracúvame.</p>
                        
                        <p>b) Právo na opravu: ak zistíte, že niektoré vaše osobné údaje, ktoré spracúvame, sú nepravdivé, alebo neúplné, máte právo žiadať ich opravu a doplnenie.</p>
                        
                        <p>c) Právo na výmaz: ak ste presvedčení, že vaše osobné údaje spracúvame nezákonne, informujte nás. Našou povinnosťou je túto skutočnosť preveriť a v prípade pravdivosti vaše osobné údaje vymazať.</p>
                        
                        <p>d) Právo na obmedzenie spracúvania: ak ste presvedčení, že vaše osobné údaje spracúvame nesprávne, nezákonne, informujte nás. Našou povinnosťou je preveriť správnosť spracúvania a až do výsledku preverenia vami namietané osobné údaje nebudeme spracúvať (pokiaľ nám to neukladá zákona povinnosť).</p>
                        
                        <p>e) Právo na prenosnosť: máte právo požiadať nás, aby sme vaše údaje vo vami požadovanom rozsahu poskytli inému prevádzkovateľovi.</p>
                        
                        <p>f) Právo namietať: ak ste presvedčení, že vaše osobné údaje spracúvame nad rámec účelu, informujte nás. Máte právo namietať voči spracúvania a to písomne na dole uvedenú adresu, alebo mailom na rsspodnik@gmail.com.</p>
                    </div>
                </div>
            </div>
            
            <!-- Cookies Policy Popup -->
            <div id="cookies-popup" class="privacy-popup">
                <div class="privacy-popup-content">
                    <div class="privacy-popup-header">
                        <h2>Cookies</h2>
                        <button class="privacy-popup-close" onclick="closeCookiesPopup()">&times;</button>
                    </div>
                    <div class="privacy-popup-body">
                        <div class="company-info">
                            <strong>Stavebný sociálny podnik s. r. o. r. s. p.</strong><br>
                            Drážkovská cesta 32, 969 01 Banská Štiavnica<br>
                            Slovenská republika<br>
                            IČO: 55123456, DIČ: 2023456789<br>
                            IČ DPH: SK2023456789<br>
                            E-mail: rsspodnik@gmail.com<br>
                            Tel.: +421 908 123 456
                        </div>
                        
                        <h3>Zásady používania súborov cookies</h3>
                        
                        <h4>Čo sú súbory cookies?</h4>
                        <p>Ako je bežnou praxou na takmer všetkých profesionálnych webových lokalitách, táto lokalita používa súbory cookies, čo sú malé súbory sťahované do vášho počítača alebo mobilu za účelom zlepšenia poskytovaných služieb. Táto stránka popisuje aké informácie zbierame, ako ich využívame a prečo občas musíme tieto súbory ukladať. Tiež poskytneme informácie o tom, ako môžete predísť ukladaniu súborov cookies, čo však môže zhoršiť alebo "pokaziť" určité prvky funkcionality tejto webovej lokality. Ďalšie všeobecné informácie o cookies nájdete na Wikipédii v článku o HTTP cookies.</p>
                        
                        <p><strong>Rozoznávame niekoľko druhov cookies, a to podľa</strong></p>
                        
                        <p><strong>Z časového hľadiska:</strong> dočasné(session cookies) – ukladajú sa iba dočasne a po zatvorení prehliadača sa zo zariadenia používateľa vymažú a trvalé - zostávajú uložené, kým ich nevymažeme alebo kým ich nevymaže náš prehliadač, v závislosti od dátumu vypršania platnosti súboru cookies</p>
                        
                        <p><strong>z hľadiska subjektu:</strong> vlastné - cookies vytvoril prevádzkovateľ stránky, ktorú používateľ práve navštívil. a tretích subjektov - cookies vytvoril subjekt, ktorý neprevádzkuje webovú stránku, ktorú používateľ práve navštívil</p>
                        
                        <p><strong>z hľadiska právneho základu spracúvania osobných údaj:</strong> cookies, pre ktoré nie je potrebný súhlas návštevníka stránky - napríklad nevyhnutné, tzv. technické cookies a cookies, pre ktoré je potrebný súhlas návštevníka stránky - napríklad analytické a reklamné cookies).</p>
                        
                        <h4>Technické cookies:</h4>
                        <p>cookies pre vstup používateľa – konzistentné sledovanie vstupu užívateľa v sérii výmeny správ s poskytovateľom služby (prevádzkovateľom),<br>
                        autentifikačné cookies – identifikácia používateľa po jeho prihlásení,<br>
                        cookies zamerané na bezpečnosť používateľa – zvyšovanie bezpečnosti služby; ochrana systému prihlasovania; odhaľovanie nesprávnych pokusov o prihlásenie,</p>
                        
                        <h4>Súbory cookie tretích strán:</h4>
                        <p>Google Analytics (analytické cookies): meranie návštevnosti webových stránok, kampaní, sleduje návštevnosť stránok používateľom,<br>
                        Google Analytics (analytické cookies): identifikácia prvej relácie nového používateľa; tzv. jedinečné návštevy,</p>
                        
                        <h4>Marketingové cookies:</h4>
                        <p>- sledovacie pixely - sledovanie správania používateľa, konverzií na stránkach, optimalizácia reklám a pod.,<br>
                        - reklamné cookies – uloženie jedinečného ID, ktoré identifikuje zariadenie vracajúceho sa návštevníka s využitím na cielenie reklamy,<br>
                        - cookies na sledovanie používateľa prostredníctvom prídavných modulov sociálnych sietí,<br>
                        - cookies pre reklamy tretích subjektov – behaviorálna reklama</p>
                        
                        <p><strong>Cookie lišta:</strong> okno, ktoré sa zobrazí po návšteve webu a vyžaduje, aby ste cookies nastavili, povolili alebo odmietli.</p>
                        
                        <h4>Ako používame súbory cookies</h4>
                        <p>Súbory cookies používame z rôznych dôvodov, ktoré sú uvedené nižšie. Vo väčšine prípadov bohužiaľ neexistujú štandardizované možnosti ako zakázať súbory cookies bez toho, aby úplne zablokovali funkcionalitu a vlastnosti, ktoré tejto lokalite poskytujú. Odporúča sa, aby ste všetky súbory cookies nechali povolené, ak si nie ste istí, či ich potrebujete alebo nie, pre prípad že sa používajú na poskytovanie služby, ktorú využívate.</p>
                        
                        <h4>Zakázanie súborov cookies</h4>
                        <p>Nastaveniu súborov cookies môžete zabrániť tak, že upravíte nastavenia vo vašom prehliadači (prezrite si časť Pomoc vo vašom prehliadači, ak chcete zistiť ako to urobiť). Berte na vedomie, že zakázanie súborov cookies bude mať vplyv na funkčnosť tejto a mnohých iných webových lokalít ktoré navštívite. Zakázanie súborov cookies má obvykle za následok aj zakázanie určitých funkcii a vlastností tejto lokality. Preto sa odporúča aby ste súbory cookies nezakazovali.</p>
                        
                        <h4>Súbory cookies, ktoré nastavujeme</h4>
                        <p>Keď zadáte údaje prostredníctvom formulárov, napríklad tých, ktoré nájdete na kontaktných stránkach alebo formulároch komentárov, súbory cookies môžu byť nastavené tak, aby si zapamätali informácie o užívateľovi pre budúcu korešpondenciu.</p>
                        
                        <p><strong>Stavebný sociálny podnik s. r. o. r. s. p. používa nasledovné súbory cookies:</strong></p>
                        
                        <p><strong>Reklamné</strong><br>
                        Reklamné cookie súbory sú špeciálne navrhnuté tak, aby zhromažďovali informácie z vášho zariadenia, takže reklamy sa budú zobrazovať na základe relevantných tém, ktoré vás môžu zaujímať.</p>
                        
                        <p><strong>Analytické</strong><br>
                        Ukladá zdroj návštevnosti, ktorý vysvetľuje, ako sa používateľ dostal na webovú stránku, na účely neskoršieho prehľadu.</p>
                        
                        <p><strong>Preferenčné</strong><br>
                        Používa sa na sledovanie vašich rozhodnutí pri používaní webovej stránky.</p>
                        
                        <p><strong>Nevyhnutné</strong><br>
                        Tieto súbory Cookies sú nevyhnutné pre fungovanie stránky. Vypnutie nie je k dispozícii.</p>
                        
                        <h4>Viac informácií</h4>
                        <p>Dúfame, že sa tým pre vás veci vyjasnili, a ako už bolo spomenuté, ak existuje niečo, pri čom si nie ste istí, či to potrebujete alebo nie, je zvyčajne bezpečnejšie nechať súbory cookies povolené pre prípad, že by komunikovali s niektorou funkciou našej webovej lokality.</p>
                        
                        <h4>KDE NÁS MÔŽETE KONTAKTOVAŤ?</h4>
                        <p>Ak máte akékoľvek pripomienky, otázky či žiadosti týkajúce sa používania vašich osobných údajov, alebo ak máte akúkoľvek otázku týkajúcu sa vyhlásenia o ochrane osobných údajov a súboroch cookies, kontaktujte nás na tejto e-mailovej adrese rsspodnik@gmail.com sk</p>
                        
                        <h4>Záverečné ustanovenia</h4>
                        <p>Prevádzkovateľ je oprávnený tieto podmienky zmeniť. Novú verziu podmienok ochrany osobných údajov zverejní na svojich internetových stránkach.</p>
                    </div>
                </div>
            </div>
        `;
        
        const footerContainer = document.getElementById('footer-container');
        if (footerContainer) {
            footerContainer.innerHTML = footerHTML;
            
            // Add privacy policy click handler
            const privacyLink = document.getElementById('privacy-policy-link');
            if (privacyLink) {
                privacyLink.addEventListener('click', function(e) {
                    e.preventDefault();
                    openPrivacyPopup();
                });
            }
            
            // Add cookies policy click handler
            const cookiesLink = document.getElementById('cookies-policy-link');
            if (cookiesLink) {
                cookiesLink.addEventListener('click', function(e) {
                    e.preventDefault();
                    openCookiesPopup();
                });
            }
        }
    }
    // Mobile Navigation
    const hamburgers = document.querySelectorAll('.hamburger');
    const navMenus = document.querySelectorAll('.nav-menu');

    hamburgers.forEach((hamburger, index) => {
        hamburger.addEventListener('click', function() {
            // Calculate and set navbar height for mobile menu positioning
            const navbar = document.querySelector('.navbar-transparent');
            const navbarHeight = navbar.offsetHeight;
            document.documentElement.style.setProperty('--navbar-height', `${navbarHeight}px`);
            
            // Always toggle menu and hamburger state immediately
            navMenus[index].classList.toggle('active');
            hamburger.classList.toggle('active');
            
            // Check the new state after toggle and pass it directly
            const isNowActive = hamburger.classList.contains('active');
            
            // Close all dropdowns when mobile menu is closed
            if (!isNowActive) {
                document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            }
            
            // Add/remove mobile-menu-open class to navbar and body
            if (isNowActive) {
                navbar.classList.add('mobile-menu-open');
                document.body.classList.add('mobile-menu-open');
            } else {
                navbar.classList.remove('mobile-menu-open');
                document.body.classList.remove('mobile-menu-open');
            }
            
            updateNavbarBasedOnState(isNowActive);
        });
    });

    // Function to update navbar based on current state
    function updateNavbarBasedOnState(hamburgerActive = null) {
        const scrollPosition = window.scrollY;
        const currentPage = window.location.pathname;
        let triggerPoint;
        
        if (currentPage.includes('index.html') || currentPage === '/' || currentPage === '') {
            triggerPoint = window.innerHeight * 0.3; // 30vh for home page
        } else {
            triggerPoint = window.innerHeight * 0.1; // 10vh for all subpages
        }
        
        // Get logo image element
        const logoImage = document.querySelector('.logo-image');
        const isInSubfolder = window.location.pathname.includes('/projekty/') || window.location.pathname.includes('/sluzby/');
        const pathPrefix = isInSubfolder ? '../' : '';
        
        // Check if mobile menu is open (hamburgerActive parameter or check for mobile-menu-open class)
        const navbar = document.querySelector('.navbar-transparent');
        const isMobileMenuOpen = hamburgerActive !== null ? hamburgerActive : navbar.classList.contains('mobile-menu-open');
        
        if (scrollPosition > triggerPoint || isMobileMenuOpen) {
            // Below trigger point OR mobile menu is open - add scrolled class to make navbar white
            transparentNavbar.classList.add('scrolled');
            // Switch to logo1.png for white background
            if (logoImage) {
                logoImage.src = `${pathPrefix}logo1.png`;
            }
        } else {
            // In hero section AND mobile menu closed - remove scrolled class to keep transparent
            transparentNavbar.classList.remove('scrolled');
            // Switch back to logo.png for transparent background
            if (logoImage) {
                logoImage.src = `${pathPrefix}logo.png`;
            }
        }
    }

    // Close mobile menu when clicking on a link (but not dropdown toggles)
    document.querySelectorAll('.nav-link:not(.dropdown-toggle)').forEach(link => {
        link.addEventListener('click', function() {
            navMenus.forEach(menu => menu.classList.remove('active'));
            hamburgers.forEach(hamburger => hamburger.classList.remove('active'));
            
            // Remove mobile-menu-open class from navbar and body
            const navbar = document.querySelector('.navbar-transparent');
            navbar.classList.remove('mobile-menu-open');
            document.body.classList.remove('mobile-menu-open');
            
            // Update navbar based on new state (hamburger is now inactive)
            updateNavbarBasedOnState(false);
        });
    });
    
    // Handle mobile dropdown toggle clicks
    document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Only handle dropdown on mobile (when nav-menu is active)
            const navMenu = document.querySelector('.nav-menu.active');
            if (navMenu) {
                const dropdown = this.closest('.nav-dropdown');
                dropdown.classList.toggle('active');
            }
        });
    });
    
    // Close mobile menu when clicking on dropdown links
    document.querySelectorAll('.dropdown-link').forEach(link => {
        link.addEventListener('click', function() {
            navMenus.forEach(menu => menu.classList.remove('active'));
            hamburgers.forEach(hamburger => hamburger.classList.remove('active'));
            
            // Remove mobile-menu-open class from navbar and body
            const navbar = document.querySelector('.navbar-transparent');
            navbar.classList.remove('mobile-menu-open');
            document.body.classList.remove('mobile-menu-open');
            
            // Update navbar based on new state (hamburger is now inactive)
            updateNavbarBasedOnState(false);
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Scroll Progress Indicator
    const scrollProgress = document.querySelector('.scroll-progress-bar');
    
    // Navbar scroll effect - transparent to scrolled
    const transparentNavbar = document.querySelector('.navbar-transparent');
    

    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        
        // Update scroll progress
        if (scrollProgress) {
            const scrollPercentage = (scrollPosition / documentHeight) * 100;
            scrollProgress.style.height = `${scrollPercentage}%`;
        }
        
        // Update navbar based on current state (check DOM for scroll events)
        updateNavbarBasedOnState();
    });
    
    // Hero background image cycling
    const heroImages = document.querySelectorAll('.hero-bg-image');
    let currentImageIndex = 0;
    
    function cycleHeroImages() {
        heroImages[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % heroImages.length;
        heroImages[currentImageIndex].classList.add('active');
    }
    
    // Cycle images every 5 seconds
    setInterval(cycleHeroImages, 3000);

    // Hero testimonials cycling
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    let currentTestimonialIndex = 0;
    
    function cycleTestimonials() {
        if (testimonialSlides.length > 0) {
            testimonialSlides[currentTestimonialIndex].classList.remove('active');
            currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonialSlides.length;
            testimonialSlides[currentTestimonialIndex].classList.add('active');
        }
    }
    
    // Cycle testimonials every 6 seconds (slightly different from images)
    if (testimonialSlides.length > 0) {
        setInterval(cycleTestimonials, 6000);
    }

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-item, .portfolio-item, .gallery-item, .stat-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Counter animation for stats
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }
        
        updateCounter();
    }

    // Animate counters when hero stats section is visible
    const heroStatsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const numberElement = stat.childNodes[0];
                    const target = parseInt(numberElement.textContent);
                    if (!isNaN(target)) {
                        animateCounter(numberElement, target);
                    }
                });
                heroStatsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    // Observe hero stats
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        heroStatsObserver.observe(heroStats);
    }

    // Animate counters when about stats section is visible
    const aboutStatsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const target = parseInt(stat.textContent.replace('+', ''));
                    if (!isNaN(target)) {
                        animateCounter(stat, target);
                        // Add back the + sign after animation
                        setTimeout(() => {
                            stat.textContent = stat.textContent + '+';
                        }, 2000);
                    }
                });
                aboutStatsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    // Observe about stats
    const aboutStats = document.querySelector('.about-stats');
    if (aboutStats) {
        aboutStatsObserver.observe(aboutStats);
    }

    // Animate section title on scroll
    const sectionTitleObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { 
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    });

    // Animate section title fill on scroll (middle of viewport)
    const sectionTitleFillObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fill-animate');
            }
        });
    }, { 
        threshold: 0.5,
        rootMargin: '0px 0px 0px 0px'
    });

    // Observe section title
    const sectionTitle = document.querySelector('.section-title');
    if (sectionTitle) {
        sectionTitleObserver.observe(sectionTitle);
        sectionTitleFillObserver.observe(sectionTitle);
    }

    // Animate services title on scroll
    const servicesTitle = document.querySelector('.services-title');
    if (servicesTitle) {
        sectionTitleObserver.observe(servicesTitle);
        sectionTitleFillObserver.observe(servicesTitle);
    }

    // Animate about title on scroll
    const aboutTitle = document.querySelector('.about-title');
    if (aboutTitle) {
        sectionTitleObserver.observe(aboutTitle);
        sectionTitleFillObserver.observe(aboutTitle);
    }

    // Form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // Simple validation
            if (email) {
                alert('Ďakujeme za prihlásenie k odberu!');
                this.reset();
            } else {
                alert('Prosím, zadajte váš email.');
            }
        });
    }

    // Gallery image modal disabled - items now link to portfolio page
    // const galleryItems = document.querySelectorAll('.gallery-item');
    // Gallery modal functionality removed to allow direct navigation to portfolio page

    // Services carousel functionality
    let currentSlide = 0;
    const carousel = document.querySelector('.services-carousel');
    const cards = document.querySelectorAll('.services-carousel .service-card');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    
    if (carousel && cards.length > 0) {
        const cardWidth = cards[0].offsetWidth + 40; // card width + gap
        const maxSlides = Math.max(0, cards.length - 3); // Show 3 cards at a time, 4th partially visible
        
        function updateCarousel() {
            const translateX = -(currentSlide * cardWidth);
            carousel.style.transform = `translateX(${translateX}px)`;
            
            // Update button states
            prevBtn.disabled = currentSlide === 0;
            nextBtn.disabled = currentSlide >= maxSlides;
        }
        
        function nextSlide() {
            if (currentSlide < maxSlides) {
                currentSlide++;
                updateCarousel();
            }
        }
        
        function prevSlide() {
            if (currentSlide > 0) {
                currentSlide--;
                updateCarousel();
            }
        }
        
        // Event listeners
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);
        
        // Initialize carousel
        updateCarousel();
        
        // Handle window resize
        window.addEventListener('resize', function() {
            const newCardWidth = cards[0].offsetWidth + 40;
            if (newCardWidth !== cardWidth) {
                location.reload(); // Simple solution for responsive updates
            }
        });
    }

    // Continuous slider animation (no pause on hover)
});

// Privacy Policy Popup Functions
function openPrivacyPopup() {
    const popup = document.getElementById('privacy-popup');
    if (popup) {
        popup.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closePrivacyPopup() {
    const popup = document.getElementById('privacy-popup');
    if (popup) {
        popup.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close popup when clicking outside
document.addEventListener('click', function(e) {
    const popup = document.getElementById('privacy-popup');
    const cookiesPopup = document.getElementById('cookies-popup');
    if (popup && e.target === popup) {
        closePrivacyPopup();
    }
    if (cookiesPopup && e.target === cookiesPopup) {
        closeCookiesPopup();
    }
});

// Close popup with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closePrivacyPopup();
        closeCookiesPopup();
    }
});

// Cookies Policy Popup Functions
function openCookiesPopup() {
    const popup = document.getElementById('cookies-popup');
    if (popup) {
        popup.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeCookiesPopup() {
    const popup = document.getElementById('cookies-popup');
    if (popup) {
        popup.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Gallery modal styles removed - no longer needed
// Modal functionality disabled in favor of direct portfolio navigation 

// Back to Top Button - Mobile Only
function createBackToTopButton() {
    // Only create on mobile devices
    if (window.innerWidth <= 768) {
        // Check if button already exists
        if (!document.querySelector('.back-to-top')) {
            const backToTopBtn = document.createElement('button');
            backToTopBtn.className = 'back-to-top';
            backToTopBtn.innerHTML = '↑';
            backToTopBtn.setAttribute('aria-label', 'Späť na vrch');
            
            // Add click event
            backToTopBtn.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
            
            document.body.appendChild(backToTopBtn);
        }
    }
}

// Show/hide back to top button based on scroll position
function toggleBackToTopButton() {
    const backToTopBtn = document.querySelector('.back-to-top');
    if (backToTopBtn && window.innerWidth <= 768) {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    }
}

// Initialize back to top button
createBackToTopButton();

// Add scroll event listener for back to top button
window.addEventListener('scroll', toggleBackToTopButton);

// Handle window resize - create/remove button as needed
window.addEventListener('resize', function() {
    const backToTopBtn = document.querySelector('.back-to-top');
    if (window.innerWidth <= 768) {
        createBackToTopButton();
    } else if (backToTopBtn) {
        backToTopBtn.remove();
    }
});

// Cookie consent functionality
function checkCookieConsent() {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
        setTimeout(() => {
            const cookieBanner = document.getElementById('cookie-banner');
            if (cookieBanner) {
                cookieBanner.classList.add('show');
            }
        }, 1000);
    }
}

function setCookieConsent(accepted) {
    localStorage.setItem('cookieConsent', accepted ? 'accepted' : 'declined');
    const cookieBanner = document.getElementById('cookie-banner');
    if (cookieBanner) {
        cookieBanner.classList.remove('show');
    }
}

// Initialize cookie consent on page load
document.addEventListener('DOMContentLoaded', function() {
    checkCookieConsent();
    
    const acceptBtn = document.getElementById('accept-cookies');
    const declineBtn = document.getElementById('decline-cookies');
    
    if (acceptBtn) {
        acceptBtn.addEventListener('click', () => {
            setCookieConsent(true);
        });
    }
    
    if (declineBtn) {
        declineBtn.addEventListener('click', () => {
            setCookieConsent(false);
        });
    }
});