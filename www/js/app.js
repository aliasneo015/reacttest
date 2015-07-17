

requirejs.config({
  baseUrl: 'js/lib',
  paths: {
    app: '../app',
    jquery: 'jquery-2.1.1',
    JSXTransformer: 'JSXTransformer-0.13.3'
  }
});

//start main app
requirejs(
  ['jquery', 'backbone', 'react', 'JSXTransformer', 'underscore', 'angular'],
  function () {
      requirejs(['app/main']);
  }
);
