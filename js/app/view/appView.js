define(
    ['jquery',
    'underscore',
    'backbone',
    'app/model/destinationModelList'],
    //The function to execute when all dependencies have loaded. The
    //arguments to this function are the array of dependencies mentioned
    //above.
    function ($, _, Backbone, DestinationModelList) {
      var AppView = Backbone.View.extend({   
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

          this.destinations = new DestinationModelList();
          this.destinations.fetch();
          this.render();
          //this.listenTo(this.destinations, 'all', this.render);
        },

        // Re-rendering the App just means refreshing the statistics -- the rest
        // of the app doesn't change.
        render: function() {
          console.log(this.destinations);
          debugger;
        },

        // Add a single todo item to the list by creating a view for it, and
        // appending its element to the `<ul>`.
        addOne: function(todo) {
          var view = new TodoView({model: todo});
          this.$("#todo-list").append(view.render().el);
        },

        // Add all items in the **Todos** collection at once.
        addAll: function() {
          Todos.each(this.addOne, this);
        },

        // If you hit return in the main input field, create new **Todo** model,
        // persisting it to *localStorage*.
        createOnEnter: function(e) {
          if (e.keyCode != 13) return;
          if (!this.input.val()) return;

          Todos.create({title: this.input.val()});
          this.input.val('');
        },

        // Clear all done todo items, destroying their models.
        clearCompleted: function() {
          _.invoke(Todos.done(), 'destroy');
          return false;
        },

        toggleAllComplete: function () {
          var done = this.allCheckbox.checked;
          Todos.each(function (todo) { todo.save({'done': done}); });
        }
      });
      return AppView;
    }
);