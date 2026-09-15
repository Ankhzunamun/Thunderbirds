// ==========================================
// DATEN FÜR DIE VEREINS-NEWS
// ==========================================
const newsData = [
    {
		date: "12. September 2026",
        title: "U13 @ Spanndau, U10 @ Cottbus",
        shortText: "Die letzten Spiele vor dem Summer Bowl",
        fullText: `<p><strong>U10 glänzt in Cottbus mit Silber</strong></p>
			<p>
			Was für ein starker Auftritt unserer U10! Beim Auswärtsturnier in Cottbus zeigte das Team von der ersten Minute an leidenschaftlichen Football, tolle Spielzüge und echten Teamgeist. Nach engagierten und hart umkämpften Partien belohnte sich der Nachwuchs am Ende mit einem hervorragenden 2. Platz. Eine fantastische Leistung, die riesige Vorfreude auf die kommenden Aufgaben macht!
			</p>
			<p><strong>U13 beweist Moral und Kampfgeist in Spandau</strong></p>
			<p>
			Auch für unsere U13 ging es heiß her: Bei den Spandau Bulldogs stellte sich das Team einer starken Konkurrenz. Auch wenn am Ende der 4. Platz auf dem Papier steht, war der Spieltag alles andere als enttäuschend. Unsere Kids haben auf dem Feld wertvolle Erfahrungen gesammelt, bis zur letzten Sekunde gekämpft und nie den Kopf hängen lassen. Genau dieser Zusammenhalt macht das Team aus – die Entwicklung stimmt, und die nächsten Erfolge lassen garantiert nicht lange auf sich warten!
			</p>`,
		image: "Bilder/News/120926.webp"
    },
	
	{
        date: "06. September 2026",
        title: "Thunderbirds @ Spandau Bulldogs",
        shortText: "Unsere Männer dominieren in Spandau",
        fullText: `<p>Dominanter Auswärtssieg bei den Spandau Bulldogs</p>
    
					<p>
					Unsere Seniorenmannschaft war am vergangenen Spieltag zu Gast bei den Spandau Bulldogs. Bei bestem Wetter und pünktlichem Kick-off um 15:00 Uhr bot sich den Fans eine großartige Kulisse – laut Stadionsprecher war das Spiel nahezu ausverkauft. Die Bulldogs traten allerdings mit einem etwas geschwächten Kader an.
					</p>

					<p>
					Von der ersten Minute an hatten die Thunderbirds das Geschehen fest im Griff und dominierten die Partie nach Belieben. Bereits zur Halbzeit spiegelte sich diese Überlegenheit in einer komfortablen 00:21-Führung wider. 
					</p>

					<p>
					In der zweiten Halbzeit lag der Fokus vor allem auf der Frage, ob die Defense den Zu-Null-Sieg festhalten konnte. Die Verteidigung hielt dem Druck stand: Selbst ein Field-Goal-Versuch der Hausherren wurde erfolgreich geblockt. Am Ende feierten die Thunderbirds einen hochverdienten 00:46-Kantersieg.
					</p>
					
					<p>
					Schlüsselmomente waren unter anderem ein spektakulärer Pick-Six von Tim sowie ein Fumble der Bulldogs nahe der eigenen Endzone, den unsere Offense prompt in einen Touchdown ummünzte.
					</p>
					
					<p><strong>Eine überragende Teamleistung – Let's go Thunderbirds!</strong></p>`,
					image: "Bilder/News/060926.webp"
    },
	
	{
        date: "30. August 2026",
        title: "Thunderbirds @ Vorpommern Vandals",
        shortText: "Auswärtsspiel der Seniors",
        fullText: `
            <p><strong>🦅⚡ FINAL SCORE | ROAD WIN! 🏈🔥</strong></p>
            <p>Wir holen uns den Sieg in Greifswald!</p>
            <p>Nach vier Vierteln steht es:<br>
            <strong>Vorpommern Vandals 14 – 27 Berlin Thunderbirds 🦅</strong></p>

            <p>Aber genauso wichtig: Es war ein starker und respektvoller Football-Tag. 🤝</p>
            <p>Im Vergleich zum letzten Jahr war die Atmosphäre deutlich fairer – genau so soll Football sein: hart auf dem Feld, respektvoll danach.</p>

            <p>Danke an die Vandals für das Game und an alle mitgereisten Thunderbirds-Fans für den Support! 📣</p>
        `,
        image: "Bilder/News/300826_2.webp"
    },
	
	{
        date: "30. August 2026",
        title: "Hometurnier U13",
        shortText: "Unsere U13-Flagmannschaft hatte ihr Heimturnier. 🏈⚡",
        fullText: `
            <p><strong>🏈 ES IST GAMEDAY!! 🏈</strong></p>
            <p>Bei unserer U13 stand das Heimturnier an, während die Männer auswärts im Einsatz waren. Vom Wetter her war bestes Football-Wetter prognostiziert – und das hielt sich tatsächlich über das gesamte Turnier.</p>
            
            <p>Voller Motivation starteten unsere 11 Helden und Heldinnen in den Turniertag. Doch schon kurz nach dem Anpfiff mussten wir die ersten Verletzungen und damit auch die ersten Ausfälle hinnehmen. Am Ende waren nur noch 7 Spielerinnen und Spieler einsatzfähig.</p>

            <p>Auch wenn wir uns – und natürlich auch euch – andere Ergebnisse gewünscht hätten, konnten wir unser Potenzial heute leider nicht auf dem Platz umsetzen.</p>

            <p><strong>Was uns aber mächtig stolz gemacht hat:</strong> Selbst mit nur 7 Spielerinnen und Spielern habt ihr bis zur letzten Sekunde gekämpft und niemals aufgegeben! 💪🏈</p>

            <p>Das ist Ehrgeiz, wie er im Buche steht! 🔥</p>

            <p>Zum Abschluss möchten wir uns noch einmal ganz herzlich für die tolle Organisation des Turniers bedanken! 🏈</p>

            <p>Ein ebenso großes Dankeschön geht an unsere Coaches und Betreuer, die unsere Kids mit viel Engagement begleiten und unterstützen. 💪</p>

            <p>Und natürlich dürfen unsere Eltern nicht fehlen: Danke, dass ihr eure Kinder bei den Turnieren immer so fleißig unterstützt, anfeuert und ihnen den Rücken stärkt! ❤️</p>

            <p>Ohne euch wäre das alles nicht möglich!</p>

            <p><strong>⚡ LET'S GO THUNDERBIRDS! ⚡</strong></p>
        `,
		image: "Bilder/News/300826_1.webp"
    },
	{
        date: "01. August 2026",
        title: "Flag Coach gesucht!",
        shortText: "Werde Teil unserer Football-Familie: Wir suchen dich als Coach.",
        fullText: `
            <p><strong>Werde Teil unserer Football-Familie: Wir suchen dich als Coach (w/m/d)!</strong></p>
            <p>Du hast Leidenschaft für den Sport, Freude an der Arbeit mit jungen Talenten und möchtest Teil eines starken Teams werden? Die Berlin Thunderbirds suchen motivierte Verstärkung für unsere Flag-Football-Jugendteams (U10, U13, U16)!</p>
            
            <p><strong>Warum du bei uns coachen solltest:</strong></p>
            <ul>
                <li><strong>Unterstützung:</strong> Wir begleiten dich aktiv bei deiner persönlichen Entwicklung als Coach.</li>
                <li><strong>Starkes Team:</strong> Gemeinsam wachsen wir, lernen voneinander und feiern unsere Erfolge.</li>
                <li><strong>Spass:</strong> Die Freude am Sport und die Begeisterung unserer Spieler stehen bei uns im Mittelpunkt.</li>
                <li><strong>Football is Family:</strong> Werde Teil einer großen Football-Familie, in der Zusammenhalt großgeschrieben wird.</li>
            </ul>

            <p><strong>Interesse geweckt?</strong><br>
            Komm in unser Team am Standort <strong>Stadion Britz-Süd (Buckower Damm 13, 12349 Berlin)</strong>.</p>

            <p>Melde dich einfach direkt bei uns:<br>
            <strong>E-Mail:</strong> coach.alex@berlinthunderbirds.de</p>

            <p><strong>Bewirb dich jetzt und gestalte die Zukunft unserer jungen Talente aktiv mit!</strong></p>
        `,         
        image: "Bilder/News/010826.webp"
    }
];

