const day = 'monday';

switch (day) {
    case 'monday':
        console.log('Go to work');
        console.log('Go for hiking');
        break;
    case 'tuesday':
         console.log('Read bible');
         console.log('Watch Home series');
            break;
    case 'wednesday':
    case 'thursday':
        console.log ('Record Video');
        break;
    case 'friday':
        console.log ('Go to club');
            break
    case 'saturday':
        console.log ('I watch Anime');
            break;
    case 'sunday':
        console.log ('I go to meeting');
        break
    default:
        console.log('not a valid day')
}

if (day === 'monday') {
    console.log( "Go to work");
    console.log("Go for hiking")   
} else if (day === 'tuesday') {
    console.log("Reading Bible");
    console.log("Watch Home Series");
} else if (day === 'wednesday' || day === 'thursday') {
    console.log("Record Video");
}  else if (day === 'friday') {
    console.log('Go to club');
}else if (day === 'saturday') {
    console.log( "I watch Anime");
} else if (day === 'sunday') {
    console.log("I go to meeting")
} else ('not a valid day');

const month = 'January';
    switch (month) {
        case 'January':
            console.log('I have vacation');
        break;
        case 'February':
        case 'March':
            console.log('I bound with friends');
        break;
        case 'April':
        case 'May':
            console.log("I work");
        break;
        case 'June':
            console.log('I go on leave');
        break;
        case 'July':
        case 'August':
            console.log('Play football' );
            console.log('win Marches');
        break;
        case 'September':
            console.log('start new Businesses');
        break;
        case 'October':
            console.log('meet new Friends');
        break;
        case 'November':
            console.log('travel to the Village');
        break;
        case 'December':
            console.log('Dry Season');
        break;
        default:
            console.log('invalid input');
}

if (month === 'January') {
    console.log('I have vacation')
} else if (month === 'February' || month === 'March') {
    console.log('I bound with friends');
} else if (month === 'April' || month === 'May') {
    console.log("I work"); 
} else if (month === 'June') {
    console.log('I go on leave'); 
} else if (month === 'July' || month === 'August') {
    console.log('Play football' );
    console.log('win Marches');
} else if (month === 'September') {
    console.log('start new Businesses');
} else if (month === 'October') {
    console.log('meet new Friends');
} else if (month === 'November') {
    console.log('travel to the Village'); 
} else if (month === 'December') {
    console.log('Dry Season');
} else ('invalid input');