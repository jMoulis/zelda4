const App = {
  init: function() {
  	console.log('Zelda 4... The game starts');
  	App.$gamewrapper = $('#game-wrapper');
  	App.mainsize = 25;
  	App.createGame();
  	App.persoSize = {
  		height: Monster.monster.height(),
		width : Monster.monster.width()
	};
  },
	createGame: function(){
		App.createMap();
		App.createTiles();
		Link.init(75, 375);
		Monster.init(150, 200, 'red', 1);
		Monster.init(250, 250, 'red', 2);
		Monster.init(275, 400, 'gray', 3);
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
	controleColisionAction: function($target, currentStep, fx, perso){
        //Monster.movesDirection(currentStep, fx, perso);
        $.each($target, function(key, value){
            let collision = App.testCollision($(value).position(), Monster.monsterSize, perso.position(), Monster.monsterSize);
            if(collision){
                if($(value).hasClass('forbidden')){
                    //Monster.backwardAction(perso, currentStep);
                } else if($(value).hasClass('link')) {
                    console.log('Oh no you killed danny');
                } else if($(value).hasClass('monster')){
                	console.log('I got you bastard');
                	$(value).stop();
                	$(value).remove();
                	perso.stop();
                	perso.remove();
				}
            } else {

            }
        });
    },
}
$(App.init);
