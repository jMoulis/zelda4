"use strict";
const Link = {
	init: function(left, top, life){
		this.life = life;
		this.points = 0;
		this.experience = 0;
		Link.keys = {
			'left': 113,
			'right': 100,
			'up': 122,
			'down': 115,
			'arrow': 109
		};
    Link.target = $('.forbidden');
		Link.direction = 'up';
    Link.movesStep = App.mainsize;
    Link.create(left, top);
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
  	App.map.append(Link.link);
		if($('.link').length !== 0) {
      Link.moves();
		}
	},
	moves: function(){
		Link.link = $('.link');
		let $top = Link.link.position().top;
		let $left = Link.link.position().left;
		$(window).on('keypress', function(e){
    	console.log(e.which);
		  switch(e.which) {
			case Link.keys.right:
			 /*go right*/
			 Link.direction = 'right';
			 if(App.getElement($top, $left + Link.movesStep).hasClass('allowed')){
			 	//Link.animateLink({left: '+='+ App.mainsize});
          Link.link.css('left', $left += Link.movesStep);
				if(App.getElement($top, $left + Link.movesStep).hasClass('door')){
					console.log('You are at the door, ring');
					App.changeLevel();
				}
				if(App.getElement($top, $left + Link.movesStep).hasClass('stone')){
          console.log('You got the stone');
          $('.stone').remove();
				}
			 }
			 break;
			case Link.keys.left:
				//go left
                Link.direction = 'left';
				if(App.getElement($top, $left - Link.movesStep).hasClass('allowed')){
                    //Link.animateLink({left: '-='+ App.mainsize});
				  Link.link.css('left', $left -= Link.movesStep);
                    if(App.getElement($top, $left - Link.movesStep).hasClass('door')){
                        console.log('You are at the door, ring');
                        App.changeLevel();
                    }
                    if(App.getElement($top, $left - Link.movesStep).hasClass('stone')){
                        console.log('You got the stone');
                        $('.stone').remove();
                    }
				}
				break;
			case Link.keys.up:
				//go up
                Link.direction = 'up';
				if(App.getElement($top - Link.movesStep, $left).hasClass('allowed')){
                    //Link.animateLink({top: '-='+ App.mainsize});
				  Link.link.css('top', $top -= Link.movesStep);
                    if(App.getElement($top - Link.movesStep, $left).hasClass('door')){
                        console.log('You are at the door, ring');
                        App.changeLevel();
                    }
                    if(App.getElement($top - Link.movesStep, $left).hasClass('stone')){
                        console.log('You got the stone');
                        $('.stone').remove();
                    }
				}
				break;
			case Link.keys.down:
				//go down

                Link.direction = 'down';

				if(App.getElement($top + Link.movesStep, $left).hasClass('allowed')){

                    //Link.animateLink({top: '+='+ App.mainsize});
				  Link.link.css('top', $top += Link.movesStep);
                    if(App.getElement($top + Link.movesStep, $left).hasClass('door')){
                        console.log('You are at the door, ring');
                        App.changeLevel();
                    }
                    if(App.getElement($top + Link.movesStep, $left).hasClass('stone')){
                        console.log('You got the stone');
                        $('.stone').remove();
                    }
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
	animateLink: function(linkDirection){
		Link.link.animate(linkDirection,{
			step: function(currentStep){
                App.controleColisionAction(Link.target, currentStep, Link.link);
				/*if(App.getElement($top, $left + Link.movesStep + App.mainsize).hasClass('allowed')){
					Link.link.css('top', $top += Link.movesStep);
					console.log(App.getElement($top, $left + Link.movesStep + App.mainsize))
				} else {
					//Link.link.stop(true, false);
				}*/

			}
		});
	},
};
