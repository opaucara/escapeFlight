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
      },
      comparator : function(a, b) {
        /*return (this.options.sortCriteria[a.get('type')]<this.options.sortCriteria[b.get('type')]) ? -1:
               ((this.options.sortCriteria[a.get('type')]>this.options.sortCriteria[b.get('type')]) ? 1
               :0)
                ;*/
      }
	  });
	  return DestinationModelList;
});