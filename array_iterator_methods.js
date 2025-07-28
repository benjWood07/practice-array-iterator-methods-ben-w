// Array Methods Practice - Student Level
// Task 1: Using forEach()
let favoriteCities = ['Tokyo', 'Paris', 'New York', 'London', 'Sydney'];  // 1. Create an array of five favorite cities

favoriteCities.forEach(city => {      // 2. Use forEach() to log each city name in uppercase
    console.log(city.toUpperCase());
});
console.log('\n');

// Task 2: Transforming with map()
let numbers = [1, 2, 3, 4, 5];   // 1. Create an array called numbers with numbers 1-5
let squares = numbers.map(num => num * num);   // 2. Use map() to create an array where each number is squared

console.log('Original numbers:', numbers);   // 3. Log the new array
console.log('Squared numbers:', squares);

console.log('\n');

// Task 3: Filtering with filter()
let scores = [85, 42, 90, 75, 30, 100];  // 1. Create an array called scores with specified numbers
let highScores = scores.filter(score => score >= 80);   // 2. Use filter() to create array with scores >= 80

console.log('All scores:', scores);      // 3. Log the new array
console.log('High scores (>= 80):', highScores);

console.log('\n');

// Task 4: Finding with find() and findIndex()
let favoriteFood = ['pizza', 'sushi', 'hamburger', 'pasta', 'tacos', 'ice cream'];   // 1. Create an array called favoriteFood with 5-6 favorite dishes
let foodWithMoreThan4Letters = favoriteFood.find(food => food.length > 4);  // 2. Use find() to locate the first food with more than 4 letters
let indexOfFood = favoriteFood.findIndex(food => food.length > 4);   // 3. Use findIndex() to find the index of that food

console.log('Favorite foods:', favoriteFood);
console.log('First food with more than 4 letters:', foodWithMoreThan4Letters);
console.log('Index of that food:', indexOfFood);

console.log('\n');

