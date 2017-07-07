const Monster = {
	init: function(top, left, color, id){
		Monster.id = id;
		Monster.top = top;
		Monster.left = left;
		Monster.color = color;
		Monster.create(Monster.top, Monster.left, Monster.color);
		Monster.animationMonster(Monster.monster);
	},
	create: function(){
		console.log('Monstre Création');
		Monster.monster = $("<div>");
		Monster.monster.addClass('tile monster')
            .attr('data-x', 'x')
            .attr('data-y', 'y')
            .attr('id', 'monster_'+ Monster.id)
            .css('top', Monster.top)
            .css('left', Monster.left)
            .css('background-color', Monster.color);
		App.$map.append(Monster.monster);

		Monster.monsterSize = {
		  height: Monster.monster.height(),
		  width : Monster.monster.width()
		};
		return Monster.monster;
	},
	animationMonster: function(monster){
		monster
		.animate({
			left: '+='+ App.mainsize*2
		},{
			duration: 1000,
			step: function(currentStep, fx){
				App.controleColisionAction(currentStep, fx, monster);
			}
		})
		.animate({left: '-='+ App.mainsize*2}, {
			duration: 1000,
			step: function(currentStep, fx){
				App.controleColisionAction(currentStep, fx, monster);
			}
		})
		.animate({top: '-='+ App.mainsize*2}, {
			duration: 1000,
			step: function(currentStep, fx){
				App.controleColisionAction(currentStep, fx, monster);
			}
		})
		.animate({top: '+='+ App.mainsize*2}, {
			duration: 1000,
			step: function(currentStep, fx){
				App.controleColisionAction(currentStep, fx, monster);
			}
		})
		.animate({left: '-='+ App.mainsize*2}, {
			duration: 1000,
			step: function(currentStep, fx){
				App.controleColisionAction(currentStep, fx, monster);
			}
		})
		.animate({left: '+='+ App.mainsize*2}, {
			duration: 1000,
			step: function(currentStep, fx){
				App.controleColisionAction(currentStep, fx, monster);
			}
		})
		.animate({top: '+='+ App.mainsize*2}, {
			duration: 1000,
			step: function(currentStep, fx){
				App.controleColisionAction(currentStep, fx, monster);
			}
		})
		.animate({top: '-='+ App.mainsize*2},{duration: 1000, step: function(currentStep, fx){
			App.controleColisionAction(currentStep, fx, monster);
		}, complete: function(){Monster.animationMonster(monster)}})
	}
};
