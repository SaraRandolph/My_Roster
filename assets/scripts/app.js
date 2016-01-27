var playerRoster = [];
var form = $('form')

// Player Constructor
function Player(name, position, playerNumber){
    this.name = name;
    this.position = position;
    this.playerNumber = playerNumber;
}

// Add Player to playerRoster Object, Calls drawPlayer Function, Resets Form
function addPlayerToRoster(e){
    
    e.preventDefault();
    var playerName = $("[name='playerName']").val();
    var playerPosition = $("[name='playerPosition']").val();
    var playerNumber = $("[name='playerNumber']").val();
    
    var newPlayer = new Player(playerName, playerPosition, playerNumber);
    playerRoster.push(newPlayer); 
    
    drawPlayer(newPlayer);
 
   $("form")[0].reset();

};

// Draws Player to the Page
function drawPlayer(currentPlayer){

    var whatTheyAddIn = '<div class="player-card"><button>Remove</button> <br><img src="http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/" alt="playerimage"/> <p class="player-name">' + currentPlayer.name + '</p> <p class="player-position">' + currentPlayer.position + '</p><pclass="player-number">' + currentPlayer.playerNumber + '</p></div>';
    $('.player-roster').append(whatTheyAddIn);

}


    
// Calls addPlayer Function
form.submit(addPlayerToRoster)