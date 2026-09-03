const newsData = [
    {
        date: "20. Mai 2026",
        title: "News 8: Ein Meilenstein für die Thunderbirds",
        // Kurztext für die Karte
        shortText: "Ein historischer Tag! Wir werfen einen Blick auf die Zukunft unserer Spielstätte und was das für den gesamten Verein bedeutet...",
        // Der sehr lange Text für das Popup
        fullText: `
            <p>Es ist offiziell: Die Verträge für die umfassende Modernisierung des Stadion Britz Süd wurden gestern Abend im Rathaus unterzeichnet. Dies ist nicht nur ein Sieg für unseren Verein, sondern für den gesamten Sportstandort Neukölln.</p>
            <p>Was bedeutet das konkret? Ab kommendem Herbst werden die Bagger rollen. Der marode Rasen wird durch einen hochmodernen Kunstrasen der neuesten Generation ersetzt, der ganzjährig bespielbar ist. Das Flutlicht wird auf stromsparende LED-Technik umgerüstet, was uns endlich ermöglicht, auch Abendspiele in Tackle-Qualität auszutragen.</p>
            <h3>Neue Tribüne und Kabinen</h3>
            <p>Das Highlight für unsere Fans: Eine neue, überdachte Tribüne mit 500 Sitzplätzen wird errichtet. Zudem werden die Umkleidekabinen komplett saniert und erweitert, um den Anforderungen unserer wachsenden Jugendabteilung gerecht zu werden.</p>
            <p>Wir möchten uns bei allen Mitgliedern bedanken, die unermüdlich für dieses Projekt gekämpft haben. Besonderer Dank gilt auch der Bezirksverordnetenversammlung für ihr Vertrauen. "Das ist der Startschuss in eine neue Ära für die Thunderbirds", sagte unser 1. Vorsitzender sichtlich bewegt.</p>
            <p>Der Spielbetrieb der kommenden Saison ist gesichert, wir haben bereits Ausweichplätze für die Bauphase organisiert. Details dazu folgen in Kürze. Wir halten euch auf dem Laufenden! #ThunderFuture #GoBirds</p>
        `,
        image: "Bilder/Bild1.jpg"
    },
    {
        date: "10. Mai 2026",
        title: "Saisonauftakt geglückt!",
        shortText: "Unsere Seniors gewinnen das erste Heimspiel der Saison souverän mit 28:07. Ein riesiges Danke an alle Fans!",
        fullText: "<p>Ein grandioser Auftakt für unsere Seniors! Vor über 300 Zuschauern dominierten wir die Gäste von der ersten Minute an. Die Defense stand wie eine Mauer, und unsere Offense zeigte ein variables Lauf- und Passspiel. Besonders Quarterback Tom Schmidt überzeugte mit drei Touchdown-Pässen. Ein perfekter Start in die neue Spielzeit.</p>",
        image: "Bilder/Bild2.jpg"
    },
    {
        date: "08. Mai 2026",
        title: "Neues Equipment eingetroffen",
        shortText: "Dank unseres Sponsors konnten wir 20 neue Helme für die Jugendabteilung anschaffen. Sicherheit geht vor!",
        fullText: "<p>Sicherheit hat oberste Priorität. Wir freuen uns riesig, dass wir dank der großzügigen Unterstützung der Allianz-Generalvertretung Müller 20 brandneue Riddell SpeedFlex Helme für unsere U16 Tackle-Mannschaft anschaffen konnten. Diese Investition stärkt unsere Jugendarbeit und schützt unsere Nachwuchs-Vögel.</p>",
        image: "Bilder/Flag.jpg"
    },
    {
        date: "01. Mai 2026",
        title: "U13 Flag-Turnier in Berlin",
        shortText: "Am kommenden Wochenende findet das große Einladungsturnier auf dem Kunstrasen Britz Süd statt.",
        fullText: "<p>Die kleinsten Thunderbirds laden ein! Zum ersten Mal richten wir den 'Thunder-Flag-Bowl' aus. Fünf Gastmannschaften aus dem gesamten Bundesgebiet reisen an, um sich im kontaktlosen Flag Football zu messen. Für Verpflegung ist gesorgt (Grillstation & Kuchenbuffet). Kommt vorbei und feuert unseren Nachwuchs an!</p>",
        image: "Bilder/Tackle.jpg"
    },
    {
        date: "25. April 2026",
        title: "Tryouts für Seniors",
        shortText: "Du bist groß, stark oder schnell? Komm vorbei und werde Teil der Thunderbirds-Familie.",
        fullText: "<p>Wir suchen Verstärkung! Unsere Seniors (Tackle Football) halten ein offenes Tryout ab. Egal ob du bereits Football-Erfahrung hast oder ein Quereinsteiger aus dem Rugby, Handball oder der Leichtathletik bist – wir finden die richtige Position für dich. Mitzubringen sind normale Sportsachen und Kunstrasenschuhe.</p>",
        image: "Bilder/Bild3.jpg"
    },
    {
        date: "20. April 2026",
        title: "Trainingslager erfolgreich",
        shortText: "Drei Tage intensives Coaching in der Sportschule haben das Team noch enger zusammengeschweißt.",
        fullText: "<p>Das diesjährige Trainingslager in Lindow war ein voller Erfolg. Der Fokus lag auf Teambuilding und dem Installieren des neuen Playbooks. 'Die Jungs haben hart gearbeitet und sind als Einheit zusammengewachsen', resümierte Headcoach Gerry. Wir sind bereit für die Saison.</p>",
        image: "Bilder/Bild4.jpg"
    },
	
	{
        date: "06. April 2026",
        title: "Test",
        shortText: "TEST",
        fullText: "<p>Supertest</p>",
        image: "Bilder/Team_Flag.jpg"
    },
	
    {
        date: "15. April 2026",
        title: "Mitgliederversammlung",
        shortText: "Wichtige Neuigkeiten zur Platzsanierung wurden am gestrigen Abend im Vereinsheim beschlossen.",
        fullText: "<p>Die gestrige Mitgliederversammlung war gut besucht. Neben den Berichten der Vorstände stand das Thema Stadionmodernisierung im Mittelpunkt. Die Mitglieder stimmten einstimmig für den vorgelegten Finanzierungsplan. Zudem wurde der Vorstand für die kommende Amtszeit entlastet. Das Protokoll ist im Download-Bereich verfügbar.</p>",
        image: "Bilder/Ankh.jpg",
        specialStyle: "object-fit: contain; padding: 20px; background: rgba(255,255,255,0.1);" // Für das Logo-Bild
    }
	
	
];

