class Adresse{
    private rue:String;
    private ville:String;
    private codePostal:String;

    public constructor(rue:String,ville:String,codePostal:String){
        this.rue = rue;
        this.ville = ville;
        this.codePostal = codePostal;
    }

    public getRue(){
        return this.rue;
    }
    public getVille(){
        return this.ville;
    }
    public getCodePostal(){
        return this.codePostal;
    }

    public setRue(val: String){
        this.rue = val;
    }
    public setVille(val: String){
        this.ville = val;
    }
    public setCodePostal(val: String){
        this.codePostal = val;
    }
}
export {Adresse}