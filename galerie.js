// ==========================================
// GALERIE DATEN (Hier kannst du deine Ordner verwalten)
// ==========================================
const galleryData = [
	{
        id: "Summerbowl26",
        name: "Summerbowl 2026",
        cover: "Bilder/News/260926.webp",
        images: [
            "Bilder/Galerie/Summerbowl26/1.webp",
			"Bilder/Galerie/Summerbowl26/2.webp",
			"Bilder/Galerie/Summerbowl26/3.webp",
			"Bilder/Galerie/Summerbowl26/4.webp",
			"Bilder/Galerie/Summerbowl26/5.webp",
			"Bilder/Galerie/Summerbowl26/6.webp",
			"Bilder/Galerie/Summerbowl26/7.webp",
			"Bilder/Galerie/Summerbowl26/8.webp",
			"Bilder/Galerie/Summerbowl26/9.webp",
			"Bilder/Galerie/Summerbowl26/10.webp",
			"Bilder/Galerie/Summerbowl26/11.webp",
			"Bilder/Galerie/Summerbowl26/12.webp",
			"Bilder/Galerie/Summerbowl26/13.webp",
			"Bilder/Galerie/Summerbowl26/14.webp",
			"Bilder/Galerie/Summerbowl26/15.webp",
			"Bilder/Galerie/Summerbowl26/16.webp",
			"Bilder/Galerie/Summerbowl26/17.webp",
			"Bilder/Galerie/Summerbowl26/18.webp",
			"Bilder/Galerie/Summerbowl26/19.webp",
			"Bilder/Galerie/Summerbowl26/20.webp",
			"Bilder/Galerie/Summerbowl26/21.webp",
			"Bilder/Galerie/Summerbowl26/22.webp",
			"Bilder/Galerie/Summerbowl26/23.webp",
			"Bilder/Galerie/Summerbowl26/24.webp"
        ]
    },
    {
        id: "tackle",
        name: "Seniors Tackle",
        cover: "Bilder/Tackle.webp",
        images: [
            "Bilder/Galerie/Tackle/Bild2.webp",
			"Bilder/Galerie/Tackle/Bild3.webp",
            "Bilder/Galerie/Tackle/Bild7.webp"
        ]
    },
    {
        id: "flag",
        name: "Flag Football (Jugend)",
        cover: "Bilder/Team_Flag.webp",
        images: [
            "Bilder/Team_Flag.webp",
            "Bilder/U16.webp",
            "Bilder/U13.webp",
            "Bilder/U10.webp"
        ]
    }
];

// Globale Variablen für Status & Navigation
let currentImagesArray = [];
let currentFolderId = null;

// Beim Laden der Seite prüfen / Startansicht
document.addEventListener("DOMContentLoaded", function() {
    showFolders();
});

// Funktion: Ordner-Ansicht zeichnen
function showFolders() {
    currentFolderId = null;
    const container = document.getElementById("gallery-container");
    const title = document.getElementById("gallery-title");
    const backBtn = document.getElementById("back-to-folders");

    if (title) title.innerText = "Thunderbirds Galerie - Ordner";
    if (backBtn) backBtn.style.display = "none";
    if (container) container.innerHTML = "";

    galleryData.forEach(folder => {
        const folderCard = document.createElement("div");
        folderCard.className = "gallery-item folder-card";
        folderCard.innerHTML = `
            <img src="${folder.cover}" alt="${folder.name}">
            <div class="folder-overlay">
                <i class="fa-solid fa-folder-open folder-icon"></i>
                <h3>${folder.name}</h3>
                <span class="folder-count">${folder.images.length} Bilder</span>
            </div>
        `;
        folderCard.onclick = () => {
            openFolder(folder.id);
            // Browser-Verlauf für Ordner-Öffnung aktualisieren
            history.pushState({ folder: folder.id }, "");
        };
        container.appendChild(folderCard);
    });
}

// Funktion: Bilder eines bestimmten Ordners anzeigen
function openFolder(folderId) {
    const folder = galleryData.find(f => f.id === folderId);
    if (!folder) return;

    currentFolderId = folderId;
    currentImagesArray = folder.images;

    const container = document.getElementById("gallery-container");
    const title = document.getElementById("gallery-title");
    const backBtn = document.getElementById("back-to-folders");

    if (title) title.innerText = folder.name;
    if (backBtn) backBtn.style.display = "inline-block";
    if (container) container.innerHTML = "";

    folder.images.forEach(imgSrc => {
        const imgItem = document.createElement("div");
        imgItem.className = "gallery-item";
        imgItem.innerHTML = `<img src="${imgSrc}" alt="Galerie Bild">`;
        imgItem.onclick = () => openLightboxWithArray(imgSrc, folder.images);
        container.appendChild(imgItem);
    });
}

