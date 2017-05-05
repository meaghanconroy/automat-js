let dishes = [
  'Chicken Pot Pie',
  'Baked Beans',
  'Macaroni and Cheese',
  'Burgundy Sauce with Beef and Noodles',
  'Creamed Spinach',
  'Pumpkin Pie',
  'Strawberry Shortcake'
];

// part 1
// let foodItemDiv = document.getElementById('main');

// for (let i = 0; i < dishes.length; i++) {
//   foodItemDiv.innerHTML += '<div class="food-item">' + dishes[i] + '</div>';
// }

// part 2
// for (let i = 0; i < dishes.length; i++) {
//   let foodItemDiv = document.createElement('div');
//   foodItemDiv.className = 'food-item';
//   foodItemDiv.innerHTML = dishes[i];
//   // part 3
//   foodItemDiv.addEventListener('click', () => {
//     foodItemDiv.className += ' hidden';
//   });
//
//   let mainDiv = document.getElementById('main');
//   mainDiv.appendChild(foodItemDiv);
// }

// re-do with .forEach
dishes.forEach((dish) => {
  let foodItemDiv = document.createElement('div');
  foodItemDiv.className = 'food-item';
  foodItemDiv.innerHTML = dish;

  foodItemDiv.addEventListener('click', () => {
     foodItemDiv.className += ' hidden';
   });

  let mainDiv = document.getElementById('main');
  mainDiv.appendChild(foodItemDiv);
})
