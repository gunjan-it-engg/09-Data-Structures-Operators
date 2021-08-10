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


// Sets in js
// sets are the collection of the unique values.sets have no duplicate values.
// sets have any value of data types
const orderSet = new Set(['pizza','pasta','PIZZA','pizza','orange','apple','mango']);
console.log(orderSet.size);

// Map in js is hold values in a key-value pair.
// Map object has remember the original insertion order of the keys.
//A Map object has property that represents the size of map

const rest = new Map();
rest.set('name','classico italiano');
rest.set(1,'Frienze,Italiano');
rest.set(true,"yeh i'm true");
rest.set(false,"We are closed");
console.log(rest.set(2,'Lisbon,portgual'));
console.log(rest.get(1));
console.log(rest.get(true));

const time = 21;
console.log(rest.get(time>rest.get(23)&& time<rest.get(21)));
console.log(rest.has(1));

const question = new Map([
    ['question','Which one is the best programming language in the world'],
    [1,'C'],
    [2,'Java'],
    [3,'JavaScript'],
    ['correct',3],
    [true,'correct'],
    [false,'false']]);
console.log(question);

for (const [key,value] of question){
    if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
console.log(1,2);


const gameEvents = new Map([
    [17,'Goal'],
    [36,'Subtitution'],
    [47,'Goal'],
    [61,'subtitution'],
    [64,'yellow card'],
    [69,'red card'],
    [70,'subtitution'],
    [72,'subtitution'],
    [76,'goal'],
    [80,'goal'],
    [92,'yellow card'],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);

//2 
gameEvents.delete(64);

//3 
console.log(`an event happend on average , every${gameEvents.size/90} minutes`);

//4 
const time1 = [...gameEvents.keys()];
console.log(time1);

//5 
for(const [min,event] of gameEvents){
    const half = min <= 45 ? 'FIRST' : "Second";
    console.log(`[${half}HALF]${min}: ${events}`);
}