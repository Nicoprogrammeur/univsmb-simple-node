const fs = require("fs");

class GestionFichierJSON {
	constructor(fichier) {
		this.fichier = fichier ;
	}
	Lire() {
		let donnees = fs.readFileSync(this.fichier) ;
		console.log(JSON.parse(donnees)) ;
	}
}

var myFile = new GestionFichierJSON('data.json')

myFile.Lire()
