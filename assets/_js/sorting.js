var transparentImage = '/assets/transparent.png';
var indexList = document.getElementById('index-list');
if(indexList) { sort('loadOrder'); }

function sort(method) {
  this[method]();
  var html = '';

  for(var i = 0; i < apps.length; i++) {
    if(!apps[i]) { continue; }

    html += '<li>' +
              '<a href="' + apps[i].url + '">' +
                '<img src="' + transparentImage + '"' +
                      'data-echo="'+ apps[i].thumbnail +'">' +
                '<div>' + apps[i].title + '</div>' +
              '</a>' +
            '</li>';
  }

  indexList.innerHTML = html;
  echo.render();
  saveOrder();
}

function saveOrder() {
  var appTitles = apps.map(function(app) { return app.title; });
  sessionStorage.setItem('order', JSON.stringify(appTitles));
}

function loadOrder() {
  var newOrder = [];
  var appTitles = JSON.parse(sessionStorage.getItem('order'));
  if(!appTitles) { shuffle(); return; }

  apps.forEach(function(app) {
    newOrder[appTitles.indexOf(app.title)] = app;
  });

  apps = newOrder;
}

function shuffle() {
  var currentIndex = apps.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = apps[currentIndex];
    apps[currentIndex] = apps[randomIndex];
    apps[randomIndex] = temporaryValue;
  }
}

function alphabetical() {
  apps.sort(function(a, b){
    var titleA = a.title.toLowerCase();
    var titleB = b.title.toLowerCase();
    if(titleA < titleB) return -1;
    if(titleA > titleB) return 1;
    return 0;
  });
}

function latest() {
  apps.sort(function(a, b){
    if(a.date < b.date) return 1;
    if(a.date > b.date) return -1;
    return 0;
  });
}

function popularity() {
  apps.sort(function(a, b){
    return b.stars - a.stars;
  });
}
