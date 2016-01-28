var playerRoster = [];
var id = 1;
var form = $('form')

// Player Constructor
function Player(playerName, playerPosition, playerNumber) {
    this.playerName = playerName;
    this.playerPosition = playerPosition;
    this.playerNumber = playerNumber;
    this.id = id
    id++
}

// Add Player to playerRoster object and calls drawPlayer function if the player 
// name isn't already in the playerRoster Array, Resets Form
function addPlayerToRoster(e) {

    e.preventDefault();
    var playerName = $("[name='playerName']").val();
    var playerPosition = $("[name='playerPosition']").val();
    var playerNumber = $("[name='playerNumber']").val();

    var newPlayer = new Player(playerName, playerPosition, playerNumber);

 
             playerRoster.push(newPlayer);
             drawPlayers(newPlayer);

 
    $("form")[0].reset();
};

// Draws players to the page
function drawPlayers() {
    $('.player-roster').empty();

    for (var i = 0; i < playerRoster.length; i++) {
        var card = createPlayerCard(playerRoster[i]);
        $('.player-roster').append(card);
    }
}

// Create player card
function createPlayerCard(player) {
    var card = $('<div class="player-card">');
    var removeButton = $('<button class="btn btn-danger">Remove</button>');
    removeButton.click(function (){
        card.remove();
        removePlayer(player.id);
    });
    
    var theRest = '<br>' +
        '<img src="http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/" alt="playerimage"/> ' +
        '<p class="player-name">' + player.playerName + '</p> ' +
        '<p class="player-position">' + player.playerPosition + '</p>' +
        '<pclass="player-number">' + player.playerNumber + '</p></div>';
    card.append(removeButton);
    card.append(theRest);

    return card;
}

// Finds the index the player is at based on their id
function getIndex(id) {
    for (var i = 0; i < playerRoster.length; i++) {
        if (id === playerRoster[i].id) {
            return i;
        }
    } return -1;
}

//Calls getIndex and removes player from array and remaining players to screen
function removePlayer(id) {

    var playerIndex = getIndex(id);
    if (playerIndex === -1) {
        return;
    } playerRoster.splice(playerIndex, 1);

    drawPlayers()
}
    
    
// Calls addPlayer function
form.submit(addPlayerToRoster)