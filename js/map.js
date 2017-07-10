function Map(){
    this.create = function(){
        App.map = $('<div>');
        App.map.attr({
            'id': 'level_'+ App.indexLevel,
            'class': 'map',
            'data-level': App.indexLevel,
        }).css({'width': 25 * App.mainsize +'px',
            'height': 16 * App.mainsize +'px'});
        App.gamewrapper.append(App.map);
    }
}