let currentPage = 1;
const postsPerPage = 3;

// ==========================================
// FUNKTION ZUM ERSTELLEN DER NEWS-KARTEN (PAGINIERUNG)
// ==========================================
function renderNews() {
    const wrapper = document.getElementById('news-wrapper');
    if (!wrapper) return;

    wrapper.innerHTML = "";

    const start = (currentPage - 1) * postsPerPage;
    const end = start + postsPerPage;
    const paginatedItems = newsData.slice(start, end);

    paginatedItems.forEach((item, index) => {
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

// Funktion zum Umschalten der Seiten per Button
function changePage(direction) {
    currentPage += direction;
    renderNews();
    const section = document.querySelector('.news-section');
    if(section) section.scrollIntoView({ behavior: 'smooth' });
}


// ==========================================
// MODAL LOGIK OHNE SEITENSPRUNG
// ==========================================

function openNewsModal(newsIndex) {
    const newsItem = newsData[newsIndex];
    if (!newsItem) return;

    document.getElementById('modalImage').src = newsItem.image;
    document.getElementById('modalDate').innerText = newsItem.date;
    document.getElementById('modalTitle').innerText = newsItem.title;
    document.getElementById('modalText').innerHTML = newsItem.fullText;

    const modalImage = document.getElementById('modalImage');
    if(newsItem.specialStyle) {
        modalImage.style = newsItem.specialStyle;
    } else {
        modalImage.style = "";
    }

    document.getElementById('newsModal').classList.add('active');
    // HIER WURDE overflow = 'hidden' GELÖSCHT, DAMIT ES NICHT MEHR NACH OBEN SPRINGT!

    // Eintrag im Browser-Verlauf erstellen
    history.pushState({ newsModalOpen: true }, '');
}

function closeNewsModal(fromHistory = false) {
    const modal = document.getElementById('newsModal');
    if (modal && modal.classList.contains('active')) {
        // Aktuelle Position vor dem Schließen merken
        const currentScrollY = window.scrollY;

        modal.classList.remove('active');

        if (!fromHistory && history.state && history.state.newsModalOpen) {
            history.back();
        }

        // Den Sprung verhindern, indem die Position im nächsten Render-Schritt erzwungen wird
        requestAnimationFrame(() => {
            window.scrollTo(0, currentScrollY);
        });
        setTimeout(() => {
            window.scrollTo(0, currentScrollY);
        }, 10);
    }
}

// Reagiert auf Smartphone Zurück-Geste / Zurück-Taste
window.addEventListener('popstate', function(e) {
    const currentScrollY = window.scrollY;
    closeNewsModal(true);
    window.scrollTo(0, currentScrollY);
});

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