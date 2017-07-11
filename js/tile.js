"use strict";
const tile = {
  create: function(line, column, map) {
		tile.tile = $('<div>');
		tile.tile
		.addClass(tile.getClasses(line, column, map))
		.css(tile.getStyle(line, column))
		.attr('data-line', line).attr('data-column', column);
		App.map.append(tile.tile);
  },

  getClasses: function(column, line, map) {
    let classes = 'tile '+ tile.getType(map, column, line).name +' '+tile.getType(map, column, line).perm ;
    classes += ' ';
    // top
		if(line > 0){
			classes += ' top-'+ tile.getType(map, column, line-1).name;
		}
		if(column + 1 < map[line].length){
			classes += ' right-'+ tile.getType(map, column + 1, line).name;
		} else {
			classes += '';
		}
		if(line + 1 < map.length) {
			classes += ' bottom-'+ tile.getType(map, column, line + 1).name;
		} else {
			classes += '';
		}
		if(column > 0){
			classes += ' left-'+ tile.getType(map, column - 1, line).name;
		} else {
			classes += ' no-left';
		}
    return classes;
  },

  getStyle: function(column, line) {
	return {
        left: column * App.mainsize,
        top: line * App.mainsize
    };
  },

  getType: function(map, column, line) {
  	let char =	map[line][column];
	let arrayTile = [];
	// Valeur fixe!! Les types seront toujours premier dans l'objet
		$.each(Games[0].types, function(key, value){
			arrayTile[value.sign] = { name: value.name, perm: value.permission};
		});
	return arrayTile[char];
  },
};
