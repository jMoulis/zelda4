/**
 * Created by julien on 11/07/17.
 */
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
    },
    /*right background-position: -185px -90px;*/
    /* left -358px -90px*/
    /*down background-position: -25px -90px;*/

    /*up -563px -90px*/
    animateUpAndDown: function(monster) {
        monster.css('background-position', '-563px -90px')
            .animate({top: '-='+ (App.mainsize * Monster.distanceMoves)},
                {
                    duration: Monster.duration,
                    easing: 'linear',
                    step: function(currentStep){
                        $.each($('.monster'), function(key, value){
                            App.controleCollisionAction($('.link'), currentStep, $(value));

                        })
                    },
                    complete: function(){
                        monster.css('background-position', '-25px -90px');
                    }
                })
            .animate({top: '+='+ (App.mainsize * Monster.distanceMoves)}, Monster.animationConst);
    },
    animateDownAndUp: function(monster) {
        monster.css('background-position', '-25px -90px')
            .animate({top: '+='+ (App.mainsize * Monster.distanceMoves)}, {
                duration: Monster.duration,
                easing: 'linear',
                step: function(currentStep){
                    $.each($('.monster'), function(key, value){
                        App.controleCollisionAction($('.link'), currentStep, $(value));
                    })
                },
                complete: function(){
                    monster.css('background-position', '-563px -90px');
                }
            })
            .animate({top: '-='+ (App.mainsize * Monster.distanceMoves)}, Monster.animationConst)
    },
    animateRightAndLeft: function (monster) {
        monster.css('background-position', '-185px -90px')
            .animate({left: '+='+ (App.mainsize * Monster.distanceMoves)},{
                duration: Monster.duration,
                easing: 'linear',
                step: function(currentStep){
                    $.each($('.monster'), function(key, value){
                        App.controleCollisionAction($('.link'), currentStep, $(value));

                    })
                },
                complete: function(){
                    monster.css('background-position', '-358px -90px');
                }
            })
            .animate({left: '-='+ (App.mainsize * Monster.distanceMoves)}, Monster.animationConst)
    },
    animationLeftAndRight: function(monster) {
        monster.css('background-position', '-358px -90px')
            .animate({left: '-='+ (App.mainsize * Monster.distanceMoves)}, {
                duration: Monster.duration,
                easing: 'linear',
                step: function(currentStep){
                    $.each($('.monster'), function(key, value){
                        App.controleCollisionAction($('.link'), currentStep, $(value));

                    })
                },
                complete: function(){
                    monster.css('background-position', '-185px -90px');
                }
            })
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
