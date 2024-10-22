/* 
In questo esercizio, dovrai creare una classe in JavaScript chiamata "Veicolo" con alcune proprietà e metodi.
La classe "Veicolo" dovrebbe avere le seguenti caratteristiche:
marca
anno
colore
porte
carburante
Successivamente:
Creiamo una nuova istanza di veicolo che rappresenti una Fiat 2019 blu.
Otteniamo le informazioni della vettura utilizzando il metodo informazioni()
Calcoliamo l'età della vettura utilizzando il metodo calcolaEta()
BONUS
In questo bonus, dovrai estendere la classe "Veicolo" con una nuova classe chiamata "Automobile".
La classe "Automobile" eredita tutte le proprietà e i metodi della classe "Veicolo" e ne aggiunge alcuni specifici per le automobili.
Successivamente:
Istanziamo una nuova Automobile (Opel, 2020, nera, con 4 porte, a benzina)
Stampiamo il numero di porte e il tipo di carburante.

IDEE PER PRATICA RIPASSO:
crea un array di veicoli
cicla nell'array usando un forEach
cicla nell'array usando un for
crea una nuova array che contenga solo il nome dei veicoli
crea una nuova array con solo i veicoli elettriche */

// creo la classe con le proprità
class Veicolo{
    brand;
    year;
    color;
    
    constructor(brand, year, color, doors, fuel){

        this.brand = brand
        this.year = year
        this.color = color
        this.doors = doors
        this.fuel = fuel
       

    }
 // creo un metodo per loggare le info di una auto
  informazioni(){
    return this.brand + ' ' + 'del' + ' ' + this.year + ' di colore ' + this.color 
  }

  //creo un metodo per sapere quanti anni ha
    calcolaEta(){
        let currentYear = 2024
        return currentYear - this.year
    }


    


}





// creo una nuova istanza
const Fiat =  new Veicolo('Fiat', 2019 ,'blu', 4, 'benzina' )
//loggo la istanza con il metodo per avere le info
console.log(Fiat.informazioni());
//loggo la istanza con il metodo per sapere quanti anni ha
console.log(Fiat.calcolaEta());

// creo una classe che eredita le proprietà della classe veicolo e ne aggiunge altre
class Automobile extends Veicolo{

    doors;
    fuel;
    // richiamo con super le proprietà di Veicolo 
    constructor(brand, year, color, doors, fuel){   
        super(brand, year, color,)    
        this.doors = doors
        this.fuel = fuel
    }
    //creo un metodo che raccoglie le informazioni del primo metodo e le somma al secondo
    info2(){
        return this.informazioni() + ' ' + this.doors + ' ' + this.fuel
    }
}



// creo una nuova istanza
const Opel =  new Automobile('Opel', 2020 ,'nera', '4 porte', 'benzina' )

console.log(Opel.info2());
