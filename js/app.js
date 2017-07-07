"use strict";
const App = {
	indexWorld: 1,
	init: function() {
        console.log('Zelda 4... The game starts');
		App.level = 'level1';
		App.gamewrapper = $('#game-wrapper');
		App.mainsize = 16;
		App.loadGame();
	},

	loadGame: function() {
		$('#start').on('click', function(){
			let world = 1;
            App.createGame(world);
		})
	},

	createGame: function(world){
        $(App.gamewrapper).attr('data-world', world);
		let newLevel = '';
		/**
		 * 1- Loop over the games array into the world object
		 * 2- Loop over into the world array
		 * 3- Loop over each level to get the map pattern
		 * */
		$.each(Games[world], function (gameKey, world) {
            $.each(world, function (levelKey, level) {
				$.each(level, function (key, value) {
                    newLevel = value.map;
                    App.createMap(levelKey);
                    App.createTiles(value.map);
                })
            })
        });

        Link.init(48, 240);
        Monster.animationMonster($('.monster'));
        console.log($('.link'));

	},
	createMap: function(level){
		App.map = $('<div>');
		App.map.attr({
			'id': level,
            'class': 'map',
			'data-level': level,
		});
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
	controleColisionAction: function($target, currentStep, fx, element){
        //Monster.movesDirection(currentStep, fx, perso);
        $.each($target, function(key, value){
            let collision = App.testCollision($(value).position(), element.position());
            if(collision){
                if($(value).hasClass('forbidden')){

                } else if($(value).hasClass('link')) {
                    console.log('Oh no you killed danny');
                } else if($(value).hasClass('monster')){
                	console.log('I got you bastard');
                	$(value).stop();
                	$(value).remove();
                	element.stop();
                	element.remove();
                }
            }
        });
    },
	changeLevel: function(){
		console.log('Change de level');
		// Find the actual visible map
		const visibleMap = $('.map:visible');
		const hiddenMap = $('.map:hidden');
		const nextMap = visibleMap.next('.map');
		const prevMap = visibleMap.prev('.map');
		const maps = $('.map');

		visibleMap.fadeOut(function () {
			if(visibleMap.data('level') + 1 < maps.length) {
				nextMap.fadeIn();
                console.log(App.indexWorld);
			} else {
				console.log('Terminé, tu passes au monde suivant...');
                App.indexWorld += 1;
                console.log(App.indexWorld);
				$(App.gamewrapper).attr('data-world', App.indexWorld);
				// C'est ici que tu change de monde!!!!

				App.gamewrapper.empty();
				App.createGame($(App.gamewrapper).attr('data-world'));
			}
		});

	},
};
$(App.init);
