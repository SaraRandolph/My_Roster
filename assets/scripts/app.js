var playerRoster = [];
var id = 1;
var form = $('form')

// Player Constructor
function Player(playerName, playerPosition, playerNumber){
    this.playerName = playerName;
    this.playerPosition = playerPosition;
    this.playerNumber = playerNumber;
    this.id = id
    id++
}

// Add Player to playerRoster object and calls drawPlayer function if the player 
// name isn't already in the playerRoster Array, Resets Form
function addPlayerToRoster(e){  
    
    e.preventDefault();
    var playerName = $("[name='playerName']").val();
    var playerPosition = $("[name='playerPosition']").val();
    var playerNumber = $("[name='playerNumber']").val();
    var newPlayer = new Player(playerName, playerPosition, playerNumber);
    
     if (playerName === playerRoster.playerName){
        alert ('That player is already on your team')
    } else {       
        playerRoster.push(newPlayer); 
        drawPlayers(newPlayer);
    }
     
    $("form")[0].reset();
        
};

// Draws players to the page
function drawPlayers(){
    var template = "";
    
    for(var i = 0; i < playerRoster.length; i++){
            var currentPlayer = playerRoster[i];        
            template += '<div class="player-card"><button onclick="removePlayer(' + currentPlayer.id + ')" class="btn btn-danger">Remove</button> <br><img src="http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/" alt="playerimage"/> <p class="player-name">' + currentPlayer.playerName + '</p> <p class="player-position">' + currentPlayer.playerPosition + '</p><pclass="player-number">' + currentPlayer.playerNumber + '</p></div>';
    }
    
    $('.player-roster').empty();
    $('.player-roster').append(template);

    
}

// Finds the index the player is at based on their id
function getIndex(id){
    for(var i = 0; i<playerRoster.length; i++){
        if (id === playerRoster[i].id){
            return i;
        }
    } return -1;
}



//Calls getIndex and removes player from array and remaining players to screen
function removePlayer(id) {
    
    var playerIndex = getIndex(id);   
    if(playerIndex === -1){
        return;
    } playerRoster.splice(playerIndex, 1);    

    drawPlayers()
}
    
    
// Calls addPlayer function
form.submit(addPlayerToRoster)