const game = {
    team1 : 'gunjan',
    team2 : 'shrimali',
    players :[
        [
            'sanjay',
            'piyush',
            'ritesh',
            'lavina',
            'jatin',
            'deepak',
            'vinod',
        ],
        [
            'aditi',
            'usha',
            'bhumika',
            'pooja',
            'dhruv',
            'abhishek',
            'rahul',
        ],
        [
            'kashish',
            'mayank',
            'ronak',
            'ajay',
            'komal',
            'kapil',
            'shiv',
        ],
    ],
    score : '4:0',
    scored :['usha','sanjay','dhruv','pooja'],
    date: 'Aug 9th, 2037',
    odds:{
        team1:1.23,
        x:3.25,
        team2:6.5,
    },
};

const [players1 , players2] = game.players;
console.log(players1,players2);

//2
const[gk, ...fieldplayers] = players1;
console.log(gk,fieldplayers);

//3 
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// final 
const players1Final = [...players1,'thingo','coutino','periscic'];
console.log(players1Final);

// 5
const {odds:{team1,x:draw,team2}} = game;
console.log(team1,draw,team2);

//6 
const printGoals = function(...players) {
    console.log(`${players.length} goals were scored`);
};
printGoals('sanjay','piyush','ritesh');
printGoals(game.scored);

//7 find who will win 
team1<team2 && console.log('Team1 more likely to win');

// coding challenge 2.
//1 
for(const[i,player]of game.scored.entries()) console.log(`Goal ${i+1}:${player}`);
//2
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);
//3 3rd question 
for (const [team,odd] of Object.entries(game.odds)){
    const teamstr = team ==='x' ? 'draw' : `'victory' ${game[team]}`; 
    console.log(team,odd);
}