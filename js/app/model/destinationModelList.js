define([
  'jquery',
  'underscore',
  'backbone',
  'app/model/destinationModel'
], function($, _, Backbone, destinationModel){
    var DestinationModelList = Backbone.Collection.extend({
	    model: destinationModel,
	    url: 'js/data/destinations.json',
      initialize: function(models, options) {
        this.options = options;
        this.options.pageNumber = 1;
        this.options.currentIndex = 0;
      },
	    parse: function(response){
        var allDestinations = _.sortBy(response.destinations, function(destination){ 
            return this.options.sortCriteria[destination.type]; 
        }, this);
        var destinations = allDestinations.slice(this.options.currentIndex, this.options.currentIndex + this.options.resultsSize);
        this.options.pageNumber++;
        this.options.currentIndex = (this.options.pageNumber -1) * this.options.resultsSize;
        return destinations;
      }
	  });
	  return DestinationModelList;
});