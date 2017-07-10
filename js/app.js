"use strict";
const App = {
	init: function() {
    console.log('Zelda 4... The game starts');
    App.indexWorld = 0;
    App.indexLevel = 0;
		App.level = 'level1';
		App.gamewrapper = $('#game-wrapper');
		App.mainsize = 25;
		App.loadGame();
	},
	loadGame: function() {
		$('#start').on('click', function(){
			App.createMap();
      App.createGame(App.indexWorld, App.indexLevel);
      Link.init(48, 240, 10);
		})
	},
	createGame: function(world, level){
    $(App.gamewrapper).attr('data-world', world);
		/**
		 * 1- Loop over the games array into the world object
		 * 2- Loop over into the world array
		 * 3- Loop over each level to get the map pattern
		 * */
		$.each(Games[1].worlds[world], function (gameKey, world) {
			App.worldLength = world.length;
			 $.each(world[level], function (stageKey, stage){
				 App.createTiles(stage.map);
			 })
		 });
    Monster.animationMonster($('.monster'));
	},
	createMap: function(){
		App.map = $('<div>');
		App.map.attr({
			'id': 'level_'+ App.indexLevel,
      'class': 'map',
			'data-level': App.indexLevel,
		}).css({'width': 25 * App.mainsize +'px',
		'height': 16 * App.mainsize +'px'});
		App.gamewrapper.append(App.map);
	},
	createTiles: function(map) {
		for (let line = 0; line < map.length; line++) {
			for (let column = 0; column < map[line].length; column++) {
				tile.create(column, line, map);
      	}
    	}
	},
	getElement: function (y, x) {
		return $('.tile').filter(function(){
				return $(this).position().top === y && $(this).position().left === x;
		});
	},
	testCollision: function(position1, position2) {
	  return ((position1.left + App.mainsize) > position2.left) &&
          ((position1.top + App.mainsize) > position2.top) &&
          ((position2.left + App.mainsize) > position1.left) &&
          ((position2.top + App.mainsize) > position1.top);
	},
	controleColisionAction: function($target, currentStep, element){
    $.each($target, function(key, value){
			let collision = App.testCollision($(value).position(), element.position());
      if(collision){
        if($(value).hasClass('link')) {
          console.log('Oh no you killed danny');
          Link.life--;
          element.stop(true, false);
          element.css('left', element.position().left += App.mainsize / 2 );
          $(value).css('left', $(value).position().left -= App.mainsize / 2 );
          $(value).css('background-color', 'red');
          console.log(Link.life)
				} else if($(value).hasClass('monster')){
          console.log('I got you bastard');
          Link.points++;
          $(value).stop(true, false);
          $(value).remove();
          element.stop(true, false);
          element.remove();
				} if($(value).hasClass('forbidden')){
					console.log('Forbidden');
					element.stop(true, false);
				}
      }
    });
  },
	changeLevel: function(){
		console.log('Change de level');
		$('.map').fadeOut(function(){
			// Delete the actual map
			$(this).empty();
			//Get the next level
			App.indexLevel += 1;
			//Check if there is another level in the world
			if(App.indexLevel < App.worldLength){
				//if so load the new level
        App.createGame(App.indexWorld, App.indexLevel);
				$(this).fadeIn()
				App.map.attr({
					'id': 'level_'+ App.indexLevel,
					'data-level': App.indexLevel,
				});
				//Link.create()
			} else {
				// If not load fetch the new world
        console.log('Change world');
        App.indexWorld += 1;
        App.indexLevel = 0;
        App.createGame(App.indexWorld, App.indexLevel);
			}
		});
	},
};
$(App.init);
