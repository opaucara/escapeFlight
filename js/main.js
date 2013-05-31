require.config({
  paths: {
    jquery: 'lib/jquery-1.7.2.min',
    underscore: 'lib/underscore-min',
    backbone: 'lib/backbone-min'
  },
  shim: {
        backbone: {
            deps: ['jquery','underscore'],
            exports: 'Backbone'
        }
    }
});

require([/*'lib/backbone-min',
		'lib/underscore-min',*/
		'app/view/appView'], function(AppView) {
    //This function is called when scripts/widgets/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "widgets/util".
    var App = new AppView;
});