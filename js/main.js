/* const inputPseudo = document.querySelector("#pseudo"); */
const chiffreSaisi = document.querySelector('#chiffre');
const buttonAddition = document.querySelector('#addition');
const buttonFactorielle = document.querySelector('#factorielle');
const buttonEffacer = document.querySelector('#effacer');
const resultat = document.querySelector('#resultat');

function afficherResultatSomme(calcul) {
	if (chiffreSaisi.value == '') {
		resultat.innerHTML = "<p>Merci d'entrer un chiffre !</p>";
		resultat.style.backgroundColor = '#ffb3b3';
	} else if (chiffreSaisi.value < 0) {
		resultat.innerHTML = "<p>Merci d'entrer un nombre positif !</p>";
		resultat.style.backgroundColor = '#ffb3b3';
	} else if (chiffreSaisi.value == 0) {
		resultat.innerHTML = '<p>Le résultat du calcul demandé est : 0 </p>';
		resultat.style.backgroundColor = '#cccccc';
	} else if (chiffreSaisi.value == 1) {
		resultat.innerHTML = '<p>Le résultat du calcul demandé est : 1 </p>';
		resultat.style.backgroundColor = '#cccccc';
	} else {
		resultat.innerHTML =
			'<p>La somme des n premiers nombres de ' +
			chiffreSaisi.value +
			' est : ' +
			calcul[0] +
			"<br />L'opération réalisée : " +
			calcul[1] +
			' </p>';
		resultat.style.backgroundColor = '#ccffeb';
	}
}

function afficherResultatFact(calcul) {
	if (chiffreSaisi.value == '') {
		resultat.innerHTML = "<p>Merci d'entrer un chiffre !</p>";
		resultat.style.backgroundColor = '#ffb3b3';
	} else if (chiffreSaisi.value < 0) {
		resultat.innerHTML = "<p>Merci d'entrer un nombre positif !</p>";
		resultat.style.backgroundColor = '#ffb3b3';
	} else if (chiffreSaisi.value == 0) {
		resultat.innerHTML = '<p>La factorielle de 0 est : 0 </p>';
		resultat.style.backgroundColor = '#cccccc';
	} else if (chiffreSaisi.value == 1) {
		resultat.innerHTML = '<p>La factorielle de 1 est : 1 </p>';
		resultat.style.backgroundColor = '#cccccc';
	} else {
		resultat.innerHTML =
			'<p>La factorielle de ' +
			chiffreSaisi.value +
			' est : ' +
			calcul[0] +
			"<br />L'opération réalisée : " +
			calcul[1] +
			' </p>';
		resultat.style.backgroundColor = '#ccffeb';
	}
}

buttonAddition.addEventListener('click', function () {
	let calculResultat = addition(parseInt(chiffreSaisi.value));
	afficherResultatSomme(calculResultat);
});

buttonFactorielle.addEventListener('click', function () {
	let calculResultat = factorielle(parseInt(chiffreSaisi.value));
	afficherResultatFact(calculResultat);
});

buttonEffacer.addEventListener('click', function () {
	resultat.innerHTML = '';
});
