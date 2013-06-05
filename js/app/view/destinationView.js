define(
  ['jquery',
  'underscore',
  'backbone'],
  function ($, _, Backbone) {
  	var DestinationView = Backbone.View.extend({
  		areaSelectorMapper: {
  			'regular': {
          selector: '.third',
          template: 'templateRegular'
        },
  			'top': {
          selector: '.top-destination',
          template: 'templateHighlighted'
        },
  			'featured': {
          selector: '.half',
          template: 'templateHighlighted'
        }
  		},
    	areaSelector: 'regular',

    	// Cache the template function for a single item.
      templateHighlighted: _.template($('#highlighted-item-template').html()),
      templateRegular: _.template($('#regular-item-template').html()),
	    // The DOM events specific to an item.
	    events: {
	    	"hover .large img":"handleHover"
	    },
	    initialize: function() {
	      //this.listenTo(this.model, 'change', this.render);
	    },
	    // Re-render the titles of the todo item.
	    render: function() {
        var templateName = this.areaSelectorMapper[this.model.get('type')].template;
	      this.$el.html(this[templateName](this.model.toJSON()));
	      return this;
	    },
	    getAreaSelector: function(){
	    	return this.areaSelectorMapper[this.model.get('type')].selector;
	    }
    });
    return DestinationView;
});