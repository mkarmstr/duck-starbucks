// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.


window.addEventListener('DOMContentLoaded', () => {
  // document.querySelector('[aria-label="Search Google Maps"]').addEventListener('click', () => console.log('dfasdfasdfdf'));
});

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
// See the License for the specific language governing permissions and
// limitations under the License.
// console.log('fuu2uc');
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

// console.log(inputBox.value);

// document.querySelector([aria-label="Search"]).addEventListener('click', ()=>console.log('dfdf')))


let count = 0;
while(count < 5*240) {
  setTimeout(main, 200*count);
  count++;
}


// window.document.addEventListener('click', (e) => {
//   if (e.code === 'Enter') {
//     console.log('ffdsfa');
//     main();
//   }
// })
