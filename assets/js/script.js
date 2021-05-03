  ///////////////////////////////////////////////
  //////////////  SNACK 4  //////////////////////
  ///////////////////////////////////////////////

// const squadra = [
//   giocatore1 = {
    
//   },
//   giocatore2 = {

//   },
//   giocatore3 = {

//   },
//   giocatore4 = {

//   },
//   giocatore5 = {

//   }

// ];
// // FACCIO UN CICLO PER FAR GENERARE LA FORMAZIONE CASUALE
// for(var i = 0; i < 5; i++){
//   playerGenerator(squadra[i])
// }

// console.log(squadra);




// ////// FUNCTION //////
// function playerGenerator(arrSquadra){
//   // GENERO CASUALMENTE LA MEDIA PUNTI E I SUCCESSI DA 3 PUNTI
//   var points = Math. floor(Math. random() * 101);
//   var three = Math. floor(Math. random() * 101);
//   // MI DICHIARO UNA STRINGA CHE CONTERRA' IL CODICE CASUALE
//   var randomString = '';
//   // FACCIO DUE CICLI PER DI ESTRAZIONE DEL CODICE GIOCATORE
//   var chars = "0123456789";
//   for (var i=0; i<3; i++) {
//     var rnum = Math.floor(Math.random() * chars.length);
//     randomString += chars.substring(rnum,rnum+1);
//   }
//   chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   for (var i=0; i<3; i++) {
//     var rnum = Math.floor(Math.random() * chars.length);
//     randomString += chars.substring(rnum,rnum+1);
//   }
//   //console.log(randomString);
//   // PUSHO DENTRO L' ARRAY UN OGGETTO GIOCATORE
//    arrSquadra.push({
//      playerCode: randomString,                             //  INSERIRE UN OGGETTO DA UTENTE NELL'ARRAY
//      averagePoints: points ,          
//      threePoints :three
//    });
//    //console.log(arrSquadra);
// }




  ///////////////////////////////////////////////
  //////////////  SNACK 5  //////////////////////
  ///////////////////////////////////////////////

  // DICHIARO LE VARIABILI DA PASSARE ALLA FUNZIONE
  // var stringUtente = prompt("Inserisci una stringa");

  // var numMax = stringUtente.length;
  // //console.log(numMax);
  // var numMin =parseInt(Math.random() * (numMax - 1) + 1) ;
  // console.log("La lettere iniziale é la numero :" + numMin);
  // console.log(calcolaStringa(numMax, numMin, stringUtente));



  // //////////FUNCTION///////////
  // function calcolaStringa(max, min, string){
  //   var result = "";
  //   while(min < max){
  //     result += string[min] ;
  //     min ++;
  //   }
  //   string = result;
  //   return string
  // }


  ///////////////////////////////////////////////
  //////////////  SNACK 6  //////////////////////
  ///////////////////////////////////////////////


  // var stringUno = prompt("Inserisci la prima stringa...");
  // var stringDue = prompt("Inserisci la seconda stringa...");
  // console.log("La prima stringa é " + "-" + stringUno + "-" + "lunga: " + stringUno.length);
  // console.log("La seconda stringa é " + "-" + stringDue + "-" + "lunga: " + stringDue.length);
  // while(stringUno.length!=stringDue.length){
  //   if(stringUno<stringDue){
  //     stringUno += "-";
  //     console.log("Adesso la tua prima stringa e lunga: " + stringUno.length);
  //   }else if(stringUno>stringDue){
  //     stringDue += "-";
  //     console.log("Adesso la tua seconda stringa e lunga: " + stringDue.length);
  //   }
  // }
  // console.log("Adesso sono lunghe : " +stringUno.length+ " " +stringDue.length)



    ///////////////////////////////////////////////
  //////////////  SNACK 7  //////////////////////
  ///////////////////////////////////////////////


