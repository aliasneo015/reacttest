

requirejs.config({
  baseUrl: 'js/lib',
  paths: {
    app: '../app',
    jquery: 'jquery-2.1.1'
  }
});

//start main app
requirejs(
  ['jquery', 'backbone', 'react', 'underscore'],
  function () {
      requirejs(['app/main']);
  }
);
