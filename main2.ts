import {Point,TroisPoints} from "./exercice1";
import {Stagiaire,formation} from "./exercice2";
import {MaDate} from "./exercice4";
import {Personne,ListePersonnes} from "./exercice3Personne";
import {Adresse} from "./exercice3Adresse";
function main(){
    let pointA = new Point(4,4);
    let pointB = new Point(8,8);
    let pointC = new Point(4,8);

    let troisPoints = new TroisPoints(pointA,pointB,pointC)

    console.log("Distance AB : ",pointA.calculerDistance(pointB) );
    console.log("Milieu AB : ",pointA.calculerMilieu(pointB) );
    console.log("Alignement  : ",troisPoints.TesterAlignement() );
    console.log("Isoceles : ",troisPoints.estIsocele() );
    
}
main();

function main2(){
    let tabNote = new Stagiaire("Lamine",[12,14,18,16]);
    console.log("Moyenne des notes de Stagiaire ",tabNote.calculerMoyenne());
    // console.log("index Maximal ",tabNote.getIndexMax());
    console.log("Maximal ",tabNote.trouverMax());
    console.log("Minimal ",tabNote.trouverMin());
    

    let tabFormation = new formation("TS-DFE",10000000,[tabNote]);
    // console.log("Moyenne Formation ",tabFormation.calculerMoyenneFormation());

    
}
main2();

function main3(){
    let adr = new Adresse('dakar','Rue 23','fff');
    let person = new Personne("Lamine","M",[adr])
    console.log("Le nom ",person.getNom());
    
}
main3();

function main4(){
    let Datt = new MaDate(17,6,2021);
    console.log("Demain sera : ",Datt.ajouterUnJour());
    
    console.log(Datt.ajouterUnMois());
    
}
main4();