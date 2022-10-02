let url = window.location.href;
let parse = url.split('=');
let nom = parse[1];


const options = {
	method: 'GET',
};



// async function describe() {
//     // describe
//     var personnage = await fetch(`https://api.api-onepiece.com/characters/search/name/${nom}`)
//     var myJson = await personnage.json();
//     var personnage = myJson[0];
//     console.log(personnage);
//     document.querySelector('#nom').innerHTML = `${personnage.french_name}`;
//     document.querySelector('#age').innerHTML = `${personnage.age}`;
//     document.querySelector('#prime').innerHTML = `${personnage.boutny}`;

    
//     //crew
//     var id = personnage.crewId;
//     var crew_data = await fetch(`
//     https://api.api-onepiece.com/crews/${id}`)
//     var myJson_crew = await crew_data.json();
//     console.log(myJson_crew);
// }
// describe();



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
    // var personnage = myJson[0];
    console.log(myJson2);
    myJson2.forEach(element => {
        var name = element.name;
        if (name.includes(`${nom}`)) {
            console.log(element.name);
            // document.querySelector('#img').innerHTML = `${element.image}`;
        }
    });
    // document.querySelector('#age').innerHTML = `${personnage.age}`;
    // document.querySelector('#prime').innerHTML = `${personnage.boutny}`;
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