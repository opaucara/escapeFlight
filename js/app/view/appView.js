define(
    ['jquery',
    'underscore',
    'backbone',
    'app/model/destinationModelList',
    'app/view/destinationView'],
    function ($, _, Backbone, DestinationModelList, DestinationView) {
      var AppView = Backbone.View.extend({   
        el: $("#myApp"),
        initialize: function() {
          /*var Profile = Backbone.Model.extend();
          var ProfileList = Backbone.Collection.extend({
              model: Profile,
              url: 'js/data/destinations.json',
              parse: function(response){
                console.log(response.destinations);
                return response.destinations;
              }
          });
          var profiles = new ProfileList();    
          profiles.fetch({success: function(){
              console.log(profiles.models);
          }});*/
                    
          this.destinations = new DestinationModelList([],{
            'sortCriteria': {
              'top': 1,
              'featured': 2,
              'regular': 3
            }
          });
          var me = this;
          this.destinations.fetch({success: function(){
              me.addAll();
          }});
          //this.listenTo(this.destinations, 'reset', this.addAll);
        },
        addAll: function() {
          this.destinations.each(this.addOne, this);
        },
        addOne: function(destination) {
          var view = new DestinationView({model: destination});
          var areaSelector = view.getAreaSelector();
          this.$(areaSelector).append(view.render().el);
        },
        getAreaSelector: function(destinationType){

        }
      });
      return AppView;
    }
);