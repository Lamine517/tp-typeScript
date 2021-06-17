class Stagiaire{
    private nom?: String;
    private notes: number[]

    //1 -constructeur
    public constructor(nom:String ,notes:number[]){
        this.nom = nom;
        this.notes = notes;
    }
    // 2 - les getters et setters
    public getNom(){
        return this.nom;
    }
    public getNotes(){
        return this.notes
    }
    public setNom(name:String){
        this.nom = name;
    }
    public setNotes(note:number[]){
        this.notes = note;
    }
    // 3- calculerMoyenne des notes d'un stagiaire
    public calculerMoyenne() {
        let b = this.notes.length;
        let c = 0 , i;
        for(let i=0; i<b ; i++){
            c += Number(this.notes[i]);
        }
        return c/b;
    }

    // 4 - methode trouverMax et trouverMin
    //Valeur maximale
    public trouverMax(){
        return Math.max.apply(null,this.notes);
    }
    //Valeur minimale
    public trouverMin(){
        return Math.min.apply(null,this.notes);
    }
}
//  Classe formation
class formation{
    private intitule:string;
    private nbrJours: number;
     stagiaires: Stagiaire[];

    public constructor(intitule:string , nbrJours:number, stagiaires:Stagiaire[]){
        this.intitule = intitule;
        this.nbrJours = nbrJours;
        this.stagiaires = stagiaires;
    }

    // 6-methode calculerMoyenneFormation() return la moyenne d'un objet de type formation (la moy des moys des stagiaires)
    public calculerMoyenneFormation() {
     
        let moyf = []
        this.stagiaires
        .forEach(val => {
            for (let i = 0 ; i < val.getNotes.length; i++){
                moyf.push(val.getNotes[i])
            }
        })
        let moyyy
        moyf
        .reduce((tot , vals) => moyyy = tot +vals)
        let lol = moyyy/moyf.length
        return lol
    }
    // 7-
    // public getIndexMax(){
    //     // let indx:number = Math.max(this.notes[]);
    //     let maxx = this.stagiaires.reduce(function(a,b){ //1
    //         return Math.max(a,b); //2
    //     });
    //     // this.notes.forEach(afficher);
    //     // function afficher(value,key){
    //     //     return console.log(key,value);
            
    //     // }
    //     return maxx; //3
    // }

     // 8-
     public afficherNomMax(){

    }

     // 9-
     public afficherMinMax(){

    }

     // 10-
     public trouverMoyenneParNom(nom:String){

    }
}
export {Stagiaire,formation};