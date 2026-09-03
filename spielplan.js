// --- DATEN FÜR TACKLE ---
const tackleHTML = `
    <div class="card home">
        <span class="card-text">26.04 vs Potsdam Royals II</span>
        <div class="badge-center"><span class="badge badge-home">Home</span></div>
        <div class="score-area">37:00</div>
        <div class="badge-right"><span class="badge badge-won">Won</span></div>
    </div>
	
    <div class="card home">
        <span class="card-text">17.05 vs Spandau Bulldogs</span>
        <div class="badge-center"><span class="badge badge-home">Home</span></div>
        <div class="score-area">20:07</div>
        <div class="badge-right"><span class="badge badge-won">Won</span></div>
    </div>
	
    <div class="card away">
        <span class="card-text">24.05 @ Potsdam Royals II</span>
        <div class="badge-center"><span class="badge badge-away">Away</span></div>
        <div class="score-area">24:19</div>
        <div class="badge-right"><span class="badge badge-lost">Lost</span></div>
    </div>
	
    <div class="card away">
        <span class="card-text">31.05 @ Frankfurt (Oder) Red Cocks</span>
        <div class="badge-center"><span class="badge badge-away">Away</span></div>
        <div class="score-area">18:22</div>
        <div class="badge-right"><span class="badge badge-won">Won</span></div>
    </div>
	
    <div class="card away">
        <span class="card-text">06.06 @ Berlin Bears</span>
        <div class="badge-center"><span class="badge badge-away">Away</span></div>
        <div class="score-area">27:07</div>
        <div class="badge-right"><span class="badge badge-lost">Lost</span></div>
    </div>
	
    <div class="card home">
        <span class="card-text">28.06 vs Berlin Rebels II</span>
        <div class="badge-center"><span class="badge badge-home">Home</span></div>
        <div class="score-area">--:--</div>
        <div class="badge-right">Verschoben</div>
    </div>
	
    <div class="card home">
        <span class="card-text">04.07 vs Frankfurt (Oder) Red Cocks</span>
        <div class="badge-center"><span class="badge badge-home">Home</span></div>
        <div class="score-area">10:07</div>
        <div class="badge-right"><span class="badge badge-won">Won</span></div>
    </div>
	
    <div class="card home">
        <span class="card-text">16.08 vs Vorpommern Vandals</span>
        <div class="badge-center"><span class="badge badge-home">Home</span></div>
        <div class="score-area">--:--</div>
        <div class="badge-right">Abgesagt</div>
    </div>
	
    <div class="card away">
        <span class="card-text">30.08 @ Vorpommern Vandals</span>
        <div class="badge-center"><span class="badge badge-away">Away</span></div>
        <div class="score-area">--:--</div>
        <div class="badge-right"></div>
    </div>
	
    <div class="card away">
        <span class="card-text">06.09 @ Spandau Bulldogs</span>
        <div class="badge-center"><span class="badge badge-away">Away</span></div>
        <div class="score-area">--:--</div>
        <div class="badge-right"></div>
    </div>
`;

// --- DATEN FÜR U10 ---
const u10HTML = `
    <div class="card away">
        <div class="card-info">
            <span class="card-text">31. Mai 			| Turnier bei Berlin Kobras</span>
            <span class="tournament-teams">Gegner: Berlin Kobras, Thunder Lightnings, Potsdam Royals</span>
        </div>
        <div class="badge-right">
            <span class="badge badge-away">Away</span>
        </div>
    </div>
	
	<div class="card home">
        <div class="card-info">
            <span class="card-text">07. Juni 			| Turnier bei Berlin Thunderbirds</span>
            <span class="tournament-teams">Gegner: Berlin Kobras, Erkner Razorbacks, Cottbus Crayfish</span>
        </div>
        <div class="badge-right">
            <span class="badge badge-home">Home</span>
        </div>
    </div>
	
	<div class="card away">
        <div class="card-info">
            <span class="card-text">20. Juni			| Turnier bei Staaken Bats</span>
            <span class="tournament-teams">Gegner: Staaken Bats, Cottbus Crayfish, Erkner Razorbacks</span>
        </div>
        <div class="badge-right">
            <span class="badge badge-away">Away</span>
        </div>
    </div>
	
	<div class="card away">
        <div class="card-info">
            <span class="card-text">12. September		| Turnier bei Cottbus Crayfish</span>
            <span class="tournament-teams">Gegner: Cottbus Crayfish, Thunder Lightnings, Potsdam Royals</span>
        </div>
        <div class="badge-right">
            <span class="badge badge-away">Away</span>
        </div>
    </div>
	
	<div class="card away">
        <div class="card-info">
            <span class="card-text">26. & 27. September	| Summerbowl</span>
            <span class="tournament-teams">Hier wird die entgültige Platzierung in der Liga entschieden</span>
        </div>
        <div class="badge-right">
            <span class="badge badge-away">Away</span>
        </div>
    </div>
`;

