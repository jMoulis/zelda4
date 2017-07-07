"use strict";
const Link = {
	init: function(left, top){
		Link.keys = {
			'left': 113,
			'right': 100,
			'up': 122,
			'down': 115,
			'arrow': 109
		};

        Link.create(left, top);
        Link.movesStep = App.mainsize;
	},
	create: function(left, top){
		Link.link = $('<div>');
		Link.link.attr({
			'id': 'link',
			'class': 'link'
		}).css({
			left: left,
			top: top
		});
		console.log($('.map:visible'));
        App.gamewrapper.append(Link.link);
		if($('.link').length !== 0) {
            Link.moves();
		}
	},
	moves: function(){
		Link.link = $('.link');
		let $top = Link.link.position().top;
		let $left = Link.link.position().left;
		$(window).on('keypress', function(e){
    	//console.log(e.which);
		  switch(e.which) {
			case Link.keys.right:
			 /*go right*/
			 if(App.getElement($top, $left + Link.movesStep).hasClass('allowed')){
                 Link.link.css('left', $left += Link.movesStep);
				if(App.getElement($top, $left + Link.movesStep).hasClass('door')){
					console.log('You are at the door, ring');
					App.changeLevel();
				}
			 }
			 break;
			case Link.keys.left:
				//go left
				if(App.getElement($top, $left - Link.movesStep).hasClass('allowed')){
				  Link.link.css('left', $left -= Link.movesStep);
                    if(App.getElement($top, $left - Link.movesStep).hasClass('door')){
                        console.log('You are at the door, ring');
                        App.changeLevel();
                    }
				}
				break;
			case Link.keys.up:
				//go up
				if(App.getElement($top - Link.movesStep, $left).hasClass('allowed')){
				  Link.link.css('top', $top -= Link.movesStep);
                    if(App.getElement($top - Link.movesStep, $left).hasClass('door')){
                        console.log('You are at the door, ring');
                        App.changeLevel();
                    }
				}
				break;
			case Link.keys.down:
				//go down
				if(App.getElement($top + Link.movesStep, $left).hasClass('allowed')){
				  Link.link.css('top', $top += Link.movesStep);
                    if(App.getElement($top + Link.movesStep, $left).hasClass('door')){
                        console.log('You are at the door, ring');
                        App.changeLevel();
                    }
				}
				break;
			  case Link.keys.arrow:
				Weapon.create();
				break;
			default:
				console.log('key undefined');
			  break;
			}
		});
	},
	animateLink: function($top, $left){
		Link.link.animate({
			top: '-='+ App.mainsize * 2
		},{
			step: function(){
				if(App.getElement($top, $left + Link.movesStep + App.mainsize).hasClass('allowed')){
					Link.link.css('top', $top += Link.movesStep);
				}
			}
		});
	},
};
