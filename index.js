// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/

function testCallback(str) {
  return str + str
}

function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}
console.log("Example Challenge: ", processFirstItem(["foo", "bar"], testCallback));

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 *   counter1 function has another function nested inside it. counter2 doesn't have a function inside and uses global scope
 * 2. Which of the two uses a closure? How can you tell?
 *   counterMaker() is using closure because it has a child function within that function. I can tell because if
 *   you return the function by itself the reutnred value is the inner function instead of a set value.
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *   counter1 wuold be preferable when we want to run only variables in function scope. counter2 is better when we need to
 *   interact with global variables
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(max_number){
  const random_points = Math.floor(Math.random() * (max_number + 1));
  return random_points;
}
console.log("Inning between 0-2: ",inning(2));

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(callback, num){
  let score = {
    Home: 0,
    Away: 0,
  };
  for (let i = 0; i < num; i++) {
    score["Home"] += callback(2);
    score["Away"] += callback(2);
  };
  return score;
}
console.log("finalScore function:", finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

function getInningScore(callback) {
  return callback(2)
}

function scoreboard(callback1, callback2, inning_num) {
  let game_score = [];
  let home_score = 0;
  let away_score = 0;
  let current_inning = 0;

  for (let i = 0; i < inning_num; i++) {
    home_score += callback1(callback2);
    away_score += callback1(callback2);

    current_inning++

    game_score += `${current_inning} inning: awayTeam ${away_score} - homeTeam ${home_score}\n`;

    if (home_score === away_score && current_inning >= inning_num) {
      i -= 1;
    }
  }
  game_score += `Final Score: awayTeam ${away_score} - homeTeam ${home_score}`;
  return game_score
}
console.log(scoreboard(getInningScore, inning, 9))