// --- DATEN FÜR U13 ---
const u13HTML = `
    <div class="card away">
        <div class="card-info">
            <span class="card-text">09. Mai 			| Turnier bei FFO Red Wings</span>
            <span class="tournament-teams">Gegner: FFO Red Wings, Lichtenberg Lions, Spandau Bulldogs</span>
        </div>
        <div class="badge-right">
            <span class="badge badge-away">Away</span>
        </div>
    </div>
	
	<div class="card away">
        <div class="card-info">
            <span class="card-text">17. Mai 			| Björn Werner Bowl</span>
            <span class="tournament-teams">Björn Werner hat eingeladen zu einem großen Tunier. 12 Mannschaften aus Berlin/Brandenburg spielen bei diesem Event</span>
        </div>
        <div class="badge-right">
            <span class="badge badge-away">Away</span>
        </div>
	</div>

	<div class="card home">
        <div class="card-info">
            <span class="card-text">28. Juni 			| Turnier bei Berlin Thunderbirds</span>
            <span class="tournament-teams">Gegner: Staaken Bats, FFO Red Wings, Berlin Kobras</span>
        </div>
        <div class="badge-right">
            <span class="badge badge-home">Home</span>
        </div>
	</div>	
		
	<div class="card away">
        <div class="card-info">
            <span class="card-text">04. Juli 			| Turnier bei Potsdam Royals</span>
            <span class="tournament-teams">Gegner: Potsdam Royals, Staaken Bats, Spandau Bulldogs</span>
        </div>
        <div class="badge-right">
            <span class="badge badge-away">Away</span>
        </div>
	</div>	
	
	<div class="card away">
        <div class="card-info">
            <span class="card-text">12. September 		| Turnier bei Spandau Bulldogs</span>
            <span class="tournament-teams">Gegner: Spandau Bulldogs, Berlin Bullets Green, Potsdam Royals</span>
        </div>
        <div class="badge-right">
            <span class="badge badge-away">Away</span>
        </div>
	</div>	
	
	<div class="card away">
        <div class="card-info">
            <span class="card-text">26. & 27. September	| Summerbowl</span>
            <span class="tournament-teams">Hier wird die entgültige Platzierung in der Liga entschieden</span>
        </div>
        <div class="badge-right">
            <span class="badge badge-away">Away</span>
        </div>
    </div>
`;

// --- DATEN FÜR U16 ---
const u16HTML = `
    <div class="card away">
        <div class="card-info">
            <span class="card-text">09. Mai 			| Turnier bei FFO Red Wings</span>
            <span class="tournament-teams">Gegner: FFO Red Wings, Rathenow Raccoons, Thunder Lightnings</span>
        </div>
        <div class="badge-right">
            <span class="badge badge-away">Away</span>
        </div>
    </div>
    
	<div class="card away">
        <div class="card-info">
            <span class="card-text">06. Juni 			| Turnier bei Rathenow Raccons</span>
            <span class="tournament-teams">Gegner: Rathenow Raccons, Erkner Razorbacks, Lichtenberg Lions</span>
        </div>
        <div class="badge-right">
            <span class="badge badge-away">Away</span>
        </div>
    </div>
	
	<div class="card away">
        <div class="card-info">
            <span class="card-text">20. Juni 			| Turnier bei Lichtenberg Lions</span>
            <span class="tournament-teams">Gegner: Lichtenberg Lions, Berlin Kobras, FFO Red Wings </span>
        </div>
        <div class="badge-right">
            <span class="badge badge-away">Away</span>
        </div>
    </div>
	
	<div class="card home">
        <div class="card-info">
            <span class="card-text">04. Juli 			| Turnier bei Berlin Thunderbirds</span>
            <span class="tournament-teams">Gegner: Berlin Kobras, Erkner Razorbacks, Thunder Lightnings </span>
        </div>
        <div class="badge-right">
            <span class="badge badge-home">Home</span>
        </div>
    </div>
	
	<div class="card away">
        <div class="card-info">
            <span class="card-text">26. & 27. September | Summerbowl</span>
            <span class="tournament-teams">Hier wird die entgültige Platzierung in der Liga entschieden</span>
        </div>
        <div class="badge-right">
            <span class="badge badge-away">Away</span>
        </div>
    </div>
`;

// --- AUSFÜHRUNG ---
// Wir warten, bis das Dokument geladen ist
document.addEventListener("DOMContentLoaded", function() {
    
    // Tackle einfügen
    const tackleZone = document.querySelector('.spielplan-lade-zone');
    if(tackleZone) tackleZone.innerHTML = tackleHTML;

    // U10 einfügen
    const u10Zone = document.querySelector('.spielu10');
    if(u10Zone) u10Zone.innerHTML = u10HTML;
	
	// U13 einfügen
    const u13Zone = document.querySelector('.spielu13');
    if(u13Zone) u13Zone.innerHTML = u13HTML;
    
	// U16 einfügen
    const u16Zone = document.querySelector('.spielu16');
    if(u16Zone) u16Zone.innerHTML = u16HTML;
	
});









