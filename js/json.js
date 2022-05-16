$(document).ready(function () {
  $.getJSON("gibson_songs.json", function (data) {
    $.each(data, function (i, val) {
      $('#output').append('<p><img src="https://img.youtube.com/vi/' + data[i].id  + '/0.jpg" /></p><p>Date: ' + data[i].uploadDate + '</p>');

      $.each(data[i].songs, function (j, val) {
        $('#output').append('<p>' + data[i].songs[j].artist + ' - <a href=https://youtu.be/' +data[i].id + '?t=' + data[i].songs[j].timestamp + '>'  + data[i].songs[j].title + '</a></p>');
      });
    });
  });
});