//5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
//con los valores que sean mayor que 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const age = ages.filter((age) => age >= 18)
console.log(age)

//5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
//con los valores que sean par.
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const resultado = ages2.filter((age2) => (age2%2 == 0)) //Para sacar el resto es con el % no con la division
console.log(resultado)

//5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
//con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers = [
    {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
    {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
    {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
    {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const youtubers = streamers.filter ((persona) => (persona.gameMorePlayed == "League of Legends"))
console.log (youtubers)

//5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
//con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
//usar la funcion .includes() para la comprobación.
const streamers2 = [
    {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
    {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
    {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
    {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const youtubers2 = streamers2.filter ((persona2)=> (persona2.name.includes("u")))
console.log (youtubers2)

//5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
//el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
//.includes() para la comprobación.
//Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
//.age sea mayor que 35.

const youtubers3 = streamers2.filter((persona2) => (persona2.gameMorePlayed.includes("Legends")) )

if (youtubers3.age > 35) {
    youtubers3.gameMorePlayed = youtubers3.gameMorePlayed.toUpperCase()
}
console.log (youtubers3)
