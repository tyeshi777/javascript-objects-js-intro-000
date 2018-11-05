var playlist = {
  Alison: "Slowdive"
  'My Bloody Valentine': "Sometimes"
};
function updatePlaylist(obj, key, value) {
  obj[key] = value;
}
updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississippi");
function removeFromPlaylist(obj, key) {
  delete playlist['Alison'];
  return removeFromPlaylist();
}