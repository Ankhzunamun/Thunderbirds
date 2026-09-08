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
                </div>
            </div>

            <div class="social-nav">
                <a href="https://berlin-thunderbirds.myteamshop.de/" target="_blank" title="Fanshop"><i class="fa-solid fa-cart-shopping"></i></a>
                <a href="https://www.instagram.com/berlinthunderbirds/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://www.facebook.com/thbev/" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                <a href="https://www.tiktok.com/@thunderbirds.berlin" target="_blank"><i class="fa-brands fa-tiktok"></i></a>
            </div>
        </nav>
    </header>
    `;

    // 2. FOOTER & EASTER EGG EINFÜGEN
    const footerHTML = `
    <footer>
        © 2026 BERLIN THUNDERBIRDS e.V.
    </footer>

    <div class="easter-egg">
        <img src="Bilder/Ankh.jpg" alt="Ankh Logo">
        <span>Webdesign by Ankhzunamun</span>
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

    // Hamburger Menü Event-Listener erst NACH dem Einfügen aktivieren
    const menuToggle = document.getElementById('mobile-menu');
    const nav = document.querySelector('nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }
});