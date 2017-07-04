const app = {
  /*
   * 1. Dans js/app.js, on va créer un objet app responsable de l'ajout des objets dans le DOM. On va créer un conteneur #map.
   * 2. L'élément #map doit aussi recevoir en style des dimensions, en fonction de la longueur de l'objet map (de js/map.js). Chaque tuile est un carré 16 pixels.
   */
  init: function() {
		console.log('Zelda 4... The game starts');
		app.$gamewrapper = $('#game-wrapper');
		app.createMap();
		app.createTiles();
  },

	createMap: function(){
		app.$map = $('<div>');
		app.$map.attr('id', 'map');
		app.$gamewrapper.append(app.$map);
	},
  /*
   * 3. Dans #map, on va venir ajouter en enfant toutes les tuiles .tile.
   */
  createTiles: function() {
		for (let line = 0; line < map.tiles.length; line++) {
      for (let column = 0; column < map.tiles[line].length; column++) {
        tile.create(column, line);
      }
    }
	}

}
/*
 * Chargement du DOM
 */
$(app.init);
