define(
    ['jquery',
    'underscore',
    'backbone',
    'app/model/destinationModelList',
    'app/view/destinationView'],
    function ($, _, Backbone, DestinationModelList, DestinationView) {
      var AppView = Backbone.View.extend({   
        el: $("#myApp"),
        events: {
          'click section .more':  'addMore'
        },
        initialize: function() {
          this.destinations = new DestinationModelList([],{
            'sortCriteria': {
              'top': 1,
              'featured': 2,
              'regular': 3
            },
            'resultsSize': this.options.resultsSize
          });
        
          this.destinations.fetch({success: $.proxy(this,'addAll')});
        },
        addAll: function() {
          this.destinations.each(this.addOne, this);
        },
        addOne: function(destination) {
          var view = new DestinationView({model: destination});
          var areaSelector = view.getAreaSelector();
          this.$(areaSelector).append(view.render().el);
        },
        addMore: function(){
          this.destinations.fetch({success: $.proxy(this, 'appendMoreResults'),
            remove:false
          });
        },
        appendMoreResults: function(results){
          //Keeps bringing full collection
          this.$('.third, .half, .top-destination').empty();
          this.addAll();
        }
      });
      return AppView;
    }
);