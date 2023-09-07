const country = "Nigeria";
const continent = "Africa";
let Population =  50000000;
console.log(country);
console.log(continent);
console.log(Population);

let isIsland = "true"
console.log(isIsland)

let language;

console.log(typeof isIsland);
console.log(typeof Population);
console.log(typeof country);
console.log(typeof language);
console.log(typeof true)

language = 'Igbo';

console.log(Population /2);

Population++;
console.log(Population);

const finland = 6000000;
Population -  finland;
console.log(Population - finland);

console.log(Population > finland);

const ghana = 33000000;
console.log(Population < ghana);

const description = 'Portugal is in Europe, and its 11 million people speak Portuguese'


const dolphinsScore = (96 + 108 + 89) /3;
const  koalasScore = (88 + 91 + 110) /3;

const dolphinesAverageScore = (dolphinsScore);
const koalasScoreAverageScore = (koalasScore);
console.log(dolphinesAverageScore);
console.log(koalasScoreAverageScore);

console.log(dolphinesAverageScore >= koalasScoreAverageScore);
console.log(koalasScoreAverageScore > dolphinesAverageScore);

const scoreDolphins = (97 + 112 + 101) /3;
const  scoreKoalas = (109 + 95 + 123) /3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins >= scoreKoalas && scoreDolphins >= 100) {
    console.log('Team Dolphins wins 👌');
} else if(scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('Team Koaolas wins ');
}else if (scoreDolphins === scoreKoalas) {
    console.log('Both team play draw');
}

const day = 'monday';
switch(day) {
    case 'monday':
        console.log('plan course structure');
        console.log('Go to coding meetup');
    break;
    case 'tuesday':
        console.log('prepare theory videos');
    break;
    case 'wednesday':
    case 'thursday':
        console.log('write code examples');
        break;
    case 'friday':
            console.log('Record video');
        break;
    case 'sartuday':
    case 'sunday':
        console.log('Enjoy weekend')
    default: 
    console.log('Not a valid day');
}


if (day === 'monday') {
    console.log('plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday'){
    console.log('prepare theory videos');
} else if (day === 'wednesday' || day === thursday) {
    console.log('write code examples');
} else if (day === 'friday'){
    console.log('Record video');
} else if (day === 'sartuday' || 'day === sundayday'){
    console.log('Enjoy weekend')
} else ('Not a valid day');

const objt = {
    firstName: '',
    lastName: '',
    birthYear: ''
}










