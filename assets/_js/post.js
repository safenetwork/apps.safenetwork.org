var post = document.getElementsByClassName('post')[0];
if(post) { loadOrder(); }

function previous(title) {
  var i = findAppIndex(title);
  var previous = (i + apps.length - 1) % apps.length;
  window.location.href = apps[previous].url;
}

function next(title) {
  var i = findAppIndex(title);
  var next = (i + 1) % apps.length;
  window.location.href = apps[next].url;
}

function findAppIndex(title) {
  for(var i = 0; i < apps.length; i++) {
    if(apps[i].title === title) {
      return i;
    }
  }
}
