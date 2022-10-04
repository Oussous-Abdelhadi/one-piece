let url = window.location.href;
let parse = url.split('=');
let str = parse[1];
const nom = str.charAt(0).toUpperCase() + str.slice(1);
console.log(nom);


const options = {
	method: 'GET',
};



async function describe() {

    var nameSearch = nom.replace('+', '_').toLowerCase();
    // describe
    var personnage = await fetch(`https://api.api-onepiece.com/characters/search/name/${nameSearch}`)
    var myJson = await personnage.json();
    var personnage = myJson[0];
    console.log(personnage);
    document.querySelector('#nom').innerHTML = `${personnage.french_name}`;
    document.querySelector('#age').innerHTML = `${personnage.age}`;
    document.querySelector('#prime').innerHTML = `${personnage.bounty}`;
    document.querySelector('#role').innerHTML = `${personnage.job}`;

    // fruit 
    var fruitId = personnage.fruitId
    var fruitData = await fetch(`https://api.api-onepiece.com/fruits/${fruitId}`)
    var jsonFruit = await fruitData.json();
    if (jsonFruit) {
        console.log(jsonFruit);
        document.querySelector('#fruit').innerHTML = `${jsonFruit.french_name}`;
        document.querySelector('#description').innerHTML = `${jsonFruit.description}`;
    }
    
    //crew
    var crewId = personnage.crewId;
    console.log(crewId);
    var crewData = await fetch(`
    https://api.api-onepiece.com/crews/${crewId}`)
    var myJson_crew = await crewData.json();
    console.log(myJson_crew);
    document.querySelector('#equipage').innerHTML = `${myJson_crew.french_name}`;
}
describe();

{/* <p id="nom"></p>
<p id="age"></p>
<p id="prime"></p>
<p id="equipage"></p>
<p id="role"></p>
<p id="fruit"></p>
<p id="description"></p>
<div id="img"></div> */}

async function data() {
    const options2 = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '68d8d002d4msh6dc0d8a958b5658p1a4d0ajsn95b5751e5120',
            'X-RapidAPI-Host': 'one-piece-api.p.rapidapi.com'
        }
    };
    var personnage2 = await fetch(`https://one-piece-api.p.rapidapi.com/api/characters`, options2)
    var myJson2 = await personnage2.json();
    // console.log(myJson2);
    myJson2.forEach(element => {
        // var name = element.name;
        // console.log(name);
        if (element.name.includes(`${nom}`)) {
            // console.log(element);
            function toDataURL(src, callback, outputFormat) {
                let image = new Image();
                image.crossOrigin = 'Anonymous';
                image.onload = function () {
                  let canvas = document.createElement('canvas');
                  let ctx = canvas.getContext('2d');
                  let dataURL;
                  canvas.height = this.naturalHeight;
                  canvas.width = this.naturalWidth;
                  ctx.drawImage(this, 0, 0);
                  dataURL = canvas.toDataURL(outputFormat);
                  callback(dataURL);
                };
                image.src = src;
                if (image.complete || image.complete === undefined) {
                  image.src = "data:image/gif;base64, R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
                  image.src = src;
                }
              }
              toDataURL(element.image,
                function (dataUrl) {
                  console.log('RESULT:', dataUrl)
                }
              )
        }
    });


    
}
data();




// // personnage details
// /**
//  * nom

//  * age
//  * prime
//  * equipage
//  * role
//  */