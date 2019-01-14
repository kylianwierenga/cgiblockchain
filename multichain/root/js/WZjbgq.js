/*
document.addEventListener("DOMContentLoaded", function() {
  function link(url) {
    var link = document.createElement('link');
    link.href = url;
    link.rel = 'stylesheet';
    head.appendChild(link);
  }
  var head = document.querySelector('head');
  link('https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css');
  link('https://codepen.io/jcubic/pen/WZjbgq.css?v=2');
  var div = document.createElement('div');
  div.setAttribute('class', 'twitter social-icon');
  div.innerHTML = '<a href="https://twitter' +
    '.com/jcubic" target="_top"></a>' +
    '<i class="fa fa-twitter fa-lg"></i>';
  document.body.appendChild(div);
});
var github = function(repo) {
  var a = document.createElement('a');
  a.target = '_top';
  a.setAttribute('class', 'github');
  a.href = 'https://github.com/' + repo;
  a.innerHTML = '<img style="position: fixed; top: 0; right: 0; border: 0; cursor: pointer;" src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"/>';
  document.addEventListener("DOMContentLoaded",
                            function() {
    document.body.appendChild(a);
  });
};
*/