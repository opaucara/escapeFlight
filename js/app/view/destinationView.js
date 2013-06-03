define(
  ['jquery',
  'underscore',
  'backbone'],
  function ($, _, Backbone) {
  	var DestinationView = Backbone.View.extend({
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
	    }
    });
    return DestinationView;
});