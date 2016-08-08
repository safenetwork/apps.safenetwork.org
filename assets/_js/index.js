echo.init({ offset: 500, throttle: 50 });

var apps = [
  {% for app in site.posts where %}
  {
    "title": "{{ app.title }}",
    "date": "{{ app.date }}",
    "thumbnail": "/thumbnails/{{ app.thumbnail }}",
    "url": "{{ app.url }}",
    "stars": "{{ app.stars }}"
  }{% unless forloop.last %},{% endunless %}
  {% endfor %}
];
