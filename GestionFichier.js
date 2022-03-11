const fs = require("fs");

class GestionFichier {
	constructor(fichier) {
		this.fichier = fichier ;
	}
	Lire() {
		fs.readFile(this.fichier,  (err, data) => {
		   if (err) throw err;
		   console.log(data.toString());
		});

        /**********************************************/
        /* ou
        let contenu = fs.readFileSync(this.fichier, {encoding:'utf8', flag:'r'});
		console.log(contenu);
        */
        /* ou
        this.contenu = fs.readFileSync(this.fichier, {encoding:'utf8', flag:'r'});
		console.log(this.contenu);
        */
	}
	Ecrire(text) {
		fs.writeFile(this.fichier, text, (err) => {
		   if (err) throw err;
		   console.log("Completed ! ");
		});

        /**********************************************/
        /* ou
        fs.writeFileSync(this.fichier, text);
        */
        /* ou
        fs.writeFileSync(this.fichier, this.contenu + '\\n' + text);
        */
        /* ou
        fs.writeFileSync(this.fichier, '\n' + text, {encoding:'utf8', flag: 'a+'});
        */
	}
	Supprimer() {
		fs.unlink(this.fichier, (err) => {
		   if (err) throw err;
		   console.log("File deleted ! ");
		});

        /**********************************************/
        /* ou
        fs.rmSync(this.fichier);
        */
	}
    /**********************************************/
    // les méthodes Sync vont permettre d'attendre que le fichier soit lu pour faire les fonctions
}

var myFile = new GestionFichier('monfichier')
var myFile2 = new GestionFichier('myfile.txt')

myFile.Lire()

myFile2.Lire()

myFile.Ecrire('je suis le deuxmième text')
myFile.Lire()

myFile.Supprimer()