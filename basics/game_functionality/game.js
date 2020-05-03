let team = {
  _players: [ {
              firstName: 'Pablo',
              lastName: 'Sanchez',
              age: 11
                      }, {
              firstName: 'Lionel',
              lastName: 'Messi',
              age: 10
                      } , {
              firstName: 'Christ',
              lastName: 'Christ',
              age: 12
                      } ],
  _games: [   {
                opponent: 'Broncos',
                teamPoints: 42,
                opponentPoints: 27
              }, {
                opponent: 'Accia',
                teamPoints: 32,
                opponentPoints: 12
              },{
                opponent: 'Delupi',
                teamPoints: 12,
                opponentPoints: 34
              } ],

  get players() {
    return this._players
  },

  get games() {
    return this._games
  },
  
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };

    this._players.push(player);
  },

  addGame(opponent, teamPoints, opponentPoints) {
    let game = {
      opponent: opponent,
       teamPoints: teamPoints,
      opponentPoints: opponentPoints,
    };

    this._games.push(game);
  }

};  

team.addPlayer('Steph' ,'Curry',28);
team.addPlayer('Lisa' ,'Leslie', 44);
team.addPlayer('Bugs' ,'Bunny', 76);

console.log(team.players)

team.addGame('Cecilia', 23, 54);
team.addGame('Downtow', 29, 12);
team.addGame('Aporshi', 12, 33);

console.log(team.games)




