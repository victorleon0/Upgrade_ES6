//4.1 Dado el siguiente array, devuelve un array con sus nombres 
//utilizando .map().

const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const usersName = users.map(user => user.name)
console.log(usersName)



//4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
//de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
//empiece por 'A'.
const users2 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const usersChange = users2.map(user2 => {
    if (user2.name[0] === 'A') {
		return "Anacleto"
    } else {
		return user2.name
	}
})

console.log(usersChange)



//4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
//de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
//cuando el valor de la propiedad isVisited = true.
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:false, name: 'Seul'}
];

const citiesVisited = cities.map ((city) => 
	city.isVisited ? city.name + " Visitado" : city.name + " NO Visitado")
  


console.log (citiesVisited);