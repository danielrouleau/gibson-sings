$(document).ready(function () {
  $.getJSON("gibson_songs.json", function (data) {
    $.each(data, function (i, val) {
      $('#output').append('<p>Date: ' + data[i].uploadDate + '</p>');

      $.each(data[i].songs, function (j, val) {
        $('#output').append('<p>' + data[i].songs[j].artist + ' - <a href="' +data[i].videoLink + '?t=' + data[i].songs[j].timestamp + '">'  + data[i].songs[j].title + '</a></p>');
      });
    });
  });
});