"use strict";
const Link = {
	init: function(position){
		this.life = 5;
		this.points = 0;
		this.experience = 0;
		this.monsterKilled = 0;
		this.stonesGot = 0;
		Link.keys = {
			'left': 113,
			'right': 100,
			'up': 122,
			'down': 115,
			'arrow': 109
		};
		Link.direction = 'up';
		Link.movesStep = App.mainsize;
		Link.create(position);
		Link.moves();
	},
	create: function(position){
		Link.link = $('<div>');
		Link.link.attr({
			'id': 'link',
			'class': 'link'
		}).css({
			left: position.left,
			top: position.top
		});
  		$('.map').append(Link.link);

  		return Link.link;
	},
    getElement: function (y, x) {
        return $('.tile').filter(function(){
            return $(this).position().top === y && $(this).position().left === x;
        });
    },
	moves: function(){
		Link.link = $('.link');
		const linkPos = Link.link.position();

		$(window).on('keypress', function(e){
    		console.log(e.which);
		  	switch(e.which) {
				case Link.keys.right:
				 /*go right*/
				 Link.direction = 'right';
				 if(Link.getElement(linkPos.top, linkPos.left + Link.movesStep).hasClass('allowed')){
					Link.link.css('left', linkPos.left += Link.movesStep);
					Link.doorAction(linkPos);
					Link.stonesAction(linkPos);
					Link.heartAction(linkPos);
				 }
				 break;
				case Link.keys.left:
					//go left
					Link.direction = 'left';
					if(Link.getElement(linkPos.top, linkPos.left - Link.movesStep).hasClass('allowed')){
						Link.link.css('left', linkPos.left -= Link.movesStep);
                        Link.doorAction(linkPos);
                        Link.stonesAction(linkPos);
                        Link.heartAction(linkPos);
					}
					break;
				case Link.keys.up:
					//go up
					Link.direction = 'up';
					if(Link.getElement(linkPos.top - Link.movesStep, linkPos.left).hasClass('allowed')){
						Link.link.css('top', linkPos.top -= Link.movesStep);
						Link.doorAction(linkPos);
                        Link.stonesAction(linkPos);
                        Link.heartAction(linkPos);
					}
					break;

				case Link.keys.down:
					//go down
					Link.direction = 'down';
					if(Link.getElement(linkPos.top + Link.movesStep, linkPos.left).hasClass('allowed')){
						Link.link.css('top', linkPos.top += Link.movesStep);
						Link.doorAction(linkPos);
						Link.stonesAction(linkPos);
						Link.heartAction(linkPos);
					}
					break;

				case Link.keys.arrow:
					e.keyCode = 0;
					Weapon.create();
				break;

				default:
					console.log('key undefined');
				break;
		  	}
		});
	},
	stonesAction: function (linkPos) {
        if(Link.getElement(linkPos.top, linkPos.left).hasClass('stone')){
            console.log('You got the stone');
            $('.stone').remove();
            Link.stonesGot++;
            $('#stones').text(Link.stonesGot);
        }
    },
	doorAction: function(linkPos){
        if(Link.getElement(linkPos.top, linkPos.left).hasClass('door')){
            console.log('You are at the door, ring');
            App.changeLevel();
        }
	},
	heartAction: function (linkPos) {
        if(Link.getElement(linkPos.top, linkPos.left).hasClass('heart')){
            console.log('You got some life back');
            $('.heart').remove();
            if(Link.life < 5 && Link.life >= 0){
                Link.life++;
                $('.life-group ul').append('<li class="life-item">&hearts;</li>')
			}
        }
    }
};
