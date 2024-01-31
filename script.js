var easterEggClicks = 0;

function easterEgg() {
	if (easterEggClicks == 1) {
		document.getElementById("click").play();
		document.getElementById("music").loop = true;
		document.getElementById("music").play();
		document.getElementById("easter-egg").setAttribute("style","color: #fe44d1");
	} else {
		if (easterEggClicks < 3) {
			document.getElementById("click").play();
		}
		easterEggClicks++;
	}
}