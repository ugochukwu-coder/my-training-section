const marksWeight = 78;
const marksHeight = 1.69;
const johnWeight = 92; 
const johnHeight = 1.95;
console.log (marksWeight, marksHeight, johnWeight, johnHeight);

const markBMI = marksWeight / marksHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;
console.log ( markBMI, johnBMI)

console.log (markBMI > johnBMI)

if (markBMI > johnBMI) {
    console.log('Mark BMI is higher than marks BMI');
} else {
    console.log('John Bmi is higher than john BMI');
};

if (markBMI > johnBMI) {
    console.log(`Mark BMI (${markBMI}),is higher than John BMI (${johnBMI})`);
} else {
    console.log(`John BMI (${johnBMI}), is higher than Mark BMI (${johnBMI})`);
};


let continent = 'Africa';
let country = 'Nigeria';
let population = 200000000;
console.log(continent,country,population);

const occupation = 'programmer';
const games = ['call of duty', 'fifa', 'jump force', 'need for speed'];
const activities = 'Code all day';
// i'm a programmer and i love playing video games and my favorite video games are
// when am bored o always code all day.
// string literal
// template literal

// string literal correction
console.log( " i'm  " + ' a ' + occupation + ' and i love playing video games and my favorite game is ' + ' when i am bored i always ' + activities)

console.log(`i am a ${occupation} and i love playing video games and my favorite game is ${games[0]}, when i am bored i always ${activities}`)