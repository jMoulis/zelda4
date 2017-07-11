"use strict";
const Monster = {
	/**
     * TODO: Set random moves to monster
     * add head turns
     * add css sprite
     */
	init: function(){
        Monster.duration = 3000;
        Monster.distanceMoves = 2;
        Monster.animationConst = {
            duration: Monster.duration,
            easing: 'linear',
            step: function(currentStep){
                $.each($('.monster'), function(key, value){
                    App.controleCollisionAction($('.link'), currentStep, $(value));
                })
            }
        }
    },
	animationArray: function(){
        return [
            Monster.animateRightAndLeft,
            Monster.animateUpAndDown,
            Monster.animateDownAndUp,
            Monster.animationLeftAndRight
        ];
    }
    ,
    animateUpAndDown: function(monster) {
        monster.animate({top: '-='+ (App.mainsize * Monster.distanceMoves)}, Monster.animationConst)
            .animate({top: '+='+ (App.mainsize * Monster.distanceMoves)}, Monster.animationConst)
	},
    animateDownAndUp: function(monster) {
        monster.animate({top: '+='+ (App.mainsize * Monster.distanceMoves)}, Monster.animationConst)
            .animate({top: '-='+ (App.mainsize * Monster.distanceMoves)}, Monster.animationConst)
    },
    animateRightAndLeft: function (monster) {
        monster.animate({left: '+='+ (App.mainsize * Monster.distanceMoves)},Monster.animationConst)
        .animate({left: '-='+ (App.mainsize * Monster.distanceMoves)}, Monster.animationConst)
    },
    animationLeftAndRight: function(monster) {
	    monster.animate({left: '-='+ (App.mainsize * Monster.distanceMoves)}, Monster.animationConst)
        .animate({left: '+='+ (App.mainsize * Monster.distanceMoves)}, Monster.animationConst)
    },
    setRandomAnimation: function() {
        App.monsters = Monster.animationArray();
        $.each($('.monster'), function(key, value){
            App.monsters[App.getRamdomArrayItem()]($(value));
        })
    }
};
$(Monster.init);
