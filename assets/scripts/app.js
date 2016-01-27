var players = {};
var grabInput = $('player-roster')

$('#addPlayer').submit(function(e){
    
    e.preventDefault();
    var vm = this;
    var name = vm['playerName'];
    var position = vm['playerPosition'];
    var num = vm['playerNumber']
    
    var newPlayer = new Player(name, position, num);
    draw(newPlayer);
    
})
