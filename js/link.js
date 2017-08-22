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
			'sword': 77
		};
		Link.direction = 'up';
		Link.movesStep = App.mainsize;
		Link.normalState = {
	    'right': '-435px -905px',
      'left': '-70px -905px',
			'up': '-20px -970px',
			'down': '-402px -970px'
    };
		Link.create(position);
		Link.moves();
		Link.swordTogglePosition();
	},
	create: function(position){
		Link.link = $('<div>');
		Link.link.attr({
			'id': 'link',
			'class': 'perso link',
		}).css({
			left: position.left,
			top: position.top
		});
  		$('.map').append(Link.link);
	},
    getElement: function (y, x) {
        return $('.tile').filter(function(){
        return $(this).position().top === y && $(this).position().left === x;
        });
    },
    moves: function(){
        Link.linkPos = Link.link.position();
        $(window).on('keypress', function(e){
            switch(e.which) {
                case Link.keys.right:
                Link.moveRight(Link.linkPos);
                break;
                case Link.keys.left:
                //go left
                Link.moveLeft(Link.linkPos);
                break;
                case Link.keys.up:
                //go up
                Link.moveUp(Link.linkPos);
                break;
                case Link.keys.down:
                //go down
                Link.moveDown(Link.linkPos);
                break;
                default:
                break;
            }
        });
	},
    swordTogglePosition: function(){
        $(document).on('keydown', function(e) {
            if (e.which === Link.keys.sword) {
                Weapon.create();
            }
        });

            $(document).on('keyup', function(e) {
                if (e.which === Link.keys.sword) {
                Link.swordUp();
            }
        })
    },
    swordUp: function() {
        switch (Link.direction){
            case 'right':
            Link.link.css({
                'background-position': '-435px -905px'
            });
            break;
            case 'left':
            Link.link.css({
                'background-position': '-70px -905px'
            });
            break;
            case 'up':
            Link.link.css({
                'background-position': '-20px -970px'
            });
            break;
            case 'down':
            Link.link.css({
                'background-position': '-402px -970px'
            });
            break;
        }
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
	},
	moveRight: function(){
		/*go right*/
		Link.direction = 'right';
		if(Link.getElement(Link.linkPos.top, Link.linkPos.left + Link.movesStep).hasClass('allowed')){
			 Link.link.css({
				 'left': Link.linkPos.left += Link.movesStep,
				 'background-position': '-435px -905px'
			 });
		 Link.doorAction(Link.linkPos);
		 Link.stonesAction(Link.linkPos);
		 Link.heartAction(Link.linkPos);
	 }
	},
	moveLeft: function(){
		Link.direction = 'left';
		if(Link.getElement(Link.linkPos.top, Link.linkPos.left - Link.movesStep).hasClass('allowed')){
			Link.link.css({
				'left': Link.linkPos.left -= Link.movesStep,
				'background-position': '-70px -905px'
			});
			Link.doorAction(Link.linkPos);
			Link.stonesAction(Link.linkPos);
			Link.heartAction(Link.linkPos);
		}
	},
	moveUp: function(){
		//go up
		Link.direction = 'up';
		if(Link.getElement(Link.linkPos.top - Link.movesStep, Link.linkPos.left).hasClass('allowed')){
			Link.link.css({'top': Link.linkPos.top -= Link.movesStep, 'background-position': '-20px -970px'});
			Link.doorAction(Link.linkPos);
			Link.stonesAction(Link.linkPos);
			Link.heartAction(Link.linkPos);
		}
	},
	moveDown: function(){
		//go down
		Link.direction = 'down';
		if(Link.getElement(Link.linkPos.top + Link.movesStep, Link.linkPos.left).hasClass('allowed')){
			Link.link.css({'top': Link.linkPos.top += Link.movesStep, 'background-position': '-402px -970px'});
			Link.doorAction(Link.linkPos);
			Link.stonesAction(Link.linkPos);
			Link.heartAction(Link.linkPos);
		}
	},
};
