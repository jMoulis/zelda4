"use strict";
const Weapon = {
	create: function(){
		//console.log('Weapon Création');
        Weapon.$target = $('.monster');
		Weapon.weapon = $("<div>");
		Weapon.weapon.addClass('tile weapon')
            .attr('data-x', 'x')
            .attr('data-y', 'y')
            .attr('id', 'weapon_'+ Weapon.id)
            .css('top', Link.link.position().top)
            .css('left', Link.link.position().left)
            .css('background-color', 'red');
		App.map.append(Weapon.weapon);

		Weapon.weaponSize = {
		  height: Weapon.weapon.height(),
		  width : Weapon.weapon.width()
		};

        Weapon.animationArrow(Weapon.weapon, Weapon.arrowDirection());
        return Weapon.weapon;
	},
	arrowDirection: function() {
        let linkPos = {};
        // Si link est en mvt vers la droite Alors left +=
        switch (Link.direction) {
            case 'right':
                linkPos = {
                    left: '+='+ App.mainsize * 10
                };
                break;
            case 'left':
                linkPos = {
                    left: '-='+ App.mainsize * 10
                };
                break;
            case 'up':
                linkPos = {
                    top: '-='+ App.mainsize * 10
                };
                break;
            case 'down':
                linkPos = {
                    top: '+='+ App.mainsize * 10
                };
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
						App.controleColisionAction(Weapon.$target, currentStep, weapon);
					},
				complete: function () {
					weapon.remove();
				}
			});
	}
};