
// Harjutus 1//
function greetUser() {
    const name = prompt("Palun sisesta oma nimi:");
    if (name) {
      console.log(`Tere, ${name}! `);
    } 
  }
  greetUser();

 //Harjutus 2//
 function describeCar(){
    let mark = `Ford`
    let mudel = `Mustang`
    let värv = `punane`

    console.log(`Minu auto on ${värv} ${mark} ${mudel}.`);
  }
describeCar();

//Harjutus 3//
function arvutaPüramiidiRuumala(){
    const PõhjaPindala = parseFloat(prompt("Palun sisesta püramiidi põhjapindala:"));
    const kõrgus = parseFloat(prompt("Palun sisesta püramiidi kõrgus:"));
    
    if (!isNaN(PõhjaPindala) && !isNaN(kõrgus)) {
        const Ruumala = (1/3)*PõhjaPindala*kõrgus
    console.log(`Püramiidi pindala põhjapindalaga ${PõhjaPindala} ruutmeetrit ja kõrgusega ${kõrgus} meetrit on ${Ruumala} kuupmeetrit`)
}
    }
    
arvutaPüramiidiRuumala();


//Harjutus 4//
function luhendaNimi(nimi) {
    if (nimi.length > 5) {
     
      nimi = nimi.slice(0, 5) + "...";
    }
  
    console.log(nimi);
  }1
  const kasutajaNimi = prompt("Sisesta nimi:");
  luhendaNimi(kasutajaNimi);



//Harjutus 5//
function pooraString(sisend) {
  
  const tähemärgid = sisend.split('');
  const pööratudTähemärgid = tähemärgid.reverse();
  const pööratudString = pööratudTähemärgid.join('');

  console.log(pööratudString);
}

const kasutajaSisend = prompt("Sisesta string:");
pooraString(kasutajaSisend);

  
//Harjutus 6//
function prindiNumbreid() {
    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }
}
prindiNumbreid();

//Harjutus 7//
function prindiTäisarvud100st1ni() {
    let arv = 100;
  
    while (arv >= 1) {
      console.log(arv);
      arv--;
    }
  }
  
  prindiTäisarvud100st1ni();
  
//Harjutus 10//
const myNameComponents = ['Samuel', 'L', 'Jackson'];

function prindiNimiLause() {
  const fullName = myNameComponents.join(' ');
  console.log(`Minu nimi on ${fullName}.`);
}

prindiNimiLause();

//Harjutus 11//
function arvutaKeskmineHinne(hinded) {
    let summa = 0;
  
    for (let i = 0; i < hinded.length; i++) {
      summa += hinded[i];
    }
  
    const keskmine = summa / hinded.length;
    console.log(`Õpilase keskmine hinne on ${keskmine}.`);
  }
  
  const hinded = [3, 5, 4, 3, 4, 5, 3, 4, 2];
  arvutaKeskmineHinne(hinded);
  

//Harjutus 12//
function loeNumbreid () {
    for(let i = 1; i <= 100; i++) {
        let output = ``;

        if (i % 3 === 0) {
            output += `Tallinna`;
        }

        if (i % 5 === 0) {
            output += `Prantsuse`;
        }

        if (i % 3 === 0 && i % 5 === 0) {
            output += `Lütseum`
      }

        if (i === 50) {
            output = `Tallinna Prantsuse Lütseum`
        }

        console.log(output);

    }

}
loeNumbreid ();

//Harjutus 13//

function checkForMarek() {
    
    const input = prompt("Sisetage komadega eraldatud nimed:");
    const namesArray = input.split(",");
  
    
    if (namesArray.includes("Marek")) {
      console.log("Marek on massiivis.");
    } else {
      console.log("Marek ei ole massiivis.");
    }
  }
  
  checkForMarek();

  // Harjutus 14//

  let inimesed = [
    {
        nimi: "Alice",
        vanus: 28,
        address: "Park 7",
        telefon: '23857493',
        email: 'alice@eesti.ee'
    },
    {
        nimi: "Bob",
        vanus: 32,
        address: 'Tänavaküla 12',
        telefon: '293463847',
        email: 'bob@gmail.com'
    },
    {
        nimi: "Marek",
        vanus: 22,
        address: "Metsatee 3",
        telefon: '8594032',
        email: 'marek@example.com'
    }
];

function findPersonInfo(inimesed) {
  let vanemInimene = null;
  let pikemAddress = null;
  let lühemTelefoniNumber = null;
  let eestiEmail = null;

  for (const inimene of inimesed) {
    if (!vanemInimene || inimene.vanus > vanemInimene.vanus) {
      vanemInimene = inimene;
    }

    if (!pikemAddress || inimene.address.pikkus > pikemAddress.address.pikkus) {
      pikemAddress = inimene;
    }

    if (!lühemTelefoniNumber || inimene.telefon.pikkus < lühemTelefoniNumber.telefon.pikkus) {
      lühemTelefoniNumber = inimene;
    }

    if (inimene.email.includes("eesti")) {
      eestiEmail = inimene;
    }
  }

  console.log("Kõige vanema inimese nimi:", vanemInimene.nimi);
  console.log("Inimese nimi, kellel on kõige pikem address:", pikemAddress.nimi);
  console.log("Inimese nimi, kellel on kõige lühem telefoninumber:", lühemTelefoniNumber.nimi);
  console.log("Inimese nimi, kelle e-posti addressis sisaldub sõna aaeesti :", eestiEmail.nimi);
}

findPersonInfo(inimesed);


