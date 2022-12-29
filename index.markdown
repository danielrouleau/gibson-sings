---
layout: default
---

# Subscribe!

[![Twitch Status](https://img.shields.io/twitch/status/gibson?logo=twitch&logoColor=white&labelColor=4100A1&style=for-the-badge)](https://www.twitch.tv/gibson)

[![Youtube](https://img.shields.io/youtube/channel/subscribers/UCAg-RbQnYCGBY6zsjxL7xTQ?logo=youtube&label=Youtube&style=for-the-badge)](https://www.youtube.com/goregibsongaming)

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
