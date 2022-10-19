bgmBook = (k, v) => {
  book = JSON.parse(localStorage["bgmBook"]) || ({})
  if !k then book
  else if !v then book[k]
  else {
    book[k] = v
    localStorage["bgmBook"] = JSON.stringify(book)
  }
}

event join (name, cont, tc, url) => {
  book = bgmBook()
  link = book[(tc && "#" + tc) || name]
  if link then playMusic(name + "'s bgm!", link)
}

event msg (name, cont: "/mybgm", tc, url) => {
  if url then {
    bgmBook((tc && "#" + tc) || name, url)
    drrr.print("/meok!")
  }
  else {
    book = bgmBook()
    link = book[(tc && "#" + tc) || name]
    if link then drrr.print("BGM!!", link)
    else drrr.print("You don't have BGM QwQ")
  }
}

event msg (name, cont: "/nobgm", tc, url) => {
  book = bgmBook()
  tc && delete book["#" + tc]
  delete book[name]
  localStorage["bgmBook"] = JSON.stringify(book)
  drrr.print("no!")
}
