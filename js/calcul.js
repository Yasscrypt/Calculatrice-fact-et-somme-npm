
/* Mes fonctions */

function addition(chiffre) {
	let addition = 1;
    let affichage = 1;
    let tabAdd = [];
	for (let i = 2; i <= chiffre; i++) {
		addition += i;
		affichage += ' + ' + i;
        tabAdd = [addition, affichage]
	}
	return tabAdd;
}

function factorielle(chiffre) {
	let factorielle = 1;
    let affichage = 1;
    let tabFact = [];
	for (let i = 2; i <= chiffre; i++) {
		factorielle *= i;
		affichage += ' x ' + i;
        tabFact = [factorielle, affichage]
	}
	return tabFact;
}
