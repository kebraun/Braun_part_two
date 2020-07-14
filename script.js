const vacationType = prompt('What kind of trip would you like to go on...Musical, Tropical, or Adventurous?');
const groupSize = prompt('How many are in your group?');

let destination = '';
if (vacationType === 'musical') {
    destination = 'New Orleans';
} else if (vacationType === 'tropical') {
    destination = 'a beach in Mexico'
} else if (vacationType === 'adventurous') {
    destination = 'go whitewater rafting at the Grand Canyon'
} else {
    alert('Customer must choose either "Musical", "Tropical", or "Adventurous".')
}

let transportation = '';
if (groupSize == 1 || groupSize == 2) {
    transportation = "first class flight";
} else if (groupSize >= 3 && groupSize <=5) {
    transportation = "helicopter ride";
} else if (groupSize >= 6) {
    transportation = "charter flight";
} else {
    alert('Customer must choose a number greater than 0.')
}

const result = "Since you have a group of " + groupSize + " and would like to go on a " + vacationType + " vacation, you should take a " + transportation + " to " + destination + ".";

console.log(result);