//Ülesanne 15//
function suurim() {
    let sisendMassiiv = [];
    let arv = parseFloat(prompt("Sisesta number (või sisesta tühi kast lõpetamiseks):"));
  
    while (!isNaN(arv)) {
      sisendMassiiv.push(arv);
      arv = parseFloat(prompt("Sisesta järgmine number (või sisesta tühi kast lõpetamiseks):"));
    }
  
    if (sisendMassiiv.length === 0) {
      console.log("Sisestasid tühja kasti. Programmi lõpetamine.");
    } else {
      const suurimArv = Math.max(...sisendMassiiv);
      console.log("Sisestatud arvudest suurim on: " + suurimArv);
    }
  } 
  suurim();
  

//Ülesanne 16//
function CelciusFahrenheitiks() {
    const celsius = parseFloat(prompt("Sisesta temperatuur Celsiuses (°C) :"));

    if(!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        console.log(`${celsius} °C on ${fahrenheit} °F.`)

    }
}
CelciusFahrenheitiks();    

//Ülesanne 17//
function korrutustabel() {
    const number = parseFloat(prompt("Sisesta number, mille korrutustabelit soovid näha:"));
    
    if(!isNaN(number)) {
        console.log(`Korrutustabel ${number}-ga`);
        for(let i = 1; i <=10; i++) {
            const tulemus = number * i;
            console.log(`${number} * ${i} = ${tulemus} `);
        }
    }
}
korrutustabel(); 

//Ülesanne 18//
function faktoriaal() {
    var arv = parseInt(prompt("Sisesta arv, mille faktoriaali soovid arvutada:"));
  
    if (isNaN(arv)) {
      console.log("Palun sisesta arv!");
      return;
    }
  
    if (arv < 0) {
      console.log("Faktoriaali ei saa arvutada negatiivsele arvule.");
      return;
    }
  
    var arvuFaktoriaal = 1;
  
    for (var i = 1; i <= arv; i++) {
      faktoriaal *= i;
    }
  
    console.log(arv + "! = " + arvuFaktoriaal);
  }
  
  faktoriaal();
  
//Ülesanne 19//
function tähed() {
    var kujundiKorgus = parseInt(prompt("Sisesta kujundi kõrgus:"));
  
    if (isNaN(kujundiKorgus)) {
      console.log("Palun sisesta kehtiv arv!");
      return;
    }
  
    let kujundiLaius = 2 * kujundiKorgus - 1;
  
    for (let rida = 1; rida <= kujundiKorgus; rida++) {
      let ridaMuster = '';
      for (let tark = 1; tark <= kujundiLaius; tark++) {
        if (tark >= kujundiKorgus - rida + 1 && tark <= kujundiKorgus + rida - 1) {
          ridaMuster += '*';
        } else {
          ridaMuster += ' ';
        }
      }
      console.log(ridaMuster);
    }
  }
  
  tähed();
  

//Ülesanne 20//
function ül20(){
    const n = parseFloat(prompt("Sisesta arv:"));

    if (isNaN(n)) {
        console.log(`Palun sisesta kehtiv arv!`);
        return;
    }

    if (n <= 1) {
        console.log(n + " ei ole algarv.");
        return;
    }

    let onAlgarv = true;

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            onAlgarv = false;
            break;
        }

    }

    if (onAlgarv) {
        console.log(n + " on algarv.");

    }
    else {
        console.log(n + " ei ole algarv.");
    }
}
ül20();