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
class Auto{
    brand;
    year;
    color;
    doors;
    fuel;
    constructor(brand, year, color, doors, fuel){

        this.brand = brand
        this.year = year
        this.color = color
        this.doors = doors
        this.fuel = fuel
       

    }
 // creo una funzione per loggare le info di una auto
  informazioni(){
    return this.brand + ' ' + 'del' + ' ' + this.year + ' di colore ' + this.color 
  }
    
}
// creo una nuova istanza
const Fiat =  new Auto('Fiat', 2019 ,'blu', 4, 'petrol' )
//loggo la istanza con il metodo per avere le info
console.log(Fiat.informazioni());
