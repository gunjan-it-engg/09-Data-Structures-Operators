'use strict';

// Data needed for a later exercise
const flights ='_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
// This is the object enhancement!
const weekDays = ['mon','tue','wed','thur','fri'];
const openingHours = {
    [weekDays[0]]: {
      open: 12,
      close: 22,
    },
    [weekDays[1]]: {
      open: 11,
      close: 23,
    },
    [weekDays[2]]: {
      open: 0, // Open 24 hours
      close: 24,
    },
  };
  

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
  //ES6 Enhanced object literals
  openingHours,
};
console.log(restaurant);

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu.entries()) console.log(item);


// optional chaining in object topic.
// This will be without chaining type example .
if (restaurant.openingHours && restaurant.openingHours.mon) 
console.log(`resturent opening hours is ${restaurant.openingHours.mon.open}!`);

// with optional chaining 
// so without optinal chaining if we writing condition (resturent.openingHours.mon.open) we
// getting an Type error in console but if we using this chaining operator if got undefined .
console.log(restaurant.openingHours.sat?.open);
console.log(restaurant.openingHours?.mon?.open);
// optinal chaining real example
const days = ['mon','tue','wed','thur','fri','sat','sun'];
for (const day of days){
    console.log(day);
    const open = restaurant.openingHours[day]?.open || 'closed';
    console.log(`on ${day},we open at ${open}`);
}
// Methods optinal chaining.
console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0,1)??'Method Does not exist');

// optional chaining works on array.
const users=[
    {name:'jonas', email:'gunjan12@gmail.com',}
];
console.log(users[0]?.name ?? 'user array is empty');