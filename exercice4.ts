// 1 - la classe MaDate
class MaDate{
    private jour :number;
    private mois: number;
    private annee: number;

    // 2 - constructeur
    public constructor(jour:number,mois:number,annee:number){
        this.jour = jour;
        this.mois = mois;
        this.annee = annee;
    }

    
    public get getJour() : number {
        return this.jour;
    }
    public get getMois() : number {
        return this.mois;
    }
    public get getAnnee() : number {
        return this.annee;
    }

    
    public set setJour(jrs : number) {
        this.jour = jrs;
    }
    public set setMois(ms : number) {
        this.mois = ms;
    }
    public set setAnnee(an : number) {
        this.annee = an;
    }
        // 4-
    public ajouterUnJour(){
        let days = 1;
        let newDate = new Date(Date.now() + days * 24*60*60*1000);
        return newDate;        
        
    }
    // 5-
    public ajouterPlusieursJours(n:number){

    }
    // 6-1
    public ajouterUnMois(){
        function addMonths(date,months){
            var d = date.getJour();
            date.setMois(date.getMonth()+ +months);
            if(date.getDate() != d){
                date.setJour(0);
            }
            return date;
        }
    }
    // 6-2
    public ajouterUnAn(){
        let years = 1;
        let newDate = new Date(Date.now() + years * 24*60*60*1000);
        return newDate;
    }

    
}
export{MaDate}