let currentPage = 1;
const postsPerPage = 3;

// Funktion zum Erstellen der News-Karten
function renderNews() {
    const wrapper = document.getElementById('news-wrapper');
    if (!wrapper) return;

    wrapper.innerHTML = ""; // Container leeren

    const start = (currentPage - 1) * postsPerPage;
    const end = start + postsPerPage;
    const paginatedItems = newsData.slice(start, end);

    paginatedItems.forEach((item, index) => {
        // Die ID berechnen wir, damit wir wissen, welche News geklickt wurde
        const absoluteIndex = start + index;
        const style = item.specialStyle ? `style="${item.specialStyle}"` : "";
        
        const card = `
            <article class="news-card" onclick="openNewsModal(${absoluteIndex})">
                <img src="${item.image}" class="news-image" alt="News" ${style}>
                <div class="news-content">
                    <div class="news-date">${item.date}</div>
                    <h3 class="news-title">${item.title}</h3>
                    <p class="news-text">${item.shortText}</p>
                </div>
            </article>
        `;
        wrapper.innerHTML += card;
    });

    // Pagination Info & Buttons updaten
    const totalPages = Math.ceil(newsData.length / postsPerPage);
    const pageInfo = document.getElementById('page-info');
    if(pageInfo) {
        pageInfo.innerText = `Seite ${currentPage} von ${totalPages}`;
    }
    
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    if(prevBtn) prevBtn.disabled = (currentPage === 1);
    if(nextBtn) nextBtn.disabled = (currentPage === totalPages);
}

// Funktion zum Umschalten der Seiten
function changePage(direction) {
    currentPage += direction;
    renderNews();
    const section = document.querySelector('.news-section');
    if(section) section.scrollIntoView({ behavior: 'smooth' });
}


// --- MODAL LOGIK ---

function openNewsModal(newsIndex) {
    const newsItem = newsData[newsIndex];
    if (!newsItem) return;

    // Modal-Felder befüllen
    document.getElementById('modalImage').src = newsItem.image;
    document.getElementById('modalDate').innerText = newsItem.date;
    document.getElementById('modalTitle').innerText = newsItem.title;
    document.getElementById('modalText').innerHTML = newsItem.fullText; // Setzt den langen HTML-Text

    // Sonderstyling für das Logo-Bild im Modal übernehmen
    const modalImage = document.getElementById('modalImage');
    if(newsItem.specialStyle) {
        modalImage.style = newsItem.specialStyle;
    } else {
        modalImage.style = ""; // Reset
    }

    // Modal aktivieren
    document.getElementById('newsModal').classList.add('active');
    document.body.style.overflow = 'hidden'; // Verhindert das Scrollen im Hintergrund
}

function closeNewsModal() {
    document.getElementById('newsModal').classList.remove('active');
    document.body.style.overflow = ''; // Scrollen im Hintergrund wieder erlauben
}

// Schließen des Modals durch Klick auf den Hintergrund
window.addEventListener('click', (e) => {
    const modal = document.getElementById('newsModal');
    if (e.target === modal) {
        closeNewsModal();
    }
});

// Schließen des Modals durch ESC-Taste
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        closeNewsModal();
    }
});


// Starten, wenn die Seite geladen ist
window.addEventListener('DOMContentLoaded', renderNews);