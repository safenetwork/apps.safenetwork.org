echo.init({ offset: 500, throttle: 50 });

var themes = [
  {% for theme in site.posts %}
  {
    "title": "{{ theme.title }}",
    "date": "{{ theme.date }}",
    "thumbnail": "/thumbnails/{{ theme.thumbnail }}",
    "url": "{{ theme.url }}",
    "stars": "{{ theme.stars }}"
  }{% unless forloop.last %},{% endunless %}
  {% endfor %}
];
