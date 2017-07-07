const Weapon = {
	init: function(){

	},
	create: function(){
		console.log('Weapon Création');
        Weapon.$target = $('.monster');
		Weapon.weapon = $("<div>");
		Weapon.weapon.addClass('tile weapon')
            .attr('data-x', 'x')
            .attr('data-y', 'y')
            .attr('id', 'weapon_'+ Weapon.id)
            .css('top', Link.link.position().top)
            .css('left', Link.link.position().left)
            .css('background-color', 'red');
		App.$map.append(Weapon.weapon);

		Weapon.weaponSize = {
		  height: Weapon.weapon.height(),
		  width : Weapon.weapon.width()
		};
		Weapon.animationWeapon(Weapon.weapon);
		return Weapon.weapon;
	},


	/**
     * TODO:
     *
     */
	animationWeapon: function(weapon){
		weapon.animate({
			left: '+='+ App.mainsize * 10
		},{
			duration: 100,
			step: function(currentStep, fx){
				App.controleColisionAction(Weapon.$target, currentStep, fx, weapon);
			},
			complete: function () {
			    weapon.remove();
                Weapon.animationWeapon(weapon);
            }
		})
	}
};
$(Weapon.init());