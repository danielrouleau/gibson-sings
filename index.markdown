---
layout: default
---

# Subscribe!

<script src="https://apis.google.com/js/platform.js"></script>
<div class="g-ytsubscribe" data-channel="GoreGibsonGaming" data-layout="full" data-theme="dark" data-count="hidden"></div>

<hr>

# Videos

Below is a list of all of the videos for which we have specific song links. Use your browsers search to find the song you need.

<dl>
{% for video in site.data.gibson_songs %}
  <dt>
    <a href="https://youtu.be/{{ video.id }}">
    <img src ="https://img.youtube.com/vi/{{ video.id }}/0.jpg" />
    </a>
  </dt>
  <ol>
    {% for song in video.songs %}
      <li>
        <a href="https://youtu.be/{{ video.id }}?t={{ song.timestamp }}">{{ song.artist }} - {{ song.title }}</a>
      </li>
    {% endfor %}
  </ol>
{% endfor %}
</dl>
