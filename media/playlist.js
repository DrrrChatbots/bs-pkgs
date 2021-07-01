API_SERVER = "https://drrr-netease.herokuapp.com"

playlists = []

play_next = () => {
  if playlists.length then {
    curlist = playlists[0]
    if curlist.length then {
      playMusic(curlist[0][0], curlist[0][1])
      curlist.shift()
      if !curlist.length then playlist.shift()
    }
  }
}

event musicend {
  play_next()
}

try_next = () => {
  sendTab({
    fn: is_playing
  }, false, (status) => {
    active = status[0]
    after = status[1]
    console.log(active, after);
    if(!active){
      play_next()
    }
    else print("there's a song playing")
  })
}

fetch_list = id => {
  url = API_SERVER + "/playlist/detail?id=" + id
  $.get(url, d => {
    playlist = d.playlist
    songs = playlist.trackIds.map(track => track.id)
    message = playlist.name + "(" + songs.length + ")"+ "\n" + playlist.description
    drrr.print(message, playlist.coverImgUrl)
    $.get(API_SERVER + "/song/detail?ids=" + songs.join(","),
      data => {
        playlists.push(data.songs.map(s => [s.name, s.id]))
      }
    )
  })
}

event msg (user, cont: "^list \\d+$") => {
  listID = cont.split()[1]
  fetch_list(listID)
}
