var playlist = {
  Alison: "Slowdive",
  'My Bloody Valentine': "Sometimes",
  'Phil Ochs': "Here's to the State of Mississippi"
};
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist;
}
updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississippi");
function removeFromPlaylist(obj, key) {
  delete obj[key];
  return object;
}
removeFromPlaylist('Alison', 'Slowdive');