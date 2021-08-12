time = s => (new Date(s * 1000)).toISOString().substr(11, 8)
event msg (u, m:"^/moe", url) => {
  url = "https://api.trace.moe/search?url=" + encodeURIComponent(url)
  ep = if res.episode then " ep." + res.episode else ""
  $.get(url, res => {
    res = res.result[0]
    short_url(res.image, url => drrr.print(
      res.filename + ep + "\n" +
      "similarity: " + String(res.similarity.toFixed(2)), url))
    short_url(res.video, url => drrr.print(
      res.filename + ep + "\n" +
      time(res.from) + " ~ " + time(res.to) + "\n", url))
  })
}
