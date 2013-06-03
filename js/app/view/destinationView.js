define(
  ['jquery',
  'underscore',
  'backbone'],
  function ($, _, Backbone) {
  	var DestinationView = Backbone.View.extend({
    	
  		areaSelectorMapper: {
  			'regular': '.third',
  			'top': 'section',
  			'featured': '.third'
  		},
    	areaSelector: 'regular',

    	// Cache the template function for a single item.
  	  template: _.template($('#destination-item-template').html()),
	    // The DOM events specific to an item.
	    events: {
	    	"hover .large img":"handleHover"
	    },
	    initialize: function() {
	      //this.listenTo(this.model, 'change', this.render);
	    },
	    // Re-render the titles of the todo item.
	    render: function() {
	      this.$el.html(this.template(this.model.toJSON()));
	      return this;
	    },
	    getAreaSelector: function(){
	    	return this.areaSelectorMapper[this.areaSelector];
	    }
    });
    return DestinationView;
});