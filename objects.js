var playlist = {
  Alison: "Slowdive"
};
function updatePlaylist(obj, key, value) {
  obj[key] = value;
}
updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississippi");
function removeFromPlaylist(obj, key) {
  return delete playlist['Phil Ochs'];
}