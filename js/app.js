"use strict";
const App = {
	init: function() {
		console.log('Zelda 4... The game starts');
		App.indexWorld = 0;
		App.indexLevel = 0;
		App.gamewrapper = $('#game-wrapper');
		App.mainsize = 32;
        App.linkStartingPos = {left: 96, top:480};
		App.loadGame();
	},
	loadGame: function() {
		$('#start').on('click', function(){
			App.createMap();
            App.link = new Object(Link);
            App.link.init(App.linkStartingPos);
            App.createBoardGame(App.indexWorld, App.indexLevel);
			App.displayer();
		})
	},
	createBoardGame: function(world, level){
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
			 });
		});
        Monster.animationMonster($('.monster'));
	},
	createMap: function(){
		App.map = $('<div>');
		App.map.attr({
			'id': 'level_'+ App.indexLevel,
			'class': 'map',
			'data-level': App.indexLevel,
		}).css({
			'width': 25 * App.mainsize +'px',
			'height': 16 * App.mainsize +'px'
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
	testCollision: function(position1, position2) {
	  return ((position1.left + App.mainsize) > position2.left) &&
          ((position1.top + App.mainsize) > position2.top) &&
          ((position2.left + App.mainsize) > position1.left) &&
          ((position2.top + App.mainsize) > position1.top);
	},
	controleCollisionAction: function($target, currentStep, element){
		$.each($target, function(key, value){
			let collision = App.testCollision($(value).position(), element.position());
			if(collision){
				if($(value).hasClass('link')) {
					console.log('Oh no you killed danny');
					Link.life--;
					if(Link.life >= 0){
						App.updateLife();
					} else {
						//App.gamewrapper.empty();
					}
					element.stop(true, false).css('left', element.position().left += App.mainsize / 2 );
					$(value).css({
						'left': $(value).position().left -= App.mainsize / 2,
                        'background-color': 'red'
					});
				} else if($(value).hasClass('monster')){
					console.log('I got you bastard');

                    Link.points++;
                    Link.experience++;
                    Link.monsterKilled++;

					$('#monsterKilled').text(Link.monsterKilled);
					$('#xp').text(Link.experience);
					console.log($(value))
					$(value).stop(true, false).remove();
					element.stop(true, false).remove();
				}
				if($(value).hasClass('forbidden')){
					console.log('Forbidden');
					element.stop(true, false);
				}
			}
		});
  	},
	changeLevel: function(){
		console.log('Change de level');
		let linkPos = $('.link').position();

		if($('.monster').length > 0){
			$.each($('.monster'), function (key, value) {
                $(value).stop(true, false).remove();
            })
		}

		$('.map').fadeOut(function(){
			//Get the next level
			App.indexLevel += 1;

			//Check if there is another level in the world
			if(App.indexLevel < App.worldLength){
                App.link.create(linkPos);

				App.createBoardGame(App.indexWorld, App.indexLevel);
				$(this).fadeIn();
				App.map.attr({
					'id': 'level_'+ App.indexLevel,
					'data-level': App.indexLevel,
				});
				$('#level-info').text(App.indexLevel+1);

			} else {
				// If not load fetch the new world
				console.log('Change world');
				App.indexWorld += 1;
				App.indexLevel = 0;
                App.link.create(linkPos);
				App.createBoardGame(App.indexWorld, App.indexLevel);
                $(this).fadeIn();

                App.map.attr({
                    'id': 'level_'+ App.indexLevel,
                    'data-level': App.indexLevel,
                });

                $('#level-info').text(App.indexLevel+1);
                $('#world-info').text(App.indexWorld+1);
			}
		}).empty();
	},
	displayer: function () {
		// Create nav
		const displayer = $("<nav>");
		displayer.attr('id', 'displayer');
        App.gamewrapper.prepend(displayer);

        const listeInfos = $('<ul>');
        listeInfos.attr('id', 'listeInfos');
		displayer.append(listeInfos);
		// Display level et world
		let listeInfosHtml = '<li>World - <span id="world-info" class="" >'+ (App.indexWorld + 1) +'</span>';
		listeInfosHtml += ' Level - <span id="level-info" class="i">'+ (App.indexLevel+1)  +'</span></li>';
        listeInfos.append(listeInfosHtml);

		// Display life
        const lifeListeContainer = $('<li>');
        lifeListeContainer.addClass('life-group');
        listeInfos.append(lifeListeContainer);
		lifeListeContainer.append('<p>------- Life ------</p>');
        let htmlLifeListe = '<ul>';
		for(let i=0; i<App.link.life; i++){
			htmlLifeListe += '<li class="life-item">&hearts;</li>';
		}
		htmlLifeListe += '</ul>';
		lifeListeContainer.append(htmlLifeListe);
		// Display experience
		listeInfos.append('<li >Expérience<span id="xp" class="item-infos">0</span></li>');
		// Display Stones
        listeInfos.append('<li>Stones<span id="stones" class="item-infos">0</span></li>');
		// Display Monster
        listeInfos.append('<li>Monster<span id="monsterKilled" class="item-infos">0</span></li>');
    },
	updateLife: function () {
		// Find the last heart and remove it
		$('.life-group ul li:last-child').remove();
    }
};
$(App.init);