// const automobili = [
//   {
//     marca : "BMW",
//     modello : "settemila",
//     alimentazione : "benzina"
//   },
//   {
//     marca : "FIAT",
//     modello : "settemila",
//     alimentazione : "gas"
//   },
//   {
//     marca : "ALFA ",
//     modello : "settemila",
//     alimentazione : "diesel"
//   },
//   {
//     marca : "AUDI",
//     modello : "settemila",
//     alimentazione : "elettrica"
//   },
//   {
//     marca : "porche",
//     modello : "settemila",
//     alimentazione : "elettrica"
//   },
//   {
//     marca : "BMW",
//     modello : "settemila",
//     alimentazione : "benzina"
//   },
//   {
//     marca : "BMW",
//     modello : "settemila",
//     alimentazione : "benzina"
//   },
//   {
//     marca : "BMW",
//     modello : "settemila",
//     alimentazione : "benzina"
//   },
//   {
//     marca : "BMW",
//     modello : "settemila",
//     alimentazione : "benzina"
//   },
//   {
//     marca : "BMW",
//     modello : "settemila",
//     alimentazione : "metano"
//   }
// ];

// const arrBenzina = automobili.filter((auto) => {
//   return auto.alimentazione === 'benzina';
// })
// const arrDiesel = automobili.filter((auto) => {
//   return auto.alimentazione === 'diesel';
// })
// const arrRestanti = automobili.filter((auto) => {
//   if(auto.alimentazione != 'benzina' && auto.alimentazione !='diesel'){
//     return auto;
//   }
// })


// console.log(arrBenzina, arrDiesel, arrRestanti);
  

  ///////////////////////////////////////////////
  //////////////  SNACK 8  //////////////////////
  ///////////////////////////////////////////////
  //A partire da un array di stringhe, crea un secondo array formattando 
  //le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

// const arrMisto = [
//   'ciao',
//   'Mondo',
//   'BELLISSIMO'
// ]  ;

// const arrOrd = arrMisto.map((string) => {
//   let string2 = string.slice(1);
//   string2= string2.toLowerCase();
//   string = string[0].toUpperCase()+string2;
//   return string;
// })
// console.log(arrMisto, arrOrd) ;



  ///////////////////////////////////////////////
  //////////////  SNACK 9  //////////////////////
  ///////////////////////////////////////////////
//Crea un array di oggetti che rappresentano degli animali: ogni animale ha un 
//nome, una famiglia e una classe.Crea un nuovo array con la lista dei mammiferi.

// const arrAnimals = [
//   {
//     nome:'leone',
//     famiglia:'felidi',
//     classe:'mammiferi'
//   },
//   {
//     nome:'trigre',
//     famiglia:'felidi',
//     classe:'mammiferi'
//   },
//   {
//     nome:'rondine',
//     famiglia:'irundinidi',
//     classe:'uccelli'
//   },
//   {
//     nome:'spigola',
//     famiglia:'spigole',
//     classe:'pesci'
//   },
//   {
//     nome:'gatto',
//     famiglia:'felidi',
//     classe:'mammiferi'
//   },
//   {
//     nome:'cane',
//     famiglia:'canidi',
//     classe:'mammiferi'
//   },
// ];

// const arrMammiferi = arrAnimals.filter((animals)=>{
//   if(animals.classe === 'mammiferi'){
//     return animals;
//   }
// })
// console.log(arrMammiferi);


  ///////////////////////////////////////////////
  //////////////  SNACK10  //////////////////////
  ///////////////////////////////////////////////

//Crea un array di oggetti che rappresentano delle persone: ogni persona ha un nome, 
//un cognome e un’età.Crea un nuovo array inserendo per ogni persona una frase con il 
//nome e cognome e l’indicazione se può guidare, in base all’età.


let arrPersone = [
  {
    nome:'Mario',
    cognome:'Verdi',
    eta:60
  },
  {
    nome:'Peppe',
    cognome:'Bella',
    eta:10
  },
  {
    nome:'Giusy',
    cognome:'Rossi',
    eta:41
  },
  {
    nome:'Gianni',
    cognome:'Lo Scandalo',
    eta:89
  },
  {
    nome:'Mary',
    cognome:'Coriandolo',
    eta:18
  },
  {
    nome:'Gino',
    cognome:'Pannolino',
    eta:15
  },
  {
    nome:'Manola',
    cognome:'La Famosa',
    eta:20
  },
]

let arrPatente =[]

 arrPersone.filter((persona) => {
  if(persona.eta < 18){
    let string = persona.nome+ " " + persona.cognome+ " non puo guidare  "
    arrPatente.push(string)
  }else if(persona.eta > 17){
    string = persona.nome+ " " +persona.cognome+ "  puo guidare  "
    arrPatente.push(string)
  }
})
console.log(arrPatente);