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
      },
	    parse: function(response){
         return response.destinations;
      },
      comparator : function(a, b) {
//        indexOf
        return (this.options.sortCriteria[a.get('type')]<this.options.sortCriteria[b.get('type')]) ? 1:
               ((this.options.sortCriteria[a.get('type')]>this.options.sortCriteria[b.get('type')]) ? -1
               :0)
                ;
      }
	  });
	  return DestinationModelList;
});