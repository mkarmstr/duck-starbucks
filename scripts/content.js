// window.addEventListener('DOMContentLoaded', () => {
//   document.querySelector('[aria-label="Search Google Maps"]').addEventListener('click', () => console.log('dfasdfasdfdf'));
// });

const nationalChains = [
  "Starbucks",
  "McDonald's",
  "Burger King",
  "Wendy's",
  "Taco Bell",
  "Subway",
  "Domino's Pizza",
  "Pizza Hut",
  "KFC",
  "Chick-fil-A",
  "Panera Bread",
  "Dunkin'",
  "Tim Hortons",
  "Chipotle Mexican Grill",
  "Five Guys",
  "Panda Express",
  "Jimmy John's",
  "Arby's",
  "Papa John's",
  "Jersey Mike's Subs",
  "Little Caesars",
  "Sonic Drive-In",
  "Whataburger",
  "In-N-Out Burger",
  "The Cheesecake Factory",
  "Outback Steakhouse",
  "Red Lobster",
  "Olive Garden",
  "Applebee's",
  "IHOP",
  "Denny's",
  "Cracker Barrel",
  "Buffalo Wild Wings",
  "TGI Fridays",
  "Ruby Tuesday",
  "LongHorn Steakhouse",
  "Texas Roadhouse",
  "Maggiano's Little Italy",
  "The Capital Grille",
  "Ruth's Chris Steak House",
  "Five Guys",
  "Taco Bell Cantina",
  "Smashburger",
  "Gregorys Coffee"
];

// document.querySelector('#buttonTest').addEventListener('click', ()=>console.log('dfdf') )
// console.log('just a log');
// function addToArray() {
//   console.log('dsfdfsddfasd');
//   // const inputElement = document.getElementById('inputSnacks')
//   // nationalChains.push(inputElement.value)
//   // inputElement.value = null;
// }

function main() {
  nationalChains.forEach(nChain => {

    (document.querySelectorAll(`[aria-label="${nChain}"]`)).forEach(el => el.remove());
    console.log('main is fired');
  })
  
}

let count = 0;
while(count < 5*240) {
  setTimeout(main, 200*count);
  count++;
}

