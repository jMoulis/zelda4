const tile = {
  /*
   * 1. Dans js/tile.js, on va créer un objet tile responsable de la création des tuiles. On peut créer une méthode create chargé de créer une tuile.
   */
  create: function(line, column) {
		tile.$tile = $('<div>');
		tile.$tile
		.addClass(tile.getClasses(line, column))
		.css(tile.getStyle(line, column))
		.attr('data-line', line).attr('data-column', column);
		App.$map.append(tile.$tile);
  },


  /*
   * 2. Pour créer une tuile, il faut lui donner les bonnes classes, comme décrit plus haut. Pour cela, on peut créer une méthode getClassname.
   */
  getClasses: function(column, line) {
    let classes = 'tile '+ tile.getType(column, line).name +' '+tile.getType(column, line).perm ;
		 // on regarde son type en fonction de X et Y
    classes += ' ';
    // top
		if(line > 0){
			classes += 'top-'+ tile.getType(column, line-1).name;
		}
		if(column + 1 < map.tiles[line].length){
			classes += 'right-'+ tile.getType(column + 1, line).name;
		} else {
			classes += ''
		}
		if(line + 1 < map.tiles.length) {
			classes += 'bottom-'+ tile.getType(column, line + 1).name;
		} else {
			classes += ''
		}
		if(column > 0){
			classes += 'left-'+ tile.getType(column - 1, line).name;
		} else {
			classes += ' no-left'
		}
    return classes;
  },


  /*
   * 3. Pour venir positionner les tuiles, on utilise des position: absolute. Il faut donc ajouter du style (top et left) pour venir placer la tuile au bon endroit, avec une méthode getStyle.
   */
  getStyle: function(column, line) {
		return style = {
			left: column*App.mainsize,
			top: line*App.mainsize
		}
  },

  /*
   * 4. Pour chaque tuile, on peut aussi utiliser une méthode getType qui sera chargé de récupérer le type de tuile, en utilisant l'objet map.
   */
  getType: function(column, line) {
		let char =	map.tiles[line][column];
		let arrayTile = [];
			$.each(map.types, function(key, value){
				arrayTile[value.sign] = { name: value.name, perm: value.permission};
			});


		return arrayTile[char];

  },
};
