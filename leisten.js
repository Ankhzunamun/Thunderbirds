document.addEventListener("DOMContentLoaded", function() {
    // 1. HEADER EINFÜGEN
    const headerHTML = `
    <header>
        <a href="index.html#top" class="logo-link">
            <img src="Bilder/logo.jpg" alt="Berlin Thunderbirds Logo"> 
            <span class="logo-hover-text">Home</span>
        </a>

        <!-- Hamburger Icon für Mobilgeräte -->
        <div class="menu-toggle" id="mobile-menu">
            <i class="fa-solid fa-bars"></i>
        </div>

        <nav>
            <div class="dropdown">
                <div class="nav-item">Teams<i class="fa-solid fa-chevron-down" style="font-size: 0.7rem;"></i></div>
                <div class="dropdown-content">
                    <a href="tackle.html">Tackle</a>
                    <a href="u16.html">U16 Flag</a>
                    <a href="u13.html">U13 Flag</a>
                    <a href="u10.html">U10 Flag</a>
                </div>
            </div>

            <a href="training.html" class="nav-item">Training</a>
            <a href="spiele.html" class="nav-item">Spiele</a>
           
            <div class="dropdown">
                <div class="nav-item">Thunderbirds <i class="fa-solid fa-chevron-down" style="font-size: 0.7rem;"></i></div>
                <div class="dropdown-content">
                    <a href="verein.html#verein">Verein</a>
                    <a href="verein.html#impressum">Impressum</a>
                    <a href="verein.html#download">Download</a>
                    <a href="verein.html#datenschutz">Datenschutz</a>
                </div>
            </div>
            
            <a href="galerie.html" class="nav-item">Galerie</a>

            <div class="social-nav">
                <a href="https://berlin-thunderbirds.myteamshop.de/" target="_blank" title="Fanshop"><i class="fa-solid fa-cart-shopping"></i></a>
                <a href="https://www.instagram.com/berlinthunderbirds/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://www.facebook.com/thbev/" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                <a href="https://www.tiktok.com/@thunderbirds.berlin" target="_blank"><i class="fa-brands fa-tiktok"></i></a>
            </div>
        </nav>
    </header>
    `;

    // 2. FOOTER, IMPRESSUM, DATENSCHUTZ & COOKIE BANNER EINFÜGEN
    const footerHTML = `
    <footer>
        <div style="margin-bottom: 10px;">
            <a href="verein.html#impressum" style="color: var(--thunder-light); text-decoration: none; margin: 0 15px; font-weight: bold; text-transform: uppercase; font-size: 0.85rem;">Impressum</a>
            <span style="color: rgba(255,255,255,0.3);">|</span>
            <a href="verein.html#datenschutz" style="color: var(--thunder-light); text-decoration: none; margin: 0 15px; font-weight: bold; text-transform: uppercase; font-size: 0.85rem;">Datenschutz</a>
            <span style="color: rgba(255,255,255,0.3);">|</span>
            <a href="#" onclick="openCookieBanner(event)" style="color: var(--thunder-light); text-decoration: none; margin: 0 15px; font-weight: bold; text-transform: uppercase; font-size: 0.85rem;">Cookies</a>
        </div>
        © 2026 BERLIN THUNDERBIRDS e.V.
    </footer>

    <div class="easter-egg">
        <img src="Bilder/Ankh.jpg" alt="Ankh Logo">
        <span>Webdesign by Ankhzunamun</span>
    </div>

    <!-- COOKIE BANNER -->
    <div id="cookie-banner" class="cookie-banner">
        <div class="cookie-content">
            <i class="fa-solid fa-cookie-bite cookie-icon"></i>
            <div class="cookie-text">
                <h3>Cookie-Einstellungen</h3>
                <p>Wir nutzen Cookies und Analysetools (wie Google Analytics), um unsere Website zu verbessern. Weitere Infos findest du in unserer <a href="verein.html#datenschutz">Datenschutzerklärung</a>.</p>
            </div>
            <div class="cookie-buttons">
                <button onclick="acceptCookies()" class="btn-accept">Alle akzeptieren</button>
                <button onclick="rejectCookies()" class="btn-reject" style="background: transparent; color: white; border: 1px solid var(--thunder-light); padding: 12px 20px; font-weight: bold; text-transform: uppercase; border-radius: 6px; cursor: pointer;">Nur essenzielle</button>
            </div>
        </div>
    </div>
    `;

    // In die entsprechenden Platzhalter auf der Seite einfügen
    const headerPlaceholder = document.getElementById("main-header");
    const footerPlaceholder = document.getElementById("main-footer");

    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;
    }
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }

    // Cookie Banner Status beim Laden prüfen
    const status = localStorage.getItem("cookieStatus");
    const banner = document.getElementById("cookie-banner");

    if (status === "accepted") {
        if (banner) {
            banner.classList.remove("cookie-active");
        }
        loadGoogleAnalytics();
    } else if (status === "essentials") {
        if (banner) {
            banner.classList.remove("cookie-active");
        }
    } else {
        setTimeout(() => {
            if (banner) {
                banner.classList.add("cookie-active");
            }
        }, 1000);
    }
});

// GLOBALE COOKIE FUNKTIONEN
function acceptCookies() {
    localStorage.setItem("cookieStatus", "accepted");
    const banner = document.getElementById("cookie-banner");
    if (banner) {
        banner.classList.remove("cookie-active");
    }
    loadGoogleAnalytics();
}

function rejectCookies() {
    localStorage.setItem("cookieStatus", "essentials");
    const banner = document.getElementById("cookie-banner");
    if (banner) {
        banner.classList.remove("cookie-active");
    }
}

function openCookieBanner(event) {
    if (event) event.preventDefault();
    const banner = document.getElementById("cookie-banner");
    if (banner) {
        banner.classList.add("cookie-active");
    }
}

// GOOGLE ANALYTICS LADEN
function loadGoogleAnalytics() {
    if (window.gaLoaded) return;
    window.gaLoaded = true;

    var measurementId = 'DEINE-MEASUREMENT-ID'; 

    var script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurementId;
    document.head.appendChild(script1);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', measurementId);
}

// GLOBALE EVENT-ÜBERWACHUNG (FÜR DYNAMISCH GELADENE ELEMENTE WIE HAMBURGER-MENÜ)[cite: 4]
document.addEventListener("click", function(e) {
    
    // 1. Hamburger-Menü öffnen/schließen (Mobile)
    const menuToggle = e.target.closest(".menu-toggle");
    if (menuToggle) {
        e.stopPropagation(); 
        const nav = document.querySelector("nav");
        if (nav) {
            nav.classList.toggle("active");
        }
        return;
    }

    // 2. Dropdown-Hauptpunkt auf Handys (z.B. "Teams" anklicken)
    const navItem = e.target.closest("nav .dropdown > .nav-item");
    if (navItem && window.innerWidth <= 768) {
        const dropdownContent = navItem.nextElementSibling;
        
        if (dropdownContent && dropdownContent.classList.contains("dropdown-content")) {
            e.preventDefault(); 
            e.stopPropagation();

            document.querySelectorAll(".dropdown-content").forEach(content => {
                if (content !== dropdownContent) {
                    content.style.display = "none";
                }
            });

            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        }
    }
});