define([
  'jquery',
  'underscore',
  'backbone',
  'app/model/destinationModel'
], function($, _, Backbone, destinationModel){
    var DestinationModelList = Backbone.Collection.extend({
	    model: destinationModel,
	    url: 'js/data/destinations.json',
	    parse: function(response){
         return response.destinations;
      }
	  });
	  return DestinationModelList;
});