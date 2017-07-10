"use strict";
const App = {
	init: function() {
		console.log('Zelda 4... The game starts');
		App.indexWorld = 0;
		App.indexLevel = 0;
		App.gamewrapper = $('#game-wrapper');
		App.mainsize = 32;
        App.linkStartingPos = {left: 96, top:480};
        App.menuPause = $('#menu-pause');
		App.gamewrapper.on('click', '#menu-btn', App.openPauseMenu);
		App.mainContainer = $('.container');
        App.mainContainer.on('click', '#close-menu', App.closePauseMenu);
        App.mainContainer.on('click', '.restart', App.restartAction);
        App.mainContainer.on('click', '#start', App.loadGame);
	},
	loadGame: function() {
		App.gamewrapper.show();
		$('#game-loader').hide();
		App.createMap();
		App.link = new Object(Link);
		App.link.init(App.linkStartingPos);
		App.createBoardGame(App.indexWorld, App.indexLevel);
		App.displayer();
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
						App.gamewrapper.empty();
						App.gameOverAction();
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
		console.log($('.monster'));
		if($('.monster').length >= 0){
			$.each($('.monster'), function (key, value) {
                $(value).stop(true, false).remove();
            })
			console.log('test')
		}
		$('.link').remove();
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
		displayer.append('<button id="menu-btn">Menu</button>');
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
    },
	gameOverAction: function(){
		console.log('T\'es ko, fréro');
		App.gamewrapper.append('<h1>Game Over</h1>');
		App.gamewrapper.append('<button class="restart">Recommencer</button>');
		App.gamewrapper.addClass('game-over');
	},
	openPauseMenu: function(){
        App.menuPause.empty().fadeIn();
		const menuContent = $('<div>');
		let menuContentHtml = '<ul>';
		menuContentHtml += '<li><a href="#" id="close-menu">fermer</a></li>';
		menuContentHtml += '<li><a href="#" class="restart">Redémarrer</li>';
		menuContentHtml += '</ul>';
		menuContent.html(menuContentHtml);

        App.menuPause.append(menuContent);
		$.each($('.monster'), function (key, value) {
			$(value).stop(true, false);
        });
		$(window).off('keypress');
	},
	closePauseMenu: function () {
        App.menuPause.fadeOut();
		Monster.animationMonster($('.monster'));
		Link.moves();
    },
	restartAction: function(){
		if(confirm('Voulez-vous vraiment quitter?')){
            document.location.reload(true);
		} else {
			return false;
		}


	},
};
$(App.init);
