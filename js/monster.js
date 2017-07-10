"use strict";
const Monster = {
	init: function(top, left){
		this.top = top;
		this.left = left
	},
	create: function(){
		console.log('Monstre Création');
		/*Monster.monster = $("<div>");
		Monster.monster.addClass('tile monster')
            .attr('data-x', 'x')
            .attr('data-y', 'y')
            .attr('id', 'monster_'+ Monster.id)
            .css('top', Monster.top)
            .css('left', Monster.left)
            .css('background-color', Monster.color);
		App.map.append(Monster.monster);

		Monster.monsterSize = {
		  height: Monster.monster.height(),
		  width : Monster.monster.width()
		};
		return Monster.monster;*/
	},


	/**
     * TODO: Set random moves to monster
     * add head turns
     * add css sprite
     */
	animationMonster: function(monster){
        const target = $('.link');
		monster.animate({
			left: '+='+ App.mainsize * 2
		},{
			duration: 1000,
			step: function(currentStep){
                $.each(monster, function(key, value){
                    App.controleCollisionAction(target, currentStep, $(value));
                })
			}
		})
		.animate({left: '-='+ App.mainsize * 2}, {
			duration: 1000,
			step: function(currentStep){
                $.each(monster, function(key, value){
                    App.controleCollisionAction(target, currentStep, $(value));
                })
			}
		})
		.animate({top: '-='+ App.mainsize * 2}, {
			duration: 1000,
			step: function(currentStep){
                $.each(monster, function(key, value){
                    App.controleCollisionAction(target, currentStep, $(value));
                })
			}
		})
		.animate({top: '+='+ App.mainsize * 2}, {
			duration: 1000,
			step: function(currentStep){
                $.each(monster, function(key, value){
                    App.controleCollisionAction(target, currentStep, $(value));
                })

			}
		})
		.animate({left: '-='+ App.mainsize * 2}, {
			duration: 1000,
			step: function(currentStep){
                $.each(monster, function(key, value){
                    App.controleCollisionAction(target, currentStep, $(value));
                })
			}
		})
		.animate({left: '+='+ App.mainsize * 2}, {
			duration: 1000,
			step: function(currentStep){
                $.each(monster, function(key, value){
                    App.controleCollisionAction(target, currentStep, $(value));
                })
			}
		})
		.animate({top: '+='+ App.mainsize * 2}, {
			duration: 1000,
			step: function(currentStep){
                $.each(monster, function(key, value){
                    App.controleCollisionAction(target, currentStep, $(value));
                })
			}
		})
		.animate({top: '-='+ App.mainsize * 2},{duration: 1000, step: function(currentStep){
            $.each(monster, function(key, value){
                App.controleCollisionAction(target, currentStep, $(value));
            })
		}, complete: function(){Monster.animationMonster(monster)}})
	}
};
