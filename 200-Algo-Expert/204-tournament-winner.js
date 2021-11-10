// PROMPT
// https://www.algoexpert.io/questions/Tournament%20Winner

// RESTATE
// Given 2 corresponding arrays, one representing competitions, snd the other rep. the results from the comp,
// determine the ultimate winner. Index 0 in each competition is the home team, index 1 away team.
// Result of 0 means away team won, result of 1 means home team won. A win is equal to 3 points

// EXAMPLES
// [["HTML", "C#"],["C#", "Python"],["Python", "HTML"]], [0,0,1] => Python
// [["HTML", "Java"],["Java", "Python"],["Python", "HTML"]], [0,1,1] => Java

// APPROACH
// Set up an object to hold all the winning teams
// Loop through the length of either (since it's the same)
// Create variables for the number result (0 or 1) and for the teams competing (just for clarity)
// Determine which team should be added to winnerObject based on the result number
// If it's already in object, give 3 more points, else, put in object w 3 points

// CODE
function tournamentWinner(competitions, results) {
  let winnerObject = {};

  for (let i = 0; i < results.length; i++) {
    let winningTeam = results[i];
    let teams = competitions[i];
    let teamToAdd;
    winningTeam === 0 ? (teamToAdd = teams[1]) : (teamToAdd = teams[0]);
    winnerObject[teamToAdd]
      ? (winnerObject[teamToAdd] = winnerObject[teamToAdd] + 3)
      : (winnerObject[teamToAdd] = 3);
  }

  let ultimateWinner = "";
  let highest = 0;
  for (let team in winnerObject) {
    if (winnerObject[team] > highest) {
      ultimateWinner = team;
      highest = winnerObject[team];
    }
  }

  return ultimateWinner;
}

// TEST
console.log(
  "Python",
  tournamentWinner(
    [
      ["HTML", "C#"],
      ["C#", "Python"],
      ["Python", "HTML"],
    ],
    [0, 0, 1]
  )
);

console.log(
  "Java",
  tournamentWinner(
    [
      ["HTML", "Java"],
      ["Java", "Python"],
      ["Python", "HTML"],
    ],
    [0, 1, 1]
  )
);

// OPTIMIZE
// time - O (n)
//  loop -> n representing num of teams
// space - O (n)
//  new object -> n is num of teams
