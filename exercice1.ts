//classe Point
class Point {
    private abs:number;
    private ord:number;

    //constructeur
    public constructor(private _abs:number,private _ord:number){
        this.abs = _abs;
        this.ord = _ord;
    }
     // getter
    public getAbs() {
        return this.abs;
    }
    public getOrd() {
        return this.ord
    }

    // setter
    public setAbs(valeur:number) {
        this.abs = valeur;
    }
    public setOrd(valeur:number) {
        this.ord = valeur;
    }
    // 3-methode calcule distance
    // A(x1,y1) et B(x2,y2) d= racine de (x1-x2)2 + (y1-y2)2
    // Math.sqrt(a) pour racine de a 
    // et Math.pow(x,y) pour x puissance y
    public  calculerDistance(p: Point):number{ 
        let dx = this.getAbs()-p.getAbs(); // x1 - x2
        let dy = this.getOrd()-p.getOrd(); // y1- y2
        let dx2 = Math.pow(dx,2); // (x1 - x2)2
        let dy2 = Math.pow(dy,2); // (y1- y2)2
        let resultat = Math.sqrt(dx2 + dy2);
        return resultat;        
    }
    
    // 4- CalculerMilieu(p:Point) milieu du segment
    public calculerMilieu = (p: Point) => {
        let Xm = (this.getAbs() + p.getAbs())/2;
        let Ym = (this.getOrd() + p.getOrd())/2;
        //creation d'objet
        let milieu: Point = new Point(Xm , Ym);
        return milieu; 
    }
    
}

// 4- deuxieme classe 
class TroisPoints{
    private premier:Point;
    private deuxieme:Point;
    private troisieme:Point;

    // constructeur
    public constructor(first:Point, second:Point,third:Point){
        this.premier = first;
        this.deuxieme = second;
        this.troisieme = third;
    }

    // 5 les getters 
    public getPremier(){
        return this.premier;
    }
    public getDeuxieme(){
        return this.deuxieme;
    }
    public getTroisieme(){
        return this.troisieme;
    }
    // setters
    public setPremier(nbr:Point){
        this.premier = nbr;
    }
    public setDeuxieme(nbr:Point){
        this.deuxieme = nbr;
    }
    public setTroisieme(nbr:Point){
        this.troisieme = nbr;
    }
    // 6-TesterAlignement() return true si 1er , 2eme , 3eme sont alignes , false sinon

    public TesterAlignement(){
        let AB = this.premier.calculerDistance(this.deuxieme);
        let AC = this.premier.calculerDistance(this.troisieme);
        let BC = this.deuxieme.calculerDistance(this.troisieme);
        
        return AB = AC + BC ;
    }
    // 7- METHODE estIsocele() return true si 1er , 2eme , 3eme forment un triangle isocele , false sinon
    public estIsocele(){
        let AB = this.premier.calculerDistance(this.deuxieme);
        let AC = this.premier.calculerDistance(this.troisieme);
        let BC = this.deuxieme.calculerDistance(this.troisieme);

        return (AB == AC) || (AB == BC) || (BC == AC)
    }
}

export {Point,TroisPoints};

