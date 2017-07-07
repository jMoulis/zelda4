const App = {
  init: function() {
		console.log('Zelda 4... The game starts');
		App.$gamewrapper = $('#game-wrapper');
		App.mainsize = 50;
		App.createGame();
  },

	createGame: function(){
		App.createMap();
		App.createTiles();
		Link.init(150, 750);
		Monster.init(300, 250, 'red', 1);
		Monster.init(450, 400, 'red', 2);
		Monster.init(250, 600, 'gray', 3);
	},
	createMap: function(){
		App.$map = $('<div>');
		App.$map.attr('id', 'map');
		App.$gamewrapper.append(App.$map);
	},
  createTiles: function() {
		for (let line = 0; line < map.tiles.length; line++) {
      for (let column = 0; column < map.tiles[line].length; column++) {
        tile.create(column, line);
      }
    }
	},
  getElement: function (y, x) {
		return $('.tile').filter(function(){
			return $(this).position().top === y && $(this).position().left === x;
		});
	},
	testCollision: function(position1, size1, position2, size2) {
	  return ((position1.left + size1.width) > position2.left) &&
          ((position1.top + size1.height) > position2.top) &&
          ((position2.left + size2.width) > position1.left) &&
          ((position2.top + size2.height) > position1.top);
	},
	controleColisionAction: function(currentStep, fx, perso){
        //Monster.movesDirection(currentStep, fx, perso);
        $.each($('div'), function(key, value){
            let collision = App.testCollision($(value).position(), Monster.monsterSize, perso.position(), Monster.monsterSize);
            if(collision){
                if($(value).hasClass('forbidden')){
                    //Monster.backwardAction(perso, currentStep);
                } else if($(value).hasClass('link')) {
                    console.log('Oh no you killed danny');
                }
            } else {

            }
        });
    },
}
$(App.init);