// Zentrales Lightbox-Array & Index Management
let activeLightboxImages = [];
let activeLightboxIndex = 0;

function openLightboxWithArray(imgSrc, imagesArray) {
    activeLightboxImages = imagesArray;
    activeLightboxIndex = activeLightboxImages.indexOf(imgSrc);
    
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    
    if (lightbox && lightboxImg) {
        lightboxImg.src = imgSrc;
        lightbox.classList.add("active");
        // History State für den Zurück-Button der Lightbox setzen
        history.pushState({ lightboxOpen: true }, "");
    }
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    if (lightbox) {
        lightbox.classList.remove("active");
    }
}

// Browser-Verlauf ("Zurück"-Button Logik)
window.addEventListener("popstate", (event) => {
    const lightbox = document.getElementById("lightbox");
    const isLightboxActive = lightbox && lightbox.classList.contains("active");

    if (isLightboxActive) {
        // Wenn Lightbox offen war -> Lightbox schließen
        closeLightbox();
    } else if (currentFolderId !== null) {
        // Wenn man in einem Ordner war -> Zurück zur Ordnerübersicht
        showFolders();
    }
});

// Tastatur-Steuerung (Pfeiltasten & Esc)
document.addEventListener("keydown", (e) => {
    const lightbox = document.getElementById("lightbox");
    if (!lightbox || !lightbox.classList.contains("active")) return;

    const lightboxImg = document.getElementById("lightbox-img");

    if (e.key === "ArrowRight") {
        activeLightboxIndex = (activeLightboxIndex + 1) % activeLightboxImages.length;
        if (lightboxImg) lightboxImg.src = activeLightboxImages[activeLightboxIndex];
    } else if (e.key === "ArrowLeft") {
        activeLightboxIndex = (activeLightboxIndex - 1 + activeLightboxImages.length) % activeLightboxImages.length;
        if (lightboxImg) lightboxImg.src = activeLightboxImages[activeLightboxIndex];
    } else if (e.key === "Escape") {
        closeLightbox();
        window.history.back();
    }
});

// Funktion für das vorherige Bild in der Lightbox
function prevImage(e) {
    if (e) e.stopPropagation();
    if (activeLightboxImages.length === 0) return;
    
    activeLightboxIndex = (activeLightboxIndex - 1 + activeLightboxImages.length) % activeLightboxImages.length;
    const lightboxImg = document.getElementById("lightbox-img");
    if (lightboxImg) {
        lightboxImg.src = activeLightboxImages[activeLightboxIndex];
    }
}

// Funktion für das nächste Bild in der Lightbox
function nextImage(e) {
    if (e) e.stopPropagation();
    if (activeLightboxImages.length === 0) return;
    
    activeLightboxIndex = (activeLightboxIndex + 1) % activeLightboxImages.length;
    const lightboxImg = document.getElementById("lightbox-img");
    if (lightboxImg) {
        lightboxImg.src = activeLightboxImages[activeLightboxIndex];
    }
}

// ==========================================
// WISCH-GESTEN (TOUCH / SWIPE) FÜR HANDYS
// ==========================================
let touchStartX = 0;
let touchEndX = 0;
const minSwipeDistance = 50; // Mindest-Wischweg in Pixeln, damit es als Wischen gewertet wird

document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    if (!lightbox) return;

    // Startpunkt des Fingers merken
    lightbox.addEventListener("touchstart", (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    // Endpunkt messen und Richtung bestimmen, wenn der Finger losgelassen wird
    lightbox.addEventListener("touchend", (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipeGesture();
    }, { passive: true });
});

function handleSwipeGesture() {
    const distance = touchEndX - touchStartX;

    // Prüfen, ob die Wischbewegung lang genug war
    if (Math.abs(distance) < minSwipeDistance) return;

    if (distance > 0) {
        // Nach RECHTS gewischt -> Vorheriges Bild anzeigen
        prevImage();
    } else {
        // Nach LINKS gewischt -> Nächstes Bild anzeigen
        nextImage();
    }
}