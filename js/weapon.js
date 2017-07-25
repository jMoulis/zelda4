"use strict";
const Weapon = {
	create: function(){
		//console.log('Weapon Création');
        Weapon.target = $('.monster');
		Weapon.weapon = $("<div>");
		Weapon.weapon.addClass('weapon')
            .attr('data-x', 'x')
            .attr('data-y', 'y')
            .attr('id', 'weapon_'+ Weapon.id)
            .css('top', Link.link.position().top)
            .css('left', Link.link.position().left);
		App.map.append(Weapon.weapon);
		Weapon.distance = App.mainsize * 2;
		Weapon.weaponSize = {
		    height: Weapon.weapon.height(),
            width : Weapon.weapon.width()
		};

        Weapon.animationArrow(Weapon.weapon, Weapon.arrowDirection());
        return Weapon.weapon;
	},
	arrowDirection: function() {
        let linkPos = {};
        switch (Link.direction) {
            case 'right':
                linkPos = {
                    left: '+='+ Weapon.distance
                };
                $('.link').css({
                   'background-position': '-490px -1480px'
                });
                break;
            case 'left':
                linkPos = {
                    left: '-='+ Weapon.distance
                };
                $('.link').css({
                    'background-position': '-60px -1462px'
                });
                break;
            case 'up':
                linkPos = {
                    top: '-='+ Weapon.distance
                };
                $('.link').css({
                    'background-position': '-420px -1395px'
                });
                break;
            case 'down':
                linkPos = {
                    top: '+='+ Weapon.distance
                };
                $('.link').css({
                    'background-position': '-95px -1370px'
                });
                break;
            default:
                console.log('Unknown error');
                break;
        }
        return linkPos;
	},
	animationArrow: function(weapon, linkPos){
		weapon.animate(
			linkPos,
			{
				duration: 100,
				step: function(currentStep){
                    App.controleCollisionAction(Weapon.target, currentStep, weapon);
                },
				complete: function () {
					weapon.remove();
				}
			}
			);
	},
